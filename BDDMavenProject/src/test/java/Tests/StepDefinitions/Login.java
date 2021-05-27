package Tests.StepDefinitions;

import Tests.Pages.LoginPage;
import Tests.Utilities.ConfigurationReader;
import Tests.Utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class Login {

    @Given("User is in login page")
    public void user_is_in_login_page() {
        String url= ConfigurationReader.get("url");
        Driver.get().get(url);
    }
    LoginPage loginPage=new LoginPage();
    @When("User enters username and password and click")
    public void user_enters_username_and_password_and_click() {

        String user=ConfigurationReader.get("username");
        String pass=ConfigurationReader.get("password");
        loginPage.Username.sendKeys(user);
        loginPage.Password.sendKeys(pass);
        loginPage.LoginButton.click();

    }

    @Then("User can log in")
    public void user_can_log_in() {
        String currentUrl=Driver.get().getCurrentUrl();
        Assert.assertTrue(currentUrl.contains("inventory.html"));

    }

    @When("User enters {string} and {string} and click")
    public void user_enters_and_and_click(String user, String pass) {
    loginPage.Username.sendKeys(user);
    loginPage.Password.sendKeys(pass);
    loginPage.LoginButton.click();

    }

    @Then("User can not login")
    public void user_can_not_login() {
//        String error=loginPage.ErrorMessage.getTagName();
//        String error1=loginPage.ErrorMessage.getAttribute("class");
//        String error2=loginPage.ErrorMessage.getText();
//        System.out.println(error+ "AAA");
//        System.out.println(error1+ "AAA1");
//        System.out.println(error2+ "AAA2");
        String currentUrl=Driver.get().getCurrentUrl();
        Assert.assertFalse(currentUrl.contains("inventory.html"));
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }





}
