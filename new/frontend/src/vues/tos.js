import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
 }));

const TOSarr = [
	{
		"title" : "I. LOGS & PRIVACY",
		"text" : "We take privacy very seriously.",
		"points" : [
			"We log all IPv4 address that made a call to our API." +
				"This is done in order to ensure scylla.sh's safety in case of " +
				"abuse, malicious attacks such as DDOS attacks and for future " +
				"cooperations with the law enforcements.",
			"We log your query paramteres simply to ensure there is no malicious " +
				"attempts.",
			"We do not sell and we will not sell your personal data to anyone " +
				"however keep in mind we will cooperate with the law enforcements " +
				"if we have to." 

		]
	},
	{
		"title" : "II. ACCESSIBILITY",
		"text" : "scylla.sh is an open-source project and accessible to all.",
		"points" : [
			"There is no hidden or premium features whatsoever, scylla.sh is free " + 
				"and open-source and it will stay that way.",
			"We provide an easy-to-use, accessible and public API.",
				"We have an open github repository containing everything down to the " +
			"scylla.sh's source code, we would love it if you provide us with input, feedback and " +
				"report bugs and help us fix them!",
			"Keep in mind there is no such thing as advertisement in scylla. " +
			"This project is personally funded and sustainted so any sort of donations is greatly appreciated."
		]
	},
	{
		"title" : "III. USING THE SERVICE",
		"text" : "Why is this made and for who is this made.",
		"points" : [
			"This data is supposed to aid security researchers with analytical data concerning privacy and security.",
			"We do not support abuse or malicious use of our service.",
			"Use our service at your own discretion, we do not and will not take any " +
			"responsibilities for your actions."

		]
	}
]
export default function TOS() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Typography variant="h5" gutterBottom>
							Frequently Asked Questions (FAQ)
						</Typography>
						<Typography variant="body1" gutterBottom>
							SCYLLA.SH is a Hyperion Gray Project made to undercut people who sell
							leaked databases at thousands and thousands of dollars by providing a
							product free-of-charge and open-source.
						</Typography>
						{TOSarr.map((e, k) => (
							<div>
				         		<Typography variant="h5" gutterBottom>
									{e.title}
								</Typography>
								<Typography variant="body1" gutterBottom>
									{e.text}
									<ol type={1}>
										{e.points.map((p) => (
											<li> {p} </li>
										))}
									</ol>
							    </Typography>
						    </div>
				        ))}
				        <Typography variant="h5" gutterBottom>
							Links and Resources
						</Typography>
						<Typography variant="body1" gutterBottom>
							Github repository : https://www.github.com/hyp3ri0n-ng/scylla
						</Typography>
						<Typography variant="body1" gutterBottom>
							BTC Wallet : 3MpFsXKEpxSGzibCTxnceyZ6i3jSQDLzf3
						</Typography>
						<Typography variant="body1" gutterBottom>
							Paypal : https://www.paypal.com/donate?token=fsD9zbTpxK1aapDGkEOAu21M8O5rUb0lRcc8nW7Pfl4ghop8DVZql-nBCE5-7YKGl862vsuihVEp1yhL
						</Typography>
						<Typography variant="body1" gutterBottom>
							Contact : https://twitter.com/_hyp3ri0n
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</div>
	)
}