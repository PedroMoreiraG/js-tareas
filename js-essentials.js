// 0 - Bajar repo, hacer hola mundo console.log
console.log('Hola mundo');

// 2 - Funciones:
// add(firstOperator, secondOperator),
// subtract(firstOperator, secondOperator),
// divide(firstOperator, secondOperator),
// multiply(firstOperator, secondOperator)
function add (firstOperator, secondOperator){
    result = firstOperator + secondOperator;
    console.log(result);
}
function subtract (firstOperator, secondOperator){
    result = firstOperator - secondOperator;
    console.log(result);
}
function divide (firstOperator, secondOperator){
    result = firstOperator / secondOperator;
    console.log(result);
}
function multiply (firstOperator, secondOperator){
    result = firstOperator * secondOperator;
    console.log(result);
}

add(3,2);
subtract(5,4);
divide(10,2);
multiply(10,10);
// 3 - Funcion
// dress(temperature, isRaining)
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶
function dress (temperature, isRaining){
    if(temperature < 10){
        console.log('La temperatura es de ' +temperature+ ', asi que usa el auto');
    }
    else if(temperature == 30){
        console.log('La temperatura es de ' +temperature+ ', asi que usa lentes');   
    }
    else{
        console.log('La temperatura es de ' +temperature+ ', no es necesario ir en auto');
    }
    if(isRaining === true){
        console.log('Llevar paraguas');
    }
    else{
        console.log('No llueve, no lleves paragua');
    }
}

dress(10, false);
// 4 - Funcion
// calculate(operation, firstOperator, secondOperator)
function calculate(operation, firstOperator, secondOperator){
    if (operation == add){
        add(firstOperator, secondOperator);
    }
    else if (operation == subtract){
        subtract(firstOperator, secondOperator);
    }
    else if (operation == divide){
        divide(firstOperator,secondOperator);
    }
    else if (operation == multiply){
        multiply(firstOperator, secondOperator);
    }
    else {
        console.log('Operacion no disponible');
    }
}
calculate(add, 2, 4);
calculate(subtract, 2, 4);
calculate(divide, 2, 4);
calculate(multiply, 2, 4);
calculate(dress, 2, 4);
// 5 - Funcion
// eating(name, foods['🍔','🍟','🍗',])
function eating (name, foods){
    for (let i = 0; i < name.length ; i++){
        for(let j = 0; j<foods.length; j++){
            console.log(name[i]+ ' esta comiendo ' +foods[j]);
            
        }
    }
}

eating(['Pedro','Camila','Rodrigo'], ['hamburguesa','papitas','pollo']);

// 6 - Funcion
// finalCountDown(count)
function CountDown(count){
    for (let i=count.length - 1;i>=0; i--){
        console.log(count[i]+ ", ");
    }
}

const array = [1,2,3,4,5,6,7,8,9,10];

CountDown(array);

// 7 - Funcion
// getGrade(score)
// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S
function getGrade(score){
    if(score>=0 && score <= 40){
        console.log("D");
    }
    else if (score>=41 && score <= 60){
        console.log("R");
   }
   else if (score>=61 && score <= 74){
    console.log("B");
   }
   else if (score>=75 && score <= 84){
    console.log("BMB");
   }
   else if (score>=85 && score <= 96){
    console.log("MB");
   }
   else if(score>=97 && score <= 100){
    console.log("S");
   }
   else {
    console.log("Error, nota no valida.");
   }
}
const nota = 96;
getGrade(nota);
// 8 - Funcion
// fillCart(person, articlesCollection)
// cartArticlesCollection: [{article: '👟', amount: 1, price: 25}...])
// person: {name: 'Pepe', cart: []}
// it should modify person's cart in order to add the the new collection of articles
function fillCart(person, articlesCollection) {
    const cart = person.cart;
  
    for (const { article, amount, price } of articlesCollection) {

      const existingArticle = cart.find(item => item.article === article);
  
      if (existingArticle) {
      
        existingArticle.amount += amount;
        existingArticle.price = price;
      } else {
  
        cart.push({ article, amount, price });
      }
    }
  }
  
  const person = { name: 'Pepe', cart: [{ article: '👟', amount: 1, price: 25 }] };
  const articlesCollection = [{ article: '👟', amount: 2, price: 30 }, { article: '🎒', amount: 1, price: 50 }];
  
  fillCart(person, articlesCollection);
  console.log(person.cart);
// 9 - Funcion
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})

function countBanana(inventory){
    const banana = inventory.find(item => item === '🍌').length;
    return banana;

}

const inventory=['🥑','🍌','🥭', '🍌']
countBanana(inventory);

console.log(countBanana(inventory));


// 10 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)

function getTotal(inventory2) {
    const total = inventory2.reduce((accumulator, item) => {
      const quantity = Number(item.quantity);
      const price = Number(item.price);
  
      const itemTotal = price * quantity;
      return accumulator + itemTotal;
    }, 0);  
    return total;
  }
  const inventory2 = [
    { article: '🍔', price: 15, quantity: '1' },
    { article: '🍟', price: 10, quantity: '2' }
  ];
  
  console.log(getTotal(inventory2));