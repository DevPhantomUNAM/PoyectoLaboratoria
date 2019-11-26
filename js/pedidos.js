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













///////////////////////////

// enviar.on("child_added", function(data) {


//     megapedidos.push(data.val());             



//     console.log(megapedidos);
//   });



// var contenedor = document.getElementById('contenedor');

// var seccion = document.createElement('section');

// var primerRow = document.createElement('div');
// primerRow.setAttribute('class', 'row mt-3');

// var columnaPrimerRow = document.createElement('div');
// columnaPrimerRow.setAttribute('class', 'col');

// var parrafoColumnaPrimerRow = document.createElement('p');

// var textoParrafo = document.createTextNode("Mesa 1");


// parrafoColumnaPrimerRow.appendChild(textoParrafo);

// columnaPrimerRow.appendChild(parrafoColumnaPrimerRow);

// primerRow.appendChild(columnaPrimerRow);

// seccion.appendChild(primerRow);



// //Creadno la card//

// var segundoRow = document.createElement('div');
// var columnaSegundoRow = document.createElement('div');
// columnaSegundoRow.setAttribute('class', 'col-2');

// var card = document.createElement('div');
// card.setAttribute('class', 'card bg-dark text-white mt-2 ');

// var img = document.createElement('img');
// img.setAttribute('src', '../IMAGES/Cafe-americano.jpg');
// img.setAttribute('class', 'card-img');
// img.setAttribute('style', 'height: 15vh');

// card.appendChild(img);
// columnaSegundoRow.appendChild(card);
// segundoRow.appendChild(columnaSegundoRow);



// seccion.appendChild(primerRow);
// seccion.appendChild(segundoRow);

// contenedor.appendChild(seccion);


var contenedorMayor = document.getElementById('contenedorMayor');



