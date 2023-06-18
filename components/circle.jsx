import React from 'react';
import Link from 'next/link';

export default function Circle() {
	return (
		<>
			<section className='bottom-[9%] fixed w-3/6'>
				<Link href="/">
					<div className='float-right bg-sky-500 w-[4.5rem] h-[4.5rem] rounded-full flex justify-center items-center'>
						<span className='flex justify-center'>
							<i className='bx bx-edit-alt text-2xl'></i>
						</span>
					</div>
				</Link>
			</section>
		</>
	);
}
