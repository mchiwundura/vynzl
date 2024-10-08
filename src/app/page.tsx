'use client'
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
const [ selectAlbum, setSelectAlbum ] = useState(false)

return (
    <main className='realtive'>
<header className='flex px-10 items-center'>
	<div className='flex flex-col px-10' >
		<h1 className='bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent text-4xl font-bold'>Welcome</h1>
		<p>Create your custom decorative Vynls, and get them delivered</p>
		<input className='' type='text'/>
	</div>
	<div className='relative w-96 h-96 flex'>
		<Image className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' src={'/vynl.png'} width={500} height={500} alt="Image of a vynl"/>
		<Image className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' src={'/vynl.png'} width={200} height={200} alt="Image of a vynl"/>
		
	</div>
</header>
    </main>
  );
}
