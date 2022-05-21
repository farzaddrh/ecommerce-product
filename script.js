const smallImgs = document.querySelector(".product-imgs-small");
const smallImg = document.querySelectorAll(".img-small");
const smallImgContainer = document.querySelectorAll(".img-small-container");
const largeImage = document.getElementById("large-img");
const overlay = document.querySelector(".overlay");
const slider = document.querySelector(".slider");
const btnNext = document.querySelector(".next");
const btnPrevious = document.querySelector(".previous");
const btnClose = document.querySelector(".close");
const smallImgContainerSlider = document.querySelectorAll(
    ".img-small-container-slider"
);
const btnPlus = document.querySelector(".btn-plus");
const btnMinu = document.querySelector(".btn-minus");
const productNum = document.getElementById("product-num");
const btnAddToCart = document.querySelector(".btn-add");
const numberOfProduct = document.querySelector(".product-number");
const cartBody = document.querySelector(".cart-body");
const profileImage = document.querySelector(".avatar");
const cart = document.querySelector(".cart");
const empty = document.querySelector(".empty");
const sneakerInfor = document.querySelector(".sneaker-info");
const productNumInCart = document.querySelector(".num");
const totalPriceInCart = document.querySelector(".tot-price");
const btnDelete = document.querySelector(".delete");
const btnCheckout = document.querySelector(".btn-checkout");
const btnNav = document.querySelector(".btn-mobile-nav");
const headerContainer = document.querySelector(".container-header");
let slideIndex = 1;

smallImgContainer.forEach((container) => {
    container.addEventListener("click", function () {
        smallImgContainer.forEach((cont) =>
            cont.classList.remove("img-small-container-active")
        );
        this.classList.add("img-small-container-active");
        const selectedImg = this.querySelector(".img-small");
        largeImage.src = selectedImg.src;
    });
});

overlay.addEventListener("click", function () {
    toglleHiddenClass(this);
    toglleHiddenClass(slider);
});

btnClose.addEventListener("click", function () {
    toglleHiddenClass(slider);
    toglleHiddenClass(overlay);
});

function toglleHiddenClass(el) {
    el.classList.toggle("hidden");
}
////////////////////////slider////////////////////////

// showSlides(slideIndex);

const showSlides = function (n) {
    let i;

    const slides = document.querySelectorAll(".img-large-slider-container");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < smallImgContainerSlider.length; i++) {
        smallImgContainerSlider[i].className = smallImgContainerSlider[
            i
        ].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    smallImgContainerSlider[slideIndex - 1].className += " active";
};
largeImage.addEventListener("click", function () {
    toglleHiddenClass(overlay);
    toglleHiddenClass(slider);
    slideIndex = +this.src.split("-")[2][0];
    showSlides(slideIndex);
});

const plusSlides = function (n) {
    showSlides((slideIndex += n));
};

const currentSlide = function (n) {
    showSlides((slideIndex = n));
};

btnNext.addEventListener("click", function () {
    plusSlides(1);
});
btnPrevious.addEventListener("click", function () {
    plusSlides(-1);
});

smallImgContainerSlider.forEach((cont, i) => {
    cont.addEventListener("click", function () {
        constcurrentSlide(i + 1);
    });
});
/////////////////// detemrmine the number of the product////////////////
btnPlus.addEventListener("click", function () {
    productNum.value++;
});
btnMinu.addEventListener("click", function () {
    if (productNum.value <= 0) {
        productNum.value = 0;
        return;
    } else productNum.value--;
});
///////////////adding the product to cart//////////
btnAddToCart.addEventListener("click", function () {
    const productNumValue = +productNum.value;
    if (productNumValue != 0) {
        numberOfProduct.classList.add("active-basket");
        numberOfProduct.textContent = productNumValue;
        empty.classList.add("hidden");
        sneakerInfor.classList.remove("hidden");
        productNumInCart.innerHTML = productNumValue;
        totalPriceInCart.innerHTML = `$${125 * productNumValue}.00`;
    } else {
        empty.classList.remove("hidden");
        sneakerInfor.classList.add("hidden");
        numberOfProduct.classList.remove("active-basket");
    }
});

profileImage.addEventListener("mouseenter", function (e) {
    console.log("ddddddddddddd");
    console.log(e);
    cart.classList.remove("hidden");
});
profileImage.addEventListener("mouseleave", function () {
    if (productNum.value == 0) cart.classList.add("hidden");
});

btnDelete.addEventListener("click", function () {
    productNum.value = 0;
    empty.classList.remove("hidden");
    sneakerInfor.classList.add("hidden");
    numberOfProduct.classList.remove("active-basket");
    cart.classList.add("hidden");
});
btnCheckout.addEventListener("click", function () {
    cart.classList.add("hidden");
});
//////////////responsive////////////

btnNav.addEventListener("click", function () {
    headerContainer.classList.toggle("nav-open");
});
