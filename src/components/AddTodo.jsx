import React, { useState } from "react";


const AddTodo = ({AddTodo}) => {
  const [todo, settodo] = useState({
        title:'',
        description:''
    })
    const handleSubmit = (e) =>{
       e.preventDefault();
       console.log(todo);
       AddTodo(todo);
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

export default AddTodo;
