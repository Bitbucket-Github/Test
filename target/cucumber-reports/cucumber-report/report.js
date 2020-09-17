$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/uiscripts/Features/MyStore.feature");
formatter.feature({
  "line": 1,
  "name": "MyStoreSearch",
  "description": "",
  "id": "mystoresearch",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User opens the chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user navigate to the application",
  "keyword": "And "
});
formatter.match({
  "location": "MyStore.user_opens_the_chromebrowser()"
});
formatter.result({
  "duration": 2376680900,
  "status": "passed"
});
formatter.match({
  "location": "MyStore.user_navigate_to_the_application()"
});
