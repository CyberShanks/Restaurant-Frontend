import './stylesheets/hover.css'

const HoverText = () => {
    // add special class to the element with :after effects
    const hoverTextUnderlineAnimation = textElement => {
        textElement.classList.add('hover-underline-animation');
    }

    return { hoverTextUnderlineAnimation };
} 

const MenuCard = (imageRef, titleText, descriptionText) => {

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

    const _initTitleElement = title => {
        let titleElement = document.createElement('div');
        titleElement.classList = 'card-title';
        titleElement.textContent = title;

        return titleElement;
    }

    const _initDescription = desc => {
        let description = document.createElement('div');
        description.classList = 'card-description';
        description.textContent = desc;

        return description;
    }

    const initialize = (imageLoc, title, desc) => {
        let cardContainer = _initContainer();
        let imageElement = _initImageElement(imageLoc);
        let titleElement = _initTitleElement(title);
        let descriptionElement = _initDescription(desc);

        cardContainer.appendChild(imageElement);
        cardContainer.appendChild(titleElement);
        cardContainer.appendChild(descriptionElement);

        return cardContainer;
    }
    

    const deleteCard = cardContainer => {
        cardContainer.remove();
        return null;
    }

    return { imageRef, titleText, descriptionText, deleteCard, initialize };
}

const ChefCard = (image, name, desc) => {

    const _initContainer = () => {
        let cardContainer = document.createElement('div');
        cardContainer.classList = 'chef-card';

        return cardContainer;
    }

    const _initImageElement = image => {
        let imageElement = document.createElement('img');
        imageElement.classList = 'chef-image';
        imageElement.setAttribute('src', image);

        return imageElement;
    }

    const _initTitleElement = name => {
        let titleElement = document.createElement('div');
        titleElement.classList = 'chef-name';
        titleElement.textContent = name;

        return titleElement;
    }

    const _initDescription = desc => {
        let description = document.createElement('div');
        description.classList = 'chef-desc';
        description.textContent = desc;

        return description;
    }

    const initialize = (imageLoc, title, desc) => {
        let cardContainer = _initContainer();
        let imageElement = _initImageElement(imageLoc);
        let titleElement = _initTitleElement(title);
        let descriptionElement = _initDescription(desc);

        cardContainer.appendChild(imageElement);
        cardContainer.appendChild(titleElement);
        cardContainer.appendChild(descriptionElement);

        return cardContainer;
    }
    
    const deleteCard = cardContainer => {
        cardContainer.remove();
        return null;
    }

    return { image, name, desc, deleteCard, initialize };
}

export { MenuCard, ChefCard };