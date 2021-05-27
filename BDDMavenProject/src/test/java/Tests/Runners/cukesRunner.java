package Tests.Runners;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/cucumber.json",
                    "html:target/default-html-reports"},
        features = "src\\test\\resources\\Features",
        glue = "Tests\\StepDefinitions",
        dryRun = false,
        tags = "@log"
)



public class cukesRunner {
}
