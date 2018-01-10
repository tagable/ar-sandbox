import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout }  from '../../actions/auth';

import Logo from '../../img/logo.svg';


class MyNav extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
  	const { activeItem } = this.state;
  	const { user, logout } = this.props;
    return (
    	<header>
      	<Menu stackable>
          <Menu.Item>
            <img src={Logo} alt="Ar-SandBox" />
          </Menu.Item>

          <Menu.Item
          	as={Link} 
          	to="/"
            name='home'
            active={activeItem === 'home'}
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
          		onClick={() => logout() }
          	>
          	  Logout
          	</Menu.Item>}

        </Menu>        
      </header>
    );
  }
}

function mapStateToProps(state) {
	return {
		user: !!state.user.username
	}
}

export default connect(mapStateToProps, { logout })(MyNav);