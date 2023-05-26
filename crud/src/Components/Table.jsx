import React, { useContext } from 'react'
import { wrapper } from '../App'

function Table() {

  const { tableData , handleEdit ,handleDelete} = useContext(wrapper)

  return (
    <div className="container">
      <table className="table table-primary">
        <thead>
          <tr>
            <th>Sr no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((item ,index) => {
              const { fname, lname, city ,id} = item;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{fname}</td>
                  <td>{lname}</td>
                  <td>{city}</td>
                  <td>
                    <button className="btn btn-danger mx-3" onClick={()=> handleDelete(id)}>
                      Delete
                    </button>
                    <button className="btn btn-warning mx-3" onClick={() => handleEdit(item)}>
                      Edit
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table