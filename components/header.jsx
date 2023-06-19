import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	return (
		<nav className='top-0 fixed text-center w-3/6 border-b-black-1px z-[1]'>
			<div className="bg-white relative h-[3.3rem]">
				<div className="flex h-full justify-between items-end py-1">
					<div className="pl-[1.5%]">
						<div className="rounded-full overflow-hidden relative h-[2.5rem] w-[2.5rem]">
							<Link href="/">
								<Image fill alt="picture" src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"/>
							</Link>
						</div>
					</div>
					<div className="">
						<i className='bx bxl-twitter text-blue-400 text-4xl'></i>
					</div>
					<div className="pr-[1.5%]">
						<i className='bx bx-star text-4xl' ></i>
					</div>
				</div>
			</div>
		</nav>
	);
}
