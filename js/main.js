let links = document.querySelectorAll(".close");

links.forEach(function(link){
  link.addEventListener("click", function(event){
    event.preventDefault();
    let content = document.querySelector(".content");

    content.classList.remove("zoomIn");
    content.classList.remove("animated");

    content.classList.add("zoomOut");
    content.classList.add("animated");

    setTimeout(function(){
      location.href = "/";
    }, 600);

  });
});
