/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate, Link } from 'react-router-dom'

const SideBar = () => {

    const navigate = useNavigate()


    return (
        <div className='w-[35%] h-full p-2 flex-col gap-2 text-white hidden  lg:flex'>
            <div className='bg-[#121212] h-[25%] rounded flex flex-col justify-around'>
                <img className='w-32 ml-6' src={assets.beastnest_logo} alt='' />
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <Link className='flex  items-center gap-2 ' to="/">
                        <img className='w-6' src={assets.home_icon} alt='' />
                        <p className='font-bold'>Home</p>
                    </Link>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.search_icon} alt='' />
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className='bg-[#121212] mt-3 h-[85%] rounded]'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src={assets.stack_icon} />
                        <p className='font-semi-bold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5' src={assets.arrow_icon} />
                        <img className='w-5' src={assets.plus_icon} />
                    </div>
                </div>
                <div className='py-3  bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-1'>
                    <h1 className='font-semi-bold ml-2'>Create your first playlist</h1>
                    <p className='ml-2 font-light'>it&#39;s easy, we&#39;ll help you</p>
                    <button className='bg-white ml-2 rounded-full px-3 py-1 mt-3 text-black'>Create playlist</button>
                </div>

                <div className='py-3  bg-[#242424] m-2 mt-6 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-1'>
                    <h1 className='font-semi-bold ml-2'>Let&#39;s find some podcasts to follow</h1>
                    <p className='ml-2 font-light'>we&#39;ll keep you updated on new episodes</p>
                    <button className='bg-white ml-2 rounded-full px-3 py-1 mt-3 text-black'>Browse podcasts</button>
                </div>
            </div>
        </div >
    )
}

export default SideBar