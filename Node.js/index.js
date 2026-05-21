
console.log(process.argv);

//const method = process.argv[2];         //
//const endpoint = process.argv[3];

const[,, method, endpoint, ...args] = process.argv;       //Forma desestructurada

console.log('Method: ${method}');
console.log('Endpoint: ${endpoint}');

console.log(endpoint.startsWith('products/'));               
console.log(endpoint.includes('/'));
console.log(args);

const partes = endpoint.split("/");
console.log(partes);
const recurso = partes[0]
const id = partes[1]

//const [recurso,id] = partes;            //Forma desestructurada

console.log(recurso, id);                         //Hasta aca sabemos que quiere el usuario


/*
switch(method){
  case "GET":                               //GET - Pedir
  case "get":                              
    console.log("Hadling GET request"); 
    break;
}
if (method === "GET" && endpoint === "products" ){
    console.log("Hadling GET request");

   // fetch('https://fakestoreapi.com/products/')
   //   .then((response)=>response.json())            
   //   .then((data)=>console.log(data))

   
   try{
    const response = await fetch('https://fakestoreapi.com/products/');
    const data = await response.json();
    console.log(data);
   } catch(error){
    console.error("Error fetching products:", error);
   }
}
*/


fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));


/*
fetch('https://fakestoreapi.com/products/2')            // modificar /número de id para poder ver a detalle los productos
  .then(response => response.json())
  .then(data => console.log(data));
*/

/*
const product = { title: 'New Product', price: 29.99 };
fetch('https://fakestoreapi.com/products', {             
  method: 'POST',                                          //POST - Crear
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
})
  .then(response => response.json())
  .then(data => console.log(data));
*/

fetch('https://fakestoreapi.com/products/1', {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(data => console.log(data));

