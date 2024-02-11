//action , initialState

export const data = 0
export const initialState = [
    { id: 0, text: "Maksood Ka Ghr Faridabad" },
    { id: 1, text: "Priyanka ka Ghar Delhi" },
    { id: 2, text: "Ritesh ka Ghar Kanpur" },
  ];
  
export const reducer = (state=initialState,action)=>{


switch(action.type){
case "add":   

  return [...state,{text:action.text,id:action.id}];


case "edit":
   return  state.map((item) => {
      if (item.id === action.task.id) {
        return action.task;
      } else {
        return item;
      }
    });
 

  case "delete":
  return  state.filter((item)=>item.id!==action.id)
//default :  {throw Error("unknown type"+action.type)}
default:
  return state
}


}
