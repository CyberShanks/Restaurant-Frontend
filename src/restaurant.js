import './stylesheets/mainstyle.css';
import { Menu } from "./menu.js";


const Restaurant = () => {
    // composed of Menu() object -> gets serveMenu() AND deleteMenu()
    // composed of Chef() object -> gets displayChef() AND deleteChef()
    // composed of Location() object -> gets showLocation() AND deleteLocation()

    // const restaurant = Object.assign({}, Menu);
    let divContainer1;
    let divContainer2;

    const inner1 = document.getElementById('inner1');
    const inner2 = document.getElementById('inner2');

    const makeMenuPage = () => {
        // let menuToday = Menu();
        let menuToday = Menu();
        divContainer1 = menuToday.serve(menuToday.food.item1, menuToday.food.item2);
        divContainer2 = menuToday.serve(menuToday.food.item3, menuToday.food.item4);

        inner1.appendChild(divContainer1);
        inner2.appendChild(divContainer2);

        console.log("done");
    };

    return { makeMenuPage };    
}

const restaurant = Restaurant();
restaurant.makeMenuPage();

