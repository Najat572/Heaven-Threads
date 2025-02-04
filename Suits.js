const btns = [
    {
        id: 0,
        name: 'All'
    },
    {   
        id: 1,
        name: 'Women'
    },
    {
        id: 2,
        name: 'Men'
    }
];

const filters = [...new Set(btns.map((btn) => btn))];

document.addEventListener('DOMContentLoaded', () => {
    const btnsContainer = document.getElementById('btns');
    if (btnsContainer) {
        btnsContainer.innerHTML = filters.map((btn) => {
            const { name, id } = btn;
            return `
            <a href="#shop">
                <button class='fil-p' onclick='filterItemsCategory(${id})'>${name}</button>
                </a>
            `;
        }).join('');
    }
});


const bts = [
    {
        id: 0,
        name: 'All'
    },
    {   
        id: 1,
        name: 'Black'
    },
    {
        id: 2,
        name: 'White'
    },
    {
        id: 3,
        name: 'Green'
    },
    {
        id: 4,
        name: 'Red'
    },
    {
        id:5,
        name: 'Blue'
    },
    {
        id: 6,
        name: 'Brown'
    },
    {
        id: 7,
        name: 'Beige'
    },
    {
        id: 8,
        name: 'Grey'
    }
];

const colors = [...new Set(bts.map((btn) => btn))];

document.addEventListener('DOMContentLoaded', () => {
    const btsContainer = document.getElementById('bts');
    if (btsContainer) {
        btsContainer.innerHTML = colors.map((btn) => {
            const { name, id } = btn;
            return `
            <a href="#shop">

             <button class='fil-p' onclick='filterItemsColor(${id})'>${name}</button>


            </a >
               
            `;
        }).join('');
    }
});

const product1 = [
{
    id: 80,
    title: 'Brown Women Suit',
    color: 'Brown',
    category: 'Women',
    price: 300,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/suits 1 women.jpg',
    quantity: 1,
},
{
    id: 81,
    title: 'White Men Suit',
    color: 'White',
    category: 'Men',
    price: 300,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/suits 1 men.jpg',
    quantity: 1,
},
{
    id: 82,
    title: 'Red Women Suit',
    color: 'Red',
    category: 'Women',
    price: 300,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/suits 3 women.jpg',
    quantity: 1,
},
{
    id: 83,
    title: 'Grey Men Suit',
    color: 'Grey',
    category: 'Men',
    price: 100,
    description: 'Luxurious Suit, made by perrie edwards',
    image: 'images/suits 2 men.jpg',
    quantity: 1,
},
{
    id: 84,
    title: 'Blue Women Suit',
    color: 'Blue',
    category: 'Women',
    price: 200,
    description: 'Made with the best fabric,Luxurious Brand. ',
    image: 'images/suits 2 women.jpg',
    quantity: 1,
},
{
    id: 85,
    title: 'Black Men Suit',
    color: 'Black',
    category: 'Men',
    price: 100,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/suits 3 men.jpg',
    quantity: 1,
},
{
    id: 86,
    title: 'Green Women Suit',
    color: 'Green',
    category: 'Women',
    price: 100,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/suits 4 women.jpg',
    quantity: 1,
},
{
    id: 87,
    title: 'Beige Men Suit',
    color: 'Beige',
    category: 'Men',
    price: 200,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/suits 4 men.jpg',
    quantity: 1,
},
{
    id: 88,
    title: 'Brown Lined Women Suit',
    color: 'Brown',
    category: 'Women',
    price: 250,
    description: 'Luxurious Suit, made by perrie edwards',
    image: 'images/suits 5 women.jpg',
    quantity: 1,
},
{
    id: 89,
    title: 'Brown Long Suit',
    color: 'Brown',
    category: 'Men',
    price: 200,
    description: 'Made with the best fabric,Luxurious Brand. ',
    image: 'images/suits 5 men.jpg',
    quantity: 1,
},
{
    id: 90,
    title: 'Black n White Suit',
    color: 'Black',
    category: 'Women',
    price:  300,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/suits 6 women.jpg',
    quantity: 1,
},
{
    id: 91,
    title: 'Black Men Suit',
    color: 'Black',
    category: 'Men',
    price: 250,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/suits 6 men.jpg',
    quantity: 1,
},

{
    id: 92,
    title: 'Beige Women Suit',
    color: 'Beige',
    category: 'Women',
    price: 100,
    description: 'Luxurious Suit, made by perrie edwards',
    image: 'images/suits 7 women.jpg',
    quantity: 1,
},
{
    id: 93,
    title: 'Light Grey Men Suit',
    color: 'Grey',
    category: 'Men',
    price: 200,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/suits 7 men.jpg',
    quantity: 1,
}
];

