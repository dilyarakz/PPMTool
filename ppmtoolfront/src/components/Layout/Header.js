import React from 'react';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <div>

            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <a className="navbar-brand" href="/dashboard">
                        Personal Project Management Tool
            </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/dashboard">
                                    Dashboard
                        </a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link " href="register.html">
                                    Sign Up
                        </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="login.html">
                                    Login
                        </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>;
    }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
// #endregion

export default Header;