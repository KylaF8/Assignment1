import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';

const ActorCard = ({ actor }) => {
    const navigate = useNavigate();
  const showActorMovies = () => {
    navigate(`/actors/${actor.id}/movies`);
  };

  return (
    <Grid item xs={3}>
      <ButtonBase onClick={showActorMovies} style={{ width: '100%', display:'block'}}>
      <Paper elevation={3}>
        <Box sx={{height:'100%'}}>
          <CardMedia
            component="img"
            height="300"
            image={actor.profile_path ? `${'http://image.tmdb.org/t/p/w500'}${actor.profile_path}` : 'path_to_default_image'}
            alt={actor.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" noWrap>
              {actor.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              as {actor.character}
            </Typography>
          </CardContent>
        </Box>
        </Paper>
        </ButtonBase>
    </Grid>
  );
};

export default ActorCard;
