window.addEventListener("DOMContentLoaded", function(e) {
    const orderButtons = document.querySelector("#event-information");
      
      orderButtons.addEventListener("click", function(e) {
        const button = e.currentTarget;
        const container = button.parentNode;
  
        const order = {
          title: container.querySelector("h1").innerText,
          date: container.querySelector(".date").innerText,
          speaker: container.querySelector(".speaker").innerText
        };
  
        localStorage.setItem("order", JSON.stringify(order));
  
        const url = window.location.href.replace("toobin.html", "../tickets.html");
        window.location.href = url;
      });
  });