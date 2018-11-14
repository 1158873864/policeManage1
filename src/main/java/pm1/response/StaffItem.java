package pm1.response;

import pm1.entity.Staff;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class StaffItem {
    private int id;

    private String name;

    private String identity;

    private String phone;

    private String address;

    private String sex;

    private String height;

    private String accent;

    private String bodyType;

    private String area;

    private String type;

    private String vehicleType;

    private String vehicleLicense;

    private List<String> images;

    private String time;
    public StaffItem(int id, String name, String identity, String phone, String address, String sex, String height, String accent, String bodyType, String area, String type, String vehicleType, String vehicleLicense, List<String> images,String time) {
        this.id = id;
        this.name = name;
        this.identity = identity;
        this.phone=phone;
        this.address = address;
        this.sex = sex;
        this.height = height;
        this.accent = accent;
        this.bodyType = bodyType;
        this.area = area;
        this.type = type;
        this.vehicleType = vehicleType;
        this.vehicleLicense = vehicleLicense;
        this.images = images;
        this.time=time;
    }

    public StaffItem(Staff staff){
        this.id = staff.getId();
        this.name = staff.getName();
        this.identity = staff.getIdentity();
        this.phone=staff.getPhone();
        this.address = staff.getAddress();
        this.sex = staff.getSex();
        this.height = staff.getHeight();
        this.accent = staff.getAccent();
        this.bodyType = staff.getBodyType();
        this.area = staff.getArea();
        this.type = staff.getType();
        this.vehicleType = staff.getVehicleType();
        this.vehicleLicense = staff.getVehicleLicense();
        this.images = staff.getImages();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.time=sdf.format(new Date(staff.getTimestamp()));
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIdentity() {
        return identity;
    }

    public void setIdentity(String identity) {
        this.identity = identity;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getAccent() {
        return accent;
    }

    public void setAccent(String accent) {
        this.accent = accent;
    }

    public String getBodyType() {
        return bodyType;
    }

    public void setBodyType(String bodyType) {
        this.bodyType = bodyType;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public String getVehicleLicense() {
        return vehicleLicense;
    }

    public void setVehicleLicense(String vehicleLicense) {
        this.vehicleLicense = vehicleLicense;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
