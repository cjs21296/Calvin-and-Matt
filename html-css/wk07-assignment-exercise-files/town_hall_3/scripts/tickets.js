window.addEventListener("DOMContentLoaded", function(e) {

  let locationBox = document.querySelector("#location");
  let location = {
    latitude: "unknown",
    longitude: "unknown"
  };

  window.navigator.geolocation.getCurrentPosition(
    function(position) {

      location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };

      locationBox.value = JSON.stringify(location);
    },
    function(error) {
      locationBox.value = JSON.stringify(location);
    });

  const order = localStorage.getItem("order");
  const ticketOrder = JSON.parse(order);

  if (order) {
    const title = document.querySelector("h1");
    const date = document.querySelector(".date");
    const speaker = document.querySelector(".speaker");
    const orderInput = document.querySelector("#event-info");

    title.innerText = ticketOrder.title;
    date.innerText = ticketOrder.date;
    speaker.innerText = ticketOrder.speaker;

    orderInput.value = order;

    // const img = pie.querySelector("img");
    // img.setAttribute("src", `images/${pieOrder.id}.png`);
    // img.setAttribute("alt", pieOrder.title);
  }
});