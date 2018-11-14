package pm1.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Staff")
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "identity")
    private String identity;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @Column(name = "sex")
    private String sex;

    @Column(name = "height")
    private String height;

    @Column(name = "accent")
    private String accent;

    @Column(name = "bodyType")
    private String bodyType;

    @Column(name = "area")
    private String area;

    @Column(name = "type")
    private String type;

    @Column(name = "vehicleType")
    private String vehicleType;

    @Column(name = "vehicleLicense")
    private String vehicleLicense;

    @Column
    private long timestamp;

    @Column
    @ElementCollection(targetClass = String.class)
    private List<String> images;

    public Staff(){};
    public Staff(String name, String identity, String phone, String address, String sex, String height, String accent, String bodyType, String area, String type, String vehicleType, String vehicleLicense, List<String> images,long timestamp) {
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
        this.timestamp=timestamp;
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

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }
}
