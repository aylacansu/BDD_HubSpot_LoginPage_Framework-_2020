package runnerTest.webPages;

import org.openqa.selenium.By;

public class LoginPage extends ElementUtil{

  private   By emailId=By.id("username");
  private   By password1=By.id("password");
  private   By loginButton=By.id("loginBtn");
  //private   By signUpLink=By.linkText("Sign up");
  private   By loginErrorText=By.xpath("//div[@class='private-alert__inner']");


public String  getLoginPageTitle(){

return getPageTitle();
	}

	public void enterMail(String email){
    sendValue(emailId,email);

  }
  public void enterPassword(String password){

    sendValue(password1,password);
  }

  public void clickOnLoginButton(){

    clickOn(loginButton);
  }
//  public void clickOnSignInButton(){
//
//    clickOn(signInButton);
//  }
  public String getErrorMessage(){

    return  getTextFromElement(loginErrorText);
  }



}
