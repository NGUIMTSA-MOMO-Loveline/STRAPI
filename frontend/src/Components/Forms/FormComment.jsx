import { useState ,useEffect } from "react";
import { TextField, Button } from "@mui/material";
import CommentsAPI from "../services/commentsAPI";
import "./FormComment.css"; // Importer le fichier CSS pour le style

export default function FormComment({ fetchComments, id }) { // Ajoute "id" comme prop si nécessaire
  const [comment, setComment] = useState({ content: "" });
  const [isFocused, setIsFocused] = useState(false); // Ajout d'un état pour savoir si le champ est activé

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await CommentsAPI.create(comment);
      console.log("Réponse de Strapi :", data);
      setComment({ content: "" });
      fetchComments(); // Appeler la fonction pour récupérer les commentaires après la création
    } catch (error) {
      console.error("Erreur lors de la création du commentaire :", error);
    }
  };

  const handleFocus = () => setIsFocused(true); // Focus sur la zone de texte
  const handleBlur = () => {
    if (!comment.content) setIsFocused(false); // Si le champ est vide, on cache les boutons
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment({
      ...comment,
      post: id, // Utiliser le prop "id"
      [name]: value,
    });
  };

  const handleCancel = () => {
    setComment({ content: "" });
    setIsFocused(false); // Cache les boutons quand on annule
  };

  useEffect(() => {},[comment]) // Ajout d'un useEffect pour surveiller les changements dans le commentaire


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={`text-field-container ${isFocused ? "text-field-focused" : ""}`}>
          <TextField
            id="outlined-multiline-static"
            label="Commentaire"
            multiline
            rows={2}
            sx={{ width: 500, mb: 2 }}
            onChange={handleChange}
            name="content"
            value={comment.content}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <div className={`comment-buttons`}>
            <Button variant="contained" color="primary" type="submit">
              Publier
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              Annuler
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
