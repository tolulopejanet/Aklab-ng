function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  let toggler = document.querySelector('.toggler');
  let nav = document.querySelector(".nav2");
  console.log(toggler);
  let toggleState = 0;
  function showNavMenu() {
    this.children[0].classList.toggle('bar1');
    this.children[1].classList.toggle('bar2');
    this.children[2].classList.toggle('bar3');

    if (toggleState == 0){
        nav.style.display = "block";
        document.querySelector(".welcome-text").style.display ="none";
        toggleState += 1;

    }
    else{
        nav.style.display = "none";
        document.querySelector(".welcome-text").style.display ="block";
        toggleState -= 1;
    }
}
toggler.addEventListener('click', showNavMenu);