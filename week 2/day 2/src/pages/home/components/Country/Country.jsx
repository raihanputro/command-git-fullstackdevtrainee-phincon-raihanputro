import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import classes from './style.module.scss'

const Country = (props) => {

  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.countryContainer} onClick={()=>navigate(`../detail/${props.country.name.toLowerCase()}`)}>
      <CardActionArea>  
        <CardMedia
          component="img"
          height="140"
          image={props.country.flags}
          alt={props.country.flagsAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="div" className={classes.countryTitle}>
            {props.country.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={classes.countryDesc}>
             <b>Population: </b>{props.country.population}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={classes.countryDesc}>
             <b>Region: </b>{props.country.region}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={classes.countryDesc}>
             <b>Capital: </b>{props.country.capital}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Country