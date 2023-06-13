import './hover.css';

const Card = (imageRef, descriptionText) => {

    // creates a card element
    // COMPOSED OF HOVERTEXT and HOVERIMAGE !!!!!!!!!!!!!!!!!



    const _initContainer = () => {
        let cardContainer = document.createElement('div');
        cardContainer.classList = 'card-container';

        return cardContainer;
    }

    const _initImageElement = () => {
        let imageElement = document.createElement('img');
        imageElement.classList = 'card-img'
        imageElement.setAttribute('src', imageRef);

        return imageElement;
    }

    const _initDescription = () => {
        let description = document.createElement('div');
        description.classList = 'card-description';
        description.textContent = descriptionText;

        return description;
    }

    let cardContainer = _initContainer();
    let imageElement = _initImageElement();
    let descriptionElement = _initDescription();
        
    cardContainer.appendChild(imageElement);
    cardContainer.appendChild(descriptionElement);


    const deleteCard = () => {
        cardContainer.remove();
        return null;
    }

    return { deleteCard };
}

const HoverText = () => {
    // add special class to the element with :after effects
    const hoverTextUnderlineAnimation = textElement => {
        textElement.classList.add('hover-underline-animation');
    }

    return { hoverTextUnderlineAnimation };
} 

const HoverImage = () => {
    // on hover, animate the image, eg. rotate or something else
    const hoverImageFrameAnimate = imageElement => {
        imageElement.classList.add('hover-animate-image');
    }

    return { hoverImageFrameAnimate };
}



export { Card, HoverText, HoverImage };

