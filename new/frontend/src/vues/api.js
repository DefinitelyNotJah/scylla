import React from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import SyntaxHighlighter from 'react-syntax-highlighter';

import Link from '@material-ui/core/Link';

// Tabs
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

axios.defaults.headers.get['Accept'] = 'application/json';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign : 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  papercode: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  divcode: {
  	textAlign: 'center',
  },
  IPaddresswarning : {
  	marginTop : theme.spacing(1)
  },
});

class API extends React.Component {
	constructor(props)
	{
		super(props)
		this.state = {
			valeur : 0
		}
    	this.onValeur = this.onValeur.bind(this);
	}
	onValeur = (e, nv) => {
		this.setState({
			valeur: nv
		})
	}
	render () {
		const { classes }  = this.props;
		return (
			<div className={classes.root} >
				<Grid container spacing={3}>
			        <Grid item xs={12}>
			        	<Paper className={classes.paper}>
			        		<Typography variant="body1" gutterBottom>
			        			Report bugs to <Link href="https://github.com/acaceres2176/scylla/issues">the github repository</Link>. 
			        		</Typography>
			        	</Paper>
			        </Grid>
			        <Grid item xs={12}>
			        	<Paper className={classes.papercode}>
			        			<Typography variant="h5" gutterBottom>
				        			Queries
				        		</Typography>
				        		<Typography variant="body1" gutterBottom>
				        			Queries use Lucene query syntax, you will get a 500 error if your query is incorrect. 
				        			Use the fields listed above to guide you. Full query syntax (including wildcards) are supported.
				        		</Typography>
				        		<Typography variant="body1" gutterBottom>
				        			Example search for passwords that start with ff
				        		</Typography>
				        		<SyntaxHighlighter language="javascript">
			        			{`
	?q=password:ff*
			        			`}
			        			</SyntaxHighlighter>
			        			<Typography variant="body1" gutterBottom>
				        			This would match any passwords with a d in them and the username dave, dale, dane, etc.
				        		</Typography>
				        		<SyntaxHighlighter language="javascript">
			        			{`
	?q=name:da?e password:*d*
			        			`}
			        			</SyntaxHighlighter>
			        	</Paper>
			        </Grid>
			        <Grid item xs={12} sm={6}>
			        	<Paper className={classes.papercode}>
			        		<div className={classes.divcode}>
				        		<Typography variant="h5" gutterBottom>
				        			API
				        		</Typography>
				        		<Typography variant="body1" gutterBottom>
				        			The search API can be accessed by sending a GET request to the following link:
				        		</Typography>
				        		<SyntaxHighlighter language="json">
				        			GET https://scylla.sh/search?q=your_lucene_query&size=100&start=200
				        		</SyntaxHighlighter>
				        		<Typography variant="body1" gutterBottom>
				        			The above GET request grabs 1000 results of your_query starting at the 200th record. Pagination can be done using the "from" parameter. Queries return the first 10,000 hits.
									Data is returned in JSON format like the following:
				        		</Typography>
				        	</div>
			        		<SyntaxHighlighter language="json">
			        			{`
[
  {
    "fields": {
      "domain": "Collections",
      "email": "nikitapetrov4@hotmail.com",
      "password": "ybrbnf4"
    },
    "id": "01c0726ebff03503ed554c013340a6eb"
  },
  {
    "fields": {
      "domain": "Collections",
      "email": "has_00_n@hotmail.com",
      "password": "357753"
    },
    "id": "01c07b5a3df965275d4e28a5df62220d"
  },
  {
    "fields": {
      "domain": "Collections",
      "email": "montereyjim@hotmail.com",
      "password": "mrnaizka"
    },
    "id": "01c082d83c1bbaf18e45995cb2e273f4"
  }
]`}
			        		</SyntaxHighlighter>
			        		<Typography className={classes.IPaddresswarning} variant="body1" color="error" gutterBottom>
			        			If you make a request to the API, we will log your IP address
			        			in order to keep track of the connections made and block any 
			        			malicious ones. 
			        			Read more in our Terms Of Service.
			        		</Typography>
			        	</Paper>
			        </Grid>
			        <Grid item xs={12} sm={6}>
			        	<Paper className={classes.papercode}>
			        		<div>
			        			<Tabs value={this.state.valeur} onChange={this.onValeur} aria-label="Code snippets">
						          <Tab label="Node (Axios)" {...a11yProps(0)} />
						          <Tab label="Python (Request)" {...a11yProps(1)} />
						          <Tab label="PHP (CURL)" {...a11yProps(2)} />
						        </Tabs>
			        		</div>
			        		<div>
				        	  <TabPanel value={this.state.valeur} index={0}>
						        <SyntaxHighlighter language="javascript">
			        			{`
const axios = require('axios')

axios.defaults.headers.get['Accept'] = 'application/json';

const q = "your_lucene_query"
const size = 10
const start = 0
axios.get("https://scylla.sh/search", {
	params : {
		"q" : q,
		"size" : size,
		"start" : start
	}
}).then( (response) => {
	console.log(response.data)
})
			        			`}
			        			</SyntaxHighlighter>
						      </TabPanel>
						      <TabPanel value={this.state.valeur} index={1}>
						        <SyntaxHighlighter language="python">
			        			{`
payload = {'q': 'your_lucene_query', 'size': '100', start: '0'}
r = requests.get('https://scylla.sh/search', params=payload)
print(r)
			        			`}
			        			</SyntaxHighlighter>
						      </TabPanel>
						      <TabPanel value={this.state.valeur} index={2}>
						        <SyntaxHighlighter language="php">
			        			{`
<?php

    $url = 'https://scylla.sh/search?q=your_lucene_query&size=100&start=200';

    $curl = curl_init();
   
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HEADER, false);

    $str = curl_exec($curl);

    curl_close($curl);

    var_dump($str);

?>
			        			`}
			        			</SyntaxHighlighter>
						      </TabPanel>
			        		</div>
			        	</Paper>
			        </Grid>
				</Grid>
			</div>
		)
	}
}

export default withStyles(useStyles)(API)