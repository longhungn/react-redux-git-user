import React from 'react';
import { connect } from 'react-redux';

import { getUserRepos } from '../actions/index.js';

class SelectUser extends React.Component {
    
    
    render() {
        return  (
            <form id="demo-form" onSubmit={this.props.handleSubmit}>
                <span>Enter git username: </span>
                <input className="username-input" type="text" ref="username" />
                <input type="submit" value="View repos"/>
            </form>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: function(e) {
            e.preventDefault();
            let username = e.target.querySelector("input.username-input").value;
            dispatch(getUserRepos(username));
        },
    }
}

export default connect(null, mapDispatchToProps)(SelectUser);