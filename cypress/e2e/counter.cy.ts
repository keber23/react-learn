const initialValues = [0, 1, 2, 3, 4, 5];

initialValues.forEach((initialValue) => {
  describe(`Counter with initial value ${initialValue}`, () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");

      for (let i = 0; i < initialValue; i++) {
        cy.get("button").contains("+").click();
      }
    });

    it("increments and decrements the counter correctly", () => {
      cy.get("div").contains(`Value: ${initialValue}`).should("exist");

      cy.contains("button", "+").click();
      cy.get("div")
        .contains(`Value: ${initialValue + 1}`)
        .should("exist");

      cy.contains("button", "+").click();
      cy.get("div")
        .contains(`Value: ${initialValue + 2}`)
        .should("exist");

      cy.contains("button", "-").click();
      cy.get("div")
        .contains(`Value: ${initialValue + 1}`)
        .should("exist");

      cy.contains("button", "-").click();
      cy.get("div").contains(`Value: ${initialValue}`).should("exist");

      cy.get("body").click(0, 0);
    });
  });
});
