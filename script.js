

var sections = document.querySelectorAll('section');
console.log(sections);
sections.forEach(function(section){
    section.addEventListener("mouseenter", function expand(){
        this.lastElementChild.style.transition = "all .8s linear";
        this.lastElementChild.style.height = "100%";
        this.lastElementChild.style.padding = "45px 30px";
        
    });
    section.addEventListener("mouseleave", function close() {
      this.lastElementChild.style.transition = "all 0.4s linear";
      this.lastElementChild.style.height = "0";
      this.lastElementChild.style.padding = "0";
    });
});