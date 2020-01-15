import React from 'react';
import data from './data';


function FindMostPopular(data, key) {
  //console.log(key)
  const result = data.reduce((acc, curr) => {
    //console.log(curr)
    let value = curr[key]
    acc[value] = acc[value] || [];
    acc[value].push(curr)
    return acc
  }, {})

  let final;
  Object.entries(result).forEach((entry) => {
    //console.log(entry)
    if(!final){ //is falsey
      final=entry
    }
    else {
      if(entry[1].length > final[1].length) {
        final = entry
      }
    }
  })
  return final
}


const mostUsers = FindMostPopular(data.users, 'state');
const mostCompanies = FindMostPopular(data.companies, 'state');
const mostProducts = FindMostPopular(data.products, 'material');

const Stats = ()=> {
  return (
    <div>
      <h1>Stats</h1>
      <div>
        <p className='body'>
          The most popular state for users is {mostUsers[0]} with { mostUsers[1].length } users.
        </p>
        <p className='body'>
          The most popular state for companies is {mostCompanies[0]} with { mostCompanies[1].length } companies.
        </p>
        <p className='body'>
          The most popular material for products is {mostProducts[0]} with { mostProducts[1].length } products.
        </p>
      </div>
    </div>
  );
};

export default Stats;
