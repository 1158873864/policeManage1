package pm1.data;

import org.springframework.beans.factory.annotation.Autowired;
import pm1.data.dao.StaffDao;
import pm1.dataservice.StaffDataService;
import pm1.entity.Staff;
import pm1.exception.NotExistException;

import java.util.List;
import java.util.Optional;

public class StaffDataServiceImpl implements StaffDataService{
    private final StaffDao staffDao;
    @Autowired
    public StaffDataServiceImpl(StaffDao staffDao){
        this.staffDao=staffDao;
    }

    @Override
    public void addStaff(Staff staff) {
        staffDao.save(staff);
    }

    @Override
    public Staff getStaffById(String id) throws NotExistException {
        Optional<Staff> optionalStaff = staffDao.findById(id);
        if (optionalStaff.isPresent()) {
            return optionalStaff.get();
        } else {
            throw new NotExistException("Staff ID", id);
        }
    }

    @Override
    public List<Staff> getAllStaffs() {
        return staffDao.findAll();
    }

    @Override
    public void deleteStaffById(String id) throws NotExistException {
        if (staffDao.existsById(id)) {
            staffDao.deleteById(id);
        } else {
            throw new NotExistException("Staff ID", id);
        }
    }
}
