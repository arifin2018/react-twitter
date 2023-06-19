import React from 'react';
import Link from 'next/link';

export default function Navbar() {
	return (
		<>
			<nav className='bottom-0 fixed text-center w-3/6 border-t-black-1px'>
				<div className="flex flex-row bg-white min-h-[12%]">
					<div className='basis-1/4 py-1'>
						<Link href="/">
							<i className='bx bx-home text-3xl active'></i>
						</Link>
					</div>
					<div className='basis-1/4 py-1'>
						<Link href="/">
							<i className='bx bx-search-alt-2 text-3xl text-gray-400' ></i>
						</Link>
					</div>
					<div className='basis-1/4 py-1'>
						<Link href="/">
							<i className='bx bx-bell text-3xl text-gray-400'></i>
						</Link>
					</div>
					<div className='basis-1/4 py-1'>
						<Link href="/">
							<i className='bx bx-envelope text-3xl text-gray-400' ></i>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}
