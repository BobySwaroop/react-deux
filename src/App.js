import React from 'react'
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions';
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';
const App = () => {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();
  return (
    <div className='container text-center'>
    <h1>Increament/decrement counter using redux</h1>
    <div className='quantity'>
      <a className='quantity_minus text-decoration-none' title='decrement'onClick={()=> dispatch(decNumber())}><span className='fs-1 fw-bold'>-</span></a>
      <input name='quantity' type='text' className='quantity_input' value={myState}></input>
      <a className='quantity_plus text-decoration-none' title='increment' onClick={()=> dispatch(incNumber(5))}><span className='fs-1 fw-bold'>+</span></a>
    </div><br></br><br></br>
    {/* to do app */}
    <container>
      <AddTodo />
      <DisplayTodo />
      </container>

    </div>
  

  )
}

export default App