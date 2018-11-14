package pm1.dataservice;

import pm1.entity.Staff;
import pm1.exception.NotExistException;

import java.util.List;

public interface StaffDataService {



	void addStaff(Staff staff);
	void saveStaff(Staff staff);

	Staff getStaffById(int id) throws NotExistException;

	List<Staff> getAllStaffs();

	void deleteStaffById(int id) throws NotExistException;

	Staff findTop1ByIdentityBeforeOrderByTimestampDesc(String identity);
}
