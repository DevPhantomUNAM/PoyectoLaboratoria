var firebaseConfig = {
    apiKey: "AIzaSyB5nDb1mboKLIakx_mRrYMS8g0Fc3gifEM",
    authDomain: "laboratoria-db50c.firebaseapp.com",
    databaseURL: "https://laboratoria-db50c.firebaseio.com",
    projectId: "laboratoria-db50c",
    storageBucket: "laboratoria-db50c.appspot.com",
    messagingSenderId: "119196455175",
    appId: "1:119196455175:web:f52fbbb36badaa7c2535a2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var numeroDePedidos = 0;
var datos = []

$(document).ready(function () {
    enviar = firebase.database().ref("Pedidos/");

    enviar.on("child_added", function (data) {

        datos.push(data.val());

        numeroDePedidos = datos.length;

    })


})



var cafeA = document.getElementById('cafeA');
var cafeL = document.getElementById('cafeL');
var sandwich = document.getElementById('sandwich');
var jugo = document.getElementById('jugo');

var cuenta = document.getElementById('productos');
var total = document.getElementById('total');


var actualizacionCuenta = 0;





var pedidos = [];
var megapedidos = []

var mesa1 = {
    mesa: 'mesa1',
    total: 0,
    productos: pro = []
}


cafeA.addEventListener('click', function () {

    var tr = document.createElement('tr');

    var eliminar = document.createElement('th');
    var producto = document.createElement('td');

    var textoProducto = document.createTextNode('Cafe Americano');

    var precio = document.createElement('td');

    var textoPrecio = document.createTextNode('$5')


    producto.appendChild(textoProducto);
    precio.appendChild(textoPrecio);

    tr.appendChild(eliminar);
    tr.appendChild(producto);
    tr.appendChild(precio);

    cuenta.appendChild(tr);

    mesa1.total = mesa1.total + 5;
    total.innerText = 'Total: $' + mesa1.total;

    mesa1.productos.push(0);


});

cafeL.addEventListener('click', function () {
    var tr = document.createElement('tr');

    var eliminar = document.createElement('th');
    var producto = document.createElement('td');

    var textoProducto = document.createTextNode('Cafe con Leche');

    var precio = document.createElement('td');

    var textoPrecio = document.createTextNode('$7')


    producto.appendChild(textoProducto);
    precio.appendChild(textoPrecio);

    tr.appendChild(eliminar);
    tr.appendChild(producto);
    tr.appendChild(precio);

    cuenta.appendChild(tr);

    mesa1.total = mesa1.total + 7;
    total.innerText = 'Total: $' + mesa1.total;
    mesa1.productos.push(1);

});

sandwich.addEventListener('click', function () {
    var tr = document.createElement('tr');

    var eliminar = document.createElement('th');
    var producto = document.createElement('td');

    var textoProducto = document.createTextNode('Sandwich');

    var precio = document.createElement('td');

    var textoPrecio = document.createTextNode('$10')


    producto.appendChild(textoProducto);
    precio.appendChild(textoPrecio);

    tr.appendChild(eliminar);
    tr.appendChild(producto);
    tr.appendChild(precio);

    cuenta.appendChild(tr);

    mesa1.total = mesa1.total + 10;
    total.innerText = 'Total: $' + mesa1.total;
    mesa1.productos.push(2);

});

jugo.addEventListener('click', function () {
    var tr = document.createElement('tr');

    var eliminar = document.createElement('th');
    var producto = document.createElement('td');

    var textoProducto = document.createTextNode('Jugo');

    var precio = document.createElement('td');

    var textoPrecio = document.createTextNode('$7')


    producto.appendChild(textoProducto);
    precio.appendChild(textoPrecio);

    tr.appendChild(eliminar);
    tr.appendChild(producto);
    tr.appendChild(precio);

    cuenta.appendChild(tr);

    mesa1.total = mesa1.total + 7;
    total.innerText = 'Total: $' + mesa1.total;
    mesa1.productos.push(3);
});


var botonPedido = document.getElementById('pedido');

botonPedido.addEventListener('click', function () {


    pedidos.push(mesa1);





    var enviar = firebase.database().ref("Pedidos/" + numeroDePedidos);
    enviar.set(pedidos[actualizacionCuenta]);

    actualizacionCuenta++;


    alert("Se agrego el pedido")

    mesa1 = {
        mesa: 'mesa1',
        total: 0,
        productos: pro = []
    }

    enviar.on("child_added", function (data) {


        megapedidos.push(data.val());




        console.log(megapedidos);
    });


})



/*

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

*/

// $(document).ready(function(){

//   });



var botonDesayunos = document.getElementById('botonDesayunos');
var botonDia = document.getElementById('botonRestoDia');



botonDesayunos.addEventListener('click', function () {

    $('#contenedorAlimentos').remove();

    var alimentos = document.getElementById('alimentos');

    var contenedorAlimentos = document.createElement('section');
    contenedorAlimentos.setAttribute('id', 'contenedorAlimentos')


    var rowUno = document.createElement('div');
    rowUno.setAttribute('class', 'row justify-content-center desayunos');

    var columnaDe5 = document.createElement('div');
    columnaDe5.setAttribute('class', 'col-5');


    var card = document.createElement('div');
    card.setAttribute('class', 'card bg-dark text-white ');
    card.setAttribute('id', 'cafeA');

    var img = document.createElement('img');
    img.setAttribute('src', '../IMAGES/Cafe-americano.jpg');
    img.setAttribute('class', 'card-img');
    img.setAttribute('style', 'height: 25vh');


    card.appendChild(img);


    columnaDe5.appendChild(card);



    rowUno.appendChild(columnaDe5);

    ///////////////////////////////////////////////////////////////////////////
    var columnaDe5 = document.createElement('div');
    columnaDe5.setAttribute('class', 'col-5');


    var card = document.createElement('div');
    card.setAttribute('class', 'card bg-dark text-white ');
    card.setAttribute('id', 'cafeL');

    var img = document.createElement('img');
    img.setAttribute('src', '../IMAGES/cafe_con_leche.jpg');
    img.setAttribute('class', 'card-img');
    img.setAttribute('style', 'height: 25vh');


    card.appendChild(img);


    columnaDe5.appendChild(card);



    rowUno.appendChild(columnaDe5);
    //////////////////////////////////////////////////////////////
    /*
    
    */

    var rowDos = document.createElement('div');
    rowDos.setAttribute('class', 'row justify-content-center mt-5 desayunos');

    var columnaDe5 = document.createElement('div');
    columnaDe5.setAttribute('class', 'col-5');


    var card = document.createElement('div');
    card.setAttribute('class', 'card bg-dark text-white ');
    card.setAttribute('id', 'sandwich');

    var img = document.createElement('img');
    img.setAttribute('src', '../IMAGES/Sandwich-de-jamon-y-queso.jpg');
    img.setAttribute('class', 'card-img');
    img.setAttribute('style', 'height: 25vh');


    card.appendChild(img);


    columnaDe5.appendChild(card);



    rowDos.appendChild(columnaDe5);

    ///////////////////////////////////////////////////////////////////////////
    var columnaDe5 = document.createElement('div');
    columnaDe5.setAttribute('class', 'col-5');


    var card = document.createElement('div');
    card.setAttribute('class', 'card bg-dark text-white ');
    card.setAttribute('id', 'jugo');

    var img = document.createElement('img');
    img.setAttribute('src', '../IMAGES/jugos-frutales-.jpg');
    img.setAttribute('class', 'card-img');
    img.setAttribute('style', 'height: 25vh');


    card.appendChild(img);


    columnaDe5.appendChild(card);



    rowDos.appendChild(columnaDe5);
    //////////////////////////////////////////////////////////////

    contenedorAlimentos.appendChild(rowUno);
    contenedorAlimentos.appendChild(rowDos);

    alimentos.appendChild(contenedorAlimentos);

    //     $(".desayunos").show();
    //     $(".restoDia").hide();


     cafeA = document.getElementById('cafeA');
     cafeL = document.getElementById('cafeL');
     sandwich = document.getElementById('sandwich');
     jugo = document.getElementById('jugo');

     cafeA.addEventListener('click', function () {

        var tr = document.createElement('tr');
    
        var eliminar = document.createElement('th');
        var producto = document.createElement('td');
    
        var textoProducto = document.createTextNode('Cafe Americano');
    
        var precio = document.createElement('td');
    
        var textoPrecio = document.createTextNode('$5')
    
    
        producto.appendChild(textoProducto);
        precio.appendChild(textoPrecio);
    
        tr.appendChild(eliminar);
        tr.appendChild(producto);
        tr.appendChild(precio);
    
        cuenta.appendChild(tr);
    
        mesa1.total = mesa1.total + 5;
        total.innerText = 'Total: $' + mesa1.total;
    
        mesa1.productos.push(0);
    
    
    });
    
    cafeL.addEventListener('click', function () {
        var tr = document.createElement('tr');
    
        var eliminar = document.createElement('th');
        var producto = document.createElement('td');
    
        var textoProducto = document.createTextNode('Cafe con Leche');
    
        var precio = document.createElement('td');
    
        var textoPrecio = document.createTextNode('$7')
    
    
        producto.appendChild(textoProducto);
        precio.appendChild(textoPrecio);
    
        tr.appendChild(eliminar);
        tr.appendChild(producto);
        tr.appendChild(precio);
    
        cuenta.appendChild(tr);
    
        mesa1.total = mesa1.total + 7;
        total.innerText = 'Total: $' + mesa1.total;
        mesa1.productos.push(1);
    
    });
    
    sandwich.addEventListener('click', function () {
        var tr = document.createElement('tr');
    
        var eliminar = document.createElement('th');
        var producto = document.createElement('td');
    
        var textoProducto = document.createTextNode('Sandwich');
    
        var precio = document.createElement('td');
    
        var textoPrecio = document.createTextNode('$10')
    
    
        producto.appendChild(textoProducto);
        precio.appendChild(textoPrecio);
    
        tr.appendChild(eliminar);
        tr.appendChild(producto);
        tr.appendChild(precio);
    
        cuenta.appendChild(tr);
    
        mesa1.total = mesa1.total + 10;
        total.innerText = 'Total: $' + mesa1.total;
        mesa1.productos.push(2);
    
    });
    
    jugo.addEventListener('click', function () {
        var tr = document.createElement('tr');
    
        var eliminar = document.createElement('th');
        var producto = document.createElement('td');
    
        var textoProducto = document.createTextNode('Jugo');
    
        var precio = document.createElement('td');
    
        var textoPrecio = document.createTextNode('$7')
    
    
        producto.appendChild(textoProducto);
        precio.appendChild(textoPrecio);
    
        tr.appendChild(eliminar);
        tr.appendChild(producto);
        tr.appendChild(precio);
    
        cuenta.appendChild(tr);
    
        mesa1.total = mesa1.total + 7;
        total.innerText = 'Total: $' + mesa1.total;
        mesa1.productos.push(3);
    });



})

botonDia.addEventListener('click', function () {
    $('#contenedorAlimentos').remove();

    var alimentos = document.getElementById('alimentos');

    var contenedorAlimentos = document.createElement('section');
    contenedorAlimentos.setAttribute('id', 'contenedorAlimentos')


    var rowUno = document.createElement('div');
    rowUno.setAttribute('class', 'row justify-content-center desayunos');

    var columnaDe5 = document.createElement('div');
    columnaDe5.setAttribute('class', 'col-5');


    var card = document.createElement('div');
    card.setAttribute('class', 'card bg-dark text-white ');
    card.setAttribute('id', 'hamburgesa');

    var img = document.createElement('img');
    img.setAttribute('src', '../IMAGES/Hamburgesa.jpg');
    img.setAttribute('class', 'card-img');
    img.setAttribute('style', 'height: 25vh');


    card.appendChild(img);


    columnaDe5.appendChild(card);



    rowUno.appendChild(columnaDe5);

    ///////////////////////////////////////////////////////////////////////////
    var columnaDe5 = document.createElement('div');
    columnaDe5.setAttribute('class', 'col-5');


    var card = document.createElement('div');
    card.setAttribute('class', 'card bg-dark text-white ');
    card.setAttribute('id', 'papas');

    var img = document.createElement('img');
    img.setAttribute('src', '../IMAGES/papas.png');
    img.setAttribute('class', 'card-img');
    img.setAttribute('style', 'height: 25vh');


    card.appendChild(img);


    columnaDe5.appendChild(card);



    rowUno.appendChild(columnaDe5);
    //////////////////////////////////////////////////////////////
    /*
    
    */

    var rowDos = document.createElement('div');
    rowDos.setAttribute('class', 'row justify-content-center mt-5 desayunos');

    var columnaDe5 = document.createElement('div');
    columnaDe5.setAttribute('class', 'col-5');


    var card = document.createElement('div');
    card.setAttribute('class', 'card bg-dark text-white ');
    card.setAttribute('id', 'agua');

    var img = document.createElement('img');
    img.setAttribute('src', '../IMAGES/agua.jfif');
    img.setAttribute('class', 'card-img');
    img.setAttribute('style', 'height: 25vh');


    card.appendChild(img);


    columnaDe5.appendChild(card);



    rowDos.appendChild(columnaDe5);

    ///////////////////////////////////////////////////////////////////////////
    var columnaDe5 = document.createElement('div');
    columnaDe5.setAttribute('class', 'col-5');


    var card = document.createElement('div');
    card.setAttribute('class', 'card bg-dark text-white ');
    card.setAttribute('id', 'gaseosa');

    var img = document.createElement('img');
    img.setAttribute('src', '../IMAGES/gaseosa.jpg');
    img.setAttribute('class', 'card-img');
    img.setAttribute('style', 'height: 25vh');


    card.appendChild(img);


    columnaDe5.appendChild(card);



    rowDos.appendChild(columnaDe5);
    //////////////////////////////////////////////////////////////

    contenedorAlimentos.appendChild(rowUno);
    contenedorAlimentos.appendChild(rowDos);

    alimentos.appendChild(contenedorAlimentos);

    //     $(".desayunos").show();
    //     $(".restoDia").hide();

    /*
    /////////////////////////////////////////////////////////
    */

   var hamburgesa = document.getElementById('hamburgesa');
   var papas = document.getElementById('papas');
   var agua = document.getElementById('agua');
   var gaseosa = document.getElementById('gaseosa');

   hamburgesa.addEventListener('click', function () {

      var tr = document.createElement('tr');
  
      var eliminar = document.createElement('th');
      var producto = document.createElement('td');
  
      var textoProducto = document.createTextNode('Hamburgesa');
  
      var precio = document.createElement('td');
  
      var textoPrecio = document.createTextNode('$5')
  
  
      producto.appendChild(textoProducto);
      precio.appendChild(textoPrecio);
  
      tr.appendChild(eliminar);
      tr.appendChild(producto);
      tr.appendChild(precio);
  
      cuenta.appendChild(tr);
  
      mesa1.total = mesa1.total + 5;
      total.innerText = 'Total: $' + mesa1.total;
  
      mesa1.productos.push(4);
  
  
  });
  
  papas.addEventListener('click', function () {
      var tr = document.createElement('tr');
  
      var eliminar = document.createElement('th');
      var producto = document.createElement('td');
  
      var textoProducto = document.createTextNode('Papas a la francesa');
  
      var precio = document.createElement('td');
  
      var textoPrecio = document.createTextNode('$3')
  
  
      producto.appendChild(textoProducto);
      precio.appendChild(textoPrecio);
  
      tr.appendChild(eliminar);
      tr.appendChild(producto);
      tr.appendChild(precio);
  
      cuenta.appendChild(tr);
  
      mesa1.total = mesa1.total + 3;
      total.innerText = 'Total: $' + mesa1.total;
      mesa1.productos.push(5);
  
  });
  
  agua.addEventListener('click', function () {
      var tr = document.createElement('tr');
  
      var eliminar = document.createElement('th');
      var producto = document.createElement('td');
  
      var textoProducto = document.createTextNode('Agua');
  
      var precio = document.createElement('td');
  
      var textoPrecio = document.createTextNode('$5')
  
  
      producto.appendChild(textoProducto);
      precio.appendChild(textoPrecio);
  
      tr.appendChild(eliminar);
      tr.appendChild(producto);
      tr.appendChild(precio);
  
      cuenta.appendChild(tr);
  
      mesa1.total = mesa1.total + 5;
      total.innerText = 'Total: $' + mesa1.total;
      mesa1.productos.push(6);
  
  });
  
  gaseosa.addEventListener('click', function () {
      var tr = document.createElement('tr');
  
      var eliminar = document.createElement('th');
      var producto = document.createElement('td');
  
      var textoProducto = document.createTextNode('Gaseosa');
  
      var precio = document.createElement('td');
  
      var textoPrecio = document.createTextNode('$7')
  
  
      producto.appendChild(textoProducto);
      precio.appendChild(textoPrecio);
  
      tr.appendChild(eliminar);
      tr.appendChild(producto);
      tr.appendChild(precio);
  
      cuenta.appendChild(tr);
  
      mesa1.total = mesa1.total + 7;
      total.innerText = 'Total: $' + mesa1.total;
      mesa1.productos.push(7);
  });
})