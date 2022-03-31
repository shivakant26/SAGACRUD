import { ADD_DATA_SUCCESS , DELETE_DATA_SUCCESS , EDIT_DATA_SUCCESS, UPDATE_DATA_SUCCESS } from "../ActionType";

const initialState = {
    data:[
        {EmpCode:"001" , EmpName:"Murti" , EmpAge:25 , EmpCompany:"Cits" }
    ]
}

const reducer = (state = initialState , action ) =>{
    
    switch(action.type){
        case ADD_DATA_SUCCESS:
            const add_list = state.data;
            add_list.push(action.payload)
            return{
                ...state,
                isEdit:null,
                data:[...add_list]
            }
            break;

            case DELETE_DATA_SUCCESS:
                const delete_list = state.data;
                delete_list.splice(action.payload,1)
                return{
                    ...state,
                    data:[...delete_list]
                }
                break;

                case EDIT_DATA_SUCCESS :
                    const edit_list = state.data;
                    let id = action.payload;
                    let object = edit_list[id];
                    console.log("object",object);
                return{
                    ...state,
                    isEdit:object,
                    id:action.payload
                    }
                break;

                case UPDATE_DATA_SUCCESS :
                    const Update_list = state.data;
                    Update_list.splice(action.id,1,{
                        EmpCode:action.payload.EmpCode,
                        EmpName:action.payload.EmpName,
                        EmpAge:action.payload.EmpAge,
                        EmpCompany:action.payload.EmpCompany
                    })
                    return{
                        ...state,
                        data:[...Update_list]
                    }
                    break;
            default:
                return state
    }
}


export default reducer;