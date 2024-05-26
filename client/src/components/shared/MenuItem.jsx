import PropTypes from 'prop-types';

const MenuItem = ({ item }) => {
    return (
        <div className='flex space-x-4'>
            <img src={item.image} alt="" style={{ borderRadius: '0 200px 200px 200px' }} className='w-[100px]' />
            <div>
                <h3 className="uppercase text-xl">{item.name} -------------</h3>
                <p>{item.recipe}</p>
            </div>
            <p className='text-yellow-600'>${item.price}</p>
        </div>
    );
};
MenuItem.propTypes = {
    item: PropTypes.string,
}
export default MenuItem;