describe("Calculator", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it('should have working number buttons', () => {
        cy.get('#number2').click();
        cy.get('.display').should('contain', '2')
    });

    /* REQUIREMENT: "Do the number buttons update the display of the running total?" */
    it('should have number buttons that update the display', () => {
        /* click on all the number buttons in turn */
        cy.get('#number1').click();
        cy.get('#number2').click();
        cy.get('#number3').click();
        cy.get('#number4').click();
        cy.get('#number5').click();
        cy.get('#number6').click();
        cy.get('#number7').click();
        cy.get('#number8').click();
        cy.get('#number9').click();
        cy.get('#number0').click();

        /* check the display is "1234567890" */
        cy.get('.display').should('contain', '1234567890')
    });

    /* REQUIREMENT: "Do the arithmetical operations update the display with the result of the operation?" */
    it('should update the display after addition', () => {
        cy.get('#number1').click();
        cy.get('#operator_add').click();
        cy.get('#number2').click();
        cy.get('#operator-equals').click();
        cy.get('.display').should('contain', '3');
    });

    it('should update the display after subtraction', () => {
        cy.get('#number5').click();
        cy.get('#operator-subtract').click();
        cy.get('#number3').click();
        cy.get('#operator-equals').click();
        cy.get('.display').should('contain', '2');
    });

    it('should update the display after multiplication', () => {
        cy.get('#number2').click();
        cy.get('#operator-multiply').click();
        cy.get('#number3').click();
        cy.get('#operator-equals').click();
        cy.get('.display').should('contain', '6');
    });

    it('should update the display after division', () => {
        cy.get('#number6').click();
        cy.get('#operator-divide').click();
        cy.get('#number3').click();
        cy.get('#operator-equals').click();
        cy.get('.display').should('contain', '2');
    });

    /* REQUIREMENT: "Can multiple operations be chained together?" */
    it('should be able to chain multiple operations', () => {
        /* test 6 * 3 - 9 = 9 */
        cy.get('#number6').click();
        cy.get('#operator-multiply').click();
        cy.get('#number3').click();
        cy.get('#operator-subtract').click();
        cy.get('#number9').click();
        cy.get('#operator-equals').click();
        cy.get('.display').should('contain', '9');
    });

    /* REQUIREMENT: "Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?" */
    it('should be able to subtract positive numbers to produce a negative number', () => {
        cy.get('#number1').click();
        cy.get('#number0').click();
        cy.get('#operator-subtract').click();
        cy.get('#number1').click();
        cy.get('#number5').click();
        cy.get('#operator-equals').click();
        cy.get('.display').should('contain', '-5');
    });

    it('should be able to input and output decimals', () => {
        cy.get('#number1').click();
        cy.get('#decimal').click();
        cy.get('#number5').click();
        cy.get('#operator-multiply').click();
        cy.get('#number3').click();
        cy.get('#operator-equals').click();
        cy.get('.display').should('contain', '4.5');
    });

    it('should be able to double a large number with ten digits', () => {
        cy.get('#number1').click();
        cy.get('#number2').click();
        cy.get('#number3').click();
        cy.get('#number4').click();
        cy.get('#number5').click();
        cy.get('#number6').click();
        cy.get('#number7').click();
        cy.get('#number8').click();
        cy.get('#number9').click();
        cy.get('#number0').click();
        cy.get('#operator-multiply').click();
        cy.get('#number2').click();
        cy.get('#operator-equals').click();
        cy.get('.display').should('contain', '2469135780');
    });

    /* QUESTION: "What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement)." */
    })

})