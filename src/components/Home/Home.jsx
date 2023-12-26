import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Lengths from "../Lengths/Lengths";
import { Audio } from "react-loader-spinner";

const Home = () => {
  const navigation = useNavigate();
  return (
    <div className="bg-yellow-900 ">
      <Header></Header>
      <Lengths></Lengths>
      {navigation.state === "loading" ? (
        <Audio
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />
      ) : (
        <Outlet></Outlet>
      )}
      <p className="p-52"></p>
    </div>
  );
};

export default Home;
