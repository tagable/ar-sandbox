import React, { Component } from 'react';
import { Menu, Message, Container } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout }  from '../../actions/auth';

import Logo from '../../img/logo.svg';


class MyNav extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
  	const { activeItem } = this.state;
  	const { user, logout, isConfirmed, isAuthenticated } = this.props;
    return (
    	<header>
      	<Menu stackable id="myNav-Menu">
          <Menu.Item>
            <img src={Logo} alt="Ar-SandBox" />
          </Menu.Item>

          <Menu.Item
          	as={Link}
          	to="/"
            name='home'
            active={activeItem === 'home' || activeItem === undefined}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>

          { !user &&
          	<Menu.Item
          		as={Link}
          		to="/signup"
          	  name='signup'
          	  active={activeItem === 'signup'}
          	  onClick={this.handleItemClick}
          	>
          	  Signup
          	</Menu.Item>}


          	{ !user &&
          	<Menu.Item
          		as={Link}
          		to="/login"
          	  name='login'
          	  active={activeItem === 'login'}
          	  onClick={this.handleItemClick}
          	>
          	  Login
          	</Menu.Item>}

						{ user &&
							<Menu.Item
								as={Link}
								to="/code-list"
								name='code-list'
								active={activeItem === 'code-list'}
								onClick={this.handleItemClick}
							>
								List
							</Menu.Item>}

          	{ user &&
          	<Menu.Item
          		onClick={() => logout() }
          	>
          	  Logout
          	</Menu.Item>}

        </Menu>
        <Container>
          {isAuthenticated && !isConfirmed && <Message
            icon='inbox'
            size="small"
            header='Have you confirmed you email with us?'
            content='Please check your email to confirm your email with us'
          />}
          <br/>
        </Container>
      </header>
    );
  }
}

function mapStateToProps(state) {
	return {
		user: !!state.user.username,
    isConfirmed: !!state.user.confirmed,
    isAuthenticated: !!state.user.username
	}
}

export default connect(mapStateToProps, { logout })(MyNav);
