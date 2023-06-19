import React from 'react';
import Link from 'next/link';

export default function Circle() {
	return (
		<>
			<section className='bottom-[9%] fixed w-3/6'>
				<Link href="/">
					<div className='right-4 bg-sky-500 w-[4.5rem] absolute h-[4.5rem] rounded-full flex justify-center items-center bottom-0'>
						<span className='flex justify-center'>
							<i className='bx bx-edit-alt text-2xl'></i>
						</span>
					</div>
				</Link>
			</section>
		</>
	);
}
