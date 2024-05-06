import React, { useRef, useState } from 'react'
import Textinput from '../comp/Textinput';



const App = () => {
  const [userData, setUserData] = useState({Fname:"",email:"",age:""})

  const handleChange = (newValue,name)=>{
    setUserData({...userData,[name]:newValue})
    console.log(userData);
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
      inputFor = "Enter your name : "
      classInput="ml-2 rounded-2xl p-2 mt-5 text-center b-s-red-200"
      classLabel= "ml-5"
      />
      <Textinput 
      labelName='Enter Your Email'
      placeHolder='Enter your Email'
      value={userData.email}
      name="email"
      handle={handleChange}
      inputFor = "Enter your Email : "
      classInput="ml-2 rounded-2xl p-2 mt-5 text-center b-s-red-200 w-[400px]"
      classLabel= "ml-5"
      />
      <Textinput 
      labelName='age'
      placeHolder='Enter your Age'
      value={userData.query}
      name="age"
      handle={handleChange}
      inputFor = "Enter your age : "
      classInput="ml-2 rounded-2xl p-2 mt-5 text-center b-s-red-200"
      classLabel= "ml-5"
      />

    </div>
   </>
  )
}

export default App