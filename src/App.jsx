import React, { useRef, useState } from 'react'
import Textinput from '../comp/Textinput';
import DataTable from '../comp/DataTable';

const App = () => {
  const [userData, setUserData] = useState({ Fname: "", email: "", age: "" })
  const [tableArray, setTableArray] = useState([])

  const handleChange = (newValue, name) => {
    setUserData({ ...userData, [name]: newValue })
    // console.log(userData);
  }

  return (
    <>
      <div className=' bg-slate-700 text-white text-5xl p-6 font-mono text-center'>Crud Using React</div>
      <div className='flex justify-between flex-wrap'>
        <Textinput
          labelName='UserName'
          placeHolder='Enter your Name'
          value={userData.Fname}
          name="Fname"
          handle={handleChange}
          inputFor="Enter your name : "
          classInput="ml-2 rounded-2xl p-2 mt-5 text-center b-s-red-200"
          classLabel="ml-5"
        />
        <Textinput
          labelName='Enter Your Email'
          placeHolder='Enter your Email'
          value={userData.email}
          name="email"
          handle={handleChange}
          inputFor="Enter your Email : "
          classInput="ml-2 rounded-2xl p-2 mt-5 text-center b-s-red-200 w-[400px]"
          classLabel="ml-5"
        />
        <Textinput
          labelName='age'
          placeHolder='Enter your Age'
          value={userData.age}
          name="age"
          handle={handleChange}
          inputFor="Enter your age : "
          classInput="ml-2 rounded-2xl p-2 mt-5 text-center b-s-red-200"
          classLabel="ml-5"
        />

      </div>
      <div className='flex justify-center items-center mt-5 '>
        <button className=' px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ' onClick={() => {
          if (userData.Fname && userData.age && userData.email) {
            const newData = {
              id: Date.now(),
              Fname: userData.Fname,
              age: userData.age,
              email: userData.email
            }
            setTableArray([...tableArray, newData])
            setUserData({ Fname: "", email: "", age: "" })
            console.log(tableArray);
          }
        }}>Add</button>
      </div>

      <div>
        <div class="w-full bg-gray-100 p-4 mt-10">
          <div class="flex flex-row font-semibold border-b border-gray-300">
            <div class="w-1/3 py-2 px-2">Sl.no</div>
            <div class="w-1/3 py-2 px-2">Fname</div>
            <div class="w-1/3 py-2 px-2">Email</div>
            <div class="w-1/3 py-2 px-2">Age</div>
            <div class="w-1/3 py-2 px-2">Action</div>
          </div>
        </div>
        {tableArray.map((e, index) => (
          <div key={e.id}>
            <DataTable Data={e} index={index + 1} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App