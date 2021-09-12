const musicContainer=document.querySelector('.container')
const playBtn=document.querySelector('#play')
const prevBtn=document.querySelector('#prev')
const nextBtn=document.querySelector('#next')
const audio=document.querySelector('#audio')
const progressContainer=document.querySelector('.progress-container')
const progress=document.querySelector('.progress')
const title=document.querySelector('#title')
const cover=document.querySelector('#cover')

const songs=['kgf','Scam1992','SpiderMan3']

let songIndex=0;

loadsong(songs[songIndex])

function loadsong(song){
    title.innerText=song
    audio.src=`music/${song}.mp3`
    cover.src=`imgs/${song}.jpg`
}

function playSong(){
    musicContainer.classList.add('music-play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('music-play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause()
}


function updateProgress(e){
    const {duration,currentTime} = e.srcElement
    const progressPercent = (currentTime/duration)*100
    progress.style.width=`${progressPercent}%`
}

function nextSong(){
    songIndex++;
    if(songIndex>songs.length-1){
        songIndex=0
    }
    loadsong(songs[songIndex]);
    playSong();
}

function prevSong(){
    songIndex--;
    if(songIndex<0){
        songIndex=songs.length-1;
    }
    loadsong(songs[songIndex]);
    playSong();
}

//Event listeners
playBtn.addEventListener('click',()=>{
    const isPlaying=musicContainer.classList.contains('music-play')
    if(isPlaying){
        pauseSong()
    }
    else{
        playSong()
    }
})

nextBtn.addEventListener('click',nextSong);
prevBtn.addEventListener('click',prevSong);

audio.addEventListener('timeupdate',updateProgress)
audio.addEventListener('ended',nextSong)