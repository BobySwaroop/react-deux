import React, { useState } from "react";
import { ADD_todo } from "../actions";
import { connect } from "react-redux";
import DisplayCount from "./DisplayCount";
import data from "../reducers/addData";
import { v4 } from "uuid";
const AddTodo = ({ADD_todo}) => {
  const [todo, settodo] = useState({
        title:'',
        description:'',
        id:''
    })
    const handleSubmit = (e) =>{
       e.preventDefault();
       console.log(todo);
       ADD_todo({...todo, id:v4()});
       settodo({
        title:'',
        description:''
       })
    }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3>Add Todo here</h3>
             
              <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Title
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={todo.title}
                  onChange={(e)=>{settodo({...todo, title:e.target.value})}}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Description
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={todo.description}
                  onChange={(e)=>{settodo({...todo, description:e.target.value})}}
                ></textarea>
              </div>
              <button className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps=(state)=>({

})

const mapDispatchToProps=(dispatch)=>({
  ADD_todo:(todo)=>(
    dispatch(ADD_todo(todo))
  )
})

export default connect(mapStateToProps,mapDispatchToProps) (AddTodo);
