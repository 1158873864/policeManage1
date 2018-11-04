package pm1.data.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import pm1.entity.Staff;


public interface StaffDao extends JpaRepository<Staff, String> {
}
