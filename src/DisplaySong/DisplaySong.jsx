/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Navbar from '../components/Naavbar/Navbar'
import { PlayerContext } from '../context/PlayerContext'
import { assets } from '../assets/assets'
import Player from '../components/Player/Player'

const DisplaySong = () => {

    const { track } = useContext(PlayerContext)

    return (
        < div className='rounded-3xl  bg-gradient-to-r from-indigo-500 from-30% via - purple - 500 to - pink - 500 to - 50 % '>
            <div className='p-5'>
                <Navbar />
            </div >
            <div className='flex flex-col  rounded-2xl mt-5 justify-center items-center bg-gradient-to-r from-indigo-500 from-30%  to-pink-600 to-90% '>
                <img className='w-[400px] h-[480px] mt-10 mb-5 items-center rounded-md hover:scale-[0.8] transition-[0.5s] ' src={track.image} alt=' ' />
                <h1>{track.name}</h1>
                <p>
                    <img className='w-[260px] mb-3' src={assets.beastnest_logo} alt='' />
                </p>
            </div>


        </div >
    )
}

export default DisplaySong