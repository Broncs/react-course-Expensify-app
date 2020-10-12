import moment from 'moment';
import { 
     setTextFilter, 
     sortByDate,
     sortByAmount,
     setStartDate,
     setEndDate
     } from '../../actions/filter';


test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})


test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test('should setup text filter object with values', () =>{
 const text = 'Something in'

 const action =  setTextFilter(text);

 expect(action).toEqual({
   type:'SET_TEXT_FILTER',
   text
 })

});

test('should setup text filter object without values', () =>{
const action = setTextFilter();

expect(action).toEqual({
  type: 'SET_TEXT_FILTER',
  text: ''
})
  
})


test('should  generate action for sor by date', () =>{
  const action = sortByDate()

  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })

})

test('should  generate action for sor by amount', () => {
  const action = sortByAmount()

  expect(action).toEqual({type: "SORT_BY_AMOUNT"})
})