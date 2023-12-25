const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music
const songs = [
	{
		name: "jacinto-1",
		displayName: "Electric Chill Machine",
		artist: "Jacinto Design",
	},
	{
		name: "jacinto-2",
		displayName: "Seven Nation Army (Remix)",
		artist: "Jacinto Design",
	},
	{
		name: "jacinto-3",
		displayName: "Goodnight, Disco Queen",
		artist: "Jacinto Design",
	},
	{
		name: "metric-1",
		displayName: "Front Row (Remix)",
		artist: "Metric/Jacinto Design",
	},
];

// Check if Playing
let isPlaying = false;

// play
function playSong() {
	isPlaying = true;
	music.play();
	playBtn.classList.replace("fa-play", "fa-pause");
	playBtn.setAttribute("title", "Pause");
}

// pause
function pauseSong() {
	isPlaying = false;
	music.pause();
	playBtn.classList.replace("fa-pause", "fa-play");
	playBtn.setAttribute("title", "Play");
}

// Play or Pause Event Listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
	title.textContent = song.displayName;
	artist.textContent = song.artist;
	music.src = `music/${song.name}.mp3`;
	image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
	songIndex--;
	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}
	loadSong(songs[songIndex]);
	playSong();
}

// Next Song
function nextSong() {
	songIndex++;
	if (songIndex > songs.length - 1) {
		songIndex = 0;
	}
	loadSong(songs[songIndex]);
	playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Event Listeners
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
