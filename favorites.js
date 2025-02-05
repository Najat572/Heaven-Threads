
const product1 = [

];
const displayItem = (items) => {
    
    document.getElementById('favorites').innerHTML = items.map((item) =>
     {
        const { image, title, price, description } = item;
        const isadded = cart1.filter(cartItem => cartItem).some((cartItem) => cartItem.title === title);
        return `
        <div class='box-container'>
            <div id='box'>
                <h3>${title}</h3>
                <div class='img-box'>
                    <img class='images' src="${image}" alt="${title}">
                </div>
                <span class='bottom'>
                    <h2>$${price}.00</h2>
                    <span>${description}</span>
                </span>
                <span class='button1'>
                <button style="background-color:white; color:black; border:none;" class="remove-favorite" data-title="${title}">X
</button>
                <span class="addcart">
                <button class="addtocartbtn" data-title="${title}">
                    ${isadded ? 'Added to Cart' : 'Add to Cart'}

</button></span>
</span>
                </span>
            </div>
            </div>
            
        `;
        
    }).join('');
};



document.getElementById('searchbar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];
    const filteredFavoraties = favoritesList.filter((item) => 
        item.title.toLowerCase().includes(searchData)
        
    );
    displayItem(filteredFavoraties)
});


let cart1 = JSON.parse(localStorage.getItem('cart1')) || [];
if (!Array.isArray(cart1)) {
    cart1 = [];
}
const displayFavorites = () => {
    const favoritesSection = document.getElementById('favorites');
    const favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (favoritesList.length === 0) {
        favoritesSection.innerHTML = '<p class="js" >No favorite items yet.</p>';
        return;
    }

    favoritesSection.innerHTML = favoritesList
        .map((item) => {
            const { image, title, price, description } = item;
            const isadded = cart1.filter(cartItem => cartItem).some((cartItem) => cartItem.title === title);
            return `
            <div class='box-container'>
                <div id='box'>
                    <h3>${title}</h3>
                    <div class='img-box'>
                        <img class='images' src="${image}" alt="${title}">
                    </div>
                    <span class='bottom'>
                        <h2>$${price}.00</h2>
                        <span>${description}</span>
                    </span>
                    <span class='button1'>
                    <button style="background-color:white; color:black; border:none;" class="remove-favorite" data-title="${title}">X
</button>
                    <span class="addcart">
                    <button class="addtocartbtn" data-title="${title}">
                        ${isadded ? 'Added to Cart' : 'Add to Cart'}
    
</button></span>
</span>
                    </span>
                </div>
                </div>
            `;
        })
        .join('');
         

    document.querySelectorAll('.remove-favorite').forEach((button) => {
        button.addEventListener('click', () => {
            const title = button.getAttribute('data-title');
            const updatedFavorites = favoritesList.filter((fav) => fav.title !== title);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            displayFavorites();
            
        });
    });
    document.querySelectorAll('.addtocartbtn').forEach((button) => {
    
        button.addEventListener('click', () =>{
            const title = button.getAttribute('data-title');
           
            const cartItem = favoritesList.find((item) => item.title === title);

            if(button.textContent.includes('Add to Cart')) 
            {
                button.textContent = 'Added to Cart';
                if(!cart1.some((item)=> item.title === cartItem.title)){
                    cart1.push(cartItem);
                    localStorage.setItem("cart1",JSON.stringify(cart1));
                }
            }
            else {
                button.textContent = 'Add to Cart';
                const updatedCart = cart1.filter((item) => item.title !== cartItem.title);
                localStorage.setItem("cart1",JSON.stringify(updatedCart));
                cart1=updatedCart;
            }
        });
    }); 
};
let favorites = JSON.parse(localStorage.getItem('favorites'));
if (!Array.isArray(favorites)) {
    favorites = [];
}

    document.addEventListener('DOMContentLoaded', () => {
 displayFavorites();
    });
