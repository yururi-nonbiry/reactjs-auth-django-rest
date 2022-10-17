import React, { Component } from "react";
import propTypes from "prop-types";
//import {withRouter} from "react-router-dom";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    
    return (
      <Component
        history={history}
        {...props}
        />
    );
  };
  return Wrapper;
};

export default function(ComposedComponent) {
    class Authentication extends Component {

        static propTypes = {
            history: propTypes.object
        };

        UNSAFE_componentWillMount() {
            this.checkAuthentication(this.props);

        }

        UNSAFE_componentWillUpdate(nextProps) {
            this.checkAuthentication(nextProps);
        }

        checkAuthentication(props) {
            if (!props.authenticated) {
                this.props.history.push("/login");
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.auth.authenticated }
    }
    return withRouter(connect(mapStateToProps)(Authentication));
}
