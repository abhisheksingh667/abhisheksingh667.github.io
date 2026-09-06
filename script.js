console.log("Portfolio loaded successfully.");


// Update footer year automatically

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        `© ${year} Abhishek Singh. Built with Python-minded simplicity.`;
}

/* =========================================
   PROJECT IMAGE GALLERY
========================================= */

function changeProjectImage(imageId, imageSource) {

    const mainImage =
        document.getElementById(imageId);

    if (mainImage) {

        mainImage.src = imageSource;

    }

}


/* =========================================
   IMAGE LIGHTBOX
========================================= */

function openImage(imageSource) {

    const lightbox =
        document.createElement("div");

    lightbox.className =
        "image-lightbox";


    const closeButton =
        document.createElement("div");

    closeButton.className =
        "image-lightbox-close";

    closeButton.innerHTML =
        "&times;";


    const image =
        document.createElement("img");

    image.src =
        imageSource;


    lightbox.appendChild(closeButton);

    lightbox.appendChild(image);


    document.body.appendChild(lightbox);


    lightbox.addEventListener(
        "click",
        function () {

            lightbox.remove();

        }
    );

}

