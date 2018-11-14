package pm1.data.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import pm1.entity.Staff;

import java.util.List;


public interface StaffDao extends JpaRepository<Staff, Integer> {
     List<Staff> findStaffByIdentity(String identity);
}
