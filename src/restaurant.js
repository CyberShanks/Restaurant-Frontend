import './stylesheets/mainstyle.css';
import { Menu } from "./Menu";

const food = {
    biryani : _MenuItem(image1, "Title", "Description"),
    momos : _MenuItem(image2, "", ""),
    burger : _MenuItem(image3, "", ""),
    ramen : _MenuItem(image4, "", ""),
}

const chefs = {
    ronald : _Chef(image5, "Speciality", "Description"),
    nitash : _Chef(image6, "", ""),
    miyuki : _Chef(image7, "", ""),
    nikki : _Chef(image8, "", ""),
}

const location = {
    loc1 : _Location(postcard1, "Address"),
    loc2 : _Location(postcard2, ""),
    loc3 : _Location(postcard3, ""),
    loc4 : _Location(postcard4, ""),
}

const Restaurant = () => {
    // composed of Menu() object -> gets serveMenu() AND deleteMenu()
    // composed of Chef() object -> gets displayChef() AND deleteChef()
    // composed of Location() object -> gets showLocation() AND deleteLocation()

    const menuToday = Menu();
    
    // serveMenu(MenuitemObj, MenuitemObj, MenuitemObj, MenuitemObj);
    // need to create MenuItem Object -> Image, Title, Description
    
    return  Object.assign({}, menuToday, Chef, Locations);
}

const restaurant = Restaurant(food, chefs, location);
const menuToday = restaurant.initializeMenu();

restaurant.serveMenu(menuToday.burger, menuToday.momos);

