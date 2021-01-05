import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Divider from '@material-ui/core/Divider';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop : theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
  },
  divstuff : {
  	textAlign : 'center',
  	padding: theme.spacing(2, 1, 1)
  },
});

class footerLower extends React.Component {
	render () {
		const { classes }  = this.props;
	  return (
	    <div className={classes.root}>
      	<Divider variant="middle" />
      	<Grid container spacing={3}>
	        <Grid item xs={12}>
	          	<div className={classes.divstuff}>

	            	<Typography variant="caption" display="block" color="textSecondary">
		            	<Link
				            href="/sitemap.xml" 
				            color="inherit"
				            style= {{ textDecoration: "none" }}
				        >
						    SITEMAP
						</Link>
	            	</Typography>
	            	<Typography variant="caption" display="block" color="textSecondary">
	            		<Link
				            href="/faq" 
				            color="inherit"
				            style= {{ textDecoration: "none" }}
				        >
						    FAQ
						</Link>
	            	</Typography>
	            	<Typography variant="caption" display="block" color="textSecondary">
					    © 2021
	            	</Typography>
	          	</div>
	        </Grid>
	    </Grid>
	    </div>
  		);
	}
}

export default withStyles(useStyles)(footerLower)
