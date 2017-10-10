/* enunciado : Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado
 según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha */
// primero busco un filtro apartir de un array que contengan las letras del abecedario en mayusculas y minusculas con la propiedad search para verificar que entre solo letras a las funciones DECIPHER Y CIPHER

var testLetters = /^[a-zA-Z]*$/;
/*creo mis variables en las cuales insertaré los elementos que cipher o decipher. Uso las mismas porque el usuario solo aceptara una
de las opciones que le ofrezca, asi que las variables no se usaran al mismo tiempo. No hay conflicto*/

var fraseInput = "";
// en var ascii me encargo de insertar los elementos que ya aplique la primera formula de cifrado con push()
var ascii = [];
// en var fraseOutput ingreso interpretacion del index de ascii pero pasados a la posicion de nuestro abecedario
var fraseOutput = [];
var displacement = 33;

function headDirector (user) {
    do { 
    //creo una variable secundaria user que tendra el valor que se introduzca en el prompt por mi usuario
        var user = (prompt( " Escoja la funcion a ejecutar : 1. CIFRAR - 2. DECIFRAR "));

        if(user !== 0){ 

            if(user === "1"){
                cipher();
            }

            else if (user === "2"){
                decipher();
            }

            else {
            alert("Por favor, introduzca una de las opciones establecidas");
            }
        }
    }
  //Introduzco un do...while porque necesito que se verifique las condiciones que tengo por lo menos una vez y que se insista al usuario que ingrese una opcion valida
  while(user ==" "||(user !=1 && user !=2 ));
}

function cipher(fraseInput){

    do{
        fraseInput = prompt('Ingrese el texto a cifrar:');
        
      //Función validación de datos
      //valido si la cadena ingresada es un campo vacio o si contiene numeros.
            if(fraseInput === "" || fraseInput.search(testLetters)){
                
                alert("no puede ingresar ni números ni campos vacios");
                
                continue;
            }

        for ( var i= 0; i<fraseInput.length;i++){

            if( fraseInput[i]=== fraseInput[i].toUpperCase){

                ascii.push((fraseInput.charCodeAt(i) -65+ displacement)%26 + 65);
            }
// se usa el valor 65 y 97 porque en 65 empieza en abecedario en minusculas y en 97 en mayúsculas

            else if (fraseInput[i]=== fraseInput[i].toLowerCase){

                ascii.push((fraseInput.charCodeAt(i) -97+ displacement)%26 + 97);
            }

        }
        
        for ( var k = 0; k< ascii.length; i++){

            fraseOutput.push((ascii.toString.fromCharCode(ascii[k])));
        }
        
        return alert(fraseOutput.join(""));

    }while(fraseInput =="" || fraseInput.search(testLetters)); 
  }

function decipher(fraseInput){

    do{
        fraseInput = prompt('Ingrese el texto a descifrar:');
        
      //Función validación de datos
      //valido si la cadena ingresada es un campo vacio o si contiene numeros.
            if(fraseInput === "" || fraseInput.search(testLetters)){
                
                alert("no puede ingresar ni números ni campos vacios");
                
                continue;
            }
    
            for ( var i= 0; i<fraseInput.length;i++){
    
                if( fraseInput[i]=== fraseInput[i].toUpperCase){
    
                    ascii.push((fraseInput.charCodeAt(i) -90 - displacement)%26 + 90);
                }
    // se usa el valor 90 y 122 porque en 90 termina el abecedario en minusculas y no queremos que displacemet retroceda fuera del abecedario al index
    
                else if (fraseInput[i]=== fraseInput[i].toLowerCase){
    
                    ascii.push((fraseInput.charCodeAt(i) -122- displacement)%26 + 122);j
                }
    
            }
            
            for ( var j = 0; j< ascii.length; j++){
    
                fraseOutput.push((ascii.toString.fromCharCode(ascii[j])));
            }
            
            return alert(fraseOutput.join(""));
    
        } while(fraseInput =="" || fraseInput.search(testLetters));s
}


headDirector(user);








