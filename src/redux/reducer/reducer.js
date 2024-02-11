
const initialvalue = {inc:0,dec:0}
 const changeTheNumber = (state=initialvalue,action)=>{

    switch(action.type){
        case "incriment":
          return {inc:state.inc+1}
          case "decriment":
            return {dec:state.dec-1}
            default  :
            return state
    }
}

export default changeTheNumber;


