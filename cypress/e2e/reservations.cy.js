describe('Turing Reservations', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      // fixture: 'res.json'
      body: [{
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
      }]
    })
    cy.visit('http://localhost:3000')
  })
  it('should display Turing Cafe Reservations', () => {
    cy.get('.app-title')
      .contains('Turing Cafe Reservations')
  })

  it('should render components', () => {
    cy.get('.resy-container').should('exist')
      .get('.resy-form').should('exist');
  });
  
  it('should fill out form', () => {
    cy.get('input[name="name"]').type('Christie').should('have.value', 'Christie')
      .get('input[name="Date"]').type('01/02').should('have.value', '01/02')
      .get('input[name="time"]').type('12:30 PM').should('have.value', '12:30 PM')
      .get('input[name="guests"]').type('3').should('have.value', '3')
      .get('button.res-button').click();
  })



})