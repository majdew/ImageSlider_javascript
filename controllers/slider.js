document.addEventListener('DOMContentLoaded', (event) => {
    const slide = document.querySelector('.slide');
    const images = document.querySelectorAll('.slide img');

    const previousBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let counter = 1;
    const imageWidth = images[0].clientWidth;


    previousBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        slide.style.transition = "transform 1s ease-in-out";
        counter--;
        slide.style.transform = `translateX(${-imageWidth * counter}px)`;
    });

    nextBtn.addEventListener('click', () => {
        if (counter >= images.length - 1) return;
        slide.style.transition = "transform 1s ease-in-out";
        counter++;
        slide.style.transform = `translateX(${-imageWidth * counter}px)`;
    });


    slide.addEventListener('transitionend', () => {

        if (images[counter].id == 'lastImage') {
            slide.style.transition = 'none';
            counter = images.length - 2;
            slide.style.transform = `translateX(${-imageWidth * counter}px)`;
        }
        else if (images[counter].id == 'firstImage') {
            slide.style.transition = 'none';
            counter = images.length - counter;
            slide.style.transform = `translateX(${-imageWidth * counter}px)`;
        }
    });
});