var megapedidos = []



 var intervalID = window.setInterval(miFuncion, 4000);

 function miFuncion() {

    $('#contenedor').remove();

    var contenedor = document.createElement('section');
        contenedor.setAttribute('id', 'contenedor');


    var enviar = firebase.database().ref("Pedidos/");
    enviar.on("child_added", function (data) {


        megapedidos = []





        







        megapedidos.push(data.val());

        //megapedidos[index].productos.length

        for (let index = 0; index < megapedidos.length; index++) {


            var seccion = document.createElement('section');

            var primerRow = document.createElement('div');
            primerRow.setAttribute('class', 'row mt-3');

            var columnaPrimerRow = document.createElement('div');
            columnaPrimerRow.setAttribute('class', 'col');

            var parrafoColumnaPrimerRow = document.createElement('p');

            var textoParrafo = document.createTextNode(megapedidos[index].mesa);

            parrafoColumnaPrimerRow.appendChild(textoParrafo);
            columnaPrimerRow.appendChild(parrafoColumnaPrimerRow);
            primerRow.appendChild(columnaPrimerRow);




            contenedor.appendChild(primerRow);


            var segundoRow = document.createElement('div');
            segundoRow.setAttribute('class', 'row');





            for (let j = 0; j < megapedidos[index].productos.length; j++) {


                console.log(megapedidos[index].productos[j]);

                switch (megapedidos[index].productos[j]) {
                    case 0:
                        console.log("Entro a caso 0");

                        var columnaSegundoRow = document.createElement('div');
                        columnaSegundoRow.setAttribute('class', 'col-2');

                        var card = document.createElement('div');
                        card.setAttribute('class', 'card bg-dark text-white mt-2 ');

                        var img = document.createElement('img');
                        img.setAttribute('src', '../IMAGES/Cafe-americano.jpg');
                        img.setAttribute('class', 'card-img');
                        img.setAttribute('style', 'height: 15vh');

                        card.appendChild(img);
                        columnaSegundoRow.appendChild(card);
                        segundoRow.appendChild(columnaSegundoRow);

                        break;

                    case 1:
                        console.log("Entro a caso 1");



                        var columnaSegundoRow = document.createElement('div');
                        columnaSegundoRow.setAttribute('class', 'col-2');

                        var card = document.createElement('div');
                        card.setAttribute('class', 'card bg-dark text-white mt-2 ');

                        var img = document.createElement('img');
                        img.setAttribute('src', '../IMAGES/cafe_con_leche.jpg');
                        img.setAttribute('class', 'card-img');
                        img.setAttribute('style', 'height: 15vh');

                        card.appendChild(img);
                        columnaSegundoRow.appendChild(card);
                        segundoRow.appendChild(columnaSegundoRow);

                        break;

                    case 2:
                        console.log("Entro a caso 2");

                        var columnaSegundoRow = document.createElement('div');
                        columnaSegundoRow.setAttribute('class', 'col-2');

                        var card = document.createElement('div');
                        card.setAttribute('class', 'card bg-dark text-white mt-2 ');
                        var img = document.createElement('img');
                        img.setAttribute('src', '../IMAGES/Sandwich-de-jamon-y-queso.jpg');
                        img.setAttribute('class', 'card-img');
                        img.setAttribute('style', 'height: 15vh');
                        card.appendChild(img);
                        columnaSegundoRow.appendChild(card);
                        segundoRow.appendChild(columnaSegundoRow);

                        break;

                    case 3:
                        console.log("Entro a caso 3");
                        var segundoRow = document.createElement('div');
                        segundoRow.setAttribute('class', 'row');
                        var columnaSegundoRow = document.createElement('div');
                        columnaSegundoRow.setAttribute('class', 'col-2');

                        var card = document.createElement('div');
                        card.setAttribute('class', 'card bg-dark text-white mt-2 ');

                        var img = document.createElement('img');
                        img.setAttribute('src', '../IMAGES/jugos-frutales-.jpg');
                        img.setAttribute('class', 'card-img');
                        img.setAttribute('style', 'height: 15vh');

                        card.appendChild(img);
                        columnaSegundoRow.appendChild(card);
                        segundoRow.appendChild(columnaSegundoRow);

                        break;
                        case 4:
                            console.log("Entro a caso 0");
    
                            var columnaSegundoRow = document.createElement('div');
                            columnaSegundoRow.setAttribute('class', 'col-2');
    
                            var card = document.createElement('div');
                            card.setAttribute('class', 'card bg-dark text-white mt-2 ');
    
                            var img = document.createElement('img');
                            img.setAttribute('src', '../IMAGES/Hamburgesa.jpg');
                            img.setAttribute('class', 'card-img');
                            img.setAttribute('style', 'height: 15vh');
    
                            card.appendChild(img);
                            columnaSegundoRow.appendChild(card);
                            segundoRow.appendChild(columnaSegundoRow);
    
                            break;
    
                        case 5:
                            console.log("Entro a caso 1");
    
    
    
                            var columnaSegundoRow = document.createElement('div');
                            columnaSegundoRow.setAttribute('class', 'col-2');
    
                            var card = document.createElement('div');
                            card.setAttribute('class', 'card bg-dark text-white mt-2 ');
    
                            var img = document.createElement('img');
                            img.setAttribute('src', '../IMAGES/papas.png');
                            img.setAttribute('class', 'card-img');
                            img.setAttribute('style', 'height: 15vh');
    
                            card.appendChild(img);
                            columnaSegundoRow.appendChild(card);
                            segundoRow.appendChild(columnaSegundoRow);
    
                            break;
    
                        case 6:
                            console.log("Entro a caso 2");
    
                            var columnaSegundoRow = document.createElement('div');
                            columnaSegundoRow.setAttribute('class', 'col-2');
    
                            var card = document.createElement('div');
                            card.setAttribute('class', 'card bg-dark text-white mt-2 ');
                            var img = document.createElement('img');
                            img.setAttribute('src', '../IMAGES/agua.jfif');
                            img.setAttribute('class', 'card-img');
                            img.setAttribute('style', 'height: 15vh');
                            card.appendChild(img);
                            columnaSegundoRow.appendChild(card);
                            segundoRow.appendChild(columnaSegundoRow);
    
                            break;
    
                        case 4:
                            console.log("Entro a caso 3");
                            var segundoRow = document.createElement('div');
                            segundoRow.setAttribute('class', 'row');
                            var columnaSegundoRow = document.createElement('div');
                            columnaSegundoRow.setAttribute('class', 'col-2');
    
                            var card = document.createElement('div');
                            card.setAttribute('class', 'card bg-dark text-white mt-2 ');
    
                            var img = document.createElement('img');
                            img.setAttribute('src', '../IMAGES/gaseosa.jpg');
                            img.setAttribute('class', 'card-img');
                            img.setAttribute('style', 'height: 15vh');
    
                            card.appendChild(img);
                            columnaSegundoRow.appendChild(card);
                            segundoRow.appendChild(columnaSegundoRow);
    
                            break;


                }

                
            }
            contenedor.appendChild(segundoRow);




            


        }

    });
    contenedorMayor.appendChild(contenedor);
 }