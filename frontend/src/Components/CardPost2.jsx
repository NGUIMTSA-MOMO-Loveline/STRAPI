import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs'; // Pour la date dynamique
import { FaRegComment } from 'react-icons/fa'; // Pour l'icône de commentaire
import { PiShareFat } from "react-icons/pi";
import { TiArrowUpOutline } from "react-icons/ti";
import { TiArrowDownOutline } from "react-icons/ti";
import { TbAward } from "react-icons/tb";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardPost2({post}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {post.user?.avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.user?.username || 'Auteur inconnu'}
        subheader={dayjs(post.createdAt).format('D MMMM YYYY')} // Affiche la date de création
      />

      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {post?.Content?.substring(0, 100)}...
        </Typography>
      </CardContent>

      <CardMedia
        component="img"
        height="194"
        image={`http://localhost:1337${post.Image?.[0]?.url}`} 
        alt={post.Title}
      />

      

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{post.Content}</Typography> {/* Contenu complet */}
        </CardContent>
      </Collapse>

      <CardActions disableSpacing>

        <IconButton aria-label="add to favorites">
          <TiArrowUpOutline />
          <TiArrowDownOutline />
        </IconButton>

        <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
          <IconButton aria-label="comment">
            <FaRegComment />
          </IconButton>
        </Link>

        <IconButton aria-label="award">
          <TbAward />
        </IconButton>
        <IconButton aria-label="share">
          <PiShareFat />
        </IconButton>


        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>


    </Card>
  );
}
