import Banner from "../Banner";
import CardList from "../CardList";
import Footer from "../Footer";
import Navbar from "../Navbar";
import CategoryBox from "../CategoryBox"; // Importando o componente CategoryBox

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <CategoryBox /> {/* Adicionando o CategoryBox aqui */}
      <CardList />
      <Footer />
    </>
  );
};

export default Home;
