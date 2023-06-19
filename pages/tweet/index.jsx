import React, { useState } from 'react';
import Layout from '@/layouts';
import Link from 'next/link';
import Image from 'next/image';


export default function Tweet() {
	const [ImageUrl, setImageUrl] = useState(['']);
	const addImageUrl = () => {
		setImageUrl([...ImageUrl,'']);
	};
	const onchange = (e,index) => {
		let cloneImageUrl = [...ImageUrl];
		cloneImageUrl[index] = e.target.value;
		setImageUrl(cloneImageUrl);
	};
	return (
		<>
			<div className="flex justify-between items-center">
				<div>
					<Link href="/">
						<span className='text-sky-400'>Cancel</span>
					</Link>
				</div>
				<div>
					<button type="submit" className='max-w-xl w-20 min-h-1/4 rounded-xl bg-sky-400 text-white hover:text-black p-1'>
                    Tweet
					</button>
				</div>
			</div>
			<div className="flex flex-row gap-4 py-4">
				<div className="basis-12">
					<div className="rounded-full overflow-hidden relative h-[4.3rem] w-[4.5rem]">
						<Image fill alt="picture" src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" className='w-min'/>
					</div>
				</div>
				<textarea name="tweet" id="tweet" className='w-full h-full' placeholder="What's happening?"></textarea>
			</div>
			{ImageUrl.map((item,index) => {
				return (
					<div className="flex flex-row gap-4 py-4" key={index}>
						<h3 className='text-sm'>Image URL</h3>
						<input type="text" placeholder='please insert image url' className='w-full' value={item} onChange={(e)=> onchange(e,index)}/>
					</div>
				);
			})}
			<div>
				<button onClick={() => addImageUrl()} type="button" className='bg-sky-400 w-1/5 rounded-xl p-2 float-right text-gray-200 hover:text-black'>
                Add image url
				</button>
			</div>
		</>
	);
}


Tweet.getLayout = function getLayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	);
};