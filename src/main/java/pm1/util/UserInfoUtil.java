package pm1.util;

import org.springframework.security.core.context.SecurityContextHolder;

public class UserInfoUtil {
    public static String getUsername() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
