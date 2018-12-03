package pm1.bl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pm1.blservice.StaffBlService;
import pm1.dataservice.StaffDataService;
import pm1.entity.Staff;
import pm1.exception.NotExistException;
import pm1.response.InfoResponse;
import pm1.response.StaffItem;
import pm1.response.StaffListResponse;
import pm1.response.StaffResponse;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@Service
public class StaffBlServiceImpl implements StaffBlService{
    private final StaffDataService staffDataService;

    @Autowired
    public StaffBlServiceImpl(StaffDataService staffDataService) {
        this.staffDataService = staffDataService;
    }

    @Override
    public InfoResponse addStaff(String name, String identity, String phone,String address, String sex, String height, String accent, String bodyType, String area, String type, String vehicleType, String vehicleLicense, List<String> wholeImages, List<String> halfImages, List<String> identityImages, List<String> vehicleImages, List<String> otherImages) {
        Date date=new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        long timestamp=0;
        try {
            timestamp=sdf.parse(sdf.format(date)).getTime();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        staffDataService.addStaff(new Staff(name,identity,phone,address,sex,height,accent,bodyType,area,type,vehicleType,vehicleLicense,wholeImages,halfImages,identityImages,vehicleImages,otherImages,timestamp));
        return new InfoResponse();
    }

    @Override
    public InfoResponse updateStaff(int id, String name, String identity, String phone,String address, String sex, String height, String accent, String bodyType, String area, String type, String vehicleType, String vehicleLicense, List<String> wholeImages, List<String> halfImages, List<String> identityImages, List<String> vehicleImages, List<String> otherImages) throws NotExistException {
        Date date=new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        long timestamp=0;
        try {
            timestamp=sdf.parse(sdf.format(date)).getTime();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        staffDataService.addStaff(new Staff(name,identity,phone,address,sex,height,accent,bodyType,area,type,vehicleType,vehicleLicense,wholeImages,halfImages,identityImages,vehicleImages,otherImages,timestamp));
        return new InfoResponse();
    }

    @Override
    public InfoResponse deleteStaff(int id) throws NotExistException {
        staffDataService.deleteStaffById(id);
        return new InfoResponse();
    }

    @Override
    public StaffResponse getStaff(int id) throws NotExistException {
        Staff staff=staffDataService.getStaffById(id);
        return new StaffResponse(new StaffItem(staff));
    }
    @Override
    public StaffResponse getStaffByIdentity(String identity) {
        Staff staff=staffDataService.findTop1ByIdentityBeforeOrderByTimestampDesc(identity);
        if(staff==null){
            return null;
        }
        else {
            return new StaffResponse(new StaffItem(staff));
        }
    }


    @Override
    public StaffListResponse getStaffList() {
        List<Staff> staffList=staffDataService.getAllStaffs();
        List<StaffItem> staffItems=new ArrayList<>();
        StaffListResponse staffListResponse;
        for(int i=0;i<staffList.size();i++){
            staffItems.add(new StaffItem(staffList.get(i)));
        }
        staffListResponse=new StaffListResponse(staffItems);

        return staffListResponse;
    }
}
