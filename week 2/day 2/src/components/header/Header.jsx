import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useNavigate } from 'react-router-dom';

import classes from './style.module.scss'

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar className={classes.header}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={classes.headerTitle} onClick={() => navigate(`/`)}>
            Where in the world?
          </Typography>
          <Button color="inherit" className={classes.headerButton}><DarkModeOutlinedIcon className={classes.moonIcon}/>Dark Mode</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header