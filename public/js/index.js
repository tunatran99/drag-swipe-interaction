const imgs = document.querySelectorAll('.image')
var index = 0;
let offsetX, offsetY, currentX, currentY;
let isDragging = false;

imgs.forEach(img => {
    img.addEventListener('dragstart', dragStart);
    img.addEventListener('drag', drag);
    img.addEventListener('dragend', dragEnd);
    img.addEventListener('touchstart', touchStart);
    img.addEventListener('touchmove', swipe);
    img.addEventListener('touchend', touchEnd);
})

function swipeLeft() {
    if (imgs.length - index > 0) {
        index++;
        imgs[imgs.length - index].style.transform = 'translateX(-25rem)';
    }
}

function swipeRight() {
    if (imgs.length - index > 0) {
        index++;
        imgs[imgs.length - index].style.transform = 'translateX(25rem)';
    }
}

function dragStart(e) {
    // Get initial mouse cursor position
    offsetX = e.clientX - imgs[imgs.length - index - 1].offsetLeft;
    offsetY = e.clientY - imgs[imgs.length - index - 1].offsetTop;

    if (e.target === imgs[imgs.length - index - 1].firstElementChild) {
        isDragging = true;
    }
}

function drag(e) {
    if (isDragging) {
        // Calculate new position of the box
        currentX = e.clientX - offsetX;
        currentY = e.clientY - offsetY;

        console.log(currentX)

        // Set the new position of the box using the style property
        imgs[imgs.length - index - 1].style.left = currentX + 'px'
        imgs[imgs.length - index - 1].style.top = currentY + 'px'
    }
}

function dragEnd(e) {
    // imgs[imgs.length - index - 1].style.left = '0px'
    //     imgs[imgs.length - index - 1].style.top = '0px'
    isDragging = false;
    // Do something after the drag is complete
    imgs[imgs.length - index - 1].removeEventListener('dragstart', dragStart);
    imgs[imgs.length - index - 1].removeEventListener('drag', drag);
    imgs[imgs.length - index - 1].removeEventListener('dragend', dragEnd);
    index++;
}

function touchStart(e) {
    // Get initial mouse cursor position
    offsetX = e.touches[0].clientX - imgs[imgs.length - index - 1].offsetLeft;
    offsetY = e.touches[0].clientY - imgs[imgs.length - index - 1].offsetTop;

    if (e.target === imgs[imgs.length - index - 1].firstElementChild) {
        isDragging = true;
    }
}

function swipe(e) {
    if (isDragging) {
        // Calculate new position of the box
        currentX = e.touches[0].clientX - offsetX;
        currentY = e.touches[0].clientY - offsetY;

        // Set the new position of the box using the style property
        imgs[imgs.length - index - 1].style.left = currentX + 'px'
        imgs[imgs.length - index - 1].style.top = currentY + 'px'
    }
}

function touchEnd(e) {
    isDragging = false;
    // Do something after the drag is complete
    imgs[imgs.length - index - 1].removeEventListener('touchstart', touchStart);
    imgs[imgs.length - index - 1].removeEventListener('touchmove', swipe);
    imgs[imgs.length - index - 1].removeEventListener('touchend', touchEnd);
    index++;
}