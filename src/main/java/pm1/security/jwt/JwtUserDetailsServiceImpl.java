package pm1.security.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pm1.data.dao.AdminDao;
import pm1.entity.Admin;

import java.util.Collections;
import java.util.Optional;

@Service
public class JwtUserDetailsServiceImpl implements JwtUserDetailsService {
    private final AdminDao userDao;

    private final JwtService jwtService;

    @Autowired
    public JwtUserDetailsServiceImpl(AdminDao userDao, JwtService jwtService) {
        this.userDao = userDao;
        this.jwtService = jwtService;
    }

    /**
     * Locates the user based on the username. In the actual implementation, the search
     * may possibly be case sensitive, or case insensitive depending on how the
     * implementation instance is configured. In this case, the <code>UserDetails</code>
     * object that comes back may have a username that is of a different case than what
     * was actually requested..
     *
     * @param username the username identifying the user whose data is required.
     * @return a fully populated user record (never <code>null</code>)
     * @throws UsernameNotFoundException if the user could not be found or the user has no
     *                                   GrantedAuthority
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Admin> optionalUser = userDao.findById(username); //用户的username为openid
        if (optionalUser.isPresent()) {
            System.out.println("isPresent");
            return new JwtUser(optionalUser.get().getUsername(), "", Collections.singletonList(JwtRole.USER));
        }
        else{throw new UsernameNotFoundException("username " + username + " not found");}
        /*
         * edit by zlz
         * 2018-9-3
         */
//        List<User> users = userDao.findUserByUsername(username);
//        List<Admin> admins = adminDao.findAdminByUsername(username);
//        if (users.isEmpty() && admins.isEmpty()) {
//            throw new UsernameNotFoundException("username not found");
//        } else {
//            if (!users.isEmpty()) {
//                User user = users.get(0);
//                List<JwtRole> jwtRoles = new ArrayList<>();
//                jwtRoles.add(JwtRole.USER);
//                JwtUser jwtUser = new JwtUser(user.getUsername(), "", jwtRoles);
//                return jwtUser;
//            } else {
//                Admin user = admins.get(0);
//                List<JwtRole> jwtRoles = new ArrayList<>();
//                jwtRoles.add(JwtRole.ADMIN);
//                JwtUser jwtUser = new JwtUser(user.getUsername(), "", jwtRoles);
//                return jwtUser;
//            }
//        }
    }
}

