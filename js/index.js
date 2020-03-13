// Your code goes here
const banner = document.querySelector(".intro img");
banner.addEventListener('mouseenter', ()=>{
    banner.style.transform = "scale(1.2)"
    banner.style.transition = "all 0.3s"
})
banner.addEventListener('mouseleave', () =>{
    banner.style.transform = "scale(1)"
    banner.style.transition = "all 0.3s"
})