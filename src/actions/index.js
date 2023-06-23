export const incNumber = (num) => {
   return {
    type: "INCREMENT",
    payload: num
   }
   
}

export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
 
}


export const ADD_todo = (todo)=>({
    type:ADD_todo,
    payload:todo
    

})
export const Delete_todo = (id)=>({
    type:Delete_todo,
    payload:id
    

})
export const Update_todo = (todo,id)=>({
    type:Update_todo,
    payload:{todo:todo, todoId:id}
    

})

