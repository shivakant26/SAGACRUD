import { 
    ADD_DATA ,
    ADD_DATA_SUCCESS,
    DELETE_DATA,
    DELETE_DATA_SUCCESS,
    EDIT_DATA,
    EDIT_DATA_SUCCESS,
    UPDATE_DATA,
    UPDATE_DATA_SUCCESS
 } from "../ActionType";

import { call, put , takeEvery } from 'redux-saga/effects'


function* addData(data){
    console.log("saga")
    yield put({
        type:ADD_DATA_SUCCESS,
        payload:data.payload
    })
}

function* EditData(data){
    console.log("saga",data)
    yield put({
        type:EDIT_DATA_SUCCESS,
        payload:data.payload
    })
}

function* UpdateData(data , id){
    console.log("saga",data)
    yield put({
        type:UPDATE_DATA_SUCCESS,
        payload:data.payload,
        id:data.id
    })
}

function* DeleteData(data){
    console.log("saga",data)
    yield put({
        type:DELETE_DATA_SUCCESS,
        payload:data.payload
    })
}





export default function* rootsaga(){
    yield takeEvery(ADD_DATA , addData);
    yield takeEvery(DELETE_DATA , DeleteData);
    yield takeEvery(EDIT_DATA , EditData)
    yield takeEvery(UPDATE_DATA , UpdateData)
}






