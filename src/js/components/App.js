import React from 'react';

import Repos from './Repos.js';
import SelectUser from './SelectUser.js';

const App = () => (
    <div>
        <h2>Check out someone git repos </h2>
        <SelectUser />
        <hr></hr>
        <Repos />
    </div>
);

export default App;