import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div>
      <nav className="bg-yellow-950 ">
        <div className="navbar max-w-7xl mx-auto  p-5 ">
          <div className="flex-1">
            <img
              className="w-80"
              src={`https://i.imgur.com/VVdORf0.png`}
              alt=""
            />
          </div>
          <div className="flex-none gap-10 ">
            <button
              onClick={handleNavigate}
              className="btn text-white border-none bg-orange-700 hover:bg-orange-600"
            >
              Home
            </button>

            <NavLink
              className="btn text-white border-none bg-orange-700 hover:bg-orange-600"
              to={`/Items`}
            >
              Items
            </NavLink>

            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-16 md:w-32"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* main */}
      <main className=" text-white text-center  max-w-7xl mx-auto">
        <section>
          <div className="flex mt-4">
            <img src={`https://i.imgur.com/RXI1JZr.png`} alt="" />
            <div className="my-10">
              <h1 className=" text-5xl font-semibold mb-3 ">
                Welcome to TheMealDB
              </h1>
              <p>
                Welcome to TheMealDB: An open, crowd-sourced database of Recipes
                from around the world. We also offer a{" "}
                <span className="text-yellow-600">free recipe API</span> for
                anyone wanting to use it, with additional features for
                subscribers.
              </p>
              <button className="text-sky-500 italic font-bold bg-yellow-400 px-10 py-1 rounded-sm my-2 ">
                <span className="text-blue-900">Pay</span>Pal
              </button>
              <p>
                Click button above to upgrade free API to premium for $3
                <br />
                Currently (54 supporters)
              </p>
            </div>
            <img src={`https://i.imgur.com/RXI1JZr.png`} alt="" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Header;
