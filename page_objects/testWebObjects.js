export class FormLayoutsPage {
    submitIlineFormWithNameAndEmail(name, email) {
        cy.contains('nb-card', "Inline form").find('form').then(form => {
            cy.wrap(form).find('[placeholder = "Jane Doe"]').type(name)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[type="checkbox"]').check({ force: true })
            cy.wrap(form).submit()

        })

    }

    submitBasicFormWithEmailAndPassword(name, password) {
        cy.contains('nb-card', "Basic form").find('form').then(form => {
            cy.wrap(form).find("#exampleInputEmail1").type(name)
            cy.wrap(form).find('#exampleInputPassword1').type(password)
            cy.wrap(form).find('[class="custom-checkbox"]').click({ force: true })
            cy.wrap(form).submit()
        })
    }
}


export const onFormLayoutsPage = new FormLayoutsPage()