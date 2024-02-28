describe("GenreSelect", () => {
  it("selects a genre and triggers callback with correct genre", () => {
    const selectedGenre = "HORROR";
    cy.visit("/", {
      onBeforeLoad(win) {
        cy.spy(win.console, "log").as("consoleLog");
        cy.spy(win.console, "error").as("consoleError");
      },
    });
    cy.contains("button", selectedGenre).should("exist");

    cy.contains("button", selectedGenre).click();

    //this will not work with css module
    //cy.contains('button', selectedGenre).should('have.class', 'selected');

    cy.get("@consoleLog").should("be.calledWith", selectedGenre);
  });
});
