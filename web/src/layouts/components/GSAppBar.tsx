import { AppBar, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Link } from '@tanstack/react-router';
import { JSX, useState } from 'react';

export function GSAppBar(): JSX.Element {
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null);

  function toggleUserMenu(event: React.MouseEvent<HTMLElement>) {
    setUserMenuAnchor(userMenuAnchor === null ? event.currentTarget : null)
  }

  return (
    <AppBar position='static' elevation={0}>
      <Container maxWidth='md'>
        <Toolbar disableGutters sx={{ flexGrow: 1 }}>

          <Stack direction="row" spacing={2} sx={{ flexGrow: 1, alignItems: 'center' }}>
            <Link to='/'><Typography variant='h1'>GroundSchool NZ</Typography></Link>
            <Button><Link to='/exams'><Typography>Exams</Typography></Link></Button>
            <Button><Link to='/articles'><Typography>Articles</Typography></Link></Button>
            <Button><Link to='/contact'><Typography>Contact</Typography></Link></Button>
            <IconButton onClick={toggleUserMenu} sx={{ marginLeft: 'auto !important' }}><AccountCircle /></IconButton>
          </Stack>

          <Menu
            anchorEl={userMenuAnchor}
            open={!!userMenuAnchor}
            onClose={() => {setUserMenuAnchor(null)}}
            onClick={() => {setUserMenuAnchor(null)}}
            transformOrigin={{ horizontal: 40, vertical: 0 }}>
            <MenuItem><Typography>Sign in</Typography></MenuItem>
            <MenuItem><Typography>Register</Typography></MenuItem>
          </Menu>

        </Toolbar>
      </Container>
      
    </AppBar>
  )
}


// import {
//   AppBar,
//   Container,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
//   Toolbar,
//   Typography
// } from '@material-ui/core";
// import { AccountCircle } from "@material-ui/icons";
// import { Link } from "react-router-dom";

// import useStyles from "./gsAppBarStyles";

// export const GSAppBar = () => {
//   const classes = useStyles();

//   return (
//     <AppBar position="static" elevation={0}>
//       <Container maxWidth="md">
//         <Toolbar disableGutters>
//           <Link to="/" className={classes.mainTitle}>
//             <Typography variant="h5">GroundSchool NZ</Typography>
//           </Link>

//           <div className={classes.menuContainer}>
//             <List className={classes.menuList}>
//               <ListItem className={classes.menuItem} button component="a" href="/exams">
//                 <ListItemText primary="Exams" />
//               </ListItem>

//               <ListItem className={classes.menuItem} button component="a" href="/quizzes">
//                 <ListItemText primary="Quizzes" />
//               </ListItem>

//               {/* <ListItem className={classes.menuItem} button component="a" href="/contribute">
//                 <ListItemText primary="Contribute" />
//               </ListItem>

//               <ListItem className={classes.menuItem} button component="a" href="/articles">
//                 <ListItemText primary="Articles" />
//               </ListItem>

//               <ListItem className={classes.menuItem} button component="a" href="/resources">
//                 <ListItemText primary="Resources" />
//               </ListItem> */}

//               <ListItem className={classes.menuItem} button component="a" href="/contact">
//                 <ListItemText primary="Contact" />
//               </ListItem>
//             </List>
//           </div>

//           <IconButton>
//             <AccountCircle className={classes.accountIcon} />
//           </IconButton>

//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
