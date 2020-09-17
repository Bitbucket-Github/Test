package com.uiscripts.RunnerClass;



import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features="src\\test\\java\\com\\uiscripts\\Features\\MyStore.feature", strict = true,
glue= "com\\uiscripts\\StepDefinitions",  plugin = {"pretty", "html:target/cucumber-reports/cucumber-report","json:target/cucumber-reports/CucumberTestReport.json"},
monochrome=true

) 


public class MyStoreRunner extends AbstractTestNGCucumberTests{

}
