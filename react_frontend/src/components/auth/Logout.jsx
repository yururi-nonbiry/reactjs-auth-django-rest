import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Logout extends Component {

    static PropTypes = {
        logoutUser: PropTypes.func.isRequired
    };

    UNSAFE_componentWillMount() {
        this.props.logoutUser();
    }

    render() {
        return (
            <h2>Sorry to see you go...</h2>
        );
    }
}

export default connect(null, { logoutUser })(Logout);
