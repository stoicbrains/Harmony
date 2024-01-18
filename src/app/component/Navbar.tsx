import React from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { signOut } from 'next-auth/react';
import Button from './button';

const Navbar = async () => {
  const session = await getServerSession(options);
  console.log('session.user:', session?.user?.role);
  const isAdmin = session?.user?.role === 'admin';
  console.log(isAdmin);

  const handleSignOut = async () => {
    await signOut();
    // After signing out, redirect to home or any desired page
    window.location.href = '/';
  };

  return (
    <>
      <div className='relative z-10 top-0 left-0 '>
        <span className='absolute top-[0.5rem] left-0 text-[2rem] font-extrabold tracking-[5px] text-green-950'>Har<span className='text-green-800'>mony</span></span>
        <div className='flex justify-end translate-x-[-10rem] translate-y-[0.9rem]'>
          <ul className='flex justify-center gap-[3rem] text-green-900 font-semibold tracking-[3px]'>
            <li><Link href={'/'} className='relative before:absolute before:bottom-[-3px] before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-300 before:ease-in-out before:bg-white before:hover:w-full'>Home</Link></li>
            <li><Link href={'/'} className='relative before:absolute before:bottom-[-3px] before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-300 before:ease-in-out before:bg-white before:hover:w-full'>AboutUs</Link></li>
            <li><Link href={isAdmin ? '/psychologist' : '/consult'} className='relative before:absolute before:bottom-[-3px] before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-300 before:ease-in-out before:bg-white before:hover:w-full'>Consult</Link></li>
            <li><Link href={'/Query'} className='relative before:absolute before:bottom-[-3px] before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-300 before:ease-in-out before:bg-white before:hover:w-full'>Query</Link></li>
            </ul>
            <div>
              {session ? (
               <div className='absolute top-[-0.5rem] right-[-7rem] ml-[20rem]'><Button/></div>
              ) : (
                <Link href={'/api/auth/signin'} className='relative right-[-7rem] backdrop-blur-sm before:absolute before:z-[-1] before:bottom-[-3px] before:top-0 before:left-0 before:h-[100%] before:w-0 before:transition-all before:duration-300 before:ease-in-out before:bg-white before:hover:w-full border-2 rounded-md border-white p-2'>Login</Link>
              )}
            </div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
