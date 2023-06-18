import React from 'react';
import Layout from '@/layouts';

export default function Home() {
	return (
		<Layout>
			<h1 className='text-red-800'>Home</h1>
		</Layout>
	);
}

Home.getLayout = function getLayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	);
};