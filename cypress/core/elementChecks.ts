
class ElementChecks{

    /**
     * Description : Verify if the element is displayed
     * @param selector
     * @param falseCase
     * @returns
     */
    public checkElementDisplayed(selector: Cypress.Chainable<JQuery<HTMLElement>>, falseCase?: boolean):Cypress.Chainable<JQuery<HTMLElement>>{
        if (falseCase)
            return selector.should('not.be.visible');
        
        return selector.should('be.visible');
    }

    /**
     * Description : Verify if the element exists on UI
     * @param selector
     * @param falseCase
     * @returns
     */
     public checkElementExist(selector: Cypress.Chainable<JQuery<HTMLElement>>, falseCase?: boolean):Cypress.Chainable<JQuery<HTMLElement>>{
        if (falseCase)
            return selector.should('not.exist');
        
        return selector.should('exist');
    }

    /**
     * Description : Verify if the checkbox is checked(toggled on/off)
     * @param selector
     * @param falseCase
     * @returns
     */
     public checkElementChecked(selector: Cypress.Chainable<JQuery<HTMLElement>>, falseCase?: boolean):Cypress.Chainable<JQuery<HTMLElement>>{
        if (falseCase)
            return selector.should('not.be.checked');
        
        return selector.should('be.checked');
    }

    /**
     * Description : Verify if the element on DOM is enabled
     * @param selector
     * @param falseCase
     * @returns
     */
     public checkElementEnabled(selector: Cypress.Chainable<JQuery<HTMLElement>>, falseCase?: boolean):Cypress.Chainable<JQuery<HTMLElement>>{
        if (falseCase)
            return selector.should('not.be.enabled');
        
        return selector.should('not.be.disabled');
    }

    /**
     * Description : Verify if the element text is equal to the passed text
     * @param selector
     * @param actualText
     * @param falseCase
     * @returns
     */
     public checkElementTextEquality(selector: Cypress.Chainable<JQuery<HTMLElement>>, actualText: string, falseCase?: boolean):Cypress.Chainable<JQuery<HTMLElement>>{
        if (falseCase)
            return selector.should('not.have.text', actualText);
        
        return selector.should('have.text', actualText);
    }

    /**
     * Description : Verify if the text is present in the element
     * @param selector
     * @param actualText
     * @param falseCase
     * @returns
     */
     public checkElementTextContains(selector: Cypress.Chainable<JQuery<HTMLElement>>, actualText: string, falseCase?: boolean):Cypress.Chainable<JQuery<HTMLElement>>{
        if (falseCase)
            return selector.should('not.contain.text', actualText);
        
        return selector.should('contain.text', actualText);
    }


}

export const elementChecks = new ElementChecks();