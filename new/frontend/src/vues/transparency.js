import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import ChartYear from '../components/chartyear';
import ChartMonth from '../components/chartmonth';
import ChartDay from '../components/chartday';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  papercode: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  divcode: {
  	textAlign: 'center',
  }
});

class TRANS extends React.Component {
	render () {
		const { classes }  = this.props;
		return (
			<div className={classes.root} >
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Container maxWidth="sm">
							<Typography variant="h5" align="center" color="textPrimary" paragraph>
				              Transparency
				            </Typography>
				            <Typography variant="body1" align="center" color="textSecondary" paragraph>
					            Monitor the API calls made to SCYLLA with us
			            	</Typography>
					</Container>
					</Grid>
			        <Grid item xs={12} sm={6}>
			        	<Paper className={classes.paper}>
			        		<ChartYear />
			        	</Paper>
			        </Grid>
			        <Grid item xs={12} sm={6}>
			        	<Paper className={classes.paper}>
			        		<ChartMonth />
			        	</Paper>
			        </Grid>
			        <Grid item xs={12} sm={6}>
			        	<Paper className={classes.paper}>
			        		<ChartDay />
			        	</Paper>
			        </Grid>
				</Grid>
			</div>
		)
	}
}

export default withStyles(useStyles)(TRANS)