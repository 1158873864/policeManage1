package pm1.data.dao;

import pm1.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdminDao extends JpaRepository<Admin, String> {
	List<Admin> findAdminByUsername(String username);
}
