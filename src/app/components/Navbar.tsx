
import react from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div >  
      <nav className="bg-orange-300 h-16 text-black ">
        <ul className="flex gap-7 p-5 text justify-end  items-center" >
          <Link className="hover:bg-red-200" href="/">Home</Link>
          <Link className="hover:bg-orange-700" href="/about">About</Link>
          <Link className="hover:bg-yellow-800" href="/services">Services</Link>
          <Link className="hover:bg-slate-400" href="/contact">Contact</Link>  
          
        </ul>
      </nav>
    
    </div>
  )
}

export default Navbar;

