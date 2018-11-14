package pm1.response;

import java.util.List;

public class StaffListResponse {
    private List<StaffItem> staffs;

    public StaffListResponse(List<StaffItem> staffs) {
        this.staffs = staffs;
    }

    public List<StaffItem> getStaffs() {
        return staffs;
    }

    public void setStaffs(List<StaffItem> staffs) {
        this.staffs = staffs;
    }
}
