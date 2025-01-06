import Banner from "./components/Banner";
import CardList from "./components/CardList";
import CategoryBox from "./components/CategoryBox";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// import EditCard from "./components/EditCard";
// import NewVideo from "./components/NewVideoForm";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <CategoryBox />
      <CardList />
      <Footer /> 
      {/* <EditCard /> */}
    </>
  );
}

export default App;
