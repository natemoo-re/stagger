import * as React from 'react';
import ReactDOM from 'react-dom';
import Stagger from 'stagger/react';

const App: React.FunctionComponent = () => {
    const [on, setOn] = React.useState(false);

    return (
        <>
            <Stagger as="h3" delay={20}>
                {!on ? 'Hello' : 'Goodbye'}
            </Stagger>
            <button onClick={() => setOn(v => !v)}>Click me!</button>
        </>
    )
}

ReactDOM.render(<App/>, document.querySelector('#app'));