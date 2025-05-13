import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardHeader, Avatar, IconButton, Typography, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FormComment from './Forms/FormComment';
import CommentsAPI from './services/commentsAPI';
import dayjs from 'dayjs'; // Pour la date dynamique

export default function Post() {
    const { id } = useParams();
    const [postState, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]); // État pour stocker les commentaires
  
    useEffect(() => {
        fetch('http://localhost:1337/api/posts?populate=Image') 
            .then(res => res.json())
            .then(res => {
                const postList = res.data || res;
                const foundPost = postList.find(p => String(p.id) === String(id));
                if (foundPost) {
                    setPost(foundPost);
                } else {
                    setError('Post not found');
                }
            })
            .catch(err => {
                console.error(err);
                setError('Error fetching post');
            })
            .finally(() => setIsLoading(false));
          fetchComments();
    }, [id]);
    
    const fetchComments = async () => {
        try {
            const data = await CommentsAPI.findAll();
            console.log("Commentaires récupérés :", data);
            setComments(data.data || []); // Mettre à jour l'état avec les commentaires récupérés
        } catch (error) {
            console.error("Erreur lors de la récupération des commentaires :", error);
            setError('Error fetching comments');
        }    
    }

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <Card sx={{ maxWidth: 700, margin: '20px auto', borderRadius: '10px', boxShadow: 3 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="author">
                            A
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={postState.user?.username || 'Auteur inconnu'}
                    subheader={dayjs(postState.createdAt).format('D MMMM YYYY')}
                />
                <img src={`http://localhost:1337${postState.Image?.[0]?.url}`} alt={postState.Title} width="100%" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 2, marginLeft: 2 }}>
                    {postState.Title}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 1, padding: '0 16px' }}>
                    {postState.Content}
                </Typography>
            </Card>

            <Grid sx={{ padding: '0 16px' }}>
                <FormComment postId={postState.id} fetchComments={fetchComments} id={id} />
            </Grid>
            
            <Grid sx={{ padding: '0 16px' }}>
                <List sx={{ padding: 0 }}>
                    {comments.map((comment) => (
                        <ListItem key={comment.id} sx={{ padding: '10px 20px', borderBottom: '1px solid #eaeaea' }}>
                            <ListItemAvatar>
                                <Avatar alt="Utilisateur" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography sx={{ fontWeight: 'bold' }}>Utilisateur</Typography>}
                                secondary={<Typography sx={{ color: 'text.secondary' }}>{comment.content}</Typography>}
                            />
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </div>
    );
}
