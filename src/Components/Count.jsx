import React, { useState } from 'react'

const Count = ({digit, stateUp, stateDn}) => {
    console.log(digit.id)
  return (
    <div>
      counter : {digit.value}
      <div>
        <button className='bg-green-700 text-white' onClick={stateUp}>incre</button>
        <button onClick={stateDn} className='bg-red-700 text-white'>decre</button>
      </div>
    </div>
  )
}

export default Count
