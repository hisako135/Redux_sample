import React from 'react';
import {render} from 'react-dom'; // ブラウザ = DOMに表示

class HelloComponent extends React.Component {
    render () {
        return <p>This article is written by hisako.</p>;
    }
}


class PropsComponent extends React.Component {
    render () {
        const { target } = this.props;
        
        return (
            <div>Hello {target}！</div>
        );
    }
}

class StateComponent extends React.Component {
    constructor() {
        super();

        // 初期状態
        this.state = {
            target: 'state'
        };
    }

    render() {
        let {target} = this.state;

        return (
            <div>Hello {target}！</div>
        )
    }
}


class TextInputComponent extends React.Component {
    constructor() {
        super();
        
        this.state =  {
            val: 'type anything!'
        };
    }
    
    render() {
        let {val} = this.state;
        
        return(
            <div>
                <input type="text" value={val}/>
                <button type="buntton">Clear</button>
                <hr/>
                {val}
            </div>
        );
    }
}

class AppComponent extends React.Component {
    render () {
        return (
            <section>
                <h1>My Hello App!</h1>
                <HelloComponent />
                <PropsComponent target="props" />
                <StateComponent/>
                <TextInputComponent/>
            </section>
        )
    }
}

const $app = document.getElementById('app');

render(<AppComponent/>, $app)