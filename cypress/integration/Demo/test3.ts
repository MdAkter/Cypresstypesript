import { homePage } from "../../Page/homePage";
import {signUpFormPage} from "../../Page/signUpFormPage";
import * as signUpForm from '../../Fixtures/Data/signUpForm.json';
import {signUpFormHelpers} from '../../helpers/signUpFormHelpers';



describe("SignUp related scenarios", ()=>{

    beforeEach(()=>{

        cy.visit("https://qavbox.github.io/demo/");

    })

    it("Verify SignUpForm", ()=>{
        signUpFormHelpers.verfySignUpForm();       
    })
})