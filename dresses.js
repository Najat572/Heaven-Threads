const btns = [
    {
        id: 0,
        name: 'All'
    },
    {   
        id: 1,
        name: 'Casual'
    },
    {
        id: 2,
        name: 'Vintage'
    },
    {
        id: 3,
        name: 'Party'
    },
    {
        id: 4,
        name: 'Ballroom'
    },
    {
        id: 5,
        name: 'Wedding'
    }
];

const filters = [...new Set(btns.map((btn) => btn))];

 document.getElementById('btns').innerHTML=filters.map((btn) =>{ 
            const { name, id } = btn;
            return `
            <a href="#shop">
                <button class='fil-p' onclick='filterItemsCategory(${id})'>${name}</button>
                </a>
            `;
        }).join('');
    



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
        name: 'Yellow'
    },
    {
        id: 4,
        name: 'Blue'
    },
    {
        id:5,
        name: 'Coffee'
    },
    {
        id: 6,
        name: 'Red'
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
                </a>
            `;
        }).join('');
    }
});

const product1 = [
    item1={
    id: 1,
    title: 'White and Black Dress',
    color: 'Black',
    category: 'Casual',
    price: 100,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/dress casual 1.jpg',
    quantity: 1,
},
item2={
    id: 2,
    title: 'Coffee Vintage Dress',
    color: 'Coffee',
    category: 'Vintage',
    price: 75,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/vintage dress 1.jpg',
    quantity: 1,
},
item3={
    id: 3,
    title: 'White Long Dress',
    color: 'White',
    category: 'Party',
    price: 50,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/dress1.jpg',
    quantity: 1,
},
item4={
    id: 4,
    title: 'Black Long Dress',
    color: 'Black',
    category: 'Ballroom',
    price: 300,
    description: 'Luxurious Dress. Made by Perrie Edwards',
    image: 'images/ball room dress 1.jpg',
    quantity: 1,
},
item5={
    id: 5,
    title: 'Satin Wedding Dress',
    color: 'White',
    category: 'Wedding',
    price: 3000,
    description: 'Made with the best fabric,Luxurious Brand. ',
    image: 'images/wedding dress 1.jpg',
    quantity: 1,
},
item6={
    id: 6,
    title: 'Dress Short',
    color: 'White',
    category: 'Casual',
    price: 100,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/dress casual 2.jpg',
    quantity: 1,
},
item7={
    id: 7,
    title: 'White Vintage Dress',
    color: 'White',
    category: 'Vintage',
    price: 75,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/vintage dress 2.jpg',
    quantity: 1,
},
item8={
    id: 8,
    title: 'Dress',
    color: 'Black',
    category: 'Party',
    price: 75,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/dress 2.jpg',
    quantity: 1,
},
item9={
    id: 9,
    title: 'Black Offsholders Dress',
    color: 'Black',
    category: 'Ballroom',
    price: 250,
    description: 'Luxurious Dress.Made by Perrie Edwards',
    image: 'images/ball room dress 2.jpg',
    quantity: 1,
},
item10={
    id: 10,
    title: 'Wedding Dress 1',
    color: 'White',
    category: 'Wedding',
    price: 3000,
    description: 'Made with the best fabric,Luxurious Brand. ',
    image: 'images/wedding dress 2.jpg',
    quantity: 1,
},
item11={
    id: 11,
    title: 'Black Dress',
    color: 'Black',
    category: 'Casual',
    price: 50,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/dress casual 3.jpg',
    quantity: 1,
},
item12={
    id: 12,
    title: 'Flower Dress',
    color: 'White',
    category: 'Vintage',
    price: 75,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/vintage dress 3.jpg',
    quantity: 1,
},
item13={
    id: 13,
    title: 'Black Short Dress',
    color: 'Black',
    category: 'Party',
    price: 25,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/dress 3.jpg',
    quantity: 1,
},
item14={
    id: 14,
    title: 'Blue Dress',
    color: 'Blue',
    category: 'Ballroom',
    price: 500,
    description: 'Luxurious Dress.Made by Perrie Edwards',
    image: 'images/ball room dress 3.jpg',
    quantity: 1,
},
item15={
    id: 15,
    title: 'Wedding Dress 2',
    color: 'White',
    category: 'Wedding',
    price: 4000,
    description: 'Made with the best fabric,Luxurious Brand. ',
    image: 'images/wedding dress 3.jpg',
    quantity: 1,
},
item16={
    id: 16,
    title: 'Yellow Dress',
    color: 'Yellow',
    category: 'Casual',
    price: 25,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/casual dress 4.jpg',
    quantity: 1,
},
item17={
    id: 17,
    title: 'Flower Vintage Dress',
    color: 'White',
    category: 'Vintage',
    price: 75,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/vintage dress 4.jpg',
    quantity: 1,
},
item18={
    id: 18,
    title: 'Red Dress',
    color: 'Red',
    category: 'Party',
    price: 75,
    description: '100% Cotton,Machine washable,so comfy.',
    image: 'images/dress 4.jpg',
    quantity: 1,
},
item19={
    id: 19,
    title: 'Blue Feather Dress',
    color: 'Blue',
    category: 'Ballroom',
    price: 550,
    description: 'Luxurious Dress.Made by Perrie Edwards',
    image: 'images/ball room dress 4.jpg',
    quantity: 1,
},
item20={
    id: 20,
    title: 'Wedding Dress 3',
    color: 'White',
    category : 'Wedding',
    price: 9000,
    description: 'Made with the best fabric,Luxurious Brand. ',
    image: 'images/wedding dress 4.jpg',
    quantity: 1,
}
];
let product1String=JSON.stringify(product1);
localStorage.setItem("product1storage",product1String);
let product1storage=localStorage.getItem("product1");

const product2=
[
   item1={
        id: 1,
        title: 'White and Black Dress',
        color: 'All',
        category : 'All',
        price: 100,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/dress casual 1.jpg',
        quantity: 1,
    },
   item2= {
        id: 2,
        title: 'Coffee Vintage Dress',
        color: 'All',
        category : 'All',
        price: 75,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/vintage dress 1.jpg',
        quantity: 1,
    },
    item3= {
        id: 3,
        title: 'White Long Dress',
        color: 'All',
        category : 'All',
        price: 50,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/dress1.jpg',
        quantity: 1,
    },
    item4= {
        id: 4,
        title: 'Black Long Dress',
        color: 'All',
        category : 'All',
        price: 300,
        description: 'Luxurious Dress.Made by Perrie Edwards',
        image: 'images/ball room dress 1.jpg',
        quantity: 1,
    },
    item5= {
        id: 5,
        title: 'Satin Wedding Dress',
        color: 'All',
        category : 'All',
        price: 3000,
        description: 'Made with the best fabric,Luxurious Brand. ',
        image: 'images/wedding dress 1.jpg',
        quantity: 1,
    },
    item6= {
        id: 6,
        title: 'Dress Short',
        color: 'All',
        category : 'All',
        price: 100,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/dress casual 2.jpg',
        quantity: 1,
    },
    item7={
        id: 7,
        title: 'White Vintage Dress',
        color: 'All',
        category : 'All',
        price: 75,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/vintage dress 2.jpg',
        quantity: 1,
    },
    item8={
        id: 8,
        title: 'Dress',
        color: 'All',
        category : 'All',
        price: 75,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/dress 2.jpg',
        quantity: 1,
    },
    item9={
        id: 9,
        title: 'Black Offsholders Dress',
        color: 'All',
        category : 'All',
        price: 250,
        description: 'Luxurious Dress.Made by Perrie Edwards',
        image: 'images/ball room dress 2.jpg',
        quantity: 1,
    },
    item10={
        id: 10,
        title: 'Wedding Dress 1',
        color: 'All',
        category : 'All',
        price: 3000,
        description: 'Made with the best fabric,Luxurious Brand. ',
        image: 'images/wedding dress 2.jpg',
        quantity: 1,
    },
    item11={
        id: 11,
        title: 'Black Dress',
        color: 'All',
        category : 'All',
        price: 50,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/dress casual 3.jpg',
        quantity: 1,
    },
    item12={
        id: 12,
        title: 'Flower Dress',
        color: 'All',
        category : 'All',
        price: 75,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/vintage dress 3.jpg',
        quantity: 1,
    },
    item13={
        id: 13,
        title: 'Black Short Dress',
        color: 'All',
        category : 'All',
        price: 25,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/dress 3.jpg',
        quantity: 1,
    },
    item14={
        id: 14,
        title: 'Blue Dress',
        color: 'All',
        category : 'All',
        price: 500,
        description: 'Luxurious Dress.Made by Perrie Edwards',
        image: 'images/ball room dress 3.jpg',
        quantity: 1,
    },
    item15={
        id: 15,
        title: 'Wedding Dress 2',
        color: 'All',
        category : 'All',
        price: 4000,
        description: 'Made with the best fabric,Luxurious Brand. ',
        image: 'images/wedding dress 3.jpg',
        quantity: 1,
    },
    item16={
        id: 16,
        title: 'Yellow Dress',
        color: 'All',
        category : 'All',
        price: 25,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/casual dress 4.jpg',
        quantity: 1,
    },
    item17={
        id: 17,
        title: 'Flower Vintage Dress',
        color: 'All',
        category : 'All',
        price: 75,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/vintage dress 4.jpg',
        quantity: 1,
    },
    item18={
        id: 18,
        title: 'Red Dress',
        color: 'All',
        category : 'All',
        price: 75,
        description: '100% Cotton,Machine washable,so comfy.',
        image: 'images/dress 4.jpg',
        quantity: 1,
    },
    item19={
        id: 19,
        title: 'Blue Feather Dress',
        color: 'All',
        category : 'All',
        price: 550,
        description: 'Luxurious Dress.Made by Perrie Edwards',
        image: 'images/ball room dress 4.jpg',
        quantity: 1,
    },
    item20={
        id: 20,
        title: 'Wedding Dress 3',
        color: 'All',
        category : 'All',
        price: 9000,
        description: 'Made with the best fabric,Luxurious Brand. ',
        image: 'images/wedding dress 4.jpg',
        quantity: 1,
    }
];

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

    
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
if (!Array.isArray(favorites)) {
    favorites = [];
}
let cart1 = JSON.parse(localStorage.getItem('cart1')) || [];
if (!Array.isArray(cart1)) {
    cart1 = [];
}
const categories = [...new Set(product1.map((item) => 
    {return item}))]
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

