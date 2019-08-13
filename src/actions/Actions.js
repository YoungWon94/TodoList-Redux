import *as actionName  from "./ActionTypes";

export const ADDTODO= (text)=>{
    return {
        type :  actionName.ADDTODO,
        //id는 리듀서에서
        text : text,
        complete : false,
    };
}
export const CHANGETODO= (id)=>{
    id = parseInt(id);
    return {
        type: actionName.CHANGETODO,
        id : id,
    }
}
export const DELETETODO= (id)=>{
    id = parseInt(id);
    return {
        type: actionName.DELETETODO,
        id : id,
    }
}