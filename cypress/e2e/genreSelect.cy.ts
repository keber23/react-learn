describe("GenreSelect", () => {
  it("selects a genre and triggers callback with correct genre", () => {
    const selectedGenre = "HORROR";
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {
        cy.stub(win.console, "log").as("consoleLog");
        cy.stub(win.console, "error").as("consoleError");
      },
    });

    cy.contains("button", selectedGenre).click();

    //this will not work with css module
    //cy.contains('button', selectedGenre).should('have.class', 'selected');

    cy.get("@consoleLog").should("be.calledWith", selectedGenre);
  });
});
