import "./styles.css";

const Card = ({ video, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit(video); 

  const handleDelete = () => {
    onDelete(video.id); 

  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-image" src={video.image} alt={video.title} />
      </div>
      <div className="card-actions">
        <button className="edit-btn" onClick={handleEdit}>
          <img src="../../imgs/edit-icon.svg" alt="Editar" className="icon" />{" "}
          Editar
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          <img src="../../imgs/trash-icon.svg" alt="Excluir" className="icon" />{" "}
          Excluir
        </button>
      </div>
    </div>
  );
};

export default Card;
