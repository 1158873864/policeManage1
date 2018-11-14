package pm1.bl;


import pm1.blservice.AdminBlService;
import pm1.dataservice.AdminDataService;
import pm1.entity.Admin;
import pm1.exception.DuplicateUsernameException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pm1.exception.NotExistException;
import pm1.response.*;

import java.util.ArrayList;
import java.util.List;


@Service
public class AdminBlServiceImpl implements AdminBlService {
	private final AdminDataService adminDataService;
	private final static long EXPIRATION = 604800;
	@Autowired
	public AdminBlServiceImpl(AdminDataService adminDataService) {
		this.adminDataService = adminDataService;

	}

	@Override
	public BoolResponse isAdminUsernameExistent(String username) {
		return new BoolResponse(adminDataService.isAdminExistent(username), "ok");
	}

	@Override
	public String loginAdmin(String username, String password) {
		try {
			String token="";
			if(adminDataService.isAdminExistent(username)
					&& adminDataService.getAdminByUsername(username).getPassword().equals(password)){
				return token;
			}

			return null;
		} catch (NotExistException exception) {
			return null;
		}
	}

	@Override
	public InfoResponse addAdmin(String username, String password, String limits, String date, String face) throws DuplicateUsernameException {
		if (!adminDataService.isAdminExistent(username)) {
			adminDataService.addAdmin(new Admin(username, password, limits, date, face));
			return new InfoResponse();
		} else {
			throw new DuplicateUsernameException(username);
		}
	}

	@Override
	public AdminResponse getAdmin(String id) throws NotExistException {
		return new AdminResponse(new AdminItem(adminDataService.getAdminById(id)));
	}

	@Override
	public AdminResponse getAdminByUsername(String username) throws NotExistException {
		return new AdminResponse(new AdminItem(adminDataService.getAdminByUsername(username)));
	}

	@Override
	public AdminListResponse getAdminList() {
		List<Admin> adminList = adminDataService.getAllAdmins();
		List<AdminItem> adminItemList = new ArrayList<>();
		for(Admin admin:adminList) {
			adminItemList.add(new AdminItem(admin));
		}
		return new AdminListResponse(adminItemList);
	}

	@Override
	public InfoResponse updateAdmin(String id, String username, String password, String limits, String date, String face) throws NotExistException {
		adminDataService.updateAdminById(id, username, password, limits, date, face);
		return new InfoResponse();
	}

	@Override
	public BoolResponse deleteAdmin(String id) throws NotExistException {
		adminDataService.deleteAdminById(id);
		return new BoolResponse(true, "");
	}
}
