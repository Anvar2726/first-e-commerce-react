import PropTypes  from 'prop-types';

import './categoryCard.scss';

const CategoryCard = ({name, image}) => {
  return (
    <div className='category__card'> 
       <a href={`#${name}`}> <img src={image} alt={name} /></a>
        <p>{name}</p>
    </div>
  )
}

CategoryCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default CategoryCard