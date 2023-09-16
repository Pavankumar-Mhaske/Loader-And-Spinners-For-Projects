document.addEventListener("DOMContentLoaded", function () {
    const startAnimationButton = document.getElementById("startAnimation");
    const container = document.querySelector(".container");
  
    startAnimationButton.addEventListener("click", function () {
      container.classList.add("blur");
      setTimeout(() => {
        container.classList.remove("blur");
      }, 3000);
    });
  });
  