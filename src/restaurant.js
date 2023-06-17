import './stylesheets/mainstyle.css';
import { Menu } from "./menu.js";
import { Chef } from './chef.js';
import { Loc } from './location.js';

const Restaurant = () => {
    
    let currentState = "default";
    let newContainer;

    const container = document.getElementById('container');

    const _clearCurrentState = () => {
        let removeContainer;
        if (currentState == "default") removeContainer = document.getElementById('content');

        else if (currentState == "food") removeContainer = document.querySelector(".menu-grid");

        else if (currentState == "chef") removeContainer = document.querySelector(".chef-grid");

        else if (currentState == "location") removeContainer = document.querySelector(".loc-grid");
        
        removeContainer.remove();
        
    }

    const _changeContainerPadding = newPadding => {
        container.style.padding = newPadding;
    }
    const _createSupport = className => {
        newContainer = document.createElement('div');
        newContainer.classList = className;

        container.appendChild(newContainer);
        _changeContainerPadding("2em 4em");
    }

    const _changeCurrentState = newState => {
        if (currentState != "default"){
            let oldElement = document.getElementById(currentState);
            oldElement.style.textDecoration = 'solid';
        }
        currentState = newState;
        let element = document.getElementById(newState);
        element.style.textDecoration = 'underline';
    }

    const makeMenuPage = () => {

        _clearCurrentState();
        _changeCurrentState("food");
        _createSupport("menu-grid");
        let menuToday = Menu();
        menuToday.serve(newContainer);

        console.log("done");
    };

    const makeChefPage = () => {
        _clearCurrentState();
        _changeCurrentState("chef");
        _createSupport("chef-grid");
        let chefs = Chef();
        chefs.display(newContainer);

        console.log("done");
        
    }

    const makeLocPage = () => {
        _clearCurrentState();
        _changeCurrentState("location");
        _createSupport("loc-grid");
        let location = Loc();
        location.show(newContainer);

        console.log("done");
    }

    return { makeMenuPage, makeChefPage, makeLocPage };    
}

// restaurant.makeMenuPage();

const restaurant = Restaurant();

//event listeners
const foodNav = document.getElementById('food');
const chefNav = document.getElementById('chef');
const locNav = document.getElementById('location');

foodNav.addEventListener('click', restaurant.makeMenuPage);
chefNav.addEventListener('click', restaurant.makeChefPage);
locNav.addEventListener('click', restaurant.makeLocPage);