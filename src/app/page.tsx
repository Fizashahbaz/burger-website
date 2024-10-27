import React from 'react'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Image from 'next/image'


const Home = () => {
  return (
    <div> 
        <Navbar/>
    <h1 className="flex justify-around text-lg
The quick brown fox jumps over the lazy dog  cursor-pointe font-bold">Zinger Burger</h1>
     <img src="/fs.png" alt="burger" className="w-[600px] h-[500px] p-10  rounded-full flex justify-center"  />
      
 <p>A Zinger burger is a popular and well-loved fast food item enjoyed by many. The standout feature of this burger is its crispy and spicy fried chicken patty, nestled between a soft and freshly baked bun. The chicken patty is marinated with special spices and then fried to perfection, giving it a unique and delicious flavor. Additionally, the burger is often complemented with mayonnaise, fresh lettuce, and sometimes a slice of cheese, making it even more delightful. Zinger burgers are typically served with French fries and a cold drink, creating a complete meal. Each bite offers a satisfying crunch and spicy taste, making it a treat for fast food enthusiasts.</p>
 
    </div>
  )
}

export default Home

