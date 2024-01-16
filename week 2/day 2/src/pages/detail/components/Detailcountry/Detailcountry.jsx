import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { callApi } from '../../../../domain/api'

import classes from './style.module.scss'

const Detailcountry = () => {
  const navigate = useNavigate();

  const [country, setCountry] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const response = await callApi(`/name/${name}`, 'GET');
    const modifiedData = response?.map((item) => {
      return {
        name: item.name.common,
        native: item.name.nativeName,
        flags: item.flags.png,
        population: item.population,
        region: item.region,
        subRegion: item.subregion,
        capital: item.capital,
        tld: item.tld,
        currencies: item.currencies,
        languages: item.languages,
        borders: item.borders,
      }
    })

    setCountry(modifiedData[0]);
  }

  if (!country) return null;

  console.log(country);

  return (
    <div className={classes.container}>
      <div className={classes.buttonContainer}>
        <Button variant="inherit" className={classes.button} onClick={()=>navigate(`/`)}><KeyboardBackspaceIcon className={classes.buttonIcon}/>Back</Button>
        <Button variant="inherit" className={classes.button} onClick={()=>navigate(`/`)}><KeyboardBackspaceIcon className={classes.buttonIcon}/>Back</Button>
      </div>
      <div className={classes.detailCountryContainer}>
        <img src={country.flags} className={classes.flagCountry}/>
        <div className={classes.detailCountryDesc}>
          <Typography gutterBottom variant="h4" component="div" className={classes.countryName}>
              {country?.name}
          </Typography>
          <div className={classes.countryDescContainer}>
            <div>
              <Typography variant="body2" color="text.secondary" className={classes.countryDesc}>
                <b>Native Name: </b>{country?.native[Object?.keys(country?.native)[0]]?.common}
              </Typography>
              <Typography variant="body2" color="text.secondary" className={classes.countryDesc}>
                <b>Population: </b>{country?.population}
              </Typography>
              <Typography variant="body2" color="text.secondary" className={classes.countryDesc}>
                <b>Region: </b>{country?.region}
              </Typography>
              <Typography variant="body2" color="text.secondary" className={classes.countryDesc}>
                <b>Sub Region: </b>{country?.subRegion}
              </Typography>
              <Typography variant="body2" color="text.secondary" className={classes.countryDesc}>
                <b>Capital: </b>{country?.capital}
              </Typography>
            </div>
            <div>
              <Typography variant="body2" color="text.secondary" className={classes.countryDesc}>
                <b>Top LEvel Domain: </b>{country?.tld}
              </Typography> 
              <Typography variant="body2" color="text.secondary" className={classes.countryDesc}>
                <b>Currencies: </b>{country?.currencies[Object.keys(country.currencies)[0]]?.name}
              </Typography> 
              <Typography variant="body2" color="text.secondary" className={classes.countryDesc}>
                <b>Languages: </b>{Object.values(country.languages).join(", ")}
              </Typography> 
            </div>
          </div>
          <div className={classes.borderCountries}>
              <Typography variant="body2" color="text.secondary">
                <b>Border Countries</b> : {country?.borders?.join(", ")}
              </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detailcountry