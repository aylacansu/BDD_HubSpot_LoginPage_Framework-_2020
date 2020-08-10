package stepdefinition;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.testng.Assert;
import runnerTest.webPages.LoginPage;
import Utils.BasePage;

public class LoginSD {

    private LoginPage loginPage = new LoginPage();

    @Given("^I am Login page$")
    public void verifyLoginPage() throws InterruptedException {
        Thread.sleep(6000);
        Assert.assertEquals(loginPage.getLoginPageTitle(),"HubSpot Login");
    }

    @When("^I enter (.+) into (username|password) field on the Login page$")
    public void invalidLogin(String value, String field){
        switch (field) {
            case "username":
                loginPage.enterMail(value);
                break;
            case "password":
                loginPage.enterPassword(value);
        }
    }

    @And("^I click on login button on Login page$")
    public void clickOnLoginButton(){
       loginPage.clickOnLoginButton();
    }

    @Then("^I verify invalid login message on login in page$")
    public void verifyLoginErrorMessage() {

        Assert.assertEquals(loginPage.getErrorMessage(), "That email address doesn't exist.\n" +
                "The email address you've entered doesn't appear to exist. Please check your entry and try again.");

    }









}


