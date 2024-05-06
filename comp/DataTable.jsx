import React from 'react'

const DataTable = (props) => {
    const {Data,index} = props
  return (
    <div class="flex flex-row border-b border-gray-300">
    <div class="w-1/3 py-2 px-2">{index}</div>
    <div class="w-1/3 py-2 px-2">{Data.Fname}</div>
    <div class="w-1/3 py-2 px-2">{Data.email}</div>
    <div class="w-1/3 py-2 px-2">{Data.age}</div>
    <div class="w-1/3 py-2 px-2">
    <button className=' px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 m-5' > Edit</button>
    <button className=' px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 m-5'>Delete</button>
    </div>
  </div>
  )
}

export default DataTable