Feature: Test POST method of API using Supertest and Cucumber

  Scenario: Submit a payload to API and check response
    When I submit a POST request to the REST API endpoint with the payload
    Then the response should have a status code of 201
    And the response should include a "id" property
    And the "name" property in the response should have the value "morpheus"
