describe("SearchForm", () => {
  it("submits the form with proper search query", () => {
    const searchQuery = "Test search query";
    cy.visit("/", {
      onBeforeLoad(win) {
        cy.spy(win.console, "log").as("consoleLog");
        cy.spy(win.console, "error").as("consoleError");
      },
    });

    cy.get('input[type="text"]').should("exist");

    cy.get('button[type="submit"]').should("exist");

    cy.get('input[type="text"]').clear();

    cy.get('input[type="text"]').type(searchQuery);

    cy.get("form").submit();

    cy.get("@consoleLog").should("be.calledWith", searchQuery);
  });
});
