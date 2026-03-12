Feature: add employee functionality

  Scenario: Add a new employee
    Given I login to the OrangeHRM application
    When I navigate to the Add Employee page
    And I enter the employee details
    And I select profile photo
    And I click save button on the page
    Then I should redirect to the EMP information

  Scenario: Add employee without entering required details
    Given I login to the OrangeHRM application
    When I navigate to the Add Employee page
    And I click save button without enter name
    Then I should see a validation error message

 Scenario: Upload unsupported profile photo format
    Given I login to the OrangeHRM application
    When I navigate to the Add Employee page
    And I enter the employee details
    And I upload an unsupported file format as profile photo
    Then I should see a file format error message
