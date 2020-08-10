package runnerTest.webPages;

import org.openqa.selenium.By;

public class LoginPage1  extends  ElementUtil{



    private   By emailId=By.id("username");
    private   By password1=By.id("password");
    private   By loginButton=By.id("loginBtn");
    private   By loginErrorText=By.xpath("//div[@class='private-alert__inner']");


    public void enterEmail(String enterEmail){

        sendValue(emailId,enterEmail);

    }



    public void enterPassword(String enterPassword){

        sendValue(password1,enterPassword);

    }

    public void clickOnLoginButton(){

        clickOn(loginButton);

    }




    public String getErrorMessage(){

        return  getTextFromElement(loginErrorText);
    }





}
























