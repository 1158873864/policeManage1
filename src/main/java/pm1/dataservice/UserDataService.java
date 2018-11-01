package pm1.dataservice;

import pm1.entity.User;

public interface UserDataService {
    /**
     * find whether the user exists
     *
     * @param username the username
     * @return whether the user exists
     */
    boolean isUserExistent(String username);

    /**
     * save the user
     *
     * @param user the user to be saved
     */
    void saveUser(User user);

    /**
     * confirm the password
     *
     * @param username the username
     * @param password the password
     * @return true if password is correct else false
     */
    boolean confirmPassword(String username, String password);

    /**
     * Removes a user.
     *
     * @param username username
     */
    void deleteUser(String username);


    /**
     * get user by username
     *
     * @param username
     * @return
     */
    User getUserByUsername(String username);
}
