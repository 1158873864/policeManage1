package pm1.springcontroller;

import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pm1.blservice.StaffBlService;
import pm1.exception.NotExistException;
import pm1.response.InfoResponse;
import pm1.response.StaffListResponse;
import pm1.response.StaffResponse;

import java.io.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
@RestController
public class StaffController {
    private final StaffBlService staffBlService;

    @Autowired
    public StaffController(StaffBlService staffBlService) {
        this.staffBlService = staffBlService;
    }

    @ApiOperation(value = "上传图片", notes = "上传图片")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "image", value = "image", required = true, dataType = "MultipartFile")
    })
    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    @ResponseBody
    public String upload(@RequestParam("image")MultipartFile image){
        Map<String,Object> map= new HashMap<String,Object>();
        if(image.isEmpty()){
            map.put( "result", "error");
            map.put( "msg", "上传文件不能为空" );
            return "上传文件不能为空";
        } else {

            // 获取文件名
            String fileName = image.getOriginalFilename();
            // 获取文件后缀

            // 用uuid作为文件名，防止生成的临时文件重复
            // MultipartFile to File
            //你的业务逻辑
            int bytesum = 0;
            int byteread = 0;
            InputStream inStream = null;    //读入原文件
            try {
                inStream = image.getInputStream();
                FileOutputStream fs = new FileOutputStream(fileName);
                byte[] buffer = new byte[200000000];
                while ( (byteread = inStream.read(buffer)) != -1) {
                    bytesum += byteread;            //字节数 文件大小
                    fs.write(buffer, 0, byteread);
                }
                inStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            } catch (Exception e) {
                e.printStackTrace();
            }
            String uuid = UUID.randomUUID().toString().replace("-", "").toLowerCase();
            File file = new File(fileName);
            String[] temp=fileName.split("\\.");
            String thePath="staff/"+uuid+"."+temp[1];
            String path="staff/"+uuid+"."+temp[1];
            File tempfile=new File(path);
            if (tempfile.exists() && tempfile.isFile()) {
                tempfile.delete();
            }
            bytesum = 0;
            byteread = 0;
            try {
                inStream =new FileInputStream(fileName);
                FileOutputStream fs = new FileOutputStream(path);
                byte[] buffer = new byte[20000000];
                while ( (byteread = inStream.read(buffer)) != -1) {
                    bytesum += byteread;            //字节数 文件大小
                    fs.write(buffer, 0, byteread);
                }
                inStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            } catch (Exception e) {
                e.printStackTrace();
            }
            if (file.exists() && file.isFile()) {
                file.delete();
            }
            return thePath;
        }
    }

    @ApiOperation(value = "添加人员", notes = "添加人员")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "name", value = "用户名", required = true, dataType = "String"),
            @ApiImplicitParam(name = "identity", value = "身份证", required = true, dataType = "String"),
            @ApiImplicitParam(name = "phone", value = "手机号", required = true, dataType = "String"),
            @ApiImplicitParam(name = "address", value = "地址", required = true, dataType = "String"),
            @ApiImplicitParam(name = "sex", value = "性别", required = true, dataType = "String"),
            @ApiImplicitParam(name = "height", value = "身高", required = true, dataType = "String"),
            @ApiImplicitParam(name = "accent", value = "口音", required = true, dataType = "String"),
            @ApiImplicitParam(name = "bodyType", value = "身型", required = true, dataType = "String"),
            @ApiImplicitParam(name = "area", value = "活动地区", required = true, dataType = "String"),
            @ApiImplicitParam(name = "type", value = "类型", required = true, dataType = "String"),
            @ApiImplicitParam(name = "vehicleType", value = "车辆类型", required = true, dataType = "String"),
            @ApiImplicitParam(name = "vehicleLicense", value = "车辆牌证", required = true, dataType = "String"),
            @ApiImplicitParam(name = "wholeImages", value = "照片", required = true, dataType = "List<String>"),
            @ApiImplicitParam(name = "halfImages", value = "照片", required = true, dataType = "List<String>"),
            @ApiImplicitParam(name = "identityImages", value = "照片", required = true, dataType = "List<String>"),
            @ApiImplicitParam(name = "vehicleImages", value = "照片", required = true, dataType = "List<String>"),
            @ApiImplicitParam(name = "otherImages", value = "照片", required = true, dataType = "List<String>")
    })
    @RequestMapping(value = "/addStaff", method = RequestMethod.GET)
    public InfoResponse addStaff(@RequestParam("name") String name, @RequestParam("identity") String identity,@RequestParam("phone") String phone,  @RequestParam("address") String address, @RequestParam("sex") String sex, @RequestParam("height") String height, @RequestParam("accent") String accent, @RequestParam("bodyType") String bodyType, @RequestParam("area") String area, @RequestParam("type") String type, @RequestParam("vehicleType") String vehicleType, @RequestParam("vehicleLicense") String vehicleLicense, @RequestParam("wholeImages") List<String> wholeImages, @RequestParam("halfImages") List<String> halfImages, @RequestParam("identityImages") List<String> identityImages, @RequestParam("vehicleImages") List<String> vehicleImages, @RequestParam("otherImages") List<String> otherImages) {
        return staffBlService.addStaff(name,identity,phone,address,sex,height,accent,bodyType,area,type,vehicleType,vehicleLicense,wholeImages,halfImages,identityImages,vehicleImages,otherImages);
    }

    @ApiOperation(value = "修改人员", notes = "修改人员")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "id", required = true, dataType = "int"),
            @ApiImplicitParam(name = "name", value = "用户名", required = true, dataType = "String"),
            @ApiImplicitParam(name = "identity", value = "身份证", required = true, dataType = "String"),
            @ApiImplicitParam(name = "phone", value = "手机号", required = true, dataType = "String"),
            @ApiImplicitParam(name = "address", value = "地址", required = true, dataType = "String"),
            @ApiImplicitParam(name = "sex", value = "性别", required = true, dataType = "String"),
            @ApiImplicitParam(name = "height", value = "身高", required = true, dataType = "String"),
            @ApiImplicitParam(name = "accent", value = "口音", required = true, dataType = "String"),
            @ApiImplicitParam(name = "bodyType", value = "身型", required = true, dataType = "String"),
            @ApiImplicitParam(name = "area", value = "活动地区", required = true, dataType = "String"),
            @ApiImplicitParam(name = "type", value = "类型", required = true, dataType = "String"),
            @ApiImplicitParam(name = "vehicleType", value = "车辆类型", required = true, dataType = "String"),
            @ApiImplicitParam(name = "vehicleLicense", value = "车辆牌证", required = true, dataType = "String"),
            @ApiImplicitParam(name = "wholeImages", value = "照片", required = true, dataType = "List<String>"),
            @ApiImplicitParam(name = "halfImages", value = "照片", required = true, dataType = "List<String>"),
            @ApiImplicitParam(name = "identityImages", value = "照片", required = true, dataType = "List<String>"),
            @ApiImplicitParam(name = "vehicleImages", value = "照片", required = true, dataType = "List<String>"),
            @ApiImplicitParam(name = "otherImages", value = "照片", required = true, dataType = "List<String>")
    })
    @RequestMapping(value = "/updateStaff", method = RequestMethod.GET)
    public InfoResponse updateStaff(@RequestParam("id")int id,@RequestParam("name") String name, @RequestParam("identity") String identity,@RequestParam("phone") String phone,  @RequestParam("address") String address, @RequestParam("sex") String sex, @RequestParam("height") String height, @RequestParam("accent") String accent, @RequestParam("bodyType") String bodyType, @RequestParam("area") String area, @RequestParam("type") String type, @RequestParam("vehicleType") String vehicleType, @RequestParam("vehicleLicense") String vehicleLicense, @RequestParam("wholeImages") List<String> wholeImages, @RequestParam("halfImages") List<String> halfImages, @RequestParam("identityImages") List<String> identityImages, @RequestParam("vehicleImages") List<String> vehicleImages, @RequestParam("otherImages") List<String> otherImages) throws NotExistException {
        return staffBlService.updateStaff(id,name,identity,phone,address,sex,height,accent,bodyType,area,type,vehicleType,vehicleLicense,wholeImages,halfImages,identityImages,vehicleImages,otherImages);
    }

    @ApiOperation(value = "删除人员", notes = "删除人员")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "id", required = true, dataType = "int")
    })
    @RequestMapping(value = "/deleteStaff", method = RequestMethod.GET)
    public InfoResponse deleteStaff(@RequestParam("id")int id) throws NotExistException {
        return staffBlService.deleteStaff(id);
    }

    @ApiOperation(value = "获取人员", notes = "获取人员")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "id", required = true, dataType = "int")
    })
    @RequestMapping(value = "/getStaff", method = RequestMethod.GET)
    public StaffResponse getStaff(@RequestParam("id")int id) throws NotExistException {
        return staffBlService.getStaff(id);
    }

    @ApiOperation(value = "获取人员列表", notes = "获取人员列表")
    @RequestMapping(value = "/getStaffList", method = RequestMethod.GET)
    public StaffListResponse getStaffList() {
        return staffBlService.getStaffList();
    }


    @ApiOperation(value = "获取人员", notes = "获取人员")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "identity", value = "identity", required = true, dataType = "String")
    })
    @RequestMapping(value = "/getStaffByIdentity", method = RequestMethod.GET)
    public StaffResponse getStaffByIdentity(@RequestParam("identity")String identity) {
        return staffBlService.getStaffByIdentity(identity);
    }
}
