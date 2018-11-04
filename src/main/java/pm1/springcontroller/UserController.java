package pm1.springcontroller;

import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pm1.blservice.UserBlService;
import pm1.exception.UsernameDoesNotFoundException;
import pm1.exception.WrongUsernameOrPasswordException;
import pm1.response.Response;

@RestController
public class UserController {
    private final UserBlService userBlService;

    @Autowired
    public UserController(UserBlService userBlService) {
        this.userBlService = userBlService;
    }

    @ApiOperation(value = "用户登录", notes = "验证用户登录并返回token")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "username", value = "用户名", required = true, dataType = "String"),
            @ApiImplicitParam(name = "password", value = "密码", required = true, dataType = "String")
    })
    @RequestMapping(value = "", method = RequestMethod.GET)
    public Response login(@RequestParam("username") String username, @RequestParam("password") String password) throws UsernameDoesNotFoundException, WrongUsernameOrPasswordException {
        return userBlService.login(username,password);
    }
}
