import axios from "axios";

function create(comment) {
  // Envoyer les données au format requis par Strapi
  return axios
    .post("http://localhost:1337/api/comments?populate=user", {
      data: comment,  // `data` est nécessaire ici
    })
    .then((response) => {
      console.log("Commentaire créé avec succès :", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Erreur lors de la création du commentaire :", error);
      throw error; // On relance l'erreur pour la gérer dans le composant
    });
}

function findAll() {
  return axios
    .get("http://localhost:1337/api/comments")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Erreur lors du chargement des commentaires :", error);
      throw error;
    });
}


export default {
  create,
  findAll,
};
