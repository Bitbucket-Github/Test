package com.uiscripts.RunnerClass;



import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features="src\\test\\java\\com\\uiscripts\\Features\\LoginTest.feature",  strict = true,
glue= "com\\uiscripts\\StepDefinitions",  monochrome= true, plugin = {"pretty", "html:target/cucumber-reports/cucumber-report","json:target/cucumber-reports/CucumberTestReport.json"}


)


public class LoginTestRunner extends AbstractTestNGCucumberTests{
	

	}

