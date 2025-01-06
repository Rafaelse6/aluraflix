import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormNavbar from "../FormNavbar";
import Footer from "../Footer";
import "./styles.css";

const NewVideo = ({ onAddVideo }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    video: "",
    description: "",
  });

  const navigate = useNavigate(); // Correção aqui para usar useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVideo(formData);
    navigate("/"); // Correção aqui para usar navigate em vez de Navigate
  };

  const handleReset = () => {
    setFormData({
      title: "",
      category: "",
      image: "",
      video: "",
      description: "",
    });
  };

  return (
    <>
      <FormNavbar />
      <div className="form-container">
        <h1>Novo Vídeo</h1>
        <p>Complete o formulário para criar um novo card de vídeo.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Insira o título"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Selecione uma categoria</option>
              <option value="Categoria 1">Categoria 1</option>
              <option value="Categoria 2">Categoria 2</option>
              <option value="Categoria 3">Categoria 3</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="image">Imagem</label>
            <input
              type="url"
              id="image"
              name="image"
              placeholder="O link é obrigatório"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="video">Vídeo</label>
            <input
              type="url"
              id="video"
              name="video"
              placeholder="Digite o link do vídeo"
              value={formData.video}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              placeholder="Sobre o que é esse vídeo?"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="submit">Guardar</button>
            <button type="button" onClick={handleReset}>
              Limpar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default NewVideo;
