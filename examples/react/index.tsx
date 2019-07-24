import * as React from 'react';
import ReactDOM from 'react-dom';
import Stagger from '@stagger/react';

const MyComponent = () => {
    const [on, setOn] = React.useState(false);

    return (
        <>
            <Stagger delay={20}>
                {!on ? 'Hello' : 'Goodbye'}
            </Stagger>

            <Stagger by="word" delay={20}>
                Hello world!
            </Stagger>

            <Stagger delay={20}>
                <span>Hello </span>
                <span>world</span>
                <span>!</span>
            </Stagger>
            <button onClick={() => setOn(v => !v)}>Click me!</button>
        </>
    )
}

const App: React.FunctionComponent = () => <MyComponent />;

ReactDOM.render(<App/>, document.querySelector('#app'));