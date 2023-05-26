import { createContext, useState } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";

export const wrapper = createContext();

function getLocalStorageData(){
  const tableData = localStorage.getItem('tableData')
  if(tableData){
    return JSON.parse(tableData);
  }else{
    return [];
  }
}

function App() {

  const [fname , setFname] = useState("");
  const [lname , setLname] = useState("");
  const [city , setCity] = useState("");
  const [tableData , setTableData] = useState(getLocalStorageData());

  // for Edit
  const [isEdit , setIsEdit] = useState(false);
  const [editData , setEditData] = useState(null);

  function handleEdit(item){
    const {fname , lname ,city , id} = item ;

    setEditData(id); 
    setIsEdit(true);

    setFname(fname);
    setLname(lname);
    setCity(city);
  }

  function editStage(e){
    e.preventDefault();

    const editTable = tableData.map((item)=>{
      if(item.id === editData){
        return{ ...item , fname , lname , city};
      }
      else{
        return item
      }
    })

    setTableData(editTable);
    localStorage.setItem('tableData',JSON.stringify(editTable))

    setFname("");
    setLname("");
    setCity("");
    setIsEdit(false);
    setEditData(null);
  }

  function handleDelete(id){
    const DeleteTableData = tableData.filter((item)=> item.id !== id)

    setTableData(DeleteTableData);
    localStorage.setItem('tableData',JSON.stringify(DeleteTableData));
  }

  return (
   <>
      <wrapper.Provider value={{fname, lname, city, tableData, isEdit, editData, setLname, setFname, setCity, setTableData, setIsEdit, setEditData, handleEdit, editStage, handleDelete}}>
       <Form />
       <Table />
      </wrapper.Provider>
   </>
  );
}

export default App;
