
import React from 'react';

it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');

    // render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<App />, div);

    // clean up code
    ReactDOM.unmountComponentAtNode(div);
});