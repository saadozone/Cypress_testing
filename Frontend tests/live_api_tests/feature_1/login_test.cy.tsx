import config from '../../support/config';

describe('Login Feature Test', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit(`${config.localUrl}/login`);
  });

  it('should log in successfully with valid credentials', () => {
    // Fill in the login form with valid credentials
    cy.getDataTest('username-input').type('your_username');
    cy.getDataTest('password-input').type('your_password');
    cy.getDataTest('login-button').click();

    // Assert that the user is redirected to the dashboard after successful login
    cy.url().should('include', '/dashboard');

    // Assert that the user's username is displayed on the page
    cy.getDataTest('user-greeting').should('contain.text', 'Welcome, your_username!');
  });

  it('should display an error message with invalid credentials', () => {
    // Fill in the login form with invalid credentials
    cy.getDataTest('username-input').type('invalid_username');
    cy.getDataTest('password-input').type('invalid_password');
    cy.getDataTest('login-button').click();

    // Assert that an error message is displayed
    cy.getDataTest('error-message').should('be.visible');
  });

  // Add more tests for different scenarios or edge cases related to the login feature
});
