describe("SearchForm", () => {
  it("submits the form with proper search query", () => {
    const searchQuery = "Test search query";
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {
        cy.stub(win.console, "log").as("consoleLog");
        cy.stub(win.console, "error").as("consoleError");
      },
    });

    cy.get('input[type="text"]').clear();

    cy.get('input[type="text"]').type(searchQuery);

    cy.get('button[type="submit"]').click();

    cy.get("@consoleLog").should("be.calledWith", searchQuery);
  });
});
