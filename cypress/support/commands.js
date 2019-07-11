let loginTxt = ".BaseNavBtnGroup-sc-11trx12-0 > :nth-child(2) > a";
let nextBtn = ".BaseButton-sc-1h97fh1-0";
let loginBtn = ".BaseButton-sc-1h97fh1-0";

function loginPage() {
    cy.visit("/");
    cy.get(loginTxt).click();
    // cy.get(noticePopupBtn).click();
  }

  function services() {
    cy.visit("/");
    cy.get(loginTxt).click();
    // cy.get(noticePopupBtn).click();
    cy.get("input[name=mobileNumber]").type("134916657");
    cy.get(nextBtn).click();
    cy.get("input[name=password]").type("Admin12345");
    cy.get(loginBtn).click();
    // cy.getByText(/services/i).click();
  }

  export {
    loginPage,
    services

  };