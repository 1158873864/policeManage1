package pm1.exception;


import pm1.response.WrongResponse;

public class SystemException extends Exception {
    private WrongResponse response = new WrongResponse(10001, "System is error.");

    public WrongResponse getResponse() {
        return response;
    }
}
