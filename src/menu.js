import { Card } from "./utils.js";
import chickenBiryani from './image_assets/chicken-biryani.jpg';
import chickenBurger from './image_assets/chicken-burger.jpg';
import chickenMomos from './image_assets/chicken-momos.jpg';
import chickenRamen from './image_assets/chicken-ramen.jpg';

const Menu = () => {

    const _MenuItem = (imageRef, description) => {
        return { imageRef, description };
    };

    // initialization
    const food = {
        item1: _MenuItem(chickenBiryani, "Description"),
        item2: _MenuItem(chickenBurger, "Description2"),
        item3: _MenuItem(chickenMomos, "Description3"),
        item4: _MenuItem(chickenRamen, "Description4"),
    };

    const serve = (foodItem1, foodItem2) => {
        // create 2 food cards, return a div containing both
        const card1 = Card(foodItem1.imageRef, foodItem1.description);
        const card2 = Card(foodItem2.imageRef, foodItem2.description);

        let div1 = card1.initialize(card1.imageRef, card1.descriptionText);
        let div2 = card2.initialize(card2.imageRef, card2.descriptionText);

        const menuContainer = document.createElement('div');
        menuContainer.appendChild(div1);
        menuContainer.appendChild(div2);

        return menuContainer;
    }

    const remove = () => {
        // delete food cards
    }

    return { food, serve, remove };

};

export { Menu };
