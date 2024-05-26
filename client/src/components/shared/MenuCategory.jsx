import PropTypes from 'prop-types';
import Cover from "./Cover";
import MenuItem from "./MenuItem";
import { Link } from 'react-router-dom';

const MenuCategory = ({ img, title, items }) => {
    return (
        <div className="mb-8">
            {title && <Cover img={img} title={title} subTitle="Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>}
            <div className="grid md:grid-cols-2 gap-8">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
        </div>
    );
};
MenuCategory.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.string,
}
export default MenuCategory;