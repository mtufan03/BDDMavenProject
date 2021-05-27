package Tests.Pages;

import Tests.Utilities.ConfigurationReader;
import Tests.Utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id = "user-name")
    public WebElement Username;

    @FindBy(id = "password")
    public WebElement Password;

    @FindBy(id = "login-button")
    public WebElement LoginButton;

    @FindBy(className = "error-button")
    public WebElement ErrorMessage;

    public void login() {
//        LoginPage loginPage=new LoginPage();
        String user = ConfigurationReader.get("username");
        String pass = ConfigurationReader.get("password");
        Username.sendKeys(user);
        Password.sendKeys(pass);
        LoginButton.click();
    }

    public void login(String userr, String passs) {
        Username.sendKeys(userr);
        Password.sendKeys(passs);
        LoginButton.click();
    }

}