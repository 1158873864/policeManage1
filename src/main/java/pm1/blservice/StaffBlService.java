package pm1.blservice;


import pm1.response.InfoResponse;

import java.util.List;

public interface StaffBlService {
      InfoResponse addStaff(String name,String identity,String address,String sex,String height,String accent,String bodyType,String area,String type,String vehicleType,String vehicleLicense,List<String> images);
      InfoResponse updateStaff(int id,String name,String identity,String address,String sex,String height,String accent,String bodyType,String area,String type,String vehicleType,String vehicleLicense,List<String> images);
      InfoResponse deleteStaff(int id);

}
