package pm1.blservice;

import pm1.exception.*;

import org.springframework.stereotype.Service;
import pm1.response.UserLoginResponse;

@Service
public interface UserBlService {
    /**
     * login
     *
     * @param username the username of the user
     * @param password the password of the user
     * @return the login info to  response
     * @throws WrongUsernameOrPasswordException the username or password is error
     */
    UserLoginResponse login(String username, String password) throws WrongUsernameOrPasswordException, UsernameDoesNotFoundException;
}
