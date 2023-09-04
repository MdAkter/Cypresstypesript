
class SignUpFormPage{

    get fullName(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#username');
    }

    get email(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#email');
    }

    get telephone(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#tel');
    }

    get fax(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#fax');
    }

    get genderCombobox(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#container > div:nth-child(15) > select');
    }
    get radioButtonOneYearOfExperience(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#container > div:nth-child(17) > input[type=radio]:nth-child(2)');
    }
    get radioButtonTwoYearsOfExperience(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#container > div:nth-child(17) > input[type=radio]:nth-child(3)');
    }
    get radioButtonThreeYearsOfExperience(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#container > div:nth-child(17) > input[type=radio]:nth-child(4)');
    }
    get radioButtonFourYearsOfExperience(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#container > div:nth-child(17) > input[type=radio]:nth-child(5)');
    }
    get radioButtonFiveYearsOfexperience(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#container > div:nth-child(17) > input[type=radio]:nth-child(6)');
    }
    get radioButtonSixYearsOfexperience(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#container > div:nth-child(17) > input[type=radio]:nth-child(7)');
    }
    get radioButtonsevenYearsOfexperience(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#container > div:nth-child(17) > input[type=radio]:nth-child(8)');
    }
    get radioButtonEightYearsOfexperience(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#container > div:nth-child(17) > input[type=radio]:nth-child(9)');
    }

    get manualTestingCheckbox(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('[value="manualtesting"]');
    }
    get automationTestingCheckbox(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('[value="automationtesting"]');
    }
    get testNgCheckbox(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('[value="testng"]');
    }
    get apiCheckbox(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('[value="apitesting"]');
    }
    get htmlCheckbox(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('[value="html"]');
    }
    get javaCheckbox(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('[value="java"]');
    }
    get csharpCheckbox(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('[value="c#"]');
    }
    get seleniumAutomatiomTool(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#tools > option:nth-child(1)');
    }
    get postmanAutomationTool(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#tools > option:nth-child(2)');
    }
    get testStackWhiteAutomatiomTool(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#tools > option:nth-child(3)');
    }
    get jmeterAutomatiomTool(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#tools > option:nth-child(4)');
    }
    get cypressAutomatiomTool(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#tools > option:nth-child(5)');
    }
    get codedUIAutomatiomTool(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#tools > option:nth-child(6)');
    }
    get submitButton(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#submit');
    }
    get allGendersfromList(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#container > div:nth-child(15) > select');
    }

    public genderListOnDropdown(genderName:string): Cypress.Chainable<JQuery<HTMLElement>>{
        return this.allGendersfromList.select(`${genderName}`);
    }


}

export const  signUpFormPage = new SignUpFormPage();