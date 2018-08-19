const viewFood= document.getElementById("allFood");
const searchFood = document.getElementById("searchName");

// Utilizaré Xhr 
const getDataFood = (string, url, callback) => { 
  const foodXhr = new XMLHttpRequest();
  foodXhr.open('GET', url, true);
  foodXhr.addEventListener('load', event => {
    if (event.target.readyState === 4 && event.target.status === 200) {
      const response = (JSON.parse(event.target.responseText));
      callback(string, response);
    }
  });
  foodXhr.send();
}
//Aquí se llamará a todos los datos de restaurantes 
const food = (infoOfFood) => {
  getDataFood(infoOfFood,`../dataFood/${infoOfFood}/foodDelicious.json`);
}
//Variable para pintar en pantalla
viewFood.addEventListener('onload',(event) => {
  viewFood.innerHTML= '';
    Object.keys(allInfoOfood).forEach((id) => {
      const info = allInfoOfood[id];
      viewFood.innerHTM += `
      <div id= ${id}>
      <h4> ${food.ocassionToEat} </h4>
      <p > ${food.name} </p>
      <img src="${food.image}" alt="images1"
      </div>
      <p> Distrito: ${food.district} </p>
      <p> Dirección: ${food.address} </p>
      <p> Tipo de comida: ${food.typeFood} </p>
      <p> Teléfonos: ${food.phone}</p>
      <p> Horarios: ${food.hours}</p>
      </div>
      `
    })
})

    



