$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login1.feature");
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
  "duration": 2577051837,
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
  "duration": 5420244019,
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
  "duration": 76453200,
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
  "duration": 86550154,
  "status": "passed"
});
formatter.match({
  "location": "Login1SD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 1043848038,
  "status": "passed"
});
formatter.after({
  "duration": 117044752,
  "status": "passed"
});
formatter.before({
  "duration": 1205888318,
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
  "duration": 5423732940,
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
  "duration": 98473463,
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
  "duration": 85643435,
  "status": "passed"
});
formatter.match({
  "location": "Login1SD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 1044265483,
  "status": "passed"
});
formatter.after({
  "duration": 106342456,
  "status": "passed"
});
formatter.before({
  "duration": 1050919343,
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
  "duration": 5596527329,
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
  "duration": 83464550,
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
  "duration": 90211208,
  "status": "passed"
});
formatter.match({
  "location": "Login1SD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 1040076898,
  "error_message": "java.lang.AssertionError: expected [That email address doesn\u0027t exist.\nThe email address you\u0027ve entered doesn\u0027t appear to exist. Please check your entry and try again.] but found [This doesn\u0027t look right.\nYou\u0027ve entered an invalid password. For more detail on why this could be happening, please read this article.]\n\tat org.testng.Assert.fail(Assert.java:93)\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\n\tat org.testng.Assert.assertEquals(Assert.java:115)\n\tat org.testng.Assert.assertEquals(Assert.java:189)\n\tat org.testng.Assert.assertEquals(Assert.java:199)\n\tat stepdefinition.Login1SD.verifyInvalidLogin(Login1SD.java:49)\n\tat ✽.Then I verify that invalid credentials(Login1.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 916825256,
  "status": "passed"
});
});