describe("Test our inputs and submit our form", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3003");
    })

    it("Add test to inputs and submit form", function(){
        cy.get('#userButton').click()

        // User Test 1
        cy.get('input[name="name"]')
        .type("Bebop")
        .should("have.value", "Bebop")
        cy.get('input[name="email"]')
        .type("bebop@bebopilicious.com")
        .should("have.value", "bebop@bebopilicious.com")
        cy.get('input[name="password"]')
        .type("DedupeDaBebop")
        .should("have.value", "DedupeDaBebop")
        cy.get('#positions')
        .select("Generic Programmer")
        .should("have.value", "Generic Programmer")
        cy.get("[type='checkbox']").check()
        .should('be.checked')
        cy.get('form > button').click();

        cy.wait(2000)

        // User Test 2
        cy.get('input[name="name"]')
        .type("BleepyBloop")
        .should("have.value", "BleepyBloop")
        cy.get('input[name="email"]')
        .type("email@cypress.net")
        .should("have.value", "email@cypress.net")
        cy.get('input[name="password"]')
        .type("BeepBoopImAPassword")
        .should("have.value", "BeepBoopImAPassword")
        cy.get('#positions')
        .select("Lorem Ipsum Generator")
        .should("have.value", "Lorem Ipsum Generator")
        cy.get("[type='checkbox']").check()
        .should('be.checked')
        cy.get('form > button').click();

        cy.wait(2000)

        // User Test 3
        cy.get('input[name="name"]')
        .type("Sasha Dingdong")
        .should("have.value", "Sasha Dingdong")
        cy.get('input[name="email"]')
        .type("sdingdong@cypress.net")
        .should("have.value", "sdingdong@cypress.net")
        cy.get('input[name="password"]')
        .type("1234")
        .should("have.value", "1234")
        cy.get('#positions')
        .select("Placeholder Role")
        .should("have.value", "Placeholder Role")
        cy.get("[type='checkbox']").check()
        .should('be.checked')
        cy.get('form > button').click();

        cy.wait(2000)

        // User Test 4
        cy.get('input[name="name"]')
        .type("Glados")
        .should("have.value", "Glados")
        cy.get('input[name="email"]')
        .type("cakemaker@cypress.net")
        .should("have.value", "cakemaker@cypress.net")
        cy.get('input[name="password"]')
        .type("IfYouCanSeeThisTheCakeIsALie")
        .should("have.value", "IfYouCanSeeThisTheCakeIsALie")
        cy.get('#positions')
        .select("Food Buyer")
        .should("have.value", "Food Buyer")
        cy.get("[type='checkbox']").check()
        .should('be.checked')
        cy.get('form > button').click();

        cy.get("#userButton").click();
    })
});