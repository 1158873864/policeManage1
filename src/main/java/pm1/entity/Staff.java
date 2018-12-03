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
    private List<String> wholeImages;


    @Column
    @ElementCollection(targetClass = String.class)
    private List<String> halfImages;

    @Column
    @ElementCollection(targetClass = String.class)
    private List<String> identityImages;

    @Column
    @ElementCollection(targetClass = String.class)
    private List<String> vehicleImages;

    @Column
    @ElementCollection(targetClass = String.class)
    private List<String> otherImages;

    public Staff(){};

    public Staff(String name, String identity, String phone, String address, String sex, String height, String accent, String bodyType, String area, String type, String vehicleType, String vehicleLicense, List<String> wholeImages, List<String> halfImages, List<String> identityImages, List<String> vehicleImages, List<String> otherImages, long timestamp) {
        this.name = name;
        this.identity = identity;
        this.phone = phone;
        this.address = address;
        this.sex = sex;
        this.height = height;
        this.accent = accent;
        this.bodyType = bodyType;
        this.area = area;
        this.type = type;
        this.vehicleType = vehicleType;
        this.vehicleLicense = vehicleLicense;
        this.wholeImages = wholeImages;
        this.halfImages = halfImages;
        this.identityImages = identityImages;
        this.vehicleImages = vehicleImages;
        this.otherImages = otherImages;
        this.timestamp = timestamp;

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


    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public List<String> getWholeImages() {
        return wholeImages;
    }

    public void setWholeImages(List<String> wholeImages) {
        this.wholeImages = wholeImages;
    }

    public List<String> getHalfImages() {
        return halfImages;
    }

    public void setHalfImages(List<String> halfImages) {
        this.halfImages = halfImages;
    }

    public List<String> getIdentityImages() {
        return identityImages;
    }

    public void setIdentityImages(List<String> identityImages) {
        this.identityImages = identityImages;
    }

    public List<String> getVehicleImages() {
        return vehicleImages;
    }

    public void setVehicleImages(List<String> vehicleImages) {
        this.vehicleImages = vehicleImages;
    }

    public List<String> getOtherImages() {
        return otherImages;
    }

    public void setOtherImages(List<String> otherImages) {
        this.otherImages = otherImages;
    }
}
