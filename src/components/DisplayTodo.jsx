import React, { useState } from "react";
import DisplayCount from "./DisplayCount";
const DisplayTodo = () => {
  const [todos, setTodos] = useState([
    {
      title: "first title",
      description: "first desc",
    },
    {
      title: "second title",
      description: "second desc",
    },
  ]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="mt-3 shadow-sm">
            <h3>All todos are here</h3>
            <DisplayCount />
            <ul class="list-group">
              {todos.map((todos, index) => {
                <li class="list-group-item" key={index}>
                  <h4>{todos.title}</h4>
                  <p>{todos.description}</p>
                </li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayTodo;
