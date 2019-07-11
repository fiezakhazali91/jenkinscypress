import { services } from "../../support/commands";

let phoneInternetBtn = ":nth-child(4) > span";
let umobileLogo =
  ":nth-child(1) > .ServiceBox-sc-1qi3i32-0 > :nth-child(2) > .ItemLink-sc-1i3mcf5-0";
let payNowBtn = "form > .BaseButton-sc-1h97fh1-0";
let payNowWalletBtn = ":nth-child(3) > .sc-hmzhuo > .BaseButton-sc-1h97fh1-0";
let closeBtn = ".modal-footer > .BaseButton-sc-1h97fh1-0";
let doneBtn = ".BodyContent-sc-179ypd4-0 > .BaseButton-sc-1h97fh1-0";
let saveBtn = ".col-lg-3 > .BaseButton-sc-1h97fh1-0";
let selectfavouriteBtn = ".ButtonLink-sc-1rl2136-0";
let menuTab = ".BaseMenuButton-awrvio-0 > .btn";
let settingBtn = ".SideNavbar-twsx51-0 > #menu-items > :nth-child(6) > #basic-nav-dropdown";
let manageFavBtn = ".open > .dropdown-menu > li > .nav-link";
let phoneInternetdropdown = ":nth-child(3) > .panel-title > .collapsed";

let Maxislogo = ":nth-child(1) > .ServiceBox-sc-1qi3i32-0 > :nth-child(5) > .ItemLink-sc-1i3mcf5-0";

let prepaid30 = ":nth-child(3) > .TopupCheckBox-sc-1hh5w35-0";
let prepaidMaxis10 = ":nth-child(3) > .TopupCheckBox-sc-1hh5w35-0";
let mobileNumber = "182145284";
let mobileNumber1 = "182145280";
let mobileNumber2 = "182145296";
let invalidmobileNo = "11878122";
let MaxismobileNo = "174496657";
let email = "aniss.zainal@gmail.com";
let gopin = "123456";

describe("Services", () => {
  // it("Prepaid Top Up - Blank Field",() => {
  //   services();
  //   cy.get(phoneInternetBtn).click();
  //   cy.get(umobileLogo).click();
  //   cy.get(prepaid30).click();
  //   cy.get(payNowBtn).click();
  //   cy.contains("This field is required").should("exist");
  //   cy.wait(2000);
  // });

  // it("Prepaid Top Up - Invalid Mobile Number", () => {
  //   cy.get("input[name=mobileNo]")
  //     .clear()
  //     .type(invalidmobileNo);
  //   cy.get(payNowBtn).click();
  //   cy.contains("Invalid mobile number").should("exist");
  //   cy.wait(2000);
  // });

  // it("Prepaid Top Up - Successful - Add as Favourite",() => {
  //   cy.get("input[name=mobileNo]")
  //     .clear()
  //     .type(mobileNumber);
  //   cy.get(payNowBtn).click();
  //   cy.wait(2000);
  //   cy.get(payNowWalletBtn).click();
  //   cy.get("input[name = gopin]").type(gopin);
  //   cy.get(closeBtn).click();
  //   cy.wait(2000);
  //   cy.get("input[name = fav]").check();
  //   cy.get("input[name = description]").type("Umobile Prepaid Topup");
  //   cy.get(saveBtn).click();
  //   cy.get(doneBtn).click();
  // });

  // it("Prepaid Top Up - Select existing Favourite Listing", () => {
  //   // services();
  //   cy.getByText(/services/i).click();
  //   cy.get(phoneInternetBtn).click();
  //   cy.get(umobileLogo).click();
  //   cy.get(prepaid30).click();
  //   cy.getByText(/Select From Favourite/i).click();
  //   cy.get(selectfavouriteBtn).click();
  //   cy.get(payNowBtn).click();
  //   cy.wait(2000);
  //   cy.get(payNowWalletBtn).click();
  //   cy.get("input[name = gopin]").type(gopin);
  //   cy.get(closeBtn).click();
  //   cy.get(doneBtn).click();
  // });

  // it("Prepaid Top Up - Leave Description Blank", () => {
  //   // services();
  //   cy.getByText(/services/i).click();
  //   cy.get(phoneInternetBtn).click();
  //   cy.get(umobileLogo).click();
  //   cy.get(prepaid30).click();
  //   cy.get("input[name=mobileNo]").type(mobileNumber1);
  //   cy.get(payNowBtn).click();
  //   cy.wait(2000);
  //   cy.get(payNowWalletBtn).click();
  //   cy.get("input[name = gopin]").type(gopin);
  //   cy.get(closeBtn).click();
  //   cy.wait(2000);
  //   cy.get("input[name = fav]").check();
  //   cy.get(saveBtn).click();
  //   cy.contains("This field is required").should("exist");
  //   cy.get(menuTab).click();
  //   cy.get(settingBtn).click();
  //   cy.get(manageFavBtn).click();
  //   cy.get(phoneInternetdropdown).click();
  // });

  // it("Prepaid Top Up - Leave Description Blank, then fill in", () => {
  //   // services();
  //   cy.getByText(/services/i).click();
  //   cy.get(phoneInternetBtn).click();
  //   cy.get(umobileLogo).click();
  //   cy.get(prepaid30).click();
  //   cy.get("input[name=mobileNo]").type(mobileNumber1);
  //   cy.get(payNowBtn).click();
  //   cy.wait(2000);
  //   cy.get(payNowWalletBtn).click();
  //   cy.get("input[name = gopin]").type(gopin);
  //   cy.get(closeBtn).click();
  //   cy.wait(2000);
  //   cy.get("input[name = fav]").check();
  //   cy.get(saveBtn).click();
  //   cy.contains("This field is required").should("exist");
  //   cy.get("input[name = description]").type("Umobile Prepaid Topup 1");
  //   cy.get(saveBtn).click();
  //   cy.get(doneBtn).click();
  // });

  // it("Prepaid Top Up - Successful - Add as Favourite with duplicate names",() => {
  //   // services();
  //   cy.getByText(/services/i).click();
  //   cy.get(phoneInternetBtn).click();
  //   cy.get(umobileLogo).click();
  //   cy.get(prepaid30).click();
  //   cy.get("input[name=mobileNo]").type(mobileNumber2);
  //   cy.get(payNowBtn).click();
  //   cy.wait(2000);
  //   cy.get(payNowWalletBtn).click();
  //   cy.get("input[name = gopin]").type(gopin);
  //   cy.get(closeBtn).click();
  //   cy.wait(2000);
  //   cy.get("input[name = fav]").check();
  //   cy.get("input[name = description]").type("Umobile Prepaid Topup");
  //   cy.get(saveBtn).click();
  //   cy.get(doneBtn).click();
  // });

  it("Prepaid Top Up - Non UM - Successful", () => {
    services();
    cy.get(phoneInternetBtn).click();
    cy.get(Maxislogo).click();
    cy.get(prepaidMaxis10).click();
    cy.get("input[name = mobileNo").type(MaxismobileNo);
    cy.get(payNowBtn).click();
    cy.wait(2000);
    cy.get(payNowWalletBtn).click();
    cy.get("input[name = gopin]").type(gopin);
    cy.get(closeBtn).click();
    cy.wait(2000);
    cy.get("input[name = fav]").check();
    cy.get("input[name = description]").type("Maxis prepaid topup");
    cy.get(saveBtn).click();
    cy.get(doneBtn).click();
  });

 
});
