@log
Feature: User may login

  Background:
    Given User is in login page

  @wip
  Scenario: User can login with valid credentials

#      Given User is in login page
    When  User enters username and password and click
    Then  User can log in


  Scenario: User can not login with invalid credentials
#      Given User is in login page
    When User enters "usernameAli" and "password" and click
    Then User can not login

  Scenario Outline: User can test several credentials
    #      Given User is in login page
    When User enters "<Username>" and "<Password>" and click
    Then User can not login
    Examples:
      | Username        | Password       |
      | Standard_user   | secret_sauce   |
#      | standard_user01 | secret_sauce   |
#      | standarduser    | secret_sauce   |
      | standard_user  | secret_sauce   |
#      | STANDARD_USER   | secret_sauce   |
#      | standard_user   |                |
#      |                 | secret_sauce   |
#      | standard_user   | Secret_sauce   |
#      | standard_user   | secret_sauce   |
#      | standard_user   | secret_sauce   |
#      | standard_user   | secret sauce   |
#      | standard_user   | secret_sauce01 |
#      | standard_user   | secret_sauce!  |
#      | standard_user   | secret_sauce*& |
