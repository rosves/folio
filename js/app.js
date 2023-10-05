// page animations 
const tl = gsap.timeline();

tl.from('.navLinks', {y:-50, stagger: .1, opacity:0})
.from('#title', {opacity :0})
.from('[data-hero]', {opacity : 0, duration : 0.5 })

const tl_2 = gsap.timeline({duration:0.2,
  scrollTrigger: {
    trigger: "#projet"}})

tl_2.from('.gallery-item h3', { opacity: 0, stagger: .2 })
.from('.gallery-item figure', { opacity : 0, scale : 0.5 , duration : 0.8, stagger :{
  from:'end',
  amount : 0.5
}})
.from('.gallery-item p', {opacity: 0, translateY: -10, duration: 0.3})



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

// scroll animation
AOS.init({
  duration: 1200,
});
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