import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';


test('should correctly render expenses summary with 1 expense', () => {
  const wrapper = shallow( <ExpensesSummary expenseCount={1} expensesTotal={235} />)

  expect(wrapper).toMatchSnapshot()
});


test('should correctly render expenses summary with multiple expenses', () => {
  const wrapper = shallow( <ExpensesSummary 
  expenseCount={23} expensesTotal={12312312231}  />)

  expect(wrapper).toMatchSnapshot()
})