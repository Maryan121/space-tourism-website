let slideItems = document.getElementsByClassName('slide-items');
let img = document.getElementById('img');
//sliders
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
one.addEventListener('click',function(){
    let commanderArray = ['Commander','Douglas Hurley','Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.']
    img.src = 'starter-code/assets/crew/image-douglas-hurley.webp';
    img.classList.add('width');
    one.classList.add('current-one');
    two.classList.remove('current-one');
    three.classList.remove('current-one');
    four.classList.remove('current-one');
    for(let i=0; i<slideItems.length; i++){
        slideItems[i].innerHTML = commanderArray[i];
    }

})
two.addEventListener('click',function(){
    let enjineerArray = ['Flight Engineer','Anousheh Ansari','Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '];
    img.src = 'starter-code/assets/crew/image-anousheh-ansari.png';
    img.classList.add('width');
    two.classList.add('current-one');
    one.classList.remove('current-one');
    three.classList.remove('current-one');
    four.classList.remove('current-one');
    for(let i=0; i<slideItems.length; i++){
        slideItems[i].innerHTML = enjineerArray[i];
    }
})

three.addEventListener('click',function(){
    let pilotArray = ['Pilot','Victor Glover','Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '];
    img.src = 'starter-code/assets/crew/image-victor-glover.png';
    img.classList.add('width');
    three.classList.add('current-one');
    one.classList.remove('current-one');
    two.classList.remove('current-one');
    four.classList.remove('current-one');
    for(let i=0; i<slideItems.length; i++){
        slideItems[i].innerHTML = pilotArray[i];
    }
})

four.addEventListener('click',()=>{
    let specialistArray = [' Mission Specialist','Mark Shuttleworth','Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'];
    img.src = 'starter-code/assets/crew/image-mark-shuttleworth.png';
    four.classList.add('current-one');
    one.classList.remove('current-one');
    two.classList.remove('current-one');
    three.classList.remove('current-one');
    for(let i=0; i<slideItems.length; i++){
        slideItems[i].innerHTML = specialistArray[i];
    }
})