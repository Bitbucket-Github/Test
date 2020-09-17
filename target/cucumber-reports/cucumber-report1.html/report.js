$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/api/Features/Put_Delete.feature");
formatter.feature({
  "line": 2,
  "name": "Feature to check the Put \u0026 Delete Method of API",
  "description": "",
  "id": "feature-to-check-the-put-\u0026-delete-method-of-api",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Put_Delete"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "User has Bearer token for Authorization",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am authorized User",
  "keyword": "Given "
});
formatter.match({
  "location": "Put_DeleteStepDef.i_am_authorized_user()"
});
formatter.result({
  "duration": 2160500,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Update the existing record",
  "description": "",
  "id": "feature-to-check-the-put-\u0026-delete-method-of-api;update-the-existing-record",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@UpdateExisting"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter the details to update",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Send PUT HTTP request",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the responce code",
  "keyword": "Then "
});
formatter.match({
  "location": "Put_DeleteStepDef.i_enter_the_details_to_update()"
});
formatter.result({
  "duration": 745600,
  "status": "passed"
});
formatter.match({
  "location": "Put_DeleteStepDef.send_put_http_request()"
});
formatter.result({
  "duration": 371003100,
  "status": "passed"
});
formatter.match({
  "location": "Put_DeleteStepDef.verify_the_responce_code()"
});
formatter.result({
  "duration": 9676300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User has Bearer token for Authorization",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am authorized User",
  "keyword": "Given "
});
formatter.match({
  "location": "Put_DeleteStepDef.i_am_authorized_user()"
});
formatter.result({
  "duration": 211100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Update the created record",
  "description": "",
  "id": "feature-to-check-the-put-\u0026-delete-method-of-api;update-the-created-record",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@UpdateCreated"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I enter details to update",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Send HTTP PUT request",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify the HTTP responce code",
  "keyword": "Then "
});
formatter.match({
  "location": "Put_DeleteStepDef.i_enter_details_to_update()"
});
formatter.result({
  "duration": 236100,
  "status": "passed"
});
formatter.match({
  "location": "Put_DeleteStepDef.send_http_put_request()"
});
formatter.result({
  "duration": 337271100,
  "status": "passed"
});
formatter.match({
  "location": "Put_DeleteStepDef.verify_the_http_responce_code()"
});
formatter.result({
  "duration": 12992300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User has Bearer token for Authorization",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am authorized User",
  "keyword": "Given "
});
formatter.match({
  "location": "Put_DeleteStepDef.i_am_authorized_user()"
});
formatter.result({
  "duration": 406400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Delete a record",
  "description": "",
  "id": "feature-to-check-the-put-\u0026-delete-method-of-api;delete-a-record",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Delete"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Send DELETE HTTP request",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Verify responce code",
  "keyword": "Then "
});
formatter.match({
  "location": "Put_DeleteStepDef.send_delete_http_request()"
});
formatter.result({
  "duration": 335045300,
  "status": "passed"
});
formatter.match({
  "location": "Put_DeleteStepDef.verify_responce_code()"
});
formatter.result({
  "duration": 16132200,
  "status": "passed"
});
});