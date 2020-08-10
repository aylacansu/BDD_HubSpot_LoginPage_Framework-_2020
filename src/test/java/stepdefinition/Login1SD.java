package stepdefinition;

import Utils.BasePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import runnerTest.webPages.LoginPage;
import runnerTest.webPages.LoginPage1;

public class Login1SD {

    LoginPage1 loginPage1= new LoginPage1();

    @Given("^I am on home page&")

    public void onHomePage(){

        Assert.assertEquals(BasePage.get().getCurrentUrl(),"https://app.hubspot.com/login");
    }
    @When("^I enter (.+) into (username|password) text fields on home screen$")
    public void enterDataUserAndPassField(String anyText,String textFields){
        switch (textFields){
            case "username":
                loginPage1.enterEmail(anyText);
                break;
            case "password":
                loginPage1.enterPassword(anyText);
                break;

        }
    }
    @And("^I click on (login button|create account) on home screen$")
    public void clickOnButton(String button){
        switch (button){
            case "login button":
                loginPage1.clickOnLoginButton();
                break;
            case "create account":
                break;
        }


    }

    @Then("^I verify that invalid credentials$")
    public void verifyInvalidLogin() throws InterruptedException {
        Assert.assertEquals(loginPage1.getErrorMessage(), "That email address doesn't exist.\n" +
                "The email address you've entered doesn't appear to exist. Please check your entry and try again.");

    }



















}
