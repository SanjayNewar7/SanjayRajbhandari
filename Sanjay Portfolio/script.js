function showImage(imageIndex) {
    const slideshowImage = document.getElementById('slideshow-image');
    slideshowImage.src = `image${imageIndex}.jpg`;
    document.querySelector('.image-slideshow').style.display = 'block';
}

function hideImage() {
    document.querySelector('.image-slideshow').style.display = 'none';
}
function openPopup() {
    document.getElementById("overlay").style.display = "flex";
}

function closePopup() {
    document.getElementById("overlay").style.display = "none";
}

// Open the popup when the page loads (you can remove this if you want to trigger it differently)
window.onload = function() {
    openPopup();
};
