import React from 'react'
import data from './data'

function Companies() {
  //console.log(data.companies)
  return (
    <div className="flexContainer">
      <h1>Company List ({data.companies.length})</h1>
      {data.companies.map((company) => {
        return (
          <div className="body">
            <div>
              <h5>{company.name}</h5>
              <p>in {company.state}</p>
            </div>
          </div>
        )
      })
      }
    </div>)
}


export default Companies
