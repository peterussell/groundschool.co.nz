import {
  AppBar,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import useStyles from "./gsAppBarStyles";

export const GSAppBar = () => {
  const classes = useStyles();

  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout
  } = useAuth0();

  const handleLogIn = (): void => {
    loginWithRedirect();
  };

  const handleLogOut = (): void => {
    logout({ logoutParams: { returnTo: window.location.origin } })
  };

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Link to="/" className={classes.mainTitle}>
            <Typography variant="h5">GroundSchool NZ</Typography>
          </Link>

          <div className={classes.menuContainer}>
            <List className={classes.menuList}>
              <ListItem className={classes.menuItem} button component="a" href="/exams">
                <ListItemText primary="Exams" />
              </ListItem>

              {/* <ListItem className={classes.menuItem} button component="a" href="/contribute">
                <ListItemText primary="Contribute" />
              </ListItem>

              <ListItem className={classes.menuItem} button component="a" href="/articles">
                <ListItemText primary="Articles" />
              </ListItem>

              <ListItem className={classes.menuItem} button component="a" href="/resources">
                <ListItemText primary="Resources" />
              </ListItem> */}

              <ListItem className={classes.menuItem} button component="a" href="/contact">
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </div>

          {/* TODO: move this to a separate component? */}
          {isLoading ? (
            <Typography variant="body1" color="textSecondary">Loading...</Typography>
          ) : (
            isAuthenticated ? (
              <>
                <Typography variant="body2" color="textSecondary">
                  Hi, {user?.name ?? user?.email}
                </Typography>
                <IconButton>
                  {/* TODO: clicking/tapping this should open a pop-up menu */}
                  <AccountCircle className={classes.accountIcon} onClick={handleLogOut} />
                </IconButton>
              </>
            ) : (
              <Button variant="outlined" color="secondary" onClick={handleLogIn}>
                Log in
              </Button>
            )
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
