import { ADD_todo, Delete_todo, Update_todo } from "../actions";



const initialdata = [];


const data = (state = initialdata, action)=>{
    if(action.type===ADD_todo){
        return [...state, action.payload]
    }
    else if (action.type===Delete_todo){
    const newstate = state.filter((todo)=>todo.id!==action.payload)
    return newstate
    }
    else if (action.type===Update_todo){
     const updatestate =  state.map(todo=>{
        if(todo.id==action.payload.todoId){
            todo.title=action.payload.todo.title
            todo.description=action.payload.todo.description
            return todo;
        }
        else{
            return todo;
        }
    
      })
      return updatestate;
      
    }
    else{
        return initialdata;
    }

}
export default data;