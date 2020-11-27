import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
});

class Search extends React.Component {
	render () {
		const { classes }  = this.props;
		return (
			<div className={classes.root} >
				<Grid container spacing={3}>
					<Grid item xs={12}>
			          <Paper className={classes.paper} >
						<Typography variant="h5" gutterBottom>
							Hyperion Gray and scylla.sh
						</Typography>
						<Typography variant="body1" gutterBottom>
				        	Scylla is officially a Hyperion Gray project! What does that mean? Well, the little logo thingy at the top left now says Hyperion Gray. That's about it for you users....
				      	</Typography>
				      	<Typography variant="body1" gutterBottom>
				        	Also, you can now support scylla by simply clicking on this link and checking out the Hyperion Gray website.
				      	</Typography>
				      	<Typography variant="h6" gutterBottom>
				        	Noooooo, it's in corporate world now, that means you're going to charge for it doesn't it!?!?
				      	</Typography>
				      	<Typography variant="body1" gutterBottom>
				        	Nope. As I've said from the beginning scylla is and WILL ALWAYS BE free.
				      	</Typography>
			          </Paper>
			        </Grid>
			        <Grid item xs={12}>
			           <Paper className={classes.paper}>
				          <Typography variant="h5" gutterBottom>
								Why Scylla?
							</Typography>
							<Typography variant="body1" gutterBottom>
					        	scylla.sh has two major goals. One is to have a community-oriented database leak community that is a useful tool for security researchers.
					      	</Typography>
					      	<Typography variant="body1" gutterBottom>
					        	The other major goal is to undercut those people that are selling databases. If we can provide a free product here, we are eating into the bottom-line of those people selling leaked dbs for thousands of dollars. This de-incentivises buying of those DBs and therefore posting them in the first place. Even places that are supposedly "ethical" (looking at you HIBP) still have no problem selling your data. scylla.sh is and *will always* be free with an open API.
					      	</Typography>
					      	<Typography variant="body1" gutterBottom>
					        	If you're an old school scylla.sh user, you might notice a few changes. Specifically there is no cryptominer and there are no advertisements at all for anything. Frankly, I got sick of getting accused of doing this for money when the truth is that this costs me a decent amount. So you may choose to support scylla.sh or not, it will be 100% ad-free from now on and you are welcome here :) (unless you're using this for malicious purposes then I suggest you f*** off as I will cooperate with law enforcement).
					      	</Typography>
			            </Paper>
			        </Grid>
			        <Grid item xs={12} sm={6}>
			        	<Paper className={classes.paper}>
			        		<Typography variant="h5" gutterBottom>
								Support Scylla
							</Typography>
							<Typography variant="body1" gutterBottom>
								Scylla needs your help! To make this project sustainable it unfortunately needs some help from the commmunity. I am glad to put my personal time and money into this project, but I could use some help on the hosting costs. If you would consider buying me a metaphorical coffee it would greatly help in supporting scylla. Everyone says this, but I mean it when I say that even a 5 dollar donation helps. If everyone donated 5 dollars that visited the site, I could make this project much more sustainable and continue to improve and update it. ALL donations go to improving and maintaining scylla.
							</Typography>
			        	</Paper>
			        </Grid>
			        <Grid item xs={12} sm={6}>
			        	<Paper className={classes.paper}>
			        		<Typography variant="body1" gutterBottom>
			        			That said, you're welcome to not donate and use the site anyway :). The goal here is to ruin a really shitty economy that sells your data.
			        		</Typography>
			        		<Typography variant="body1" gutterBottom>
			        			Since many have asked (thank you btw) about direct donations, you can send Bitcoin to 3MpFsXKEpxSGzibCTxnceyZ6i3jSQDLzf3 or Monero to and may also donate with paypal with this button
			        		</Typography>
			        		<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
			        	</Paper>
			        </Grid>
				</Grid>
			</div>
		)
	}
}

export default withStyles(useStyles)(Search)