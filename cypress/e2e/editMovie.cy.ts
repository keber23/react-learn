describe("EditMovie", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it('Navigating to "/901/edit" the page displays and edit form.', () => {
    cy.visit("/901/edit");
    cy.get('[data-cy="dialogTitle"]').contains("EDIT MOVIE");
  });

  it("Edit movie", () => {
    cy.visit("/901/edit");
    cy.get("#title").should("have.value", "City Lights");
    cy.get("#movieUrl").should(
      "have.value",
      "https://image.tmdb.org/t/p/w500/bXNvzjULc9jrOVhGfjcc64uKZmZ.jpg"
    );
    cy.get("#genre").contains("COMEDY");
    cy.get("#releaseDate").should("have.value", "1931-01-30");
    cy.get("#rating").should("have.value", "8.2");
    cy.get("#runtime").should("have.value", "87");
    cy.get("#overview").should(
      "have.value",
      "City Lights is the first silent film that Charlie Chaplin directed after he established himself with sound accompanied films. The film is about a penniless man who falls in love with a flower girl. The film was a great success and today is deemed a cult classic."
    );
    cy.get('[data-cy="formSubmitButton"]').click();

    cy.contains("City Lights").should("exist");
    cy.url().should("eq", "http://localhost:3000/901");
    cy.get('[data-cy="movieDetailsWrapper"]').should("be.visible");
  });

  it("Edit movie with empty values", () => {
    cy.visit("/901/edit");

    cy.get("#title").clear();
    cy.get("#movieUrl").clear();
    cy.get("#genre").invoke("val", "");
    cy.get("#releaseDate").clear();
    cy.get("#rating").clear();
    cy.get("#runtime").clear();
    cy.get("#overview").clear();

    cy.get('[data-cy="formSubmitButton"]').click();

    cy.get('[role="alert"]').should("exist").contains("This field is required");

    cy.url().should("eq", "http://localhost:3000/901/edit");
  });

  it("Cancel editing movie", () => {
    cy.visit("/901/edit");
    cy.get('[data-testid="close-button"]').click();
    cy.url().should("eq", "http://localhost:3000/901");
  });
});
