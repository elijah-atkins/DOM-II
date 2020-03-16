// Your code goes here
const banner = document.querySelector(".intro img");
banner.addEventListener('mouseenter', ()=>{
    banner.style.transform = "scale(1.25)"
    banner.style.transition = "all 0.3s"
})
banner.addEventListener('mouseleave', () =>{
    banner.style.transform = "scale(1)"
    banner.style.transition = "all 0.3s"
})

const logo = document.querySelector(".logo-heading");
logo.addEventListener('click', ()=>{
    logo.style.color = 'royalblue'
})
logo.addEventListener("dblclick", () => {
    logo.style.color = 'black'
})
const onClick = event => {

    event.target.style.color = 'green';
  }
const map = document.getElementsByClassName("img-content")


document.addEventListener('keydown', () => {
    map[0].style.transform = "rotate(180deg)"
    map[0].style.transition = "all 0.3s"
})

map[1].addEventListener('mouseover', () =>{
    map[1].style.opacity = "0.5"
    map[1].style.transition = "all 0.3s"
})

map[1].addEventListener('mouseout', () => {
    map[1].style.opacity = "1"
    map[1].style.transition = "all 0.3s"
})

const boat = document.querySelector('.content-destination img');

boat.addEventListener('wheel', () =>{
    boat.style.borderRadius= "50%"
    boat.style.transition = "all 0.3s"
})
boat.addEventListener('drag', () => {
    boat.style.border = '10px solid black'
    boat.style.transition = 'all 0.3s'
})
const footer = document.getElementsByClassName('footer')
window.addEventListener('resize', () => {
    footer[0].style.backgroundColor = 'orange'
    footer[0].style.transition = "all 3s"
})

const stopNav = document.querySelector(".nav");
stopNav.addEventListener('click', (event) =>{
    event.preventDefault();
    console.log('stopped!')
})

// 
// const destination = document.querySelector(".destination");
// destination.addEventListener('click', () =>{
//     destination.style.backgroundColor = 'lightgreen'
// })

// const button = document.querySelector(".btn");
// button.addEventListener('click', (event) => {
//     buttonc
//     event.stopPropagation();
// })

const destination = document.getElementsByClassName("destination");
for (let i = 0; i < destination.length; i++) {
    destination[i].addEventListener('click', ()=>{
        destination[i].style.backgroundColor = 'lightgreen';
    })
}

const button = document.getElementsByClassName("btn");
for (let i =0; i< destination.length; i++){
    button[i].addEventListener('click', () => {
        button[i].style.backgroundColor = 'darkgreen';
        event.stopPropagation();
    })
}