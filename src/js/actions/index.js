export function getUserRepos(username) {
    return function(dispatch) {
        dispatch(requestRepos(username))
        return fetch(`https://api.github.com/users/${username}/repos`)
                .then(res=>{
                    if (res.ok) {
                        return res.json();
                    }
                    return Promise.reject();
                })
                .then(json=>dispatch(receiveRepos(json)), err=>dispatch(requestFailed("Not Found")));
    }
}

// function handleResponse(json, dispatch) {
//     if (json.message === "Not Found") {
//         dispatch(requestFailed(json.message));
//     } else {
//         dispatch(receiveRepos(json));
//     }
// }

function requestRepos(username) {
    return {
        type: "FETCH_REQUEST_START"
    }
}

function receiveRepos(json) {
    return {
        type: "FETCH_REQUEST_SUCCESS",
        json: json,
    }
}

function requestFailed(message) {
    return {
        type: "FETCH_REQUEST_FAILED",
        message: message,
    }
}

