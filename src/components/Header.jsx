import React from "react";
import { FaBars } from "react-icons/Fa";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<section>
			<nav className='w-[100%] h-[5rem] flex bg-slate-400/50 px-10 justify-between place-items-center '>
				<div className=' flex  justify-evenly items-cente w-[40%] md:w-[50%] sm:w-[50%] capitalize '>
					<Link to='/' className='hover:bg-slate-500 outline-none p-2'>
						home
					</Link>
					<Link to='/' className='hover:bg-slate-500 outline-none p-2'>
						create
					</Link>
					<Link to='/' className='hover:bg-slate-500 outline-none p-2'>
						about
					</Link>
				</div>

				<div className=''>
					<Link to='/'>Login</Link>
				</div>
			</nav>
			<button className=' hidden sm:block'>
				<FaBars></FaBars>
			</button>
		</section>
	);
};

export default Header;
