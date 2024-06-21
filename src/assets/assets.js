import bell_icon from './bell.png'
import home_icon from './house-solid.svg'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import beastnest_logo from './beatnest-logo-white-transparent.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from './song1.mp3'
import song2 from './song2.mp3'
import song3 from './song3.mp3'
import artist1 from './artist1.jpeg'
import artist2 from './artist2.jpeg'
import artist3 from './artist3.jpeg'
import artist4 from './artist4.jpeg'
import artist5 from './artist5.jpeg'
import artist6 from './artist6.jpeg'
import artist7 from './artist7.jpeg'
import album1 from './album1.jpeg'
import album2 from './album2.jpeg'
import album3 from './album3.jpeg'
import album4 from './album4.jpeg'
import album5 from './album5.jpeg'
import album6 from './album6.jpeg'
import album7 from './album7.jpeg'
import logo from './beatnest-favicon-white.png'
import imageUpload from './image_upload.jpg'
import musicUpload from './musicupload.jpg'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    beastnest_logo,
    clock_icon,
    logo,
    imageUpload,
    musicUpload
}

export const artists = [
    {
        id: 0,
        name: "Pritam",
        image: artist1,
        desc: "Artist"
    },
    {
        id: 2,
        name: "Arijit Singh",
        image: artist2,
        desc: "Artist"
    },
    {
        id: 3,
        name: "A.R.Rahaman",
        image: artist3,
        desc: "Artist"
    },
    {
        id: 4,
        name: "Anirudh Ravichander",
        image: artist4,
        desc: "Artist"
    },
    {
        id: 5,
        name: "Vishal Mishra",
        image: artist5,
        desc: "Artist"
    },
    {
        id: 6,
        name: "Sachin-Jigar",
        image: artist6,
        desc: "Artist"
    },
    {
        id: 7,
        name: "Badshah",
        image: artist7,
        desc: "Artist"
    },


]

export const albumsData = [
    {
        id: 0,
        name: "Top 50 Global",
        image: img8,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#2a4365"
    },
    {
        id: 1,
        name: "Top 50 India",
        image: img9,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#22543d"
    },
    {
        id: 2,
        name: "Trending India",
        image: img10,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#742a2a"
    },
    {
        id: 3,
        name: "Trending Global",
        image: img16,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#44337a"
    },
    {
        id: 4,
        name: "Mega Hits,",
        image: img11,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#234e52"
    },
    {
        id: 5,
        name: "Happy Favorites",
        image: img15,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#744210"
    }
]

export const songsData = [
    {
        id: 0,
        name: "Song One",
        image: img1,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:00"
    },
    {
        id: 1,
        name: "Song Two",
        image: img2,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:20"
    },
    {
        id: 2,
        name: "Song Three",
        image: img3,
        file: song3,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:32"
    },
    {
        id: 3,
        name: "Song Four",
        image: img4,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:50"
    },
    {
        id: 4,
        name: "Song Five",
        image: img5,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:10"
    },
    {
        id: 5,
        name: "Song Six",
        image: img14,
        file: song3,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:45"
    },
    {
        id: 6,
        name: "Song Seven",
        image: img7,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:18"
    },
    {
        id: 7,
        name: "Song Eight",
        image: img12,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:35"
    }
]

export const populatAlbums = [
    {
        id: 1,
        name: "love hotel",
        artist: "leftovermax",
        image: album1
    },
    {
        id: 2,
        name: "Animal",
        artist: "Manan Bhardwaj, Vishal Mishra, Jaani",
        image: album2
    },
    {
        id: 3,
        name: "Ek Tha Raja",
        artist: "Badshah",
        image: album3
    },
    {
        id: 4,
        name: "Moosetape",
        artist: "Sidhu Moose Wala",
        image: album4
    },
    {
        id: 5,
        name: "Aavesham(Original)",
        artist: "Sushin Shyam, Vinayak Sasikumar",
        image: album5
    },
    {
        id: 6,
        name: "Aashiqui 2",
        artist: "Mithoon, Ankit Tiwari, Jeet Gannguli",
        image: album6
    },
    {
        id: 7,
        name: "Still Rollin",
        artist: "Shubh",
        image: album7
    },

]