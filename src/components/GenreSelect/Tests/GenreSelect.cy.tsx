import GenreSelect, { genres } from "../Component/GenreSelect";
import { Genre } from "../../Types/genre";

genres.forEach((genre) => {
  describe("selected genre is " + genre, () => {
    it("renders", () => {
      // see: https://on.cypress.io/mounting-react
      cy.mount(
        <GenreSelect
          genres={genres}
          selectedGenre={genre}
          onSelect={() => {}}
        />
      );

      cy.get(`[data-cy="${genre.toLowerCase()}"]`)
        .invoke("attr", "class")
        .should("match", /GenreSelect_selected__/);
    });
  });
});

describe("<GenreSelect /> check event", () => {
  it("call onSelect", () => {
    let selectedGenre: Genre = "CRIME";

    let selectedGenreSpy = cy.spy().as("selectedGenre");

    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={selectedGenreSpy}
      />
    );

    cy.get('[data-cy="horror"]').click();
    cy.get("@selectedGenre").should("have.been.calledOnce");
    cy.get("@selectedGenre").should("have.been.calledWith", "HORROR");
  });
});
