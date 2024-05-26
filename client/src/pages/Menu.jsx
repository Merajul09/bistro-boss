import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import menuImg from "../assets/menu/menu-bg.jpg"
import dessertImg from "../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../assets/menu/pizza-bg.jpg"
import saladImg from "../assets/menu/salad-bg.jpg"
import soupImg from "../assets/menu/soup-bg.jpg"
import SectionTitle from "../components/shared/SectionTitle";
import useMenuItem from "../hooks/useMenuItem";
import MenuItem from "../components/shared/MenuItem";
import MenuCategory from "../components/shared/MenuCategory";

const Menu = () => {
    const [menu] = useMenuItem()
    const offerItem = menu.filter(item => item.category === 'offered')
    const dessertItem = menu.filter(item => item.category === 'dessert')
    const pizzaItem = menu.filter(item => item.category === 'pizza')
    const saladItem = menu.filter(item => item.category === 'salad')
    const soupItem = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu" subTitle="Would you like to try a dish?"></Cover>
            <div className="container mx-auto">
                {/* TODAY'S OFFER */}
                <div className="mb-8">
                    <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
                    <div className="grid md:grid-cols-2 gap-8">
                        {
                            offerItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </div>
                </div>
                {/* DESSERTS */}
                <MenuCategory img={dessertImg} title="desserts" items={dessertItem}></MenuCategory>
                {/* Pizza */}
                <MenuCategory img={pizzaImg} title="pizza" items={pizzaItem}></MenuCategory>
                {/* Salad */}
                <MenuCategory img={saladImg} title="salads" items={saladItem}></MenuCategory>
                {/* Soup */}
                <MenuCategory img={soupImg} title="soups" items={soupItem}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;