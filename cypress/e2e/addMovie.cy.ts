describe("AddMovie", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it('Navigating to "/new" should display add movie window', () => {
    cy.visit("/new");
    cy.get('[data-cy="dialogTitle"]').contains("ADD MOVIE");
  });

  it("Adds a new movie", () => {
    cy.visit("/new");
    cy.get("#title").type("New Movie Title");
    cy.get("#movieUrl").type("https://example.com/poster.jpg");
    cy.get("#genre").select("DOCUMENTARY");
    cy.get("#releaseDate").type("2023-01-01");
    cy.get("#rating").type("8");
    cy.get("#runtime").type("120");
    cy.get("#overview").type("This is a new movie.");
    cy.get('[data-cy="formSubmitButton"]').click();

    cy.contains("New Movie Title").should("exist");
    cy.url().should("match", /\d+$/);
    cy.get('[data-cy="movieDetailsWrapper"]').should("be.visible");
  });

  it("Adds a new movie empty values", () => {
    cy.visit("/new");

    cy.get('[data-cy="formSubmitButton"]').click();

    cy.get('[role="alert"]').should("exist").contains("This field is required");

    cy.url().should("eq", "http://localhost:3000/new");    
  });

  it("Cancel adding a new movie", () => {
    cy.visit("/new");
    cy.get('[data-testid="close-button"]').click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
