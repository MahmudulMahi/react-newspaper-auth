import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LeftSidenav from "../Shared/leftSidenav/leftSidenav";

const Home = () => {
  return (
    <div >
      <Header></Header>
      <Navbar></Navbar>
     
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
       <LeftSidenav></LeftSidenav>
        </div>
        <div className="md:col-span-2 border "> 
          <h2 className="text-4xl"> news come</h2>
        
        </div>
        <div className="border">
        <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;