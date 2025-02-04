$(document).ready(function(){
    
let total=0;
document.getElementById("total").textContent = total;
    
let checkoutproductArray=JSON.parse(localStorage.getItem("cart1"));
    
  
console.log(checkoutproductArray);

function updateTotal(){

    total = 0;
    if(checkoutproductArray.length==0){
        total=0
      
        document.getElementById("total").textContent = total;
        return 0;
    }
     for(let j=0; j<checkoutproductArray.length; j++)
         { total += checkoutproductArray[j].price * checkoutproductArray[j].quantity; } 
     document.getElementById("total").textContent = total;
            }

    
        let checkoutItemsDisplay = $("#checkoutproducts");
        checkoutItemsDisplay.empty();
        total = 0;
    for(let i=0;i<checkoutproductArray.length;i++){
      
        let itemcreated=document.createElement("div");
        itemcreated.id="checkoutitem";
        itemcreated.setAttribute('data-item-id',checkoutproductArray[i].id);
        itemcreated.innerHTML=`<div id="checkoutheaddiv">
      
        <img src="${checkoutproductArray[i].image}" alt='itempic'>
        <div id=" checkoutnameinhead">
           <div id="title">${checkoutproductArray[i].title}</div>
            <div id="description">${checkoutproductArray[i].description}</div>
        </div>
        <div class="checkoutcancel" data-id="${checkoutproductArray[i].id}" data-key="item${checkoutproductArray[i].id+1}">
       
        <button type="button" >X</button>
        </div>
       
        </div>
         `;
       itemcreated.innerHTML +=` <div id="price"> ${checkoutproductArray[i].price}$</div>`;
        ;
   
        checkoutItemsDisplay.append(itemcreated);
        updateTotal();
      
    }
    $(".checkoutcancel").click(function()  {
        let itemId = $(this).data('id'); 
        for(let k=0;k<checkoutproductArray.length;k++){ 
            if( checkoutproductArray[k].id==itemId){
                
                     checkoutproductArray.splice(k,1);
                     localStorage.setItem("cart1", JSON.stringify(checkoutproductArray));}}
                    $(this).closest('#checkoutitem').remove(); 
                    console.log(checkoutproductArray);
                    
                   updateTotal(); 
                   
       
    });
    

})