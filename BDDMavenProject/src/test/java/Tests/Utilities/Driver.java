package Tests.Utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Driver {
    private Driver(){}

    private static InheritableThreadLocal<WebDriver> driverpool=new InheritableThreadLocal<WebDriver>();

    public static WebDriver get(){
        if (driverpool.get() == null) {
            String browser=ConfigurationReader.get("browser");

            switch (browser){
                case "chrome":
                    WebDriverManager.chromedriver().setup();
                    driverpool.set(new ChromeDriver());
                    break;
                case "firefox":
                    WebDriverManager.firefoxdriver().setup();
                    driverpool.set(new FirefoxDriver());
                    break;
                case"edge":
                    WebDriverManager.edgedriver().setup();
                    driverpool.set(new EdgeDriver());
                    break;
                case "chrome-headless":
                    WebDriverManager.chromedriver().setup();
                    driverpool.set(new ChromeDriver(new ChromeOptions().setHeadless(true)));
                    break;
            } }
        return driverpool.get();
    }
    public  static  void closeDriver()  {
//        Thread.sleep(3000);

        driverpool.get().quit();
        driverpool.remove();
    }


}
