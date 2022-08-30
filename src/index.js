import generateJoke from "./generateJoke";
import './styles/main.scss'
import smiley from './assets/smiley.svg'

const laughImg = document.getElementById('laughImg'); 
laughImg.src = smiley;

const jokeBtn = document.getElementById('jokeBtn'); 
jokeBtn.addEventListener('click', generateJoke);

generateJoke();