import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { Container, Divider,Segment, Grid,  Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



class HomePage extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {

    return (
      <Container>
        <h3>Home page</h3>
        <Divider />

      	<Segment className="myCard">
      	<Header as='h3'>Welcome</Header>
        <p>Ar-Sandbox welcome you to be a part of our commuity. We will be glad if you join in</p>
        <Button.Group>
			    <Button positive as={Link} to="/login">Login</Button>
			    <Button.Or />
			    <Button positive as={Link} to="/signup">Signup</Button>
			  </Button.Group>
        </Segment>
        <Segment className="myCard">
      	<Header as='h3'>News</Header>
        <p>Ar-Sandbox welcome you to be a part of our commuity. We will be glad if you join in</p>
        <p>Ar-Sandbox welcome you to be a part of our commuity. We will be glad if you join in</p>
        <p>Ar-Sandbox welcome you to be a part of our commuity. We will be glad if you join in</p>
        <p>Ar-Sandbox welcome you to be a part of our commuity. We will be glad if you join in</p>
        <p>Ar-Sandbox welcome you to be a part of our commuity. We will be glad if you join in</p>
        <p>Ar-Sandbox welcome you to be a part of our commuity. We will be glad if you join in</p>
        </Segment>
        <Segment basic >
        	<Grid divided='vertically' stackable>
			    <Grid.Row columns={2}>
			      <Grid.Column>
			      	<Segment className="myCard">
			      	<Header as='h3'>Editor</Header>
			        <p>Ar-Sandbox welcome you to be a part of our commuity. We will be glad if you join in</p>

			        </Segment>

			      </Grid.Column>
			      <Grid.Column>
			        <Segment className="myCard">
			      	<Header as='h3'>News</Header>
			        <p>Ar-Sandbox welcome you to be a part of our commuity. We will be glad if you join in We will be glad if you join in We will be glad if you join in</p>
			        </Segment>
			      </Grid.Column>
			    </Grid.Row>
		    </Grid>
		    </Segment>
      </Container>

    );
  }
}

export default HomePage;
