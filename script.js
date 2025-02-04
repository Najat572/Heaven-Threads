const menuBurger = document.getElementById('menu-burger');
const mobileNav = document.getElementById('mobile-navigation');
const closeBtn = document.getElementById('close');
const overlay = document.getElementById('overlay');
const mobileLinks = document.querySelectorAll('.mobile-links a');

function toggleMenu() {
  mobileNav.classList.toggle('active');
  overlay.classList.toggle('active');
  menuBurger.classList.toggle('toggled');
}

menuBurger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);


mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mobileNav.classList.contains('active')) {
      toggleMenu();
    }
  });
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 650) {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    menuBurger.classList.remove('toggled');
  }
});




const sentences = ["Fashion is the armor to survive everyday life.",
  "Style is a way to say who you are without speaking.",
  "Trendy is the last stage before tacky.",
  "Elegance is not about being noticed, it's about being remembered.",
  "Dress how you want to be addressed."];

function typeSentence(sentence, index, callback) {
  if (index < sentence.length) {
    document.getElementById("fashionText").innerHTML += sentence.charAt(index);
    setTimeout(() => typeSentence(sentence, index + 1, callback), 100);
  } else {
    setTimeout(callback, 2000);
  }
}

function startTypingEffect() {
  const fashionText = document.getElementById("fashionText");
  fashionText.innerHTML = "";
  let randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
  typeSentence(randomSentence, 0, () => {
    setTimeout(startTypingEffect, 1000);
  });
}

window.onload = startTypingEffect;











document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', function () {
      let product = this.closest('.product');
      let productImage = product.querySelector('.image img').src;
      let productName = product.querySelector('.product-name').textContent;
      let productPrice = product.querySelector('.product-price').textContent;


      document.getElementById('modal-image').src = productImage;
      document.getElementById('modal-name').textContent = productName;
      document.getElementById('modal-price').textContent = productPrice;


      document.getElementById('product-model').style.display = 'flex';
    });
  });


  document.querySelector('.close-model').addEventListener('click', function () {
    console.log("hi")
    document.getElementById('product-model').style.display = 'none';
  });


  document.getElementById('increase').addEventListener('click', function () {
    var quantity = document.getElementById('quantity');
    quantity.textContent = parseInt(quantity.textContent) + 1;
  });

  document.getElementById('decrease').addEventListener('click', function () {
    var quantity = document.getElementById('quantity');
    if (parseInt(quantity.textContent) > 1) {
      quantity.textContent = parseInt(quantity.textContent) - 1;
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.view-details-section-4').forEach(button => {
    button.addEventListener('click', function () {
      let product2 = this.closest('.product-section-4');
      let productImage2 = product2.querySelector('.image-section-4 img').src;
      let productName2 = product2.querySelector('.product-name-section-4').textContent;
      let productPrice2 = product2.querySelector('.product-price-section-4').textContent;


      document.getElementById('modal-image-section-4').src = productImage2;
      document.getElementById('modal-name-section-4').textContent = productName2;
      document.getElementById('modal-price-section-4').textContent = productPrice2;


      document.getElementById('product-modal-section-4').style.display = 'flex';
    });
  });


  document.querySelector('.close-model-section-4').addEventListener('click', function () {
    console.log("hi")
    document.getElementById('product-modal-section-4').style.display = 'none';
  });
  document.getElementById('increase-section-4').addEventListener('click', function () {
    var quantity2 = document.getElementById('quantity-section-4');
    quantity2.textContent = parseInt(quantity2.textContent) + 1;
  });

  document.getElementById('decrease-section-4').addEventListener('click', function () {
    var quantity2 = document.getElementById('quantity-section-4');
    if (parseInt(quantity2.textContent) > 1) {
      quantity2.textContent = parseInt(quantity2.textContent) - 1;
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(".carousel-inner");
  const categories = document.querySelectorAll(".carousel-inner .category");
  const arrowButtons = document.querySelectorAll(".carousel-arrow");

  const visibleCount = 4;
  const totalItems = categories.length;
  const itemWidth = categories[0].offsetWidth + 10;

  let currentIndex = 0;


  function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    updateArrows();
  }


  function updateArrows() {
    arrowButtons.forEach((button) => {
      const direction = button.getAttribute("data-direction");
      if (direction === "left") {
        if (currentIndex === 0) {
          button.style.color = "grey";
          button.disabled = true;
        } else {
          button.style.color = "";
          button.disabled = false;
        }
      } else if (direction === "right") {
        if (currentIndex === totalItems - visibleCount) {

          button.style.color = "grey";
          button.disabled = true;
        } else {
          button.style.color = "";
          button.disabled = false;
        }
      }
    });
  }


  updateArrows();

  arrowButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const direction = this.getAttribute("data-direction");

      if (direction === "left") {

        currentIndex = Math.max(currentIndex - 1, 0);
      } else if (direction === "right") {

        currentIndex = Math.min(currentIndex + 1, totalItems - visibleCount);
      }
      updateCarousel();
    });
  });


  window.addEventListener("resize", () => {
    const newItemWidth = categories[0].offsetWidth + 10;
    if (newItemWidth !== itemWidth) {
      updateCarousel();
    }
  });
});






const dropdown = document.getElementById('currencyDropdown');
const selected = document.getElementById('dropdownSelected');
const optionsContainer = document.getElementById('dropdownOptions');
const selectedValueDiv = document.getElementById('selectedValue');


selected.addEventListener('click', () => {
  optionsContainer.classList.toggle('active');
  selected.classList.toggle('active');
});


optionsContainer.addEventListener('click', (e) => {
  const option = e.target.closest('div[data-value]');
  if (option) {

    selectedValueDiv.innerHTML = option.innerHTML;

    optionsContainer.classList.remove('active');
    selected.classList.remove('active');

    console.log('User selected:', option.getAttribute('data-value'));
  }
});


document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    optionsContainer.classList.remove('active');
    selected.classList.remove('active');
  }
});
