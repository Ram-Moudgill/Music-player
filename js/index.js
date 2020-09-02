// audio.play();
const musicRecord=[
    {
        song:"01 Sanam Re (Title Song) Arijit Singh 320Kbps.mp3",
        songName:'Sanam Re',
        singerName:'Arijit Singh',
        thumbnail:'sanamre.jpg'
    },
    {
        song:"12 Mahine - Kulwinder Billa (DjPunjab.Com).mp3",
        songName:'12 Mahine',
        singerName:'Kulwinder Billa',
        thumbnail:'12Mahine.jpg'
    },
    {
        song:"Adha Pind Ft Sukh Sandhua - Gurj Sidhu (DJJOhAL.Com).mp3",
        songName:'Adha Pind',
        singerName:'Gurj Sidhu',
        thumbnail:'aadhapind.jpg'
    },
    {
        song:"Bekhayali - Sachet Tandon (DJJOhAL.Com).mp3",
        songName:'Bekhayli',
        singerName:'Sachet Tandon',
        thumbnail:'Bekhayli.jpg'
    } 
]
const backward=document.getElementById('backward');
const forward=document.getElementById('forward');
const play=document.getElementById('play');
const audio=document.getElementById('audio');
const songName=document.getElementById('song-name');
const singerName=document.getElementById('singer-name');
const thumbnail=document.getElementById('img-thumbnail');

let count=0;
console.log(musicRecord.length);
forward.addEventListener('click',()=>
{
    count++;
    console.log(count);
    if(count>musicRecord.length-1)
    {
        count=0;
    }
    // console.log(count);
    audio.src=`music/${musicRecord[count].song}`;
    audio.play();
    play.className="fas fa-pause";
    songName.innerText=musicRecord[count].songName;
    singerName.innerText=musicRecord[count].singerName;
    thumbnail.src=`images/${musicRecord[count].thumbnail}`;
})
backward.addEventListener('click',()=>
{
    count--;
    if(count<0)
    {
        count=musicRecord.length;
        count--;
    }
    console.log(count);
    audio.src=`music/${musicRecord[count].song}`;
    audio.play();
    songName.innerText=musicRecord[count].songName;
    singerName.innerText=musicRecord[count].singerName;
    thumbnail.src=`images/${musicRecord[count].thumbnail}`;
})
play.addEventListener('click',()=>
{
    if(play.className==="fas fa-play")
    {
        audio.play();
        play.className="fas fa-pause"
    }
    else
    {
        play.className="fas fa-play";
        audio.pause();
    }
})