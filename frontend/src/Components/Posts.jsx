import React, {useEffect , useState}from 'react'
import { Grid , Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import CardPost2 from './CardPost2'; 

function Posts(){

    const [isLoading , setIsLoading]= useState(true) /* indique a l'utilisateur les data ils sont entrain de charger et qaund les data charger en passe le state a false */
    const [posts ,setPosts]= useState([]) /* un state pour les posts */

    useEffect(()=>{ /* pour charger le contenant */

     fetch('http://localhost:1337/api/posts?populate=Image', 
        /* on vas egalement lui passer un onjet pour indiquer le type de methode */
        {
            method:"GET",
            headers:{
                'Accept':'Application/json' /* pour dire que c de json  */
            }
        })
        .then(res =>res.json())
        .then(res => {
            console.log(res.data) 
            setTimeout(() => {
                setPosts(res.data) // Strapi retourne un objet avec la clé 'data'
                setIsLoading(false) }) /* setIsLoading(false) */ /* on met le state a false pour dire que le chargement est terminé */ 
            }, 2000) /* pour simuler le temps de chargement */
            
        .catch(err => {
            console.error("Erreur lors du chargement :", err);
            setIsLoading(false);
            });

     },[])/* dans le cotes strapi les req se font en bouble  pour eviter le chargement en boucle =>[]*/
    return(
        <div className="posts">
            
            <Grid >
            {isLoading ? 
            /* 'Loading...' */
            <Box>
                      <Skeleton variant="rectangular" width={210} height={60} />
                      <Skeleton width="60%"/>  
                      <Skeleton /> 
                      <Skeleton />  
                      <Skeleton /> 
            </Box>
        
            :  posts.map(post => (<CardPost2 post={post} key={post.id} />))
            }
            </Grid>

        </div>
    )
}
export default Posts;
{/* le premier post c null alors ca marche p il faut verifier d'abord if is loading */}

{/* on utilise le ? pour dire que si il n'y a pas de titre on affiche pas de titre */}
{/* <img src={post.attributes?.Image?.data?.attributes?.url} alt={post.attributes?.Title} /> */}
{/* on utilise le ? pour dire que si il n'y a pas d'image on affiche pas d'image */}