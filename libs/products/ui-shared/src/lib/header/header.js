import './header.module.scss';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: { flexGrow: 1 },
}));

export function Header(props) {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Board Game Hoard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
