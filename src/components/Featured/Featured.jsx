/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { albumsData } from '../../assets/assets'
import { songsData } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from '../../context/PlayerContext'
import axios from 'axios'

const Featured = () => {

    const navigate = useNavigate()

    const { playwithid } = useContext(PlayerContext)

    return (
        <div>
            <div className='mb-2 p-4 flex items-center justify-between'>
                <h1 className='my-5 text-2xl font-bold '>Featured charts</h1>
                <p className='font-bold'>Show All</p>
            </div>
            <div className='flex w-[100%] h-[100%] overflow-auto  '>
                {albumsData.map((album, index) => {
                    return (
                        <div onClick={() => navigate(`/album/${index}`)} key={index} className='min-w-[180px] p-2 px-3 hover:bg-slate-900 mb-[80px] w-[100%] h-[100%] cursor-pointer'>
                            <img className='w-[95%] h-[75%] p-3' src={album.image} alt='' />
                            <p className='mt-2'>{album.name}</p>
                            <p className='mt-2'>{album.desc}</p>
                        </div>
                    )
                })}
            </div>
            <div className='mb-4 flex items-center justify-between'>
                <h1 className='my-5 font-bold text-2xl'>Today&#39;s top chart</h1>
                <p>Show All</p>
            </div>
            <div className='flex overflow-auto'>
                {songsData.map((album, index) => {
                    return (
                        <div
                            key={index} className='min-w-[180px] p-2 px-3  mb-[80px] w-[100%] h-[100%] rounded-md  hover:bg-slate-900  cursor-pointer' >
                            <img onClick={() => playwithid(album.id)} className='w-[95%] h-[70%] p-1' src={album.image} alt='' />
                            <p className='mt-2'>{album.name}</p>
                            <p className='mt-2'>{album.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Featured