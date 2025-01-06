import { useState } from "react";
import "./styles.css";

const EditCard = () => {
  const [formData, setFormData] = useState({
    title: "O que é Javascript?",
    category: "frontend",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps...",
    video: "https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fapps...",
    description: "lorem ipsum blah blah blah",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Edited Card Data:", formData);
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
    <div className="edit-card-container">
      <div className="edit-card-header">
        <h1>Editar Card:</h1>
        <button className="close-button">&times;</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
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
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="image">Imagem</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="video">Vídeo</label>
          <input
            type="url"
            id="video"
            name="video"
            value={formData.video}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            name="description"
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
  );
};

export default EditCard;
