import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
});

class CREDIT extends React.Component {
	render () {
		const { classes }  = this.props;
		return (
			<div className={classes.root} >
				<Grid container spacing={3}>
					<Grid item xs={12}>
			          <Paper className={classes.paper} >
						<Typography variant="h5" gutterBottom>
							The Following People Have Been and Are Awesome/Essential to the Success of This Project. In No Particular Order:
						</Typography>
				      	<Typography variant="body1" gutterBottom>
							 <Link href="https://twitter.com/itsnotashes">@itsnotashes</Link> - for general awesomeness and a f***ton of free data.
				      	</Typography>
				      	<Typography variant="body1" gutterBottom>
							 <Link href="https://twitter.com/kh4st3x">@kh4st3x</Link> - for integrating this with his popular project h8mail and general awesomeness/support
				      	</Typography>
				      	<Typography variant="body1" gutterBottom>
							 <Link href="https://twitter.com/LaNMaSteR53">@LaNMaSteR53</Link> - for general awesomeness, support (moral and spiritual), and integration with his popular project recon-ng. Oh and also for dealing with me changing my APIs constantly and forgetting to give him a heads up.for general awesomeness, lots of normalization work, help with integration to other projects, and generally just being an all around good dude.
				      	</Typography>
				      	<Typography variant="body1" gutterBottom>
							 <Link href="https://twitter.com/goobstersec">@goobster</Link> - for general awesomeness, lots of normalization work, help with integration to other projects, and generally just being an all around good dude.
				      	</Typography>
				      	<Typography variant="body1" gutterBottom>
							 <Link href="https://twitter.com/5C4R48">@5C4R48</Link> - for normalizing over 150 databases and stealing all the work from everyone. For being an OG, used-to-be Hyperion Grayer. Sorry for that time I fired you bud.
				      	</Typography>
				      	<Typography variant="body1" gutterBottom>
							 . Also greetz to your company  <Link href="https://twitter.com/blackmiragesec">@blackmiragesec</Link> ❤️
				      	</Typography>
				      	<Typography variant="body1" gutterBottom>
							 <Link href="https://twitter.com/DefinitelyIsJah">@DefinitelyIsJah</Link> - for new theme
				      	</Typography>
				      	<Typography variant="body1" gutterBottom>
							 If I forgot to add your name, let me know :). Thanks to everyone who uses and supports this project and fights back when people start causing Twitter tizzies about this.
				      	</Typography>
			          </Paper>
			        </Grid>
				</Grid>
			</div>
		)
	}
}

export default withStyles(useStyles)(CREDIT)