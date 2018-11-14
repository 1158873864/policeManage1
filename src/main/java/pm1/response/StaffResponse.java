package pm1.response;

import java.util.List;

public class StaffResponse extends Response{
    private StaffItem staff;

    public StaffResponse(StaffItem staff) {
        this.staff = staff;
    }

    public StaffItem getStaff() {
        return staff;
    }

    public void setStaff(StaffItem staff) {
        this.staff = staff;
    }
}
