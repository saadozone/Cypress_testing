import config from '../../support/config';

describe('Stubbed Login Feature Test', () => {
  beforeEach(() => {
    // Stub network requests for the login page
    cy.interceptInitialCalls();

    // Visit the login page before each test
    cy.visit(`${config.localUrl}/login`);
  });

  it('should log in successfully with valid credentials', () => {
    // Stub a successful login response
    cy.intercept('POST', `${config.localUrl}/api/login`, {
      statusCode: 200,
      body: {
        token: 'valid_token',
        user: { username: 'your_username' },
      },
    }).as('loginRequest');

    // Fill in the login form with valid credentials
    cy.getDataTest('username-input').type('your_username');
    cy.getDataTest('password-input').type('your_password');
    cy.getDataTest('login-button').click();

    // Wait for the login request to complete
    cy.wait('@loginRequest');

    // Assert that the user is redirected to the dashboard after successful login
    cy.url().should('include', '/dashboard');

    // Assert that the user's username is displayed on the page
    cy.getDataTest('user-greeting').should('contain.text', 'Welcome, your_username!');
  });

  it('should display an error message with invalid credentials', () => {
    // Stub a failed login response
    cy.intercept('POST', `${config.localUrl}/api/login`, {
      statusCode: 401,
      body: { error: 'Invalid credentials' },
    }).as('loginRequest');

    // Fill in the login form with invalid credentials
    cy.getDataTest('username-input').type('invalid_username');
    cy.getDataTest('password-input').type('invalid_password');
    cy.getDataTest('login-button').click();

    // Wait for the login request to complete
    cy.wait('@loginRequest');

    // Assert that an error message is displayed
    cy.getDataTest('error-message').should('be.visible');
  });

  // Add more tests for different scenarios or edge cases related to the login feature
});
