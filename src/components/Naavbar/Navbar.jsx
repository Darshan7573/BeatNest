/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='w-full mt-2 flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt='' />
                    <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt='' />
                    <img className='w-10 h-9' src={assets.logo} alt='' />
                </div>
                <div className='flex mr-2 items-center gap-4'>
                    <button className='text-lg'>Sign Up</button>
                    <button className='bg-white text-black px-6 py-2 ml-3 rounded-full'>Login</button>
                </div>
            </div>
        </>
    )
}

export default Navbar