import * as THREE from "three";
//controls pour bouger en mode camera
//import {MapControls} from "three/addons/controls/OrbitControls.js"

// --- Scene

const scene = new THREE.Scene();
const loader = new THREE.TextureLoader();
scene.background = loader.load("../assets/foret.jpg");

// Camera

const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspect, 1, 5000);
camera.position.setZ(10);

// ---- cube computer

const geo = new THREE.BoxGeometry(1, 1, 1);
const OrdiScissors = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const CompScissors = new THREE.Mesh(geo, OrdiScissors);
CompScissors.position.set(-0.4, 1, -5);
scene.add(CompScissors);

const OrdiPaper = new THREE.MeshBasicMaterial({ color: 0xfe5993 });
const ComPaper = new THREE.Mesh(geo, OrdiPaper);
ComPaper.position.set(0, 15, -5);
scene.add(ComPaper);

const OrdiRock = new THREE.MeshBasicMaterial({ color: 0xf3732a });
const CompRock = new THREE.Mesh(geo, OrdiRock);
CompRock.position.set(0, 15, -5);
scene.add(CompRock);

// ---- cube player

const geometry = new THREE.CapsuleGeometry(1, 1, 2, 8);
const MaterialPaper = new THREE.MeshBasicMaterial({ color: 0xfe5993 });
const paper = new THREE.Mesh(geometry, MaterialPaper);
paper.position.set(-4, -3, 10);
scene.add(paper);

const MaterialScissors = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const scissors = new THREE.Mesh(geometry, MaterialScissors);
scissors.position.set(0, -3, 10);
scene.add(scissors);

const MaterialRock = new THREE.MeshBasicMaterial({ color: 0xf3732a });
const rock = new THREE.Mesh(geometry, MaterialRock);
rock.position.set(4, -3, 10);
scene.add(rock);

// Renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

    // const controls = new MapControls( camera, renderer.domElement );

function render() {
  //controls.update()
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();

// boutons

const PaperBtn = document.getElementById("paper");
const ScissorsBtn = document.getElementById("scissors");
const RockBtn = document.getElementById("rock");
const PossibleChoices = document.querySelectorAll("button");
let ComputerChoice = "";
let PLayerChoice = "";
let result = "";
const Score = document.getElementById("score");
const Scoreboard = document.getElementById("scoreboard");
const ScoreComputer = document.getElementById("score_computer") ;
const ScorePlayer = document.getElementById('score_player')

// Selection player

PaperBtn.addEventListener("click", (e) => {
  PLayerChoice = e.target.id;

  paper.position.set(0, -3, 0);
  scissors.position.set(0, -3, 10);
  rock.position.set(4, -3, 10);
  console.log(PLayerChoice);
  randomComputerChoice();
  WhoWins();
});

ScissorsBtn.addEventListener("click", (e) => {
  PLayerChoice = e.target.id;
  console.log(PLayerChoice);
  scissors.position.set(0, -3, 0);
  paper.position.set(0, -3, 10);
  rock.position.set(4, -3, 10);
  randomComputerChoice();
  WhoWins();
});

RockBtn.addEventListener("click", (e) => {
  PLayerChoice = e.target.id;
  console.log(PLayerChoice);
  rock.position.set(0, -3, 0);
  paper.position.set(0, -3, 10);
  scissors.position.set(4, -3, 10);
  randomComputerChoice();
  WhoWins();
});

// Selection ordinateur

function randomComputerChoice() {
  const randomChoice = Math.floor(Math.random() * PossibleChoices.length);

  if (randomChoice === 0) {
    (ComputerChoice = "rock"),
      CompRock.position.set(-0.4, 1, -5),
      CompScissors.position.set(0, 15, -5),
      ComPaper.position.set(0, 15, -5);
  }
  if (randomChoice === 1) {
    (ComputerChoice = "paper"),
      ComPaper.position.set(-0.4, 1, -5),
      CompScissors.position.set(0, 15, -5),
      CompRock.position.set(0, 15, -5);
  }
  if (randomChoice === 2) {
    (ComputerChoice = "scissors"),
      CompScissors.position.set(-0.4, 1, -5),
      ComPaper.position.set(0, 15, -5),
      CompRock.position.set(0, 15, -5);
  }
  console.log(randomChoice, ComputerChoice);
}

// Qui gagne ?

let count_computer = 0;
let count_player = 0;

function WhoWins() {
  if (ComputerChoice == PLayerChoice) {
    console.log("égalité");
    result = "it's a draw !";
  }

  if (ComputerChoice === "rock" && PLayerChoice === "scissors") {
     console.log("computer +1");
    result = "you lost !", count_computer++;
    ScoreComputer.innerHTML = count_computer;
  }

  if (ComputerChoice === "rock" && PLayerChoice === "paper") {
    console.log("player +1");
    result = "you win !", count_player++;
    ScorePlayer.innerHTML = count_player;
  }

  if (ComputerChoice === "paper" && PLayerChoice === "scissors") {
    console.log("player +1");
    result = "you win !", count_player++;
    ScorePlayer.innerHTML = count_player;
  }

  if (ComputerChoice === "paper" && PLayerChoice === "rock") {
     console.log("computer +1");
    result = "you lost !", count_computer++;
    ScoreComputer.innerHTML = count_computer;
  }

  if (ComputerChoice === "scissors" && PLayerChoice === "rock") {
     console.log("player +1");
    result = "you win !", count_player++;
    ScorePlayer.innerHTML = count_player;
  }

  if (ComputerChoice === "scissors" && PLayerChoice === "paper") {
    console.log("computer +1");
    result = "you lost !", count_computer++;
    ScoreComputer.innerHTML = count_computer;
  }
  Score.innerHTML = result;
};
function checkScreenSize() {
  const gameScript = document.getElementById('game-script');
  if (window.innerWidth <= 1460) {
    gameScript.remove(); 
  } else {
   
    const newScript = document.createElement('script');
    newScript.src = 'jeu.js';
    newScript.id = 'game-script';
    document.body.appendChild(newScript);
  }
}
window.addEventListener('load', checkScreenSize);

window.addEventListener('resize', checkScreenSize);