import { useLoaderData } from "react-router-dom";
import Item from "../Item/Item";

const Items = () => {
  const items = useLoaderData().categories;
  console.log(items);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-white text-3xl font-bold mb-7 ">
        Latest Meals : {items.length}{" "}
      </h1>
      <div className="grid grid-cols-3 gap-4 pb-8 ">
        {items.map((item, idx) => (
          <Item key={idx} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
