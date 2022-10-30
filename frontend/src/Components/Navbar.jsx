import * as React from 'react';
import {Toolbar,IconButton, Typography, Menu, Container, Button, MenuItem, Box, AppBar  } from '@mui/material';
import {Menu as MenuIcon, TaskAlt as TaskAltIcon}  from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import {clearAllTodo, clearTodo} from './../Redux/Actions/todo';

/*
Responsive Navigation component. It contains:
- App name and logo
- Three menu buttons
    - Add todo: to open add todo form Dialog
    - Clear completed: this option will delete all todos that has been marked as completed
    - Clear all: this option will delete all todos (completed and not completed)
this component contains two parts one for large and medium screen and other for small screen.

*/
const pages = ['Add Todo', 'Clear Completed', 'Clear All'];

function Navbar({setOpen}) {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleButtonClick = (id) =>{
    switch(id){
      case 'Add Todo':
        setOpen(true);
        break;
      case 'Clear Completed':
        dispatch(clearTodo());
        break;
        case 'Clear All':
          dispatch(clearAllTodo());
          break;
      default:
        break;
    }
    handleCloseNavMenu();
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <TaskAltIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Todo
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={()=>handleButtonClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <TaskAltIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Todo
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleButtonClick(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
