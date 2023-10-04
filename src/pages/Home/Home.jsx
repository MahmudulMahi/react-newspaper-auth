import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LeftSidenav from "../Shared/leftSidenav/leftSidenav";
import BreakingNews from "./BreakingNews";
import NewsCards from "./NewsCards";

const Home = () => {
  const news=useLoaderData()
  console.log(news)
  return (
    <div >
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
     
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
       <LeftSidenav></LeftSidenav>
        </div>
        <div className="md:col-span-2 border "> 
          {
            news.map(aNews => <NewsCards
            key={aNews._id}
            news={aNews}
            ></NewsCards>)
          }
        
        </div>
        <div className="border">
        <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;