import './stylesheets/hover.css'

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
    

    return { imageRef, titleText, descriptionText, initialize };
}

const ChefCard = (image, name) => {

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

    const initialize = (imageLoc, title) => {
        let cardContainer = _initContainer();
        let imageElement = _initImageElement(imageLoc);
        let titleElement = _initTitleElement(title);

        cardContainer.appendChild(imageElement);
        cardContainer.appendChild(titleElement);

        return cardContainer;
    }
    

    return { image, name, initialize };
}

const LocationCard = (image, title, address) => {

    const _initContainer = () => {
        let cardContainer = document.createElement('div');
        cardContainer.classList = 'find-us';

        return cardContainer;
    }

    const _initImageElement = imageLoc => {
        let imageElement = document.createElement('img');
        imageElement.classList = 'res-front-view'
        imageElement.setAttribute('src', imageLoc);

        return imageElement;
    }

    const _initTempContainer = () => {
        let tempContainer = document.createElement('div');
        tempContainer.classList = 'texts';

        return tempContainer;
    }

    const _initTitleElement = title => {
        let titleElement = document.createElement('div');
        titleElement.classList = 'loc-title';
        titleElement.textContent = title;

        return titleElement;
    }

    const _initDescription = desc => {
        let description = document.createElement('div');
        description.classList = 'loc-address';
        description.textContent = desc;

        return description;
    }

    const initialize = (imageLoc, title, address) => {
        let cardContainer = _initContainer();
        let imageElement = _initImageElement(imageLoc);
        let titleElement = _initTitleElement(title);
        let descriptionElement = _initDescription(address);
        let tempContainer = _initTempContainer();

        tempContainer.appendChild(titleElement);
        tempContainer.appendChild(descriptionElement);

        cardContainer.appendChild(tempContainer);
        cardContainer.appendChild(imageElement);
        

        return cardContainer;
    }
    

    return { image, title, address, initialize };
    
}

export { MenuCard, ChefCard, LocationCard };