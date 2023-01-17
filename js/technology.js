let one  = document.getElementById('opt-one');
let two  = document.getElementById('opt-two');
let three  = document.getElementById('opt-three');
let img = document.getElementById('img');
let holder = document.getElementsByClassName('holder');
let body = document.getElementsByTagName('body')[0];

// if(body.style.width <= '768px'){
//     img.src = 'starter-code/assets/technology/image-launch-vehicle-landscape.jpg';
// }
one.addEventListener('click',()=>{
    let optOneArray = ['the terminology....','launch vehicle',"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"];
    one.classList.add('current');
    two.classList.remove('current');
    three.classList.remove('current');
    for(let i=0; i<holder.length; i++){
        holder[i].innerHTML = optOneArray[i];
    }
        // img.src = 'starter-code/assets/technology/image-launch-vehicle-landscape.jpg';
    
        img.src = 'starter-code/assets/technology/image-launch-vehicle-portrait.jpg';

    
})

two.addEventListener('click',()=>{
    let optTwoArray = ['The terminology...','Space capsule',"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."];
    one.classList.remove('current');
    two.classList.add('current');
    three.classList.remove('current');
    for(let i=0; i<holder.length; i++){
        holder[i].innerHTML = optTwoArray[i];
    }
        // img.src = 'starter-code/assets/technology/image-space-capsule-landscape.jpg';
    
    
        img.src = 'starter-code/assets/technology/image-space-capsule-portrait.jpg';

    
})

three.addEventListener('click',()=>{
    let optThreeArray = ['The terminology...','Spaceport',"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."];
    one.classList.remove('current');
    two.classList.remove('current');
    three.classList.add('current');
    for(let i=0; i<holder.length; i++){
        holder[i].innerHTML = optThreeArray[i];
    }
    //    img.src = 'starter-code/assets/technology/image-spaceport-landscape.jpg';
    
     img.src = 'starter-code/assets/technology/image-spaceport-portrait.jpg';

   
})


