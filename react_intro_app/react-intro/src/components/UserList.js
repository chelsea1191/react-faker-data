import React from 'react'
import data from './data'

let companies = data.companies




function Users() {
  //console.log(data.companies)
  return (
    <div className="flexContainer">
      <h1>User List ({data.users.length})</h1>
      {data.users.map((user) => {
        return (
        <div className="body">
          <div>
          <p>{user.name} from <b>{user.state}</b> works for {companies.find( company => company.id === user.companyId).name}</p>
          </div>
         </div>
      )})}
    </div>)
}


export default Users
