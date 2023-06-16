import './stylesheets/mainstyle.css';
import { Menu } from "./menu.js";

const Restaurant = () => {
    
    let currentState = "default";
    let newContainer;

    const container = document.getElementById('container');

    const _clearCurrentState = () => {
        let removeContainer;
        if (currentState == "default") removeContainer = document.getElementById('content');

        else if (currentState == "menu") removeContainer = document.querySelector(".menu-grid");

        else if (currentState == "chef") ;

        else if (currentState == "location") ;
        
        removeContainer.remove();
        
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

    const _changeCurrentState = newState => {
        currentState = newState;
    }

    const makeMenuPage = () => {

        _clearCurrentState();
        _changeCurrentState("menu");
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
