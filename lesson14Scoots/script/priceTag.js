const requestURL3 = 'data/priceTag.json';

fetch(requestURL3)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const vehicles = jsonObject['vehicles']
    for (let i = 0; i < vehicles.length; i++) {
      
      let card = document.createElement('article');
      let cardBox = document.createElement('div');
      let name = document.createElement('h4');
      let capacity = document.createElement('p');
      let divPriceBox = document.createElement('div');
      let divReservation = document.createElement('div');
      let reservation = document.createElement('p');
      let resHalf = document.createElement('p');
      let resFull = document.createElement('p');
      let divWalkIn = document.createElement('div');
      let walkIn = document.createElement('p');
      let walkHalf = document.createElement('p');
      let walkFull = document.createElement('p');
      let button = document.createElement('p');
      let img = document.createElement('img');


      img.setAttribute('src', vehicles[i].imageurl);
      img.setAttribute('alt', 'vehicleImage');
      cardBox.setAttribute('class', 'cardBox');
      name.innerHTML = vehicles[i].name;
      capacity.innerHTML = "Capacity: " + vehicles[i].capacity;
      capacity.setAttribute('class', 'capacity');
      divPriceBox.setAttribute('class', 'divPriceBox');
      divReservation.setAttribute('class', "divReservation");
      reservation.innerHTML = "Reservation";
      resHalf.innerHTML = "half-day: " + vehicles[i].reservation.halfday;
      resFull.innerHTML = "whole-day: " + vehicles[i].reservation.fullday;
      divWalkIn.setAttribute('class', "divWalkIn");
      walkIn.innerHTML = "Walk-In";
      walkHalf.innerHTML = "half-day: " + vehicles[i].walkin.halfday;
      walkFull.innerHTML = "half-day: " + vehicles[i].walkin.fullday;
      button.innerHTML = "check availability";
      button.setAttribute('class', 'buttonCheck');
      


      card.appendChild(cardBox);
      cardBox.appendChild(img);
      cardBox.appendChild(name);
      cardBox.appendChild(capacity);
      cardBox.appendChild(divPriceBox);
      divPriceBox.appendChild(divReservation);
      divReservation.appendChild(reservation);
      divReservation.appendChild(resHalf);
      divReservation.appendChild(resFull);
      divPriceBox.appendChild(divWalkIn);
      divWalkIn.appendChild(walkIn);
      divWalkIn.appendChild(walkHalf);
      divWalkIn.appendChild(walkFull);
      cardBox.appendChild(button);
      
      

      document.querySelector('.card').appendChild(card);

    }
});