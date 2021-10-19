document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
let player;
function startplayer() 
{
 player = document.getElementById('music');
 player.controls = false;
}


function togglePlay() {
  player.paused ? player.play() : player.pause();
  player.volume = document.getElementById("change_vol").value;
  console.log(player.volume);

};

function change_vol()
{
 player.volume=document.getElementById("change_vol").value;
}

function step_back()
{
 player.currentTime = 0;
};

function switch_song(a){
  let track = a.value;
  let current = document.getElementById("currently-playing");
  let songTitle = document.getElementById("current-song-title");
  let artist = document.getElementById("current-song-artist");
  switch(track){
    case "1":
      player.src = "music/youth.wav";
      player.play();
      current.src = "https://i.scdn.co/image/ab67616d00001e02ec3d15eab5bd77027abc4b23";
      songTitle.textContent = "Youth"
      artist.textContent = "Glass Animals"
      break
    case "2":
      player.src = "music/staykid.wav";
      current.src = "https://i.scdn.co/image/ab67616d00001e0241e31d6ea1d493dd77933ee5";
      songTitle.textContent = "Stay"
      artist.textContent = "The Kid LAROI"
      player.play();
      break
    case "3":
      player.src = "music/joji.wav";
      current.src = "https://i.scdn.co/image/ab67616d00001e02b6d007e03bcf0712d7735bd7";
      songTitle.textContent = "Gimme Love"
      artist.textContent = "Joji"
      player.play();
      break
    case "4":
      player.src = "music/imissuday.wav";
      player.play();
      songTitle.textContent = "Miss You Everyday"
      artist.textContent = "Trackhead"
      current.src = "https://i.scdn.co/image/ab67616d00001e028da67e835a715267b1348761";
      break
    case "5":
      player.src = "music/dire.wav";
      player.play();
      songTitle.textContent = "Sultans Of Swing"
      artist.textContent = "Dire Straits"
      current.src = "https://i.scdn.co/image/ab67616d00001e02c52a3eb62ac06372e4bddcb8";
      break
    case "6":
      player.src = "music/heatwaves.wav";
      player.play();
      songTitle.textContent = "HeatWaves"
      artist.textContent = "Glass Animals"
      current.src = "https://i.scdn.co/image/ab67616d00001e02ab9d1ae18b640b7b0ce390d4";
      break
  }

}