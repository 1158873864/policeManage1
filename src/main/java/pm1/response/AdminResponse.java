package pm1.response;

public class AdminResponse extends Response {
	private AdminItem admin;

	public AdminResponse() {
	}

	public AdminResponse(AdminItem admin) {
		this.admin = admin;
	}

	public AdminItem getAdmin() {
		return admin;
	}

	public void setAdmin(AdminItem admin) {
		this.admin = admin;
	}
}
