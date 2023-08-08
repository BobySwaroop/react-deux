import React, { useState } from "react";
import DisplayCount from "./DisplayCount";
import { connect } from "react-redux";
import { Button } from "bootstrap";
import { Delete_todo } from "../actions";
const DisplayTodo = ({todo,Delete_todo}) => {


  // const [todos, setTodos] = useState([
  //   {
  //     title: "first title",
  //     description: "first desc",
  //   },
  //   {
  //     title: "second title",
  //     description: "second desc",
  //   }
  // ]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="mt-3 shadow-sm">
            <h3>All todos are here</h3>
            <DisplayCount />
           
            <ul class="list-group">
              {todo.map((todos, index) => 
                <li class="list-group-item" key={index}>
                  <h4>{todos.title}</h4>
                  <p>{todos.description}</p>
                <Button onClick={()=>{Delete_todo(todo.id)}} varient='danger'></Button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps=(state)=>{
  console.log(state);
  return {todo:state.data}
}
const mapDispatchToProps=(dispatch)=>({
  Delete_todo:(id)=>(dispatch(Delete_todo(id)))
})
export default connect (mapStateToProps,mapDispatchToProps)(DisplayTodo);
