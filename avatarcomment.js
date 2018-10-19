import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  row: {
    display: 'flex',    
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  paperRoot:{
    padding:'10px 10px'
  }
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar className={classes.avatar} >H</Avatar> 
      <Paper className={classes.root} classes={{ root: classes.paperRoot}} elevation={1}>
        <Typography variant="subtitle2">
          Augustus Karthi kalimuthu
        </Typography>
        <Typography variant="subtitle2">
          Force Matched Jira : <a href="http://www.google.com" target="google.com">This is a lin</a>
        </Typography>
        
        
        
        <Typography variant="body1">
          Paper can be used to build surface or other elements for your application.
        </Typography>
        <Typography variant="caption">
          2018-10-19
        </Typography>
      </Paper>     
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
