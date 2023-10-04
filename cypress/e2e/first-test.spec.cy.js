describe("Plant Kingdom App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display the app logo", () => {
    cy.get(".logo a").should("have.attr", "href", "/");
    cy.get(".logo a").should("contain.text", "Plant Kingdom");
  });

  it("should display the best selling plants section", () => {
    cy.get(".products-heading h2").should("exist").and("contain.text", "Best Selling Plants");
    cy.get(".products-heading p").should("exist").and("contain.text", "Indoor plants");
  });

  it("should display product cards with images and prices", () => {
    cy.get(".product-card").should("have.length.above", 0);
    cy.get(".product-card").each((productCard) => {
      cy.wrap(productCard).find("img.product-image").should("exist").and("have.attr", "src");
      cy.wrap(productCard).find("p.product-name").should("exist").and("not.be.empty");
      cy.wrap(productCard).find("p.product-price").should("exist").and("not.be.empty");
    });
  });

  it("should display the hero banner with a 'Shop Now' button", () => {
    cy.get(".hero-banner-container").should("exist");
    cy.get(".hero-banner-container button").should("exist").and("contain.text", "Shop Now");
  });

  it("should navigate to the product details page when a product is clicked", () => {
    cy.get(".product-card:first").click();
    cy.url().should("include", "/product/");
  });

  it("should display the footer with copyright information", () => {
    cy.get("footer").should("exist");
    cy.get("footer p").should("exist").and("contain.text", "2022 Plant Kingdom All rights reserved");
  });
});
