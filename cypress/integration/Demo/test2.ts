import { homePage } from "../../Page/homePage";
import {signUpFormPage} from "../../Page/signUpFormPage";
import * as signUpForm from '../../Fixtures/Data/signUpForm.json';



describe("SignUp related scenarios", ()=>{

    beforeEach(()=>{

        cy.visit("https://qavbox.github.io/demo/");

    })

    it("Verify SignUpForm", ()=>{

        homePage.signUp.click();
        signUpFormPage.fullName.type(signUpForm.FullName);
        signUpFormPage.email.type(signUpForm.email);
        signUpFormPage.telephone.type(signUpForm.phone);   

    })
})