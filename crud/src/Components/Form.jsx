import React, { useContext } from 'react'
import { wrapper } from '../App'

function Form() {

  const { fname, setFname, lname, setLname, city, setCity, tableData, setTableData, isEdit, editStage } = useContext(wrapper);

  function submit(e) {
    e.preventDefault();

    const date = new Date();

    const formData = { id: date.getTime(), fname, lname, city };
    setTableData([...tableData, formData]);


    setFname("");
    setLname("");
    setCity("");

    localStorage.setItem('tableData',JSON.stringify([...tableData, formData]));

  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 p-3 shadow my-5">
          <h3 className="text-center">Add Data</h3>
          <form action="">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter First Name"
                className="form-control"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter Last Name"
                className="form-control"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="City"
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>{
              isEdit ?

                <button className="btn btn-warning mx-3" onClick={editStage}>
                  Edit
                </button> :
                <button className="btn btn-primary mx-3" onClick={submit}>
                  Add
                </button>
            }
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form