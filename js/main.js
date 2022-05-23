

var quoteList =
 [
      {
         quote: "ثابتين علي وضعنا رجاله من صغرنا",     //index of 0
         author: "ايهاب حسين"
      },
      {
        quote: "المنحوس منحوس ولو علقوا على راسه فانوس." ,         // index of 1
        author:"محمد احمد"
      },
      {
        quote: "اللي تتغير محبته تتغير مخدته.",   //index of 2
        author:"هشام"
      },
      {
        quote: "اتمسكن لحد ما تتمكن.",   //index of 3
        author:"عبده الدد"
      }
 ]






function newQuote(){

var num = Math.floor ( (Math.random()*quoteList.length))



    document.getElementById("thequote").innerHTML = quoteList[num].quote;
    document.getElementById("authorQuote").innerHTML = quoteList[num].author;

}





































































// var productNameInput = document.getElementById('productNameInput');
// var productPriceInput = document.getElementById('productPriceInput');
// var productCategoryInput = document.getElementById('productCategoryInput');
// var productDescriptionInput = document.getElementById('productDescriptionInput');


// var productContainer;
// if(localStorage.getItem("productList") != null){
//     productContainer =  JSON.parse( localStorage.getItem("productList"));
//     displayProduct(productContainer);

// }else{
//     productContainer = [];
// }


// function addProduct(){

//     var product = {
//         name:productNameInput.value,                //property in js getting the value of form   ---> getter
//         price:productPriceInput.value,
//         category:productCategoryInput.value,
//         description:productDescriptionInput.value,
//     }

//     productContainer.push(product)                 // push the properties into list(array) from last
//     localStorage.setItem("productList" , JSON.stringify(productContainer))  // setItem take string values we should transform productContainer to string

//     console.log(productContainer)

    
//     clearInput();
//     displayProduct(productContainer)
// }

// // display function

// function clearInput(){
//     productNameInput.value = ""  ;                  // setter to empty the input
//     productPriceInput.value = ""  ;                  // setter to empty the input
//     productCategoryInput.value = ""  ;                  // setter to empty the input
//     productDescriptionInput.value = ""  ;                  // setter to empty the input
// }



// function displayProduct(list){
//     var stand = '';
//     for(var i=0 ; i < list.length ; i++){
//         stand += `<tr>
//         <td>${i+1}</td>
//         <td>${list[i].name}</td>
//         <td>${list[i].price}</td>
//         <td>${list[i].category}</td>
//         <td>${list[i].description}</td>
//         <td><button class=" btn btn-sm btn-outline-success">update</button></td>
//         <td><button onclick="deleteProduct(${i})" class=" btn btn-sm btn-outline-danger">delete</button></td>
//     </tr>`
//     }
//     document.getElementById("stand").innerHTML = stand;
// }


// function deleteProduct(deleted){
//     productContainer.splice(deleted,1)
//     localStorage.setItem("productList" , JSON.stringify(productContainer))
//     displayProduct(productContainer)
// }
