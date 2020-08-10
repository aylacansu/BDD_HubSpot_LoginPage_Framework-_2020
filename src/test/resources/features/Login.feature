@web

  Feature: Login page feature
    Background:
      Given  I am Login page

@messenger
      Scenario: Verify invalid login from Login page
        When I enter aylacansu@siliconelabs.com into username field on the Login page
        And  I enter test123 into password field on the Login page
        And  I click on login button on Login page
        Then I verify invalid login message on login in page