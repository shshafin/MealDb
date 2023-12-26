import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const { strCategory, strCategoryThumb, idCategory } = item;
  const navigate = useNavigate();
  const handleItemDetails = () => {
    navigate(`/Items/${idCategory}`);
  };

  return (
    <div>
      <div className="card card-compact w-96 bg-yellow-700  shadow-xl">
        <figure>
          <img src={strCategoryThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{strCategory}</h2>
          <div className="card-actions justify-end">
            <button
              onClick={handleItemDetails}
              className="btn bg-yellow-600 border-none w-full text-white text-lg hover:bg-yellow-500"
            >
              Show Details
            </button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
