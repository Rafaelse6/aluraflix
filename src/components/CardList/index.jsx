import { useState } from "react";
import Card from "../Card";
import EditCard from "../EditCard";

const CardList = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "O que é Javascript?",
      category: "Frontend",
      image: "https://example.com/image1.jpg",
      video: "https://example.com/video1",
      description: "Um breve resumo sobre Javascript.",
    },
    {
      id: 2,
      title: "React para Iniciantes",
      category: "Frontend",
      image: "https://example.com/image2.jpg",
      video: "https://example.com/video2",
      description: "Aprenda o básico de React.",
    },
  ]);

  const [editingCard, setEditingCard] = useState(null);

  const handleEdit = (card) => {
    setEditingCard(card); 
  };

  const handleSave = (updatedCard) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
    setEditingCard(null); 
  };

  const handleDelete = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          video={card}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}

      {editingCard && (
        <EditCard
          card={editingCard}
          onSave={handleSave}
          onCancel={() => setEditingCard(null)}
        />
      )}
    </div>
  );
};

export default CardList;
