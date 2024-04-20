import PropTypes  from 'prop-types';

import './categoryCard.scss';

const CategoryCard = ({name, image}) => {
  return (
    <div className='category__card'> 
        <img src={image} alt={name} />
        <p>{name}</p>
    </div>
  )
}

CategoryCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default CategoryCard