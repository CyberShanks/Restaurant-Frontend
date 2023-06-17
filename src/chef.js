import { ChefCard } from "./utils.js";
import genChef from './image_assets/chefWhite.jpg';
import indianChef from './image_assets/chefAtul.jpg';
import './stylesheets/chef.css';

const Chef = () => {
    //similar to Menu()
    // have a chef object with 2 entries

    const _Chef = (image, name) => {
        return {image, name};
    }

    const chefs = {
        chef1: _Chef(indianChef, "Sanjay Ataluri"),
        chef2: _Chef(genChef, "Rowan Jimenez"), 
    }

    const display = containerElement => {

        for (let key in chefs){
            let chefCard = ChefCard(chefs[key].image, chefs[key].name, chefs[key].desc);
            let chefElement = chefCard.initialize(chefCard.image, chefCard.name, chefCard.desc);
            containerElement.appendChild(chefElement);
        }
    }

    return { display };

};

export { Chef };
