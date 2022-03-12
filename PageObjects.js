import { onDatePickerPage } from "../support/page_objects/datepickerPage"
import { FormLayoutsPage, navigateTo, onFormLayouts, onNavigationPage } from "../support/page_objects/navigationPage"
import { onFormLayoutsPage } from "../support/page_objects/testWebObjects"

describe('Test with Page Objects', () => {
    beforeEach('open application', () => {
        cy.visit('/')
    })
    it('Verify navigation across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.tooltipPage()


    })
    it('Should submit Inline and Basic form and select tommorow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitIlineFormWithNameAndEmail('Dmi3', "test@test.com")
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword("test@test.com", "password123")
        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatePickerFromToday(2)

    })
})