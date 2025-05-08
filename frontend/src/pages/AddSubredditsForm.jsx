import { useEffect, useState } from "react";
import '../components/components.css';


const AddSubredditForm = () => {

    const [subreddits, setSubreddits] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Ajouter un nouveau subreddit
    const handleCreate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const response = await fetch("http://localhost:1337/api/subreddits", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer VOTRE_JWT_ICI` // Remplace par ton token
            },
            body: JSON.stringify({
                data: {
                    name,
                    description
                }
            })
        });

        if (response.ok) {
            const newSubreddit = await response.json();
            setSubreddits([...subreddits, newSubreddit.data]);
            setName("");
            setDescription("");
        } else {
            setError("Erreur lors de la création");
        }

        setLoading(false);
    };



    return (
        <>

            <form onSubmit={handleCreate} className="community-form">
                <input
                    type="text"
                    placeholder="Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Création..." : "Créer"}
                </button>
            </form>

        </>
    )

}


export default AddSubredditForm;