import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className="flex justify-center place-items-baseline p-11 text-3xl ">contact us</h1>
      <form action="" className="py-4 mt-4 border-t flex flex-col gap-5 justify-center items-center ">
    <div>
        <label htmlFor="full name">Full Name</label>
      <input className="rounded-full shadow-md px-3 m-3 border-b-gray-950 "
      type="text" 
      id="Full Name" 
      placeholder='Enter your Name'/>
      </div>
      <div>
      <label htmlFor="full name">Number</label>
      <input className="rounded-full shadow-md px-3 mx-3 "type="text" id="Number" placeholder="Enter your Phone Number"/>
      
  </div>
<div>
  <label htmlFor="full name">Emaile</label>
      <input className="rounded-full shadow-md px-3 m-3" type="text" id="email" placeholder="Enter Your Email Address"/>
</div>
<div>
<label htmlFor="full name">Message</label>
      <input className="rounded-sm shadow-md px-3 m-3 h-[100px] w-[300px]" type="text" id="message" placeholder="type Message here"/>
      </div>
      <button className="bg-lime-600 text-white p-3">Send</button>
      </form>
      
      
    </div>
  )
}

export default Contact
