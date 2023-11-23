import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';

const ActorCard = ({ actor }) => {
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w500';

  return (
    <Grid item xs={3}>
      <Paper elevation={3} sx={{ borderRadius: 10 }}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={actor.profile_path ? `${IMAGE_BASE_URL}${actor.profile_path}` : 'path_to_default_image'}
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
        </Card>
      </Paper>
    </Grid>
  );
};

export default ActorCard;
