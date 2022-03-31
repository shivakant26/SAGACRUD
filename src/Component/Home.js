import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add_Data, Delete_Data, Edit_Data, Update_Data } from "../Services/Redux/Action/action";

const Home = () =>{
    const dispatch = useDispatch();

    const list = useSelector((state)=>state.reducer.data)
    const Editable_object = useSelector((state)=>state.reducer.isEdit)
    const id = useSelector((state)=>state.reducer.id)
    console.log("Editable",id)

    const [ EmpCode , setEmpCode ] = useState();
    const [ EmpName , setEmpName ] = useState();
    const [ EmpAge , setEmpAge ] = useState();
    const [ EmpCompany , setEmpCompany ] = useState();

    const Add = () => {
        const data = {EmpCode,EmpAge,EmpName,EmpCompany}
        if(Editable_object){
            dispatch(Update_Data(data , id))
        }else{
            dispatch(Add_Data(data));
        }
        setEmpCode("");
        setEmpName("");
        setEmpAge("");
        setEmpCompany("");

    }
    const Delete = (i) =>{
        dispatch(Delete_Data(i))
        console.log("delete item",i)
    }
    const Edit = (i) =>{
        dispatch(Edit_Data(i))
        console.log("Edit",i)
    }
    useEffect(()=>{
        console.log("useEffect",Editable_object);
        setEmpCode(Editable_object?.EmpCode);
        setEmpAge(Editable_object?.EmpAge);
        setEmpName(Editable_object?.EmpName);
        setEmpCompany(Editable_object?.EmpCompany);
    },[Editable_object])
    return(
        <div>
            <h1>SAGA CRUD</h1>
            <div className="main_wr">
                <div className="clearfix">
                    <div className="left-col">
                        <h2><span><i className="fa fa-plus"></i></span>Add Employee Here...</h2>
                        <div className="form">
                            <form id="myform">
                            <div className="clearfix">
                                <div className="left">
                                    <div className="form-field">
                                        <input type="text" placeholder="Emp_code"
                                        value={EmpCode} 
                                        onChange={(e)=>setEmpCode(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <div className="form-field">
                                        <input type="text" placeholder="Emp_Name"
                                        value={EmpName} 
                                        onChange={(e)=>setEmpName(e.target.value)}
                                        required
                                        />
                                    </div>
                                </div>
                                <div className="right">
                                <div className="form-field">
                                    <input type="text" placeholder="Emp_Age"
                                    value={EmpAge} 
                                    onChange={(e)=>setEmpAge(e.target.value)}
                                    required
                                    />
                                </div>
                                <div className="form-field">
                                    <input type="text" placeholder="Emp_Company"
                                    value={EmpCompany} 
                                    onChange={(e)=>setEmpCompany(e.target.value)}
                                    required
                                    />
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        <div className="button-group">
                            {
                                Editable_object ? 
                                <button className="add-btn" onClick={Add}>Update</button>
                                :
                                <button className="add-btn" onClick={Add}>Add</button>

                            }
                        </div>
                        
                    </div>
                    <div className="right-col">
                        <h2>Employee Record</h2>
                        {
                            list ? 
                            <div className="card_wr">
                              {
                                  list.map((item,i)=>
                                  <div className="card" key={i}>
                                      <div className="card_EmpCode">
                                          <p className="card_p"><strong>EmpCode : </strong>{item.EmpCode}</p>
                                      </div>
                                      <div className="card_EmpCode">
                                      <p className="card_p"><strong >EmpName : </strong>{item.EmpName}</p>
                                      </div>
                                      <div className="card_EmpCode">
                                      <p className="card_p"><strong >EmpAge : </strong>{item.EmpAge}</p>
                                      </div>
                                      <div className="card_EmpCode">
                                      <p className="card_p"><strong >EmpCompany : </strong>{item.EmpCompany}</p>
                                      </div>
                                      <div className="card_footer">
                                          <div className="clearfix">
                                              <div className="left">
                                                  <button className="modify-btn" onClick={()=>Edit(i)}>
                                                      <i className="fa fa-edit"></i>
                                                  </button>
                                              </div>
                                              <div className="right">
                                                    <button className="trash-btn"  onClick={()=>Delete(i)}>
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  )
                              }  
                            </div>
                            :
                            <div>
                                <p className="error">Record Not Found</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default Home;