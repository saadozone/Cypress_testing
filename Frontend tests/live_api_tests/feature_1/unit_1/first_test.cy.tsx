import config from '../../support/config';  // Adjust the path based on your project structure

describe('OZONE Cypress Test', () => {
  beforeEach(() => {
    // Using the local URL defined in the configuration
    cy.visit(config.localUrl);
  });

  it('should interact with the submit button using data-test ids', () => {
    // Using the data-test attribute for identification
    cy.getDataTest('my-container').find('[data-test=submit-btn]').click();

    // You can add assertions or further interactions based on your application behavior
    cy.url().should('include', '/success-page');
  });

  // Add more tests as needed for your application
});
