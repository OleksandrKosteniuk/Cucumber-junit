package com.cucumber.junit.regexp;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class GetAddressElement {

    public static void main(String[] args) {

        String address = "41 University Drive • Suite 202, Newtown, PA 18940 • USA";

        List<String> addressSplited = Arrays.asList(address.split(" • "));

        System.out.println("Address:");
        
        for (int i = 0; i<addressSplited.size();i++){
            System.out.println(addressSplited.get(i));
        }

        System.out.println("====================================");
        
        //street name and number
        String streetNameAndNumber = addressSplited.get(0);
        
        //flat, city, post code
        String flatCityPostcode = addressSplited.get(1);
        
        //country
        String country = addressSplited.get(2);
        
        String streetName = getValueByRegEx(streetNameAndNumber,"\\D+",0).trim();
        
        String streetNumber = getValueByRegEx(streetNameAndNumber,"\\d+",0).trim();
        
        String suiteNumber = getValueByRegEx(flatCityPostcode,"\\d+",0).trim();
        
        String city = getValueByRegEx(flatCityPostcode,"([a-zA-Z]+),",1).trim();

        String postcode = getValueByRegEx(flatCityPostcode,"([A-Z]{2}\\s[0-9]+)",0).trim();

        System.out.println("streetName: "+streetName);
        System.out.println("streetNumber: "+streetNumber);
        System.out.println("suiteNumber: "+suiteNumber);
        System.out.println("city: "+city);
        System.out.println("postcode: "+postcode);
         
    }

    public static String getValueByRegEx(String text, String pattern, int group) {
        Pattern replacementPattern = Pattern.compile(pattern);
        Matcher matcher = replacementPattern.matcher(text);
        matcher.find();
        return matcher.group(group);
    }
}