package pm1.data.dao;

import pm1.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, String> {
    User findUserByUsername(String username);
}
