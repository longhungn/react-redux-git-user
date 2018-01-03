const defaultState = {
    currentUser: null,
    repos: [],
    isFetching: false
};

const reducer = function (state=defaultState, action) {
    switch (action.type) {
        case "FETCH_REQUEST_START":
            return {...state, isFetching: true};
        case "FETCH_REQUEST_FAILED":
            return {...state, repos: null};
        case "FETCH_REQUEST_SUCCESS":
            let repos = [];
            console.log(action.json) //debug
            for (let item of action.json) {
                repos.push({
                    id: item.id,
                    name: item.name,
                    html_url: item.html_url,
                });
            };
            return {...state, isFetching: false, repos: repos}
        default: 
            return state;
    }
}

export default reducer;