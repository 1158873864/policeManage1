package pm1.dataservice;

import pm1.entity.Staff;
import pm1.exception.NotExistException;

import java.util.List;

public interface StaffDataService {



	void addStaff(Staff staff);

	Staff getStaffById(String id) throws NotExistException;

	List<Staff> getAllStaffs();

	void deleteStaffById(String id) throws NotExistException;
}
