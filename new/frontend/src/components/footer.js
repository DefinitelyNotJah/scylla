import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

export default function footermyass() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} >
            <Typography variant="caption" display="block" gutterBottom>
              ToS
                The information on this website is intended only for research purposes. Access has been given to security or other researchers for the purposes of research ONLY. Other than that I sincerely hope this data helps you with your projects and aids in your understanding of your or your organization's security posture. Much love.

                - _hyp3ri0n
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              ToS Enforcement
The information on this website is intended only for research purposes. We search common database leak sites to ensure this is not being circulated for malicious use. We do have default logging turned on for this website which likely includes IP addresses and other identifiers. Please don't misuse this information as we will cooperate with law enforcement if it is.
By the way, for old users, by popular request there is no longer a cryptominer on this website or any ads.

- _hyp3ri0n
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
