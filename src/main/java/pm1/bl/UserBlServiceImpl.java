package pm1.bl;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import pm1.blservice.UserBlService;
import pm1.dataservice.UserDataService;
import pm1.exception.UsernameDoesNotFoundException;
import pm1.exception.WrongUsernameOrPasswordException;
import pm1.response.UserLoginResponse;

import java.util.ArrayList;

@Service
public class UserBlServiceImpl implements UserBlService {

    private final static long EXPIRATION = 604800;
    private final static String USER_DEFAULT_PASSWORD = "user";
    private UserDataService userDataService;


    @Autowired
    public UserBlServiceImpl(UserDataService userDataService) {
        this.userDataService = userDataService;

    }

    /**
     * login
     *
     * @param username the username of the user
     * @param password the password of the user
     * @return the login info to response
     * @throws WrongUsernameOrPasswordException the username or password is error
     */
    @Override
    public UserLoginResponse login(String username, String password) throws WrongUsernameOrPasswordException, UsernameDoesNotFoundException {
          UserLoginResponse userLoginResponse=null;
          if(userDataService.isUserExistent(username)){
              if(userDataService.confirmPassword(username,password)){
                  userLoginResponse=new UserLoginResponse(2,"");
              }
              else{
                  userLoginResponse=new UserLoginResponse(1,"");
                  throw new WrongUsernameOrPasswordException();
              }
          }
          else{
              userLoginResponse=new UserLoginResponse(0,"");
              throw new UsernameDoesNotFoundException();
          }
          return userLoginResponse;
    }

}
