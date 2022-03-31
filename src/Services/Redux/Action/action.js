import { ADD_DATA , DELETE_DATA , EDIT_DATA ,UPDATE_DATA} from "../ActionType";

export const Add_Data = (data) =>{
    console.log('action')
    return{
        type:ADD_DATA,
        payload:data
    }
}

export const Edit_Data = (id) =>{
    console.log('action')
    return{
        type:EDIT_DATA,
        payload:id
    }
}

export const Update_Data = (data,id) =>{
    console.log('action')
    return{
        type:UPDATE_DATA,
        payload:data,
        id:id
    }
}

export const Delete_Data = (id) =>{
    console.log('action')
    return{
        type:DELETE_DATA,
        payload:id
    }
}