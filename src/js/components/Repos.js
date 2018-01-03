import React from 'react';
import {connect} from 'react-redux';

const Repos = ({repos, isFetching}) => {
    if (repos === null) {
        return (
            <h3>Failed to get info</h3>
        )
    }
    
    if(repos === []) {
        return (<h3></h3>)
    }
    
    if (isFetching) {
        return (<h3>Loading...</h3>)
    }

    return (
        <ul>
            {repos.map( repo => <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li> )}
        </ul>
    )

}

function mapStateToProps(state) {
    return {
        repos: state.repos,
        isFetching: state.isFetching,
    }
}

export default connect(mapStateToProps)(Repos);