const product2=
[
    {
        id: 80,
        title: 'Brown Women Suit',
        color: 'All',
        category: 'All',
        price: 300,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/suits 1 women.jpg',
        quantity: 1,
    },
    {
        id: 81,
        title: 'White Men Suit',
        color: 'All',
        category: 'All',
        price: 300,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/suits 1 men.jpg',
        quantity: 1,
    },
    {
        id: 82,
        title: 'Red Women Suit',
        color: 'All',
        category: 'All',
        price: 300,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/suits 3 women.jpg',
        quantity: 1,
    },
    {
        id: 83,
        title: 'Grey Men Suit',
        color: 'All',
        category: 'All',
        price: 100,
        description: 'Luxurious Suit, made by perrie edwards',
        image: 'images/suits 2 men.jpg',
        quantity: 1,
    },
    {
        id: 84,
        title: 'Blue Women Suit',
        color: 'All',
        category: 'All',
        price: 200,
        description: 'Made with the best fabric,Luxurious Brand. ',
        image: 'images/suits 2 women.jpg',
        quantity: 1,
    },
    {
        id: 85,
        title: 'Black Men Suit',
        color: 'All',
        category: 'All',
        price: 100,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/suits 3 men.jpg',
        quantity: 1,
    },
    {
        id: 86,
        title: 'Green Women Suit',
        color: 'All',
        category: 'All',
        price: 100,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/suits 4 women.jpg',
        quantity: 1,
    },
    {
        id: 87,
        title: 'Beige Men Suit',
        color: 'All',
        category: 'All',
        price: 200,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/suits 4 men.jpg',
        quantity: 1,
    },
    {
        id: 88,
        title: 'Brown Lined Women Suit',
        color: 'All',
        category: 'All',
        price: 250,
        description: 'Luxurious Suit, made by perrie edwards',
        image: 'images/suits 5 women.jpg',
        quantity: 1,
    },
    {
        id: 89,
        title: 'Brown Long Suit',
        color: 'All',
        category: 'All',
        price: 200,
        description: 'Made with the best fabric,Luxurious Brand. ',
        image: 'images/suits 5 men.jpg',
        quantity: 1,
    },
    {
        id: 90,
        title: 'Black n White Suit',
        color: 'All',
        category: 'All',
        price:  300,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/suits 6 women.jpg',
        quantity: 1,
    },
    {
        id: 91,
        title: 'Black Men Suit',
        color: 'All',
        category: 'All',
        price: 250,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/suits 6 men.jpg',
        quantity: 1,
    },
    {
        id: 92,
        title: 'Beige Women Suit',
        color: 'All',
        category: 'All',
        price: 100,
        description: 'Luxurious Suit, made by perrie edwards',
        image: 'images/suits 7 women.jpg',
        quantity: 1,
    },
    {
        id: 93,
        title: 'Light Grey Men Suit',
        color: 'All',
        category: 'All',
        price: 200,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/suits 7 men.jpg',
        quantity: 1,
    }
    ];
    
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
                    <div class='button1'>
                    <button class="remove-favorite" data-title="${title}">X</button>
                    <span><button class="add" data-title="${title}"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
</svg>
</button></span>
                    </div>
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
};


const filterItemsCategory = (categoryId)=>{
    const category = btns.find(btn => btn.id === categoryId).name;
    if(category=== 'All')
    {
        displayItem(product2);
    }
    else
    {
        const filterProducts = product1.filter(item => item.category === category);
        displayItem(filterProducts);
    }
};

    
let favorites = JSON.parse(localStorage.getItem('favorites'));
if (!Array.isArray(favorites)) {
    favorites = [];
}
let cart1=JSON.parse(localStorage.getItem('cart1'));

if (!Array.isArray(cart1)) {
    cart1 = [];
}

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) =>
     {
        const { image, title, price, description } = item;
        const isLiked = favorites.some((fav) => fav.title === title);
        const isadded = cart1.filter(cartItem => cartItem).some((cartItem) => cartItem.title === title);
        return `
            <div id='box'>
                <h3>${title}</h3>
                <div class='img-box'>
                    <img class='images' src="${image}" alt="${title}">
                </div>
                <div class='bottom'>
                    <h2>$${price}.00</h2>
                    <p>
                        <span class='heart-icon'>
                            <img src="${isLiked ? 'images/icons8-love-50 (1).png' : 'images/icons8-love-50.png'}" 
                            data-title="${title}" class='like-icon'>
                        </span>
                <span class='desc'>
                ${description} 
                </span>
                    </p>
                    <button class="addtocartbtn" data-title="${title}">
                    ${isadded ? 'Added to Cart' : 'Add to Cart'}

                    </button>
                </div>
            </div>
            
        `;
        
    }).join('');

    document.querySelectorAll('.like-icon').forEach((heartIcon) => {
        heartIcon.addEventListener('click', () => {
            const title = heartIcon.getAttribute('data-title');
            const likedItem = items.find((item) => item.title === title);

            if (heartIcon.src.includes('images/icons8-love-50.png')) {
                heartIcon.src = 'images/icons8-love-50 (1).png';
                if (!favorites.some((fav) => fav.title === likedItem.title)) {
                    favorites.push(likedItem);
                    localStorage.setItem('favorites', JSON.stringify(favorites));
                }
            } else {
                
                heartIcon.src = 'images/icons8-love-50.png';
                const updatedFavorites = favorites.filter((fav) => fav.title !== likedItem.title);
                localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
                favorites=updatedFavorites;
            }
        });
    });
    document.querySelectorAll('.addtocartbtn').forEach((button) => {
    
        button.addEventListener('click', () =>{
            const title = button.getAttribute('data-title');
           
            const cartItem = items.find((item) => item.title === title);

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
const filterItemsColor = (colorId)=>{
    const color = bts.find(btn => btn.id === colorId).name;
    if(color=== 'All')
    {
        displayItem(product2);
    }
    else
    {
        const filterProducts = product1.filter(item => item.color.toLowerCase()=== color.toLowerCase());
        displayItem(filterProducts);
    }

};
document.getElementById('searchbar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredFavoraties = product1.filter((item) => 
        item.title.toLowerCase().includes(searchData)
        
    );
    displayItem(filteredFavoraties)
});

const displayItems= (items) => {
    document.getElementById('root').innerHTML =items.map((item) => {
        const { image, title, price, description } = item;
        
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
                    
                    </span>
                    </div>
                    </div>`;
    }).join('')
};
    displayItem(product1);
 