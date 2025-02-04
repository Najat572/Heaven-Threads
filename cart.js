$(document).ready(function(){
    $("h2").slideToggle("slow");
    $("body").css("backgroundColor","white");
let total=0;

    
const items=[
    
];
    


    let cart1= JSON.parse(localStorage.getItem("cart1")) || [];
    document.querySelectorAll('.addtocart1btn').forEach((button) => {
    
        button.addEventListener('click', () =>{
            const title = button.getAttribute('data-title');
            const cartItem = items.find((item) => item.title === title);

            if(button.textContent.includes('Add to cart')) 
            {
                button.textContent = 'Added to cart';
                if(!cart1.some((item)=> item.title === cartItem.title)){
                    cart1.push(cartItem);
                    localStorage.setItem("cart1",JSON.stringify(cart1));
                }
            }
            else {
                button.textContent = 'Add to cart';
                const updatedcart1 = cart1.filter((item) => item.title !== cartItem.title);
                localStorage.setItem("cart1",JSON.stringify(updatedcart1));
                cart1 = updatedcart1;
            }
        });
    });
    for(let i=0;i<cart1.length;i++){
        
        let itemcreated=document.createElement("div");
        
        itemcreated.id="item";
        itemcreated.setAttribute('data-item-id',cart1[i].id);
        itemcreated.innerHTML=`<div id="headdiv">
      
        <img src="${cart1[i].image}" alt='itempic'>
        <div id="nameinhead">
           <h3>${cart1[i].title}</h3>
            <p>${cart1[i].description}</p>
        </div>
        <div id="cancel" data-id="${cart1[i].id}" data-key="item${cart1[i].id+1}">
        <button type="button">X</button></div>
        
        </div>
        <div id="bodydiv">
        <p> ${cart1[i].price}$</p>
        <div id="bodyprice">
        
        <button type="button" class="plus" data-id="${cart1[i].id}">+</button>
        <p class="quantityp" id="quantity-${cart1[i].id}">${cart1[i].quantity}</p>
       
        <button type="button" class="minus" data-id="${cart1[i].id}">-</button>
        </div>
        </div>`
        ;
   
        document.getElementById("cartitemsdisplay").appendChild(itemcreated);
        total+= `${cart1[i].price}` * `${cart1[i].quantity}`;
        
          
    }
    document.getElementById("total").textContent = total;
    $(".plus").click(function(){ 
        let itemId = $(this).data('id'); 
        let item= cart1.find(item => item.id === itemId);
        if(item) {
        item.quantity++;
         $("#quantity-" + itemId).text(item.quantity); 
         updateTotal(); 
         localStorage.setItem("cart1", JSON.stringify(cart1));
}
    });
    $(".minus").click(function(){ 
        let itemId = $(this).data('id'); 
        let item= cart1.find(item => item.id === itemId);
        if(item) {
            item.quantity--;
         $("#quantity-" + itemId).text(item.quantity); 
         if(item.quantity<=0){
             cart1 = cart1.filter(item => item.id !== itemId);
             $(this).closest('#item').remove(); 
         }
         updateTotal(); 
         localStorage.setItem("cart1", JSON.stringify(cart1));
        }
    });
    function updateTotal() { 
        total = 0;
         for(let item of cart1)
             { total += item.price * item.quantity; } 
         document.getElementById("total").textContent = total;
         }

   $(document).on("click","#cancel",function()  {
    let itemId = $(this).data('id'); 
    cart1 = cart1.filter(item => item.id !== itemId);
    $(this).closest('#item').remove(); 
    updateTotal();
    localStorage.setItem("cart1", JSON.stringify(cart1));
});

   
});