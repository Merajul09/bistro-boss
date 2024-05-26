import SectionTitle from "./shared/SectionTitle";
import MenuItem from "./shared/MenuItem";
import useMenuItem from "../hooks/useMenuItem";

const PopularMenu = () => {
    const [menu] = useMenuItem()
    const popularItem = menu.filter(item => item.category === 'popular')
    return (
        <div className="mb-8">
            <SectionTitle subHeading={'Check it out'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    popularItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;