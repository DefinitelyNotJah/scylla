import React from 'react';
import axios from 'axios';

import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { DataGrid } from '@material-ui/data-grid';

import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import Box from '@material-ui/core/Box';
import backend from '../backend.json';

const columns = [
  { field: 'ip', headerName: 'IP', sortable: false, width:150},
  { field: 'domain', headerName: 'Domain', sortable: false, width:150},
  { field: 'username', headerName: 'Username', sortable: false},
  { field: 'passhash', headerName: 'Passhash', sortable: false},
  { field: 'email', headerName: 'Email', sortable: false, width:300},
  { field: 'name', headerName: 'Name', sortable: false, width:300},
  { field: 'password', headerName: 'Password', sortable: false, width:300},
];

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
  	backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    textAlign : 'center'
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  shitdiv : {
  	padding : theme.spacing(2, 1, 1)
  },
  title: {
    textAlign: 'right'
  },
  root2: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});


class Search extends React.Component {
		constructor(props)
	{
		super(props)
		this.state = {
			searchterm : '*:*',
			response : []
		}
		this.onChange = this.onChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}
	onChange = (e) => {
		this.setState({
			searchterm : e.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault();
		( async () => {
			const reply = await axios.get(`${backend.url}/search`, {
				params : {
					"q" : this.state.searchterm
				}
			})
			let holyland = []
			reply.data.forEach( (e, i) => {
				holyland.push({
					id : i,
					ip : e.fields.ip ? e.fields.ip : 'null',
					domain : e.fields.domain ? e.fields.domain: 'null',
					username : e.fields.username ? e.fields.username: 'null',
					passhash : e.fields.passhash ? e.fields.passhash: 'null',
					email : e.fields.email ? e.fields.email : 'null',
					name : e.fields.name ? e.fields.name : 'null',
					password : e.fields.password ? e.fields.password : 'null'
				})
			})
			this.setState({
				response : holyland
			})
		})();
	}
	render () {
		const cards = [{
			id : 1,
			img : 'img/transparency.jpg',
			title : 'Transparency',
			path : '/transparency'
		}, {
			id : 2,
			img : 'img/api.jpg',
			title : 'API',
			path : '/api'
		}, {
			id : 3,
			img : 'img/credit.jpg',
			title : 'Credits',
			path : '/credit'
		}];
		const { classes }  = this.props;
		return (
			<div className={classes.root} >
		        <div className={classes.heroContent}>
		          <Container maxWidth="sm">
		            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
		              SCYLLA
		            </Typography>
		            <Typography variant="h5" align="center" color="textSecondary" paragraph>
		              We provide security researchers access to community-oriented database leaks
		               including a free and open API.
		            </Typography>
		          </Container>
		        </div>
		        <div>
		        	<Container>
		        		<div className={classes.shitdiv} >	
				        	<form style={{ textAlign: 'center'}} noValidate autoComplete="off" onSubmit={(event) => this.handleSubmit(event)}>
			        			<Box display="flex" justifyContent="center" m={1} p={1}>
				        			<Paper component="form" className={classes.root2}>
								      <InputBase
								        className={classes.input}
								        value={this.state.searchterm}
				        				onChange={this.onChange}
				        				label="Please enter a search term..." 
				        				variant="filled"
								      />
								      <Divider className={classes.divider} orientation="vertical" />
								      <IconButton type="SUBMIT" onClick={this.handleSubmit} className={classes.iconButton} aria-label="search">
								        <SearchIcon />
								      </IconButton>
								    </Paper>
							    </Box>
				        		<div style={{ height: 400, width: '100%', marginTop : '1rem' }}>
						    		<DataGrid rows={this.state.response} columns={columns} pageSize={5} />
							    </div>
				        	</form>
			        	</div>
		        	</Container>
	        	</div>
		     <div>
		        <Container className={classes.cardGrid} maxWidth="md">
		          {/* End hero unit */}
		          <Grid container spacing={4}>
		            {cards.map((card) => (
		              <Grid item key={card.id} xs={12} sm={6} md={4}>
		              	<Link underline='none' component={RouterLink} to={card.path}>
			                <Card className={classes.card}>
			              		<CardActionArea>
				                  <CardMedia
				                    className={classes.cardMedia}
				                    image={card.img}
				                    title={card.title}
				                  />

				                  <CardContent className={classes.cardContent}>
				                    <Typography gutterBottom variant="h5" component="h2">
				                      {card.title}
				                    </Typography>
				                  </CardContent>
			                  </CardActionArea>
			                </Card>
		                </Link>
		              </Grid>
		            ))}
		          </Grid>
		        </Container>
		    </div>
        </div>
		)
	}
}

export default withStyles(useStyles)(Search)