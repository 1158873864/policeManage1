package pm1.blservice;


import org.springframework.stereotype.Service;
import pm1.exception.NotExistException;
import pm1.response.InfoResponse;
import pm1.response.StaffListResponse;
import pm1.response.StaffResponse;

import java.util.List;
@Service
public interface StaffBlService {
      InfoResponse addStaff(String name,String identity,String phone,String address,String sex,String height,String accent,String bodyType,String area,String type,String vehicleType,String vehicleLicense,List<String> wholeImages, List<String> halfImages, List<String> identityImages, List<String> vehicleImages, List<String> otherImages);
      InfoResponse updateStaff(int id,String name,String identity,String phone,String address,String sex,String height,String accent,String bodyType,String area,String type,String vehicleType,String vehicleLicense,List<String> wholeImages, List<String> halfImages, List<String> identityImages, List<String> vehicleImages, List<String> otherImages) throws NotExistException;
      InfoResponse deleteStaff(int id) throws NotExistException;
      StaffResponse getStaff(int id) throws NotExistException;
      StaffListResponse getStaffList();
      StaffResponse getStaffByIdentity(String identity);
}
