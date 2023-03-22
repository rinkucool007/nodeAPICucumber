const request = require('supertest');
const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const fs = require('fs');

const { apiUrl, payloadJson } = require('../constants'); // Your REST API URL and payload JSON object

let response; // The response object returned by Supertest

When('I submit a POST request to the REST API endpoint with the payload', async function () {
  response = await request(apiUrl)
    .post('/api/users')
    .send(payloadJson);
});

Then('the response should have a status code of {int}', function (statusCode) {
  expect(response.status).to.equal(statusCode);
});

Then('the response should include a {string} property', function (propertyName) {
  expect(response.body).to.have.property(propertyName);
});

Then('the {string} property in the response should have the value {string}', function (propertyName, expectedValue) {
  expect(response.body[propertyName]).to.equal(expectedValue);
});

Given('I have the payload JSON file {string}', function (payloadJsonFile) {
  const filePath = `${__dirname}/../${payloadJsonFile}`;
  payloadJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
});