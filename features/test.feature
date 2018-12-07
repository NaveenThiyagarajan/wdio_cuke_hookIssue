Feature: This is to show the hook issue

@test
Scenario: Hook Issue
Given I open the URL
When I click on the API section
And Search with the keyword "wait"
Then the search results should be filtered