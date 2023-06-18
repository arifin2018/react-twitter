import React from 'react';
import Layout from '@/layouts';

export default function Home() {
	return (
		<>
			<h1 className='text-red-800'>Home</h1>
		</>
	);
}

Home.getLayout = function getLayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	);
};