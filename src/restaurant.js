import './stylesheets/mainstyle.css';
import { Menu } from "./menu.js";

const Restaurant = () => {
    // composed of Menu() object -> gets serveMenu() AND deleteMenu()
    // composed of Chef() object -> gets displayChef() AND deleteChef()
    // composed of Location() object -> gets showLocation() AND deleteLocation()

    // const restaurant = Object.assign({}, Menu);
    let newContainer;

    const container = document.getElementById('container');

    const _clearPage = () => {
        const contentContainer = document.getElementById('content');
        contentContainer.remove();
    }

    const _changeContainerPadding = newPadding => {
        container.style.padding = newPadding;
    }
    const _createSupport = () => {
        newContainer = document.createElement('div');
        newContainer.classList = 'menu-grid';

        container.appendChild(newContainer);
        _changeContainerPadding("2em 4em");
    }

    const makeMenuPage = () => {

        _clearPage();
        _createSupport();
        let menuToday = Menu();
        menuToday.serve(newContainer);

        console.log("done");
    };

    return { makeMenuPage };    
}

// restaurant.makeMenuPage();

const restaurant = Restaurant();

//event listeners
const foodNav = document.getElementById('food');
// const chefNav = document.getElementById('chef');
// const locNav = document.getElementById('location');

foodNav.addEventListener('click', restaurant.makeMenuPage);
