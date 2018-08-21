const viewFood = document.getElementById("allFood");
const searchFood = document.getElementById("searchName");

// Utilizaré Xhr 
// const getDataFood = (string, url, callback) => {
const foodXhr = new XMLHttpRequest();
foodXhr.open('GET', '../dataFood/foodDelicious.json', true);
foodXhr.addEventListener('load', event => {
  if (event.target.readyState === 4 && event.target.status === 200) {
    const response = (JSON.parse(event.target.responseText));
    response.map(food => {
      showAllPlaces(food.name, food.image, food.district, food.address, food.ocassionToEat, food.typeFood, food.phone, food.hours, food.overagePlate);
    });
  }
});
foodXhr.send();
// };

//Pintar en pantalla data
const showAllPlaces = (name, image, district, address, ocassionToEat, typeFood,phone, hours,  overagePlate) => {
  let template = '';

  template += `
  <div>
  <h4> ${ocassionToEat} </h4>
  <h5 > ${name} </h5>
  <img src="${image}" alt="images1"
  </div>
  <p> Distrito: ${district} </p>
  <p> Dirección: ${address} </p>
  <p> Tipo de comida: ${typeFood} </p>
  <p> Teléfonos: ${phone}</p>
  <p> Horarios: ${hours}</p>
  <p> Plato promedio: ${overagePlate}</p>
  </div>
  `;

  viewFood.innerHTML += template;
};

