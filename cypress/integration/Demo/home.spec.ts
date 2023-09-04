import { homePage } from "../../Page/homePage";
import {signUpFormPage} from "../../Page/signUpFormPage";
import * as signUpForm from '../../Fixtures/Data/signUpForm.json';
import {signUpFormHelpers} from '../../helpers/signUpFormHelpers';
import { homePageHelpers } from "../../helpers/homePageHelpers";



describe("Home page related scenarios", ()=>{

    beforeEach(()=>{

        cy.visit("https://qavbox.github.io/demo/");

    })

    it.only("Verify HTML component on home page", ()=>{
        homePageHelpers.verifyHomePage();       
    })

})