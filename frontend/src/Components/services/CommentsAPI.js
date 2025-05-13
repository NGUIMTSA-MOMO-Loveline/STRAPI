import axios from "axios";

async function create(comment) {
  // Envoyer les données au format requis par Strapi
  try {
    const response = await axios.post("http://localhost:1337/api/comments", {
      data: {
        content: comment.content, // Contenu du commentaire
        post: comment.post, // L'ID du post
        user: comment.user, // L'ID de l'utilisateur
      },
    });
    console.log("Commentaire créé avec succès :", response.data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création du commentaire :", error);
    throw error; // On relance l'erreur pour la gérer dans le composant
  }
}


async function findAllByPostId(postId) {
 try {
    const response = await axios
      .get(`http://localhost:1337/api/comments?filters[post][documentId][$eq]=${postId}&populate=*`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors du chargement des commentaires :", error);
    throw error;
  }
 }

async function findAll() {
  try {
    const response = await axios
      .get("http://localhost:1337/api/comments?populate=*");
    return response.data;
  } catch (error) {
    console.error("Erreur lors du chargement des commentaires :", error);
    throw error;
  }
}
// Fonction pour récupérer tous les commentaires d'un post spécifique
// postId est l'identifiant du post pour lequel on veut récupérer les commentaires



export default {
  create,
  findAll,
  findAllByPostId,
};
