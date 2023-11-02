/// <reference types="cypress" />

describe("password-generator", () => {
  beforeEach(() => {
    cy.visit("https://password-generator-free-23.netlify.app/");
  });

  it("field should be empty", () => {
    cy.get(".generated-pw").should("have.value", "");
  });

  it("generate a password", () => {
    cy.get(".generate-pw").click();
  });

  it("should copy generated pw to clipboard", () => {
    cy.get(".copy").click();
  });
});
