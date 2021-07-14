 


const openSideNav = () => {
      document.getElementById("side-navbar").style.width = "100%";
}
const closeSideNav = () => {
      window.event.preventDefault
      document.getElementById("side-navbar").style.width = "0%";
        
}

const topFunction = () => {
   document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollSite()};

const scrollSite = () =>{

if(window.scrollY >100)
   {
     document.getElementById("sticky-header").style.display ="flex";
     document.getElementById("header").style.display ="none";
   }
   else{
       document.getElementById("sticky-header").style.display ="none";
     document.getElementById("header").style.display ="flex";
      }
}