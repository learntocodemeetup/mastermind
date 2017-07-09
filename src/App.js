import React, {Component} from 'react';

import Row from './Row';
import Circle from './Circle';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeColor: 'white',
        };
    }

    setActiveColor(color) {
        this.setState({activeColor: color})
    }

    render() {

        const rows = [];

        const row = {
            activeColor: this.state.activeColor,
            rowFilled: () => console.log('Row complete'),
            smallCircles: ['white', 'white', 'white', 'white',],
        };

        for (let i = 0; i < 10; i++) {
            rows.push(row);
        }

        const reactRows = rows.map(
            (row, index) => <Row
                key={index}
                activeColor={row.activeColor}
                rowFilled={row.rowFilled}
                smallCircles={row.smallCircles}/>
        );

        const colorCircles = ['green', 'blue', 'red', 'yellow', 'white'];

        const activeColorCircles = colorCircles.map(
            (color, index) => <Circle
                key={index}
                color={color}
                size="big"
                css={
                    {
                        borderColor: color === this.state.activeColor ? 'red' : 'black'
                    }
                }
                onClick={() => this.setActiveColor(color)}/>
        );

        return (
            <div className="App">
                <h1>Mastermind</h1>
                <section className="gameBoard">
                    <div className="activeColors">{ activeColorCircles }</div>
                    { reactRows }
                </section>
            </div>
        );
    }
}

export default App;
