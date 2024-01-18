describe('Checkbox Rendering', () => {
    it('renders without crashing', () => {
      cy.visit('/your-component-page'); // Replace with the actual path or URL
  
      // Assuming your checkbox component has a specific class or identifier
      cy.get('.custom-checkbox').should('exist');
    });
  });
  
  // Test 2: 'renders with a label'
  describe('Checkbox Label Rendering', () => {
    it('renders with a label', () => {
      cy.visit('/your-component-page'); // Replace with the actual path or URL
  
      // Assuming your checkbox component and its label have specific classes or identifiers
      cy.get('.custom-checkbox')
        .should('exist')
        .get('.checkbox-label')
        .should('have.text', 'Your Label Text');
    });
  });
  
  // Test 3: 'handles checked state'
  describe('Checkbox Checked State Handling', () => {
    it('handles checked state', () => {
      cy.visit('/your-component-page'); // Replace with the actual path or URL
  
      // Assuming your checkbox component has a specific class or identifier
      cy.get('.custom-checkbox').as('checkbox');
  
      // Check the checkbox
      cy.get('@checkbox').check().should('be.checked');
  
      // Uncheck the checkbox
      cy.get('@checkbox').uncheck().should('not.be.checked');
    });
    // Test 4: 'matches the visual baseline for the default state'
  describe('Visual Regression - Default State', () => {
    it('matches the visual baseline for the default state', () => {
      cy.visit('/your-component-page'); // Replace with the actual path or URL
  
      // Assuming your checkbox component has a specific class or identifier
      cy.get('.custom-checkbox').as('checkbox');
  
      // Capture screenshot of the default state
      cy.get('@checkbox').screenshot('default-state', { capture: 'fullPage' });
  
      // Compare the captured screenshot with the baseline
      cy.compareSnapshot('default-state', { capture: 'fullPage', clip: { x: 0, y: 0, width: 1200, height: 800 } });
    });
  });