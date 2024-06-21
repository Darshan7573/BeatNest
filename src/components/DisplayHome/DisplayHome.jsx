/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../Naavbar/Navbar'
import Artists from '../Artists/Artists'
import { Albums } from '../Albums/Albums'
import Featured from '../Featured/Featured'

const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div>
                <Artists />
            </div>
            <div>
                <Albums />
            </div>
            <div>
                <Featured />
            </div>
        </>
    )
}

export default DisplayHome