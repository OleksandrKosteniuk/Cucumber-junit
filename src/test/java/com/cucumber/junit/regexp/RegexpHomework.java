package com.cucumber.junit.regexp;

import static com.cucumber.junit.regexp.Regexp.*;

public class RegexpHomework {
    

    public static void main(String[] args) {
        String email = "Alexander.Kostenyuk@gmail.com";
        String ipAddress = "255.255.1.1";
        String creditCard1 = "1234 1234 1234 1234";
        String creditCard2 = "1234123412341234";
        String creditCard3 = "1234 12341234 1234";
        
        System.out.println("Email: "+regexpValidator(email,EMAIL_REGEXP_PATTERN));
        System.out.println("IP Address: "+regexpValidator(ipAddress,IP_ADDRESS_REGEXP_PATTERN));
        System.out.println("Credit Card: "+regexpValidator(creditCard1,CREDIT_CARD_REGEXP_PATTERN));
        System.out.println("Credit Card: "+regexpValidator(creditCard2,CREDIT_CARD_REGEXP_PATTERN));
        System.out.println("Credit Card: "+regexpValidator(creditCard3,CREDIT_CARD_REGEXP_PATTERN));
    }
}
