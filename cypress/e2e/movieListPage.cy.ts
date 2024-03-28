describe("MovieListPage", () => {
  // beforeEach(() => {
  //   cy.visit("http://localhost:3000/");
  // });

  it("Navigating to the page displays a search form and a list of movies.", () => {
    cy.visit("/");
    cy.get('[data-cy="movieTile"]').should("have.length.greaterThan", 0);
  });

  it("Entering a search query and submitting the search form.", () => {
    cy.visit("/");
    cy.get('input[type="text"]').type("Star Wars");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "?query=Star+Wars");
    cy.get('[data-cy="movieTile"]').should("have.length.greaterThan", 0);
  });

  it("Navigating to /?query=abc displays a search form with entered text abc and a movie list relevant to the search query.", () => {
    cy.visit("/?query=abc");
    cy.get('input[type="text"]').should("have.value", "abc");
    cy.get('[data-cy="movieTile"]').should("not.exist");
  });

  it("Navigating to /?query=day displays a search form with entered text abc and a movie list relevant to the search query.", () => {
    cy.visit("/?query=day");
    cy.get('input[type="text"]').should("have.value", "day");
    cy.get('[data-cy="movieTile"]').should("have.length.greaterThan", 0);
  });

  it("Selecting a genre updates the URL with genre search parameter containing the selected genre. The movie list is refreshed to display movies of the selected genre.", () => {
    cy.visit("/");
    cy.contains("button", "COMEDY").click();
    cy.url().should("include", "genre=COMEDY");
    cy.get('[data-cy="movieTile"]').should("have.length.greaterThan", 0);
  });

  it("Navigating to /?genre=comedy displays Comedy genre as selected and movies of comedy genre.", () => {
    cy.visit("/?genre=comedy");
    cy.get('[data-cy="comedy"]')
      .invoke("attr", "class")
      .should("match", /GenreSelect_selected__/);
    cy.get('[data-cy="movieTile"]').should("have.length.greaterThan", 0);
  });

  it('Selecting sorting by title updates the URL with "sortBy" search parameter with the respective value. The movie list is refreshed to display movies sorted by title.', () => {
    cy.visit("/");
    cy.get('select[name="sort"]').select("Title");
    cy.url().should("include", "sortBy=title");
    cy.get('[data-cy="movieTile"]').should("have.length.greaterThan", 0);
  });

  it('Navigating to "/?sortBy=title" displays the list of movies sorted by title.', () => {
    cy.visit("/?sortBy=title");
    cy.get('select[name="sort"]').should("have.value", "title");
    cy.get('[data-cy="movieTile"]').should("have.length.greaterThan", 0);
  });

  it('Navigating to "/?query=abc&genre=comedy&sortBy=title" displays the search form with entered value "abc", sort select has "Title" value and the movie list displays movies relevant to these search params.', () => {
    cy.visit("/?query=abc&genre=comedy&sortBy=title");

    cy.get('input[type="text"]').should("have.value", "abc");
    cy.get('[data-cy="comedy"]')
      .invoke("attr", "class")
      .should("match", /GenreSelect_selected__/);
    cy.get('select[name="sort"]').should("have.value", "title");

    cy.get('[data-cy="movieTile"]').should("not.exist");
  });

  it('Navigating to "/?query=day&genre=comedy&sortBy=title" displays the search form with entered value "abc", sort select has "Title" value and the movie list displays movies relevant to these search params.', () => {
    cy.visit("/?query=day&genre=comedy&sortBy=title");

    cy.get('input[type="text"]').should("have.value", "day");
    cy.get('[data-cy="comedy"]')
      .invoke("attr", "class")
      .should("match", /GenreSelect_selected__/);
    cy.get('select[name="sort"]').should("have.value", "title");
    cy.get('[data-cy="movieTile"]').should("have.length.greaterThan", 0);
  });

  it('Clicking on a movie from the list changes URL pathname to "/:movieId"', () => {
    cy.visit("/");
    cy.get('[data-cy="movieTile"]').first().click();
    cy.url().should("match", /\/\d+$/);
    cy.get('[data-cy="movieDetailsWrapper"]').should("be.visible");
  });

  it('Clicking on a movie from the list changes URL pathname to "/:movieId", where :movieId is the ID of the selected movie. If the URL contained query parameters (query, sortBy, genre), they are preserved after navigating. The movie list stays the same.', () => {
    cy.visit("/?query=day&genre=comedy&sortBy=title");
    cy.get('[data-cy="movieTile"]').first().click();
    cy.url().should("match", /\/\d+\?query=day&genre=comedy&sortBy=title$/);
    cy.get('[data-cy="movieDetailsWrapper"]').should("be.visible");
  });

  it('Navigating to "/:movieId" where :movieId is a random valid movie ID, the page displays movie details on top and a list of movies on the bottom of the page.', () => {
    cy.visit("/962");
    cy.get('[data-cy="movieDetailsWrapper"]').should("be.visible");
    cy.get('[data-cy="movieTile"]').should("have.length.greaterThan", 0);
  });
});
