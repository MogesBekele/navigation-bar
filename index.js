const navSlide = ()=>{
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-links')
  const navLinks = document.querySelectorAll('.nav-links li')
  //toggle nav
  burger.addEventListener('click', function(){
    nav.classList.toggle('nav-active')
    //animation links
    navLinks.forEach((link, index)=>{
      if(link.style.animation){
       link.style.animation= "" 
      }else{
       link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+1}s`;
       console.log(index/7)
      }
      })
      burger.classList.toggle('toggle')
   })
   
   
}
navSlide();






