import * as React from 'react';
// import Avatar from '@mui/material';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { CardHeader } from '@mui/material';
import { Box } from '@mui/system';
import { CardHeader, Typography, CardMedia, CardContent, Card, Avatar} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import Weaknesses from './Weaknesses';
import Stats from './Stats';

export default function MediaCard(props) {
  return (
      <Card sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 350
      }}>
      <CardHeader
          sx={{ minWidth: 300 }}
          avatar={
              <Avatar aria-label="recipe">
                  <CardMedia
                      sx={{ backgroundColor: props.pokeColor.name }}
                      height="75"
                      component="img"
                      image={props.pokeImageLow}
                      title="pokemon"
                  />
              </Avatar>
          }
              title={
                  <Typography gutterBottom variant="h5" component="div">
                      {props.pokeName}
                  </Typography>
              }
              subheader={
                  <Typography gutterBottom variant="h5" component="div">
                      # {props.pokeNum}
                  </Typography>
              }
          ></CardHeader>
          <Box
              sx={{
                  bgcolor: props.pokeColor.name,
                  width: 250,
                  borderRadius: 2,
              }}
          >
              <CardMedia
                  component="img"
                  image={props.pokeImage}
                  title="pokemon"
              />
          </Box>
          <CardContent sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              maxWidth: 290
              }}>
              <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-around' 
                  }}>
                  <Box>
                      <Typography variant="h5" color="text.secondary">
                          WEIGHT
                      </Typography>
                      {props.pokeWeight}
                  </Box>
                  <Box>
                      <Typography variant="h5" color="text.secondary">
                          HEIGHT
                      </Typography>
                      {props.pokeHeight}
                  </Box>
              </Box>
              <Box>
                  <Typography variant="h5" color="text.secondary">
                      ABILITIES
                  </Typography>
                  <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-around' 
                      }}>
                      {props.pokeAbilities.map(item => (
                          <div key={uuidv4()}>
                              <label>{item.ability.name}</label>
                          </div>
                      ))}
                  </Box>
              </Box>
              <Box>
                  <Typography variant="h5" color="text.secondary">
                      WEAKNESSES
                  </Typography>                    
                  <Weaknesses pokeTypes={props.pokeTypes}></Weaknesses>
              </Box>
              <Stats pokeStats={props.pokeStats}></Stats>
          </CardContent>    
      </Card>
  );
}