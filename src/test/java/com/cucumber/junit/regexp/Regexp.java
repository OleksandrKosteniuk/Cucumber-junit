package com.cucumber.junit.regexp;

public class Regexp {
    public static final String EMAIL_REGEXP_PATTERN = "^[a-zA-Z0-9_.]{3,25}+@[a-zA-Z]{3,5}+\\.[a-zA-Z]{3,}$";
    public static final String IP_ADDRESS_REGEXP_PATTERN = "^([0-9]{3}.){2}[0-9]{1,3}.[0-9]{1,3}$";
    //public static final String CREDIT_CARD_REGEXP_PATTERN = "^[0-9]{4}(?: |)[0-9]{4}(?: |)[0-9]{4}(?: |)[0-9]{4}$";

    public static final String CREDIT_CARD_REGEXP_PATTERN = "^(([0-9]{4})(?: |)){4}$";

    public static Boolean regexpValidator(String value, String pattern) {
        return value.matches(pattern);
    }
}
