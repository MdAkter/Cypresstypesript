import { homePage } from "../../Page/homePage";
import {signUpFormPage} from "../../Page/signUpFormPage";



describe("SignUp related scenarios", ()=>{

    beforeEach(()=>{

        cy.visit("https://qavbox.github.io/demo/");

    })

    it("Verify SignUpForm", ()=>{

        homePage.signUp.click();
        signUpFormPage.fullName.type("Nasim");
        signUpFormPage.email.type("nucden@gmail.com");
        signUpFormPage.telephone.type("7204293522");
        

    })
})