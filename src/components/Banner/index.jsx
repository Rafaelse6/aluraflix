import "./styles.css";
import player from "../../imgs/player.svg";

const Banner = () => {
  return (
    <div className="main-banner">
      <div className="banner-content">
        <div className="text-section">
          <button className="category-button">FRONT END</button>
          <h1>SEO com React</h1>
          <p>
            Eu tô aqui pra nesse vídeo dizer que a gente vai aprender a começar
            uma app inspirada no desenho Pokémon com Next.js e React, ver
            algumas dicas sobre performance e de quebra conhecer uma plataforma
            sensacional pra fazer deploy que é da Vercel. Tudo em 22 minutos
            nesse vídeo feito com todo o carinho do mundo, construindo uma
            Pokedex.
          </p>
        </div>
        <div className="image-section">
          <img src={player} alt="Banner" className="banner-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
