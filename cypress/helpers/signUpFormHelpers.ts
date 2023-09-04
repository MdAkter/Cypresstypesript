import { homePage } from "../Page/homePage";
import { signUpFormPage } from "../Page/signUpFormPage";
import * as signUpForm from "../fixtures/Data/signUpForm.json";
import { elementChecks } from "../core/elementChecks";
import { elementActions } from "../core/elementActions";

class SignUpFormHelpers {
  // Verify HTML elements on the sign up page
  public verfyHTMLComponentOnSignUpForm() {
    elementActions.clickElement(homePage.signUp);
    elementActions.wait;
    elementChecks.checkElementDisplayed(signUpFormPage.fullName);
    elementChecks.checkElementDisplayed(signUpFormPage.email);
    elementChecks.checkElementDisplayed(signUpFormPage.telephone);
    elementChecks.checkElementDisplayed(signUpFormPage.fax);
    elementChecks.checkElementDisplayed(signUpFormPage.fullName);
  }

  //Verify Gender HTML component selectable
  public verfyGenderSelectabkeOnSignUpForm(genders?: string[]) {
    elementActions.clickElement(homePage.signUp);
    elementActions.wait;
    genders.forEach((genderName) => {
      elementChecks.checkElementDisplayed(
        signUpFormPage.genderListOnDropdown(genderName)
      );
    });
  }

  //Verify user is able to submit signUpForm successfully
  public verfyUserSubmitSignUpForm() {
    elementActions.clickElement(homePage.signUp);
    //elementActions.wait;
    elementActions.clearAndType(signUpFormPage.fullName, signUpForm.FullName);
    elementActions.clearAndType(signUpFormPage.email, signUpForm.email);
    elementActions.clearAndType(signUpFormPage.telephone, signUpForm.phone);
    elementActions.selectOptionByValue(
      signUpFormPage.genderCombobox,
      signUpForm.genders[0]
    );
    elementActions.clickElement(signUpFormPage.radioButtonOneYearOfExperience);
    elementActions.clickElement(signUpFormPage.manualTestingCheckbox);
    elementActions.clickElement(signUpFormPage.seleniumAutomatiomTool);
    elementActions.clickElement(signUpFormPage.submitButton);
  }

  //Verify user is able to submit signUpForm successfully
  public verfyUserSubmitSignUpFormSecondTime() {
    elementActions.clickElement(homePage.signUp);
    elementActions.wait;
    elementActions.clearAndType(signUpFormPage.fullName, signUpForm.FullName);
    elementActions.wait;
    elementActions.clearAndType(signUpFormPage.email, signUpForm.email);
    elementActions.wait;
    elementActions.clearAndType(signUpFormPage.telephone, signUpForm.phone);
    elementActions.wait;
    elementActions.wait;
    elementActions.selectOptionByValue(
      signUpFormPage.genderCombobox,
      signUpForm.genders[0]
    );
    elementActions.clickElement(signUpFormPage.radioButtonOneYearOfExperience);
    elementActions.wait;
    elementActions.clickElement(signUpFormPage.manualTestingCheckbox);
    elementActions.wait;
    elementActions.clickElement(signUpFormPage.seleniumAutomatiomTool);
    elementActions.wait;
    elementActions.clickElement(signUpFormPage.submitButton);
  }
}

export const signUpFormHelpers = new SignUpFormHelpers();
