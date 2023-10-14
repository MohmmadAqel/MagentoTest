/// <reference types = "cypress" />
/////////////////////////////////////////////////////////////////////////////////////////
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
/////////////////////////////////////////////////////////////////////////////////////////
Cypress.Commands.add("add_item",()=>{
  let RandomItemToSelect = Math.floor(Math.random() * 4)
  cy.get(".products-grid").find(".product-item-info").eq(RandomItemToSelect).click()
  let RandomSizeToSelect = Math.floor(Math.random() * 3)
  //let RandomColorToSelect = Math.floor(Math.random() * 2)
    cy.get(".swatch-attribute-options").find(".swatch-option").eq(RandomSizeToSelect).click()
    cy.get(".swatch-attribute.color > .swatch-attribute-options").find(".swatch-option").eq(0).click()
    cy.get('.stock > span').invoke("text").then((TheText) => {
      if (TheText == 'In stock') {
        cy.get('#product-addtocart-button').click()
      } else {
        alert("sorry you can't add this item")
      }
    })
})
/////////////////////////////////////////////////////////////////////////////////////////
describe('add random item certain category', () => {
  it('add random item from women category', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('#ui-id-4 > :nth-child(2)').click()
    cy.add_item()
  })
  /////////////////////////////////////////////////////////////////////////////////////////
  it('add random item from men category', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('#ui-id-5 > :nth-child(2)').click()
    cy.add_item()
  })
  ////////////////////////////////////////////////////////////////////////////////////////
  it('add random item from gear category', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('#ui-id-6 > :nth-child(2)').click()
    let RandomItemToSelect = Math.floor(Math.random() * 4)
    cy.get(".products-grid").find(".product-item-info").eq(RandomItemToSelect).click()
    cy.get('#product-addtocart-button').click()
    cy.get('.stock > span').invoke("text").then((TheText) => {
      if (TheText == 'In stock') {
        cy.get('#product-addtocart-button').click()
      } else {
        alert("sorry you can't add this item")
      }
    })
  })
})
////////////////////////////////////////////////////////////////////////////////////////////////