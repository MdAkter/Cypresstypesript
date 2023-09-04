

class ElementActions{

    /**
     * Description : Elements action for sendkeys
     * @param selector
     * @param inputText
     * @return
     */

    public sendKeys(selector: Cypress.Chainable<JQuery<HTMLElement>>, inputText: string): Cypress.Chainable<JQuery<HTMLElement>>{
        return selector.type(inputText);
    }

    /**
     * Description : Element action for clearField
     * @param selector
     * @return
     */
     public clearField(selector: Cypress.Chainable<JQuery<HTMLElement>>): Cypress.Chainable<JQuery<HTMLElement>>{
        return selector.clear();
        }
    /**
     * Description : Element action for clearField and sendKeys
     * @param selector
     * @return
     */
     public clearAndType(selector: Cypress.Chainable<JQuery<HTMLElement>>, inputText: string): Cypress.Chainable<JQuery<HTMLElement>>{
        selector.clear();
        return selector.type(inputText);
       }

    /**
     * Description : Element action for clickElement
     * @param selector
     * @return
     */
     public clickElement(selector: Cypress.Chainable<JQuery<HTMLElement>>): Cypress.Chainable<JQuery<HTMLElement>>{
        return selector.click();
        }

    /**
     * Description : Element action for forceClickElement
     * @param selector
     * @return
     */
     public forcClickElement(selector: Cypress.Chainable<JQuery<HTMLElement>>): Cypress.Chainable<JQuery<HTMLElement>>{
        return selector.click({force: true});
        }

    
    /**
     * Description : Element action for doubleClickElement
     * @param selector
     * @return
     */
     public doubleClickElement(selector: Cypress.Chainable<JQuery<HTMLElement>>): Cypress.Chainable<JQuery<HTMLElement>>{
        return selector.dblclick();
        }

    /**
     * Description : Element action for getElementText
     * @param selector
     * @return
     */
     public getElementText(selector: Cypress.Chainable<JQuery<HTMLElement>>): Cypress.Chainable<JQuery<HTMLElement>>{
        return selector.invoke('text');
        }

    /**
     * Description : Element action for getElementValue
     * @param selector
     * @return
     */
     public getElementValue(selector: Cypress.Chainable<JQuery<HTMLElement>>): Cypress.Chainable<JQuery<HTMLElement>>{
        return selector.invoke('val');
        }

    /**
     * Description : Element action for selectDropdownOptionValue
     * @param dropdownSelector
     * @param selectValue
     * @return
     */
     public selectOptionByValue(dropDownSelector: Cypress.Chainable<JQuery<HTMLElement>>, selectValue: string): Cypress.Chainable<JQuery<HTMLElement>>{
        return dropDownSelector.select(selectValue);
        }

        /**
         * Description : Element action for wait
         */
        public wait():void {
            cy.wait(2000);
        }

    /**
     * Description : Element action for mouseHover
     * @param selector
     * @return
     */
     public mouseHover(selector: Cypress.Chainable<JQuery<HTMLElement>>): Cypress.Chainable<JQuery<HTMLElement>>{
        return selector.trigger('mouseover');
        }

    /**
     * Description : Element action for getElementTextAlias
     * @param selector
     * @param name
     * @return
     */
     public getElementTextAlias(selector: Cypress.Chainable<JQuery<HTMLElement>>, name:string): Cypress.Chainable<JQuery<HTMLElement>>{
        return this.getElementText(selector).as(name);
        }

        /**
     * Description : Element action for getElementValueAlias
     * @param selector
     * @param name
     * @return
     */
     public getElementValueAlias(selector: Cypress.Chainable<JQuery<HTMLElement>>, name:string): Cypress.Chainable<string | number | string[]>{
        return selector.invoke('val').as(name);
        }

        /**
     * Description : Element action for getListElementTextAlias
     * @param selector
     * @param name
     */
     public getListElementTextAlias(selector: Cypress.Chainable<JQuery<HTMLElement>>, name: string): any{
         const aliasNames = [];
         selector.each(($el)=>{
             cy.wrap($el).parent()
             .invoke('text')
             .then(text =>{
                 aliasNames.push(text.trim());
             });
         }).then(()=>{
             const aliases: string = aliasNames.join(',');
             return aliases;
         }).as(name);
        
        }

        /**
         * Description : Element action for getAliasCreatedFor
         * @param name
         * @returns
         */
        public getAliasCreatedFor(name: string): Cypress.Chainable<JQuery<HTMLElement>>{
            return cy.get(`@${name}`);
        }

        /**
         * Description: Element action for selectCheckbox
         * @param selector
         * @param flag
         * @returns
         */
        public selectCheckbox (selector:Cypress.Chainable<JQuery<HTMLElement>>, flag?:boolean): Cypress.Chainable<JQuery<HTMLElement>>{
               return flag ? selector.check() : selector.uncheck();
        }

        /**
         * Description: Element action for forceSelectCheckbox
         * @param selector
         * @param flag
         * @returns
         */
         public forceSelectCheckbox (selector:Cypress.Chainable<JQuery<HTMLElement>>, flag?:boolean): Cypress.Chainable<JQuery<HTMLElement>>{
            return flag ? selector.check({force: true}) : selector.uncheck({force: true});
     }

     /**
      * Description : Element action for getElementCount
      * 
      */
     public getElementCount(selector: Cypress.Chainable<JQuery<HTMLElement>>){
         return selector.its('length');
     }

     /**
      * Description : Element action for uploadFile
      * @param selector
      * @param filePath
      * @return
      */
     public uploadFile(selector: Cypress.Chainable<JQuery<HTMLElement>>, path: string){
         return selector.attachFile({filePath: path});
     }




}

export const elementActions = new ElementActions();