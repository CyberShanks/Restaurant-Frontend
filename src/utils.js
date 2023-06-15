import './stylesheets/hover.css'

const HoverText = () => {
    // add special class to the element with :after effects
    const hoverTextUnderlineAnimation = textElement => {
        textElement.classList.add('hover-underline-animation');
    }

    return { hoverTextUnderlineAnimation };
} 

const Card = (imageRef, descriptionText) => {

    // COMPOSED OF HOVERIMAGE !
    const _initContainer = () => {
        let cardContainer = document.createElement('div');
        cardContainer.classList = 'card-container';

        return cardContainer;
    }

    const _initImageElement = imageLoc => {
        let imageElement = document.createElement('img');
        imageElement.classList = 'hover-animate-image'
        imageElement.setAttribute('src', imageLoc);

        return imageElement;
    }

    const _initDescription = desc => {
        let description = document.createElement('div');
        description.classList = 'card-description';
        description.textContent = desc;

        return description;
    }

    const initialize = (imageRef, desc) => {
        let cardContainer = _initContainer();
        let imageElement = _initImageElement(imageRef);
        let descriptionElement = _initDescription(desc);

        cardContainer.appendChild(imageElement);
        cardContainer.appendChild(descriptionElement);

        return cardContainer;
    }
    

    const deleteCard = cardContainer => {
        cardContainer.remove();
        return null;
    }

    return { imageRef, descriptionText, deleteCard, initialize };
}

export { Card };