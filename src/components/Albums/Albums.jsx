/* eslint-disable no-unused-vars */
import React from 'react'
import { populatAlbums } from '../../assets/assets'


export const Albums = () => {



    return (
        <div className='my-5 mt-7'>
            <div className='flex justify-between mt-4'>
                <h1 className='font-bold text-2xl mt-4 mb-4 ' >Popular albums</h1>
                <p className='text-grey-300 font-bold'>Show all</p>
            </div>
            <div className='flex overflow-auto '>
                {populatAlbums.map((album, index) => {
                    return (
                        <div key={index} className='min-w-[180px] p-2 px-3 hover:bg-slate-900 mb-[80px] w-[100%] h-[100%] rounded-md'>
                            <img className='w-[95%] h-[70%] p-1' src={album.image} alt='' />
                            <p className='mt-2'>{album.name}</p>
                            <p className='mt-2'>{album.artist}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
