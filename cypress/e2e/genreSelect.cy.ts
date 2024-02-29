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

    cy.contains("button", selectedGenre)
      .invoke("attr", "class")
      .should("match", /GenreSelect_selected__/);

    //this actually always returns true even if it is not selected
    //cy.contains("button", selectedGenre).should("have.css", "border-bottom");

    cy.get("@consoleLog").should("be.calledWith", selectedGenre);

    cy.get('[data-cy="comedy"]').click();
    cy.get('[data-cy="comedy"]')
      .invoke("attr", "class")
      .should("match", /GenreSelect_selected__/);

    cy.get('[data-cy="comedy"]').should("have.css", "border-bottom");
  });
});
