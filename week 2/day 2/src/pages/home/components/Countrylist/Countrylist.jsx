import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

import { callApi } from '../../../../domain/api';
import Country from '../Country/Country';

import classes from './style.module.scss'

const Countrylist = () => {

    const [countries, setCountries] = useState([]); 
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");

    useEffect(() => {
      fetchData();
    }, []);

    useEffect(() => {
      if (region === "") {
        fetchData();
      }
      fetchRegion();
    }, [region]);

    useEffect(() => {
      setTimeout(() => fetchData  (), 300);
      fetchRegion();
    }, [country]);

    const fetchData = async() => {
      let response = "";

      if (country === "") {
        response = await callApi('/all', 'GET');
      } else {
        response = await callApi(`/name/${country}`);
      }

      const modifiedData = response?.map((item) => {
        return {
          name: item.name.common,
          flags: item.flags.png,
          flagsAlt: item.flags.alt,
          population: item.population,
          region: item.region,
          capital: item.capital
        }
      })

      setCountries(modifiedData.slice(0, 20));
    }

    if (!countries) return null;  

    const fetchRegion = async () => {
      const response = await callApi(`/region/${region}`, "GET");
      const modifiedData = response?.map((item) => {
        return {
          name: item.name.common,
          flags: item.flags.svg,
          population: item.population,
          region: item.region,
          capital: item.capital,
        };
      });
  
      setCountries(modifiedData.slice(0, 10));
    };

  return (
    <>
      <div className={classes.contentContainer}>
        <div className={classes.searchFilter}>
        <TextField
            id="outlined-basic"
            label="Search for a country..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            sx={{ m: 1, width: "100%" }}
          />
           <FormControl sx={{ m: 1, width: "50%" }}>
            <InputLabel id="filter-region">Filter By Region</InputLabel>
            <Select
              labelId="filter-region"
              id="filter-region"
              value={region}
              label="Filter By Region"
              onChange={(e) => {
                setRegion(e.target.value);
              }}
            >
              <MenuItem value="">
                <em>All Region</em>
              </MenuItem>
              <MenuItem value={"africa"}>Africa</MenuItem>
              <MenuItem value={"america"}>America</MenuItem>
              <MenuItem value={"asia"}>Asia</MenuItem>
              <MenuItem value={"europe"}>Europe</MenuItem>
              <MenuItem value={"oceania"}>Oceania</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.countryListContainer}>
          {
              countries.map((country) => <Country country = {country} />)
          }
        </div>
      </div>
    </>

  )
}

export default Countrylist