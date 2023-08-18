import TopBar from "../../components/topbar/TopBar"
import Header from "../../components/header/Header"
//import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"

export default function Home() {
  return (
    <>
    <TopBar/>
    <Header/>
     <div className="home">
      
        <Sidebar/>
      </div>
    </>
  );
}
