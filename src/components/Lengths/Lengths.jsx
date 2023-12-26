const Lengths = () => {
  return (
    <div className="max-w-7xl mx-auto text-white p-6  ">
      <hr />
      <div className="flex gap-6  max-w-xl mx-auto p-6 ">
        <p className="flex justify-center items-center">
          <img src={`https://i.imgur.com/5QSeNXe.png`} alt="" />
          <h1 className="font-semibold">Total Meals: 303 </h1>
        </p>

        <p className="flex justify-center items-center">
          <img src={`https://i.imgur.com/EpJwdrU.png`} alt="" />
          <h1 className="font-semibold">Total Ingredients: 575 </h1>
        </p>

        <p className="flex justify-center items-center">
          <img src={`https://i.imgur.com/85m7nOG.png`} alt="" />
          <h1 className="font-semibold">Images: 302 </h1>
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Lengths;
