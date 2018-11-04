package pm1.response;


public class UserLoginResponse extends Response {
    private String token;

    private int infoCode;
    public UserLoginResponse() {
    }

    public UserLoginResponse(int infoCode,String token) {
        this.infoCode=infoCode;
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public int getInfoCode() {
        return infoCode;
    }

    public void setInfoCode(int infoCode) {
        this.infoCode = infoCode;
    }
}

