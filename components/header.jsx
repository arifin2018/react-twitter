import React from 'react';
import Image from 'next/image';

export default function Header() {
	return (
		<nav className='top-0 fixed text-center w-3/6 border-b-2 border-slate-700'>
			<div className="bg-white relative h-[3rem]">
				<div className="flex h-full justify-between items-end">
					<div className="pl-[1.5%]">
						<div className="rounded-full overflow-hidden relative h-[40px] w-[40px]">
							<Image fill alt="picture" src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"/>
						</div>
					</div>
					<div className="">
						<i className='bx bxl-twitter text-4xl' ></i>
					</div>
					<div className="pr-[1.5%]">
						<i className='bx bx-star text-3xl' ></i>
					</div>
				</div>
			</div>
		</nav>
	);
}
