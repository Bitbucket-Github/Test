package com.api.StepDefinition;

import org.junit.Assert;



import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class GetStep{
	
	private static final String BASE_URL = "https://gorest.co.in/public-api";
	private static Response response;
	RequestSpecification httpRequest;
	int statusCode;
	String responseBody;
	JsonPath jsonPathEvaluator;
	
	
	@Given("I am a Authorized User")
	public void i_am_a_authorized_user() {
		RestAssured.baseURI = BASE_URL;
		httpRequest=RestAssured.given();
		httpRequest.auth().oauth2("09eec09114c4a4450fd8a9cdde75198ba161a5b12520242bd761f602397553fe");
	    //throw new io.cucumber.java.PendingException();
	}

	@When("Send GET HTTP request")
	public void send_get_http_request() {
		response=httpRequest.request(Method.GET,"/users");
	    //throw new io.cucumber.java.PendingException();
	}
	@Then("I receive valid HTTP response code")
	public void i_receive_valid_http_response_code() {
		responseBody=response.getBody().asString();
		System.out.println("Response Body is:" +responseBody);
		jsonPathEvaluator = response.jsonPath();
		statusCode=jsonPathEvaluator.get("code");
		Assert.assertEquals(statusCode, 200);
	    //throw new io.cucumber.java.PendingException();
	}
	
	@When("Send Get HTTP request for Single User")
	public void send_get_http_request_for_single_user() {
		response=httpRequest.request(Method.GET,"/users/59");
	    //throw new io.cucumber.java.PendingException();
	}
	
	@When("Send Get HTTP request for user")
	public void send_get_http_request_for_user() {
		response=httpRequest.request(Method.GET,"/users/50000");
	    //throw new io.cucumber.java.PendingException();
	}

	@Then("Verify the reponse Code")
	public void verify_the_reponse_code() {
		responseBody=response.getBody().asString();
		System.out.println("Response Body is:" +responseBody);
		Assert.assertTrue(responseBody.contains("Resource not found"));
		jsonPathEvaluator = response.jsonPath();
		statusCode=jsonPathEvaluator.get("code");
		Assert.assertEquals(statusCode, 404);
	    //throw new io.cucumber.java.PendingException();
	}

}
