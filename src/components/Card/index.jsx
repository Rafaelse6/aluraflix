import "./styles.css";
import CardImage from "../../imgs/card-image.svg";
import TrashCan from "../../imgs/trash-can.svg";

const Card = () => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          src={CardImage}
          alt="Desenvolvedora Front-End"
          className="card-image"
        />
      </div>
      <div className="card-actions">
        <button className="delete-btn">
          <span className="icon">
            <img src={TrashCan} alt="" />
          </span>{" "}
          DELETAR
        </button>
        <button className="edit-btn">
          <span className="icon">✏️</span> EDITAR
        </button>
      </div>
    </div>
  );
};
export default Card;
