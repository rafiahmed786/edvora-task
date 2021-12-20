import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AllProduct from '../AllProduct/AllProduct';
import FilterByProducts from '../Filter/FilterByProducts';
import FilterByState from '../Filter/FilterByState';
import FilterByCity from '../Filter/FilterByCity';

const drawerWidth = 240;


function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
    const [displayFiltered, setDisplayFiltered]= React.useState([])
   const [data, setProducts]= React.useState([]);
    React.useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=> {
            setProducts(data);
            setDisplayFiltered(data);
        });
    },[])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer  = (
    <div >
      <Toolbar />
      <Typography variant='h6' sx={{color:'#ddd',textAlign:'center',marginBottom:'5px'}}>
          Filters
      </Typography>
      <Divider />
      <List>
        <FilterByProducts data={data} setDisplayFiltered={setDisplayFiltered}></FilterByProducts>
        <FilterByState data={data} setDisplayFiltered={setDisplayFiltered}></FilterByState>
        <FilterByCity data={data} setDisplayFiltered={setDisplayFiltered}></FilterByCity>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', background:"#3e3e3e" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background:'#333'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Edvora
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background:'#4a4a4a' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
            <AllProduct displayFiltered={displayFiltered} ></AllProduct>

        
        
      </Box>
    </Box>
  );
}

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Home;
