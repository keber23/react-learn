describe("Counter", () => {
  it("increments and decrements the counter correctly", () => {
    cy.visit("http://localhost:3000/");

    cy.get("div").contains("Value: 0").should("exist");

    cy.contains("button", "+").click();
    cy.get("div").contains("Value: 1").should("exist");

    cy.contains("button", "+").click();
    cy.get("div").contains("Value: 2").should("exist");

    cy.contains("button", "-").click();
    cy.get("div").contains("Value: 1").should("exist");

    cy.contains("button", "-").click();
    cy.get("div").contains("Value: 0").should("exist");

    cy.get("body").click(0, 0);
  });
});
