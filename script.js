const clamp=(v,min=0,max=1)=>Math.min(max,Math.max(min,v));
const hero=document.querySelector('.hero');
const layers={peak:document.querySelector('.peak'),far:document.querySelector('.far'),temple:document.querySelector('.temple'),near:document.querySelector('.near'),couple:document.querySelector('.couple-art'),meadow:document.querySelector('.meadow'),nandi:document.querySelector('.nandi'),left:document.querySelector('.hand-l'),right:document.querySelector('.hand-r'),intro:document.querySelector('.intro'),divine:document.querySelector('.divine')};
function onScroll(){
  const p=clamp(-hero.getBoundingClientRect().top/(hero.offsetHeight-innerHeight));
  layers.divine.style.opacity=1-clamp(p/.28);
  layers.intro.style.opacity=clamp((p-.2)/.12)*(1-clamp((p-.55)/.2));
  layers.intro.style.transform=`translateY(${(1-clamp((p-.2)/.12))*30}px)`;
  const meet=clamp((p-.08)/.48); layers.left.style.left=`${-52+47*meet}%`; layers.right.style.right=`${-52+47*meet}%`;
  layers.peak.style.transform=`translateY(${p*90}px)`; layers.far.style.transform=`translateY(${p*45}px)`; layers.temple.style.transform=`translateY(${p*25}px) scale(${.88+p*.18})`; layers.near.style.transform=`translateY(${p*15}px)`; layers.couple.style.transform=`translateY(${70-p*90}px)`; layers.nandi.style.transform=`translateX(${p*120}px)`;
  const ev=document.querySelector('.events'); if(innerWidth>700){const ep=clamp(-ev.getBoundingClientRect().top/(ev.offsetHeight-innerHeight));const track=document.querySelector('.event-track');const max=track.scrollWidth-innerWidth+innerWidth*.12;track.style.transform=`translateX(${-max*ep}px)`;}
}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);onScroll();
const observer=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('visible',e.isIntersecting)),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
const petals=document.querySelector('.petals'),petalImgs=['jasmine.png','rose.png','marigold.png'];for(let i=0;i<28;i++){const p=document.createElement('i');p.className='petal';p.style.left=`${Math.random()*100}%`;p.style.backgroundImage=`url(assets/petals/${petalImgs[i%3]})`;p.style.animationDuration=`${7+Math.random()*9}s`;p.style.animationDelay=`${-Math.random()*15}s`;p.style.setProperty('--drift',`${-120+Math.random()*240}px`);p.style.opacity=.45+Math.random()*.5;petals.append(p)}
function countdown(){const d=new Date('2028-02-23T19:00:00+05:30')-new Date(),safe=Math.max(0,d);document.querySelector('#days').textContent=Math.floor(safe/864e5);document.querySelector('#hours').textContent=Math.floor(safe/36e5)%24;document.querySelector('#minutes').textContent=Math.floor(safe/6e4)%60}countdown();setInterval(countdown,60000);
document.querySelector('#rsvpForm').addEventListener('submit',e=>{e.preventDefault();const name=new FormData(e.currentTarget).get('name');e.currentTarget.querySelector('.thanks').textContent=`Thank you${name?' '+name:''} — your response has been noted locally.`;});
