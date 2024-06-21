/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";


export const PlayerContext = createContext()


const PlayerContextProvider = (props) => {

    const audioRef = useRef()
    const seekBg = useRef()
    const seekBar = useRef()

    const [track, setTrack] = useState(songsData[0])
    const [playerStatus, setPlayerStatus] = useState(false)
    const [volume, setVolume] = useState(1)
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0,
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })

    const play = () => {
        audioRef.current.play()
        setPlayerStatus(true)
    }

    const pause = () => {
        audioRef.current.pause()
        setPlayerStatus(false)
    }

    const playwithid = async (id) => {
        await setTrack(songsData[id])
        await audioRef.current.play();
        setPlayerStatus(true)
    }

    const previouse = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1])
            await audioRef.current.play()
            setPlayerStatus(true)
        }
    }

    const next = async () => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1])
            await audioRef.current.play()
            setPlayerStatus(true)
        }
    }

    // const seekSong = async (e) => {
    //     console.log(e)
    //     audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)
    // }

    const seekSong = (e) => {
        if (audioRef.current && seekBg.current) {
            const clickX = e.nativeEvent.offsetX;
            const seekWidth = seekBg.current.offsetWidth;
            const newTime = (clickX / seekWidth) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value
        setVolume(newVolume)
        audioRef.current.volume = newVolume
    }


    // const seekSong = (e) => {
    //     if (audioRef.current && seekBg.current) {
    //         const clickX = e.nativeEvent.offsetX;
    //         const seekWidth = seekBg.current.offsetWidth;
    //         const newTime = (clickX / seekWidth) * audioRef.current.duration;
    //         audioRef.current.currentTime = newTime;
    //     }
    // };

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%"
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60),
                    }
                })
            }
        }, 1000)
    }, [audioRef])

    const contextValue = {
        audioRef, seekBar, seekBg, track, setTrack, playerStatus, setPlayerStatus, time, setTime, play, pause, playwithid, previouse, next, seekSong, handleVolumeChange, volume
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider