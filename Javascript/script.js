const obtenerValorInput = () => {
    let inputTexto = document.getElementById('Input_Personaje');
    let valor = inputTexto.value
    peticionApi(valor)
   }

   const peticionApi = (Personaje) => {
     const baseUrl = 'https://rickandmortyapi.com';
     const enpoint = `/api/${Personaje}`;
     const url = `${baseUrl}${enpoint}`;

     axios.get(url)
     .then(res => printData(res.data))
     .catch(err => console.log(err))

   }

   const printData = (data) =>{
  let respuesta = document.getElementById('Lista-personajes');
  respuesta.innerHTML = `
  <h1>${data[0]['name']}</h1>
  `



   }
  //arrays
   let vehiculos1 = ["Chevrolet","Mazda"]
  let Vehiculos2 = ["ferrari","Mclaren"]

  let todoslosvehiculos = vehiculos1.concat(Vehiculos2)
  console.log(todoslosvehiculos)
//programacion funcional
  const suma = function(a ,b){

    return a + b;
}

  console.log(suma(3,5))