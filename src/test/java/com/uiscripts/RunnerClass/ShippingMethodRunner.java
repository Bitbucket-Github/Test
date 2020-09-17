package com.uiscripts.RunnerClass;



import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "src\\test\\java\\com\\uiscripts\\Features\\ShippingMethod.feature",
glue= "com\\uiscripts\\StepDefinitions", strict = true, plugin = {"pretty", "html:target/cucumber-reports/cucumber-report","json:target/cucumber-reports/CucumberTestReport.json"}

)

public class ShippingMethodRunner extends AbstractTestNGCucumberTests{

}
