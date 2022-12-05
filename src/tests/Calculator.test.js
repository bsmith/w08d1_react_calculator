import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
    let container;

    beforeEach(() => {
        container = render(<Calculator/>)
    })

    it('should change running total on number enter', () => {
        const button4 = container.getByTestId('number4');
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button4);
        expect(runningTotal.textContent).toEqual('4');
    })

    it('should add two numbers', () => {
        /* test adding 1 to 4 and getting 5 */
        const button1 = container.getByTestId('number1');
        const button4 = container.getByTestId('number4');
        const buttonAdd = container.getByTestId('operator-add');
        const buttonEquals = container.getByTestId('operator-equals');
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button1);
        fireEvent.click(buttonAdd);
        fireEvent.click(button4);
        fireEvent.click(buttonEquals);
        expect(runningTotal.textContent).toEqual('5');
    });

    it('should subtract two numbers', () => {
        /* test subtracting 4 from 7 and getting 3 */
        const button4 = container.getByTestId('number4');
        const button7 = container.getByTestId('number7');
        const buttonSubtract = container.getByTestId('operator-subtract');
        const buttonEquals = container.getByTestId('operator-equals');
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button7);
        fireEvent.click(buttonSubtract);
        fireEvent.click(button4);
        fireEvent.click(buttonEquals);
        expect(runningTotal.textContent).toEqual('3');
    });

    it('should multiply two numbers', () => {
        /* test multiplying 3 by 5 and getting 15 */
        const button3 = container.getByTestId('number3');
        const button5 = container.getByTestId('number5');
        const buttonMultiply = container.getByTestId('operator-multiply');
        const buttonEquals = container.getByTestId('operator-equals');
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button3);
        fireEvent.click(buttonMultiply);
        fireEvent.click(button5);
        fireEvent.click(buttonEquals);
        expect(runningTotal.textContent).toEqual('15');
    });

    it('should divide two numbers', () => {
        /* test dividing 21 by 7 and getting 3 */
        const button1 = container.getByTestId('number1');
        const button2 = container.getByTestId('number2');
        const button7 = container.getByTestId('number7');
        const buttonDivide = container.getByTestId('operator-divide');
        const buttonEquals = container.getByTestId('operator-equals');
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button2);
        fireEvent.click(button1);
        fireEvent.click(buttonDivide);
        fireEvent.click(button7);
        fireEvent.click(buttonEquals);
        expect(runningTotal.textContent).toEqual('3');
    });

    it('should concatenate multiple number button clicks', () => {
        /* press 1, 2, 3, 4, 5, 6 and check the running-total is 123456 */
        const button1 = container.getByTestId('number1');
        const button2 = container.getByTestId('number2');
        const button3 = container.getByTestId('number3');
        const button4 = container.getByTestId('number4');
        const button5 = container.getByTestId('number5');
        const button6 = container.getByTestId('number6');
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button1);
        fireEvent.click(button2);
        fireEvent.click(button3);
        fireEvent.click(button4);
        fireEvent.click(button5);
        fireEvent.click(button6);
        expect(runningTotal.textContent).toEqual('123456');
    });

    it('should chain multiple operations together', () => {
        /* press 1, +, 2, *, 3, = and check the total is 9 */
        const button1 = container.getByTestId('number1');
        const button2 = container.getByTestId('number2');
        const button3 = container.getByTestId('number3');
        const buttonAdd = container.getByTestId('operator-add');
        const buttonMultiply = container.getByTestId('operator-multiply');
        const buttonEquals = container.getByTestId('operator-equals');
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button1);
        fireEvent.click(buttonAdd);
        fireEvent.click(button2);
        fireEvent.click(buttonMultiply);
        expect(runningTotal.textContent).toEqual('3');
        fireEvent.click(button3);
        fireEvent.click(buttonEquals);
        expect(runningTotal.textContent).toEqual('9');
    });

    it('should clear the running total without affecting the calculation', () => {
        /* press 1, +, 2, = — running total is 3.
           press 4, 5 — running total is 45.
           press C — running total is 0.
           press +, 4, = — running total is 7 */
        const button1 = container.getByTestId('number1');
        const button2 = container.getByTestId('number2');
        const button4 = container.getByTestId('number4');
        const button5 = container.getByTestId('number5');
        const buttonAdd = container.getByTestId('operator-add');
        const buttonEquals = container.getByTestId('operator-equals');
        const buttonClear = container.getByTestId('clear');
        const runningTotal = container.getByTestId('running-total');

        /* 1, +, 2,, = — '3' */
        fireEvent.click(button1);
        fireEvent.click(buttonAdd);
        fireEvent.click(button2);
        fireEvent.click(buttonEquals);
        expect(runningTotal.textContent).toEqual('3');

        /* 4, 5 — '45' */
        fireEvent.click(button4);
        fireEvent.click(button5);
        expect(runningTotal.textContent).toEqual('45');

        /* C — '0' */
        fireEvent.click(buttonClear);
        expect(runningTotal.textContent).toEqual('0');

        /* +, 4, = = — '7' */
        fireEvent.click(buttonAdd);
        fireEvent.click(button4);
        fireEvent.click(buttonEquals);
        expect(runningTotal.textContent).toEqual('7');

    });

})

