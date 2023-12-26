import { useLoaderData, useNavigate } from "react-router-dom";

const ItemDetail = () => {
  const details = useLoaderData().categories;
  console.log(details);
  const { strCategoryDescription } = details;

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1 className="text-5xl">hello: {strCategoryDescription}</h1>
      <button onClick={handleBack} className="btn ">
        back
      </button>
    </div>
  );
};

export default ItemDetail;
