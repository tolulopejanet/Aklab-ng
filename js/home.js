function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  let nav = document.querySelector(".nav");
  function showNavMenu() {
    // console.log(this.children);
    this.classList.toggle('fa-bars');

    if (toggleState == 0){
        nav.style.display = "none";
        toggleState += 1;

    }
    else{
        nav.style.display = "block";
        toggleState -= 1;
    }
}