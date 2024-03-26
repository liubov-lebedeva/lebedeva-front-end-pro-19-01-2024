let getImage = (array) => {
    const randomNumber = Math.floor(Math.random() * array.length);
    return `<img src="${array[randomNumber]}" alt="img">`;
}

let insertImage = (image, divSelector)  => {
    let div = document.querySelector(divSelector);
    div.innerHTML = image;
}


let imagesArray = [];
for (let i = 0; i < 9; i++) {
    imagesArray[i] = `images/${i + 1}.jpg`;
}

window.addEventListener('load', () => {
        let image = getImage(imagesArray);
        insertImage(image, 'div.image');
    }
);

