import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const {isAuthenticated} = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <nav className="navbar navbar-secondary ">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search songs"
                aria-label="Search"
              />
              <button className="btn my-2 my-sm-0 bg-secondary" type="submit">
                Search
              </button>
            </form>
          </nav>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" />
        </li>
        <li className="nav-item">
          <a
            href=" "
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            {' '}
            Logout
          </a>
        </li>
        <li className="nav-item">
          <button
            onClick={this.onDeleteClick.bind(this)}
            className="btn btn-danger"
          >
            Delete My Account
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
      <div className="row">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <nav className="navbar navbar-secondary ">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search songs"
                  aria-label="Search"
                />
                <button className="btn my-2 my-sm-0 bg-secondary" type="submit">
                  <Link className="nav-link" to="/search">
                    Search
                  </Link>
                </button>
              </form>
            </nav>
          </li>
          <li className="nav-item ">
            <Link className="nav-link " to="/register">
              Sign Up
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link " to="/songs">
              Songs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            AfriMusic
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {logoutUser}
)(Navbar);
