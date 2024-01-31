document.querySelector("#btn-search").addEventListener("click", () => {
  const tripAsked = {
    departure: document.querySelector("#add-departure").value,
    arrival: document.querySelector("#add-arrival").value,
    date: document.querySelector("#select-date").value,
  };
  fetch("http://localhost:3000/trips/findTrips", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tripAsked),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === false) {
        document.querySelector("#no-tripFound").innerHTML += `
      <img class="train" src="images/notfound.png" />
      <hr id="barreTrain">
      <p>No trip found.</p>
`;
      } else {
        console.log(data);
        
        for (let i = 0; i < data.allTrips.length; i++) {
            
          document.querySelector(
            "#content-right"
          ).innerHTML += `<div id="search-container"><div id="my-search"><div class="trips-search"><div class="textTrips-search">
        <p>${data.allTrips[i].departure} > ${data.allTrips[i].arrival}  ${data.allTrips[i].date} ${data.allTrips[i].price}€</p></div> 
        <div class="btnTrips-search"><button type="button" class="btn-book">Book</button></div>
        </div></div></div>`;
        }
      }
      document.querySelector("#no-search").remove();
    });
});
