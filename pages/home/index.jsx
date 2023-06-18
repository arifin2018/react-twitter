import React from 'react';
import Layout from '@/layouts';

export default function Home() {
	return (
		<div className='h-[20000px] pt-16'>
			<h1 className='text-red-800 '>Home</h1>
		</div>
	);
}

Home.getLayout = function getLayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	);
};