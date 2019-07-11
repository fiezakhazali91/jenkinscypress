import { services } from "../../support/commands";

let utilitiesTab = ".ServicesTab-sc-1cn82ga-0 > :nth-child(2) > span";
let tvAstroLogo =
  ":nth-child(3) > .ServiceBox-sc-1qi3i32-0 > .ItemWapper-h58631-0 > .ItemLink-sc-1i3mcf5-0";
let payNowBtn = "form > .BaseButton-sc-1h97fh1-0";
let closeBtn = ".modal-footer > .BaseButton-sc-1h97fh1-0";
let paynowWalletBtn = ":nth-child(3) > .sc-frDJqD > .BaseButton-sc-1h97fh1-0";
let doneBtn = ".BodyContent-sc-179ypd4-0 > .BaseButton-sc-1h97fh1-0";
let saveBtn = ".col-lg-3 > .BaseButton-sc-1h97fh1-0";
let menuTab = ".BaseMenuButton-awrvio-0 > .btn";
let settingBtn = ".SideNavbar-twsx51-0 > #menu-items > :nth-child(6) > #basic-nav-dropdown";
let manageFavBtn = ".open > .dropdown-menu > li > .nav-link";

let wrongaccountNo = "1509101563544";
let correctaccountNo = "0895386999";
let amount = "10";
let gopin = "123456";

describe("Services", () => {
  it("Utilities - TV - Blank Field", () => {
    services();
    cy.get(utilitiesTab).click();
    cy.wait(1000);
    cy.get(tvAstroLogo).click();
    cy.get(payNowBtn).click();
    cy.contains("This field is required").should("exist");
  });

  it("Utilities - TV - Invalid account length", () => {
    cy.wait(1000);
    cy.get("input[name=accNo]").type(wrongaccountNo);
    cy.get("input[name=amount]").type(amount);
    cy.get(payNowBtn).click();
    cy.contains("Invalid astroaccountid length").should("exist");
    cy.wait(1000);
    cy.get(closeBtn).click();
  })

  it("Utilities - TV - Add as favourite", () => {
    cy.wait(1000);
    cy.get("input[name=accNo]")
      .clear()
      .type(correctaccountNo);
    cy.get("input[name=amount]")
      .clear()
      .type(amount);
    cy.get(payNowBtn).click();
    cy.wait(2000);
    cy.get(paynowWalletBtn).click();
    cy.get("input[name = gopin]").type(gopin);
    cy.get(closeBtn).click();
    cy.wait(3000);
    cy.get("input[name = fav]").check();
    cy.get("input[name = description]").type("Astro bill");
    cy.get(saveBtn).click();
    cy.get(doneBtn).click();
    cy.get(menuTab).click();
    cy.get(settingBtn).click();
    cy.get(manageFavBtn).click();
  });
});
