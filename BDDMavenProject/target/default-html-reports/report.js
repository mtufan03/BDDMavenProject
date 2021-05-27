$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/inventory.feature");
formatter.feature({
  "name": "User can select Items from Inventory",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@inventory"
    },
    {
      "name": "@log"
    }
  ]
});
formatter.scenario({
  "name": "User can Select and Add items to the cart from Inventory Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@inventory"
    },
    {
      "name": "@log"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in Inventory page",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.Inventory.user_is_in_Inventory_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select and click add item",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.Inventory.user_select_and_click_add_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The item is in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.Inventory.the_item_is_in_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "User may login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@log"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@log"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "User enters username and password and click",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_enters_username_and_password_and_click()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can log in",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_can_log_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can not login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@log"
    }
  ]
});
formatter.step({
  "name": "User enters \"usernameAli\" and \"password\" and click",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_enters_and_and_click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not login",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_can_not_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User can test several credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\" and click",
  "keyword": "When "
});
formatter.step({
  "name": "User can not login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "Standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can test several credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@log"
    }
  ]
});
formatter.step({
  "name": "User enters \"Standard_user\" and \"secret_sauce\" and click",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_enters_and_and_click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not login",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_can_not_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can test several credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@log"
    }
  ]
});
formatter.step({
  "name": "User enters \"standard_user\" and \"secret_sauce\" and click",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_enters_and_and_click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not login",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_can_not_login()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat Tests.StepDefinitions.Login.user_can_not_login(Login.java:54)\r\n\tat ✽.User can not login(file:///C:/Users/HP/IdeaProjects/BDDMavenClass/src/test/resources/Features/login.feature:23)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});