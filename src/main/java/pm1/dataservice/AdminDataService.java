package pm1.dataservice;

import pm1.entity.Admin;
import pm1.exception.NotExistException;

import java.util.List;

public interface AdminDataService {

	boolean isAdminExistent(String username);

	void addAdmin(Admin admin);

	Admin getAdminById(String id) throws NotExistException;

	Admin getAdminByUsername(String username) throws NotExistException;

	List<Admin> getAllAdmins();

	void updateAdminById(String id, String username, String password, String limits, String date, String face) throws NotExistException;

	void deleteAdminById(String id) throws NotExistException;
}
