import React, { useState } from 'react'
import Count from "../src/Components/Count"
import { Data } from './data/data'

const App = () => {
  // state define 
  const [state, setState] = useState(Data)
  // Increment functionality 
  function Increment(data){
    const strem = state.map((item)=>{
      if(item.id === data){
        return{
          ...item,
          value: item.value + 1,
        }
      }
      return item
    })
    setState(strem)
  }
  // Decrement functionality 
  function Decrement(data){
    const strem = state.map((item)=>{
      if(item.id === data){
        return{
          ...item,
          value: item.value -1
        } 
      }
      return item
    })
    setState(strem)
  }
  // total value of the list 
  const sum = state.reduce((sum, cur)=>sum+cur.value,0)
  console.log(sum)
  return (
    <div>
      {state.map((item)=>(
        <Count digit={item} stateUp={()=>Increment(item.id)} stateDn={()=>Decrement(item.id)}/>
      ))}
      <div>total value is : {sum}</div>
    </div>
  )
}

export default App








































// import React, { useState } from 'react'
// import Home from './Pages/Home'
// import Count from './Components/Count'


// const initCounter = [
//   {
//     id: 1,
//     value: 0
//   },
//   {
//     id: 2,
//     value: 0
//   },
//   {
//     id: 3,
//     value: 0
//   },
// ]



// const App = () => {
//  const [countData, setCountData] = useState(initCounter)
//  console.log(countData)

// //  state up functionality
//   function Increment(data){
//     const maindata = countData.map((item)=>{
//       if(item.id == data){
//         return {
//           ...item,
//           value : item.value + 1,
//         }
//       }
//       return item
//     })
//     console.log(maindata)
//     setCountData(maindata)
//   }
// // state down functionality
//   function Decrement(data){
//     const maindata = countData.map((item)=>{
//       if(item.id == data){
//         return {
//           ...item,
//           value : item.value - 1,
//         }
//       }
//       return item
//     })
//     console.log(maindata)
//     setCountData(maindata)
//   } 
//   return (
//     <div className='text-4xl '>
//       {/* counter list */}
//       <div>
//         {countData.map((item)=>(
//           <Count digit={item} key={item.id} stateUp={()=>Increment(item.id)} stateDn={()=>Decrement(item.id)}/>
//         ))}
//       </div>
//       {/* //total count */}
//       <div>
//         Total Number is : 
//       </div>
//     </div>
//   )
// }

// export default App

// // const [counter, setCounter] = useState(initCounter)
// // // this is the state up 
// // function stateUp(ida){
// //   const counterdata = counter.map((count)=>{
// //       if(ida === count.id){
// //       return{
// //         ...count,
// //         value : p.value + 1
// //       }
// //     }
// //   })
// //   setCounter(counterdata)
// //   console.log(counterdata)
// // }
// // // this is the state down 
// // function stateDn(idq){
// //   const counterdata = counter.map((count)=>{
// //       if(count.id === idq){
// //       return{
// //         ...p,
// //         value : p.value - 1
// //       }
// //     }
// //   })
// //   setCounter(counterdata)
// // }