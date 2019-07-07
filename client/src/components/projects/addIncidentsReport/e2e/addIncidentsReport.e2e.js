import Page from './page-model';
import constants from '../../../constants'

fixture`Using the Add incidents report form through the project dashboard`
  .page`${constants.Website}/projects/1/dashboard`;


test('The Add incidents report form is shown', async t => {
  const page = new Page();

  await t
    .click(page.showFormButton);

  // If the button is present, that means the form was shown correctly
  await t
    .click(page.submitButton);
});

test('Every field accepts valid values.', async t => {
  const page = new Page();

  await t
    .click(page.showFormButton);
  await t
    .typeText(page.reportDateInput, '2017-08-12')
    .expect(page.reportDateInput.value).eql('2017-08-12');
  await t
    .click(page.totalIncidentsInput)
    .pressKey('ctrl+a delete')
    .typeText(page.totalIncidentsInput, '10', {replace: true})
    .expect(page.totalIncidentsInput.value).eql('10');
  await t
    .typeText(page.rationaleInput, ' 10 incidents in the database ')
    .expect(page.rationaleInput.value).eql(' 10 incidents in the database ');

   await t
    .click(page.submitButton)

  // After submission, the form should disappear,
  // and if the API is available, the Add release Snap button is shown.
  // if not, a critical error page will be shown, and this test will fail`

  await t
    .click(page.showFormButton);
});

test('Each button works as intended (cancel, close, submit)', async t => {
  const page = new Page();

  await t
    .click(page.showFormButton)
    .click(page.cancelButton)
  await t
    .click(page.showFormButton)
    .click(page.closeButton);
  await t
    .click(page.showFormButton)
    .click(page.submitButton);

  // Form should not disappear and we should be able to click Cancel
  await t
    .click(page.cancelButton)
});