import React from "react";
import SearchForm from "../Component/SearchForm";

describe("<SearchForm />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <SearchForm onSearch={() => {}} initialSearchText="test search" />
    );
    cy.get('input[type="text"]').should("have.value", "test search");
  });
});

describe("<SearchForm /> check event", () => {
  it("call onSearch", () => {
    let onSearchSpy = cy.spy().as("onSearch");
    let initialSearchText = "test search";
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <SearchForm
        onSearch={onSearchSpy}
        initialSearchText={initialSearchText}
      />
    );

    cy.get("form").submit();
    cy.get("@onSearch").should("have.been.calledOnce");
    cy.get("@onSearch").should("have.been.calledWith", initialSearchText);
  });
});
