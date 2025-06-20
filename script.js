 // ------------------Home slider---------------------------------------- *
 
    let currentIndex = 0;
    const slider = document.getElementById('slider');
    const totalSlides = slider.children.length;

    function autoSlide(){
        currentIndex++;
        if (currentIndex >= totalSlides){
            currentIndex = 0 ; // Reset to first img
        }
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    // Auto slide duration
    setInterval(autoSlide, 4000)


/* // --------------- Nav Section Links  -------------------------- */
document.addEventListener("DOMContentLoaded", () =>{
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-links");
    

    const showSection =(id) => {
        sections.forEach((section) => {
            section.classList.remove("visible");
        });
        document.getElementById(id).classList.add("visible");
    };
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {                                                                             
            e.preventDefault();
            const target = e.target.dataset.target;
            if (target) {
                showSection(target);
            }
        });
    });
});


/* //---------------- Menu section Nav linkes-------------------------------------- */

var menulinks= document.getElementsByClassName ('menu-links');
var menutypes= document.getElementsByClassName('menu-type');
function openmenu(menuname){
    for(menulink of menulinks){
        menulink.classList.remove('active-link');
    }
    for(menutype of menutypes){
        menutype.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(menuname).classList.add('active-tab')

}


//-------------------------------------MOre Details in menu Items--------------------------------------------
document.querySelectorAll('.moredetailsbtn').forEach((button, index) => {
    const modal = button.nextElementSibling;
    const closeBtn = modal.querySelector('.close');

//  Show modal when "More Details" button is clicked
    button.onclick = function () {
        modal.style.display = "block";
    };

    // close modal when "x" is clicked
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    // close modal when clicking outside of the modal
    window.onclick = function (event) {
        if (event.target === modal){
            modal.style.display = "none";
        }
    };
});

// <!-- --------------------------Gallery in Home--------------------------------------- -->

function openGallery(galleryId, event) {
// Hide all galleries
document.querySelectorAll('.gallery-type > div').forEach(div => {
    div.classList.remove('active');
});

        // Show selected gallery
        document.getElementById(galleryId).classList.add('active');
        // Update active tab style
        document.querySelectorAll('.gallery-link').forEach(link => {
            link.classList.remove('active-g-link');
        });
        event.target.classList.add('active-g-link');
    }

//  Gallery Image View Big Size
  function openImage(imageSrc) {
    const viewer = document.getElementById('g-image-viewer');
    const fullImg = document.getElementById('g-full-image');
    fullImg.src = imageSrc;
    viewer.style.display = 'flex';
  }

  function closeImage() {
    const viewer = document.getElementById('g-image-viewer');
    viewer.style.display = 'none';
    document.getElementById('g-full-image').src = '';
  }



    // <!----------------- ADD to Cart -----------------  -->
let cartcount = 0;

function additem(productId) {
    document.querySelector(`.add-btn[onclick = "additem(${productId})"]`).style.display = 'none';
    document.getElementById(`countercontrols${productId}`).style.display = 'flex';

    increasecount(productId); // Automatically increase to when "ADD" is clicked

    // show cart bar if this the first item is added 
    if (cartcount === 1){
        document.getElementById("cartBar").style.display = "flex";
    }
}

function increasecount(productId) {
    const itemCountElement = document.getElementById(`itemcount${productId}`);
    let = itemCount = parseInt(itemCountElement.innerText);
    itemCount++;
    itemCountElement.innerText = itemCount;

    cartcount++
    updatecartmassege();
}

function decreasecount(productId){
    const itemCountElement = document.getElementById(`itemcount${productId}`);
    let itemCount = parseInt(itemCountElement.innerText);
    if (itemCount > 0) {
        itemCount --;
        itemCountElement.innerText = itemCount;
        cartcount --;

        if (itemCount === 0){
            document.getElementById(`countercontrols${productId}`).style.display = "none";
            document.querySelector(`.add-btn[onclick = "additem(${productId})"]`).style.display = "flex";
        }

        updatecartmassege();
        // hide cart bar if no items are left in the cart
        if (cartcount === 0){
            document.getElementById("cartBar").style.display = "none";
        }
    }
}

function updatecartmassege(){
    document.getElementById("cartmassege").innerText =`${cartcount} item${cartcount !== 1 ? 's' : '' } added`;

}