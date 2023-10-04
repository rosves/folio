// banner animation

var textPath = document.querySelector('#text-path');

var textContainer = document.querySelector('#text-container');

var path = document.querySelector( textPath.getAttribute('href') );

var pathLength = path.getTotalLength();
console.log(pathLength);

function updateTextPathOffset(offset){
  textPath.setAttribute('startOffset', offset); 
}

updateTextPathOffset(pathLength);

function onScroll(){
  requestAnimationFrame(function(){
    var rect = textContainer.getBoundingClientRect();
    var scrollPercent = rect.y / window.innerHeight;
    console.log(scrollPercent);
    updateTextPathOffset( scrollPercent * 2 * pathLength );
  });
}

window.addEventListener('scroll',onScroll);

// header animation

const cursor = document.querySelector(".cursor");
const frontend = document.querySelector(".dev");
const title = document.querySelector("#title");

const hero = document.querySelector('[data-hero]')

window.addEventListener('mousemove', (e) => {
	const { clientX, clientY } = e
  const x = Math.round((clientX / window.innerWidth) * 90)
  const y = Math.round((clientY / window.innerHeight) * 90)
	
	hero.style.setProperty('--x', `${x}%`)
	hero.style.setProperty('--y', `${y}%`)
  
})