let moon = document.getElementById('moon');
let mars = document.getElementById('mars');
let europa = document.getElementById('europa');
let titan = document.getElementById('titan');
let items = document.getElementsByClassName('items');
let img = document.getElementById('img');

moon.addEventListener('click',function(){
    let moonArray = ['Moon','See our planet as you’ve never seen it before. Aperfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.','Avg. distance','384,400 km','Est. travel time','3 days'];
    moon.classList.add('current');
    mars.classList.remove('current');
    europa.classList.remove('current');
    titan.classList.remove('current');
    img.src = 'starter-code/assets/destination/image-moon.png';
    for(let i=0; i<items.length; i++){
        items[i].innerHTML = moonArray[i];
    }

})


mars.addEventListener('click',function(){
    let marsArray = ['mars','Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!','Avg. distance','225 mil. km','Est. travel time','9 months'];
    img.src = 'starter-code/assets/destination/image-mars.png';
    mars.classList.add('current');
    moon.classList.remove('current');
    europa.classList.remove('current');
    titan.classList.remove('current');
    for(let i=0; i<items.length; i++){
        items[i].innerHTML = marsArray[i];
    }
})


europa.addEventListener('click',function(){
    let europaArray = [' Europa','The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of     ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.','Avg. distance','628 mil. km','Est. travel time','3 years'];
    img.src = 'starter-code/assets/destination/image-europa.png';
    europa.classList.add('current');
    moon.classList.remove('current');
    mars.classList.remove('current');
    titan.classList.remove('current');
    for(let i=0; i<items.length; i++){
        items[i].innerHTML = europaArray[i];
    }
})

titan.addEventListener('click',function(){
    let titanArray =   ['Titan','The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',' Avg. distance',' 1.6 bil. km','Est. travel time','7 years'];
    img.src = 'starter-code/assets/destination/image-titan.png';
    titan.classList.add('current');
    moon.classList.remove('current');
    mars.classList.remove('current');
    europa.classList.remove('current');
    for(let i=0; i<items.length; i++){
        items[i].innerHTML = titanArray[i];
    }

})