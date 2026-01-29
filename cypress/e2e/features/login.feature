Feature: login functionality

  Scenario: Successful login
    Given I open the OrangeHRM login page
    When I login as the Admin with valid password
    Then I should see the dashboard

  Scenario: Login failure
    Given I open the OrangeHRM login page
    When I login as the Admin with invalid password
    Then I should see an error message

  Scenario: Empty credentials validation
    Given I open the OrangeHRM login page
    When I click login without entering username and password
    Then I should see required validation messages

   Scenario: Forgot password navigation
    Given I open the OrangeHRM login page
    When I click Forgot your password link
    Then I should redirect to reset password page