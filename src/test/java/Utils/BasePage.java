package Utils;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
public class BasePage {
    private static ThreadLocal<WebDriver> driverPool = new ThreadLocal<>();
    public BasePage(){
    }
    public static WebDriver get(){
        if(driverPool.get()==null){
            String browserParamFromEnv = System.getProperty("browser");
            String browser = browserParamFromEnv == null ? ConfigReader.getProperty("browser") : browserParamFromEnv;
            switch (browser){
                case "chrome":
                    WebDriverManager.chromedriver().setup();
                    driverPool.set(new ChromeDriver());
                    break;
                case "chrome headless":
                    WebDriverManager.chromedriver().setup();
                    driverPool.set(new ChromeDriver(new ChromeOptions().setHeadless(true)));
                case "firefox":
                    WebDriverManager.firefoxdriver().setup();
                    driverPool.set(new FirefoxDriver());
                    break;
                case "firefox headless":
                    WebDriverManager.firefoxdriver().setup();
                    driverPool.set(new FirefoxDriver(new FirefoxOptions().setHeadless(false)));
                    break;
                default:
                    throw new RuntimeException("Invlaid browser name...!");
            }
        }
        return driverPool.get();
    }
    public static void closeBrowser(){
        driverPool.get().quit();
        driverPool.remove();
    }
}

