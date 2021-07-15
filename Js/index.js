 


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

const scrollSite = () => {

   if (window.scrollY > 100) {
      document.getElementById("header").classList.add("sticky-header");
      document.getElementById("top").style.display = "block";
      
   }
   else {
      document.getElementById("header").classList.remove("sticky-header")
      document.getElementById("top").style.display = "none";
    
      
   }
}