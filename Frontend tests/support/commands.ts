import config from './config';

declare global {
  namespace Cypress {
    interface Chainable {
      login: () => void;
      getDataTest: (dataTestSelector: string) => Chainable<JQuery<HTMLElement>>;
      interceptInitialCalls: () => void;
    }
  }
}

Cypress.Commands.add('login', () => {
  // Your login logic goes here
  // For example, use config.localUrl or config.siteUrl in your requests
  cy.request({
    method: 'POST',
    url: `${config.localUrl}/api/login`,
    // ...
  }).then((response) => {
    // ...
    // Assuming the response contains a token
    const token = response.body.token;

    // Save the token to be used in subsequent requests
    cy.wrap(token).as('authToken');
  });
});

Cypress.Commands.add('getDataTest', (dataTestSelector) => {
  return cy.get(`[data-test="${dataTestSelector}"]`);
});

Cypress.Commands.add('interceptInitialCalls', () => {
  // Add your initial intercepts for common API calls here
  // For example:
  cy.intercept('GET', `${config.localUrl}/api/someEndpoint`, {
    fixture: 'someFixture.json',
  }).as('getSomeData');

  // Add more intercepts as needed
});
