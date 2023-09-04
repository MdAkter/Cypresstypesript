

import {homePage} from '../Page/homePage';
import {signUpFormPage} from '../Page/signUpFormPage'
import * as signUpForm from '../fixtures/Data/signUpForm.json';
import { elementChecks } from '../core/elementChecks';

class HomePageHelpers{


    // Verify HTML elements on Homepage
public verifyHomePage(){

elementChecks.checkElementDisplayed(homePage.home);
elementChecks.checkElementDisplayed(homePage.signUp);
elementChecks.checkElementDisplayed(homePage.webTable);
elementChecks.checkElementDisplayed(homePage.listItem);
elementChecks.checkElementDisplayed(homePage.iFrames);
elementChecks.checkElementDisplayed(homePage.alerts);
elementChecks.checkElementDisplayed(homePage.links);
elementChecks.checkElementDisplayed(homePage.dragAndDrop);
elementChecks.checkElementDisplayed(homePage.delay);
elementChecks.checkElementDisplayed(homePage.shaowDOM);
}
}

export const homePageHelpers = new HomePageHelpers();