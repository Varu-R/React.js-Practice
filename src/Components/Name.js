import React from 'react'

function Name() {
  const nak=['Bruce','hike','gike','Bruce']
    // const person=[
    //   {
    //     id:1,
    //     name:'jam'
    // },
    // {
    //   id:2,name:'oam'
    // },
    // {
    //   id:1,name:'tam'
    // }
    // ]
    const personList=nak.map((nak, inde)=> <h1 key={inde}>{inde}{nak}</h1>)
  return (
    <div>
      {
        personList
      }
      
    </div>
  )
}

export default Name
