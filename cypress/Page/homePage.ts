


 class HomePage{

    get home(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('a > .btn');
    }

    get signUp(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(':nth-child(1) > b > a');
    }
    get webTable(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#regform > div > ul > li:nth-child(2) > b > a');
    }
    get listItem(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#regform > div > ul > li:nth-child(3) > b > a');
    }
    get iFrames(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#regform > div > ul > li:nth-child(4) > b > a');
    }

    get alerts(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#regform > div > ul > li:nth-child(5) > b > a');
    }

    get links(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#regform > div > ul > li:nth-child(6) > b > a');
    }

    get dragAndDrop(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#regform > div > ul > li:nth-child(7) > b > a');
    }

    get delay(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#regform > div > ul > li:nth-child(8) > b > a');
    }

    get shaowDOM(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#regform > div > ul > li:nth-child(9) > b > a');
    }

} 

 export const homePage = new HomePage();