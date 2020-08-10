$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Login page feature",
  "description": "",
  "id": "login-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 3255106586,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.verifyLoginPage()"
});
formatter.result({
  "duration": 6299158661,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify invalid login from Login page",
  "description": "",
  "id": "login-page-feature;verify-invalid-login-from-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@messenger"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter aylacansu@siliconelabs.com into username field on the Login page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter test123 into password field on the Login page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button on Login page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify invalid login message on login in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "aylacansu@siliconelabs.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 40
    }
  ],
  "location": "LoginSD.invalidLogin(String,String)"
});
formatter.result({
  "duration": 238481781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginSD.invalidLogin(String,String)"
});
formatter.result({
  "duration": 83051886,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.clickOnLoginButton()"
});
formatter.result({
  "duration": 120714327,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyLoginErrorMessage()"
});
formatter.result({
  "duration": 1096878427,
  "status": "passed"
});
formatter.after({
  "duration": 108570047,
  "status": "passed"
});
formatter.uri("Login1.feature");
formatter.feature({
  "line": 2,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@loginPage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify invalid loginfor multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-loginfor-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \u003cusername\u003e into username text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \u003cpassword\u003e into password text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that invalid credentials",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-feature;verify-invalid-loginfor-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "login-feature;verify-invalid-loginfor-multiple-users;;1"
    },
    {
      "cells": [
        "ayla@gmail.com",
        "test123"
      ],
      "line": 18,
      "id": "login-feature;verify-invalid-loginfor-multiple-users;;2"
    },
    {
      "cells": [
        "ayse@gmail.com",
        "test456"
      ],
      "line": 19,
      "id": "login-feature;verify-invalid-loginfor-multiple-users;;3"
    },
    {
      "cells": [
        "ali@gmail.com",
        "test789"
      ],
      "line": 20,
      "id": "login-feature;verify-invalid-loginfor-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1049825178,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "Given: I am on home page",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 18,
  "name": "Verify invalid loginfor multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-loginfor-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginPage"
    },
    {
      "line": 6,
      "name": "@login1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter ayla@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter test123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ayla@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 28
    }
  ],
  "location": "Login1SD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 4703945690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "Login1SD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 110302647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login button",
      "offset": 11
    }
  ],
  "location": "Login1SD.clickOnButton(String)"
});
formatter.result({
  "duration": 143234921,
  "status": "passed"
});
formatter.match({
  "location": "Login1SD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 1132242149,
  "status": "passed"
});
formatter.after({
  "duration": 101420463,
  "status": "passed"
});
formatter.before({
  "duration": 1055677361,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "Given: I am on home page",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 19,
  "name": "Verify invalid loginfor multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-loginfor-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginPage"
    },
    {
      "line": 6,
      "name": "@login1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter ayse@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter test456 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ayse@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 28
    }
  ],
  "location": "Login1SD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 4694884566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test456",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "Login1SD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 105207661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login button",
      "offset": 11
    }
  ],
  "location": "Login1SD.clickOnButton(String)"
});
formatter.result({
  "duration": 71663804,
  "status": "passed"
});
formatter.match({
  "location": "Login1SD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 15315810073,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: Webdriver waited for 15 seconds nut still could not find the element therefore TimeOutException has been thrown (tried for 15 second(s) with 1000 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:315)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\n\tat runnerTest.webPages.ElementUtil.webAction(ElementUtil.java:33)\n\tat runnerTest.webPages.ElementUtil.getTextFromElement(ElementUtil.java:64)\n\tat runnerTest.webPages.LoginPage1.getErrorMessage(LoginPage1.java:41)\n\tat stepdefinition.Login1SD.verifyInvalidLogin(Login1SD.java:49)\n\tat ✽.Then I verify that invalid credentials(Login1.feature:11)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027private-alert__inner\u0027]\"}\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Is-MacBook-Pro\u0027, ip: \u00272605:6000:1523:85a4:144b:3c75:e0f0:cc23%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: /var/folders/08/xlv138yd1xb...}, goog:chromeOptions: {debuggerAddress: localhost:62588}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 51b8d1d92538c7b7f4768db600977e18\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027private-alert__inner\u0027]}\n\tat sun.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat runnerTest.webPages.ElementUtil$1.apply(ElementUtil.java:35)\n\tat runnerTest.webPages.ElementUtil$1.apply(ElementUtil.java:33)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\n\tat runnerTest.webPages.ElementUtil.webAction(ElementUtil.java:33)\n\tat runnerTest.webPages.ElementUtil.getTextFromElement(ElementUtil.java:64)\n\tat runnerTest.webPages.LoginPage1.getErrorMessage(LoginPage1.java:41)\n\tat stepdefinition.Login1SD.verifyInvalidLogin(Login1SD.java:49)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 963358971,
  "status": "passed"
});
formatter.before({
  "duration": 1080827898,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "Given: I am on home page",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 20,
  "name": "Verify invalid loginfor multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-loginfor-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginPage"
    },
    {
      "line": 6,
      "name": "@login1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter ali@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter test789 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ali@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 27
    }
  ],
  "location": "Login1SD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 4755310005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test789",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "Login1SD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 121914225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login button",
      "offset": 11
    }
  ],
  "location": "Login1SD.clickOnButton(String)"
});
formatter.result({
  "duration": 187002066,
  "status": "passed"
});
formatter.match({
  "location": "Login1SD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 1123951171,
  "error_message": "java.lang.AssertionError: expected [That email address doesn\u0027t exist.\nThe email address you\u0027ve entered doesn\u0027t appear to exist. Please check your entry and try again.] but found [This doesn\u0027t look right.\nYou\u0027ve entered an invalid password. For more detail on why this could be happening, please read this article.]\n\tat org.testng.Assert.fail(Assert.java:93)\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\n\tat org.testng.Assert.assertEquals(Assert.java:115)\n\tat org.testng.Assert.assertEquals(Assert.java:189)\n\tat org.testng.Assert.assertEquals(Assert.java:199)\n\tat stepdefinition.Login1SD.verifyInvalidLogin(Login1SD.java:49)\n\tat ✽.Then I verify that invalid credentials(Login1.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 881194321,
  "status": "passed"
});
});