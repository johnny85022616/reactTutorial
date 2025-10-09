import { produce } from 'immer'
import React, { useState } from 'react'

function ImmerExample() {

  const [info, setInfo]= useState([
    {name: "john", age: 24, jobs: [{name: "developer" , salary: 5000}, {name: "designer" , salary: 4000}]},
    {name: "peter", age: 30, jobs: [{name: "manager" , salary: 6000}, {name: "ceo" , salary: 10000}]},
    {name: "susan", age: 26, jobs: [{name: "manager" , salary: 4000}, {name: "hr" , salary: 3000}]}
  ])

  function handleManagerPlusSalary (){
    setInfo(produce(info, draft => {
      draft.forEach(person=>{
        person.jobs.forEach(v=>{
          if(v.name === 'manager'){
            v.salary += 1000
          }
        })
      })
    }))
  }

  return (
    <>
    <div>ImmerExample</div>
    <ul>
      {info.map((person, index) => (
        <li key={index}>
          name: {person.name}, age: {person.age}
          <ul>
            {person.jobs.map((job, jobIndex) => (
              <li key={jobIndex}>
                job: {job.name}, salary: {job.salary}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
    <button onClick={handleManagerPlusSalary}>所有manager都加薪1000</button>
    </>
  )
}

export default ImmerExample