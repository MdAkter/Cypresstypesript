import { homePage } from "../../Page/homePage";
import { signUpFormPage } from "../../Page/signUpFormPage";
import * as signUpForm from "../../Fixtures/Data/signUpForm.json";
import { signUpFormHelpers } from "../../helpers/signUpFormHelpers";

describe("SignUp related scenarios", () => {
  beforeEach(() => {
    cy.visit("https://qavbox.github.io/demo/");
  });

  it("Verify HTML component on SignUpForm", () => {
    signUpFormHelpers.verfyHTMLComponentOnSignUpForm();
  });

  it("Verify Genders selectable on SignUpForm", () => {
    signUpFormHelpers.verfyGenderSelectabkeOnSignUpForm(signUpForm.genders);
  });

  it("Verify User is able to submit SignUpForm successfully", () => {
    signUpFormHelpers.verfyUserSubmitSignUpForm();
  });

  it("Verify User is able to submit SignUpForm successfully second time", () => {
    signUpFormHelpers.verfyUserSubmitSignUpFormSecondTime();
  });
});
