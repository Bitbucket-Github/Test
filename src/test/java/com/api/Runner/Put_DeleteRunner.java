package com.api.Runner;





import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;



@CucumberOptions(
        features = "src\\test\\java\\com\\api\\Features\\Put_Delete.feature", glue = {"com\\api\\StepDefinition"},
        monochrome = true, plugin = {"pretty", "html:target/cucumber-reports/cucumber-report1.html","json:target/cucumber-reports/CucumberTestReport1.json"})

public class Put_DeleteRunner extends AbstractTestNGCucumberTests {

}
