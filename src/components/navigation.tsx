import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {

return ( 
<>
	<nav className='flex px-5 mt-4 align-center justify-between'>
		<div className='flex'>
			<Image alt="Vynl Logo" src={'/vynl.png'} width={36} height={36}/>
			<span className='ml-2 text-3xl font-bold'>VYNLZ</span>
		</div>	
		<div className='flex'>
		<Link href='/products'>
			<span className='navlink'>Products</span>
		</Link>
		<Link href='/about'>
			<span className='navlink'>About</span>
		</Link>	
		<Link href='/contact'>
			<span className='navlink'>Contact</span>
		</Link>
		</div>
		<button className='rounded-full py-2 px-4  hover:bg-gradient-to-l bg-gradient-to-r transition-all duration-500 hover:scale-105 font-bold from-green-500 to-purple-500'>Contact Me</button>
	</nav>
</>
)
}
