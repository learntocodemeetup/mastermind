import React, {Component} from 'react';
import PropTypes from 'prop-types';

import style from './Row.css';
import Circle from './Circle';

class Row extends Component {

    static propTypes = {
        activeColor: PropTypes.string.isRequired,
        rowFilled: PropTypes.func.isRequired,
        smallCircles: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            bigCircles: ['white', 'white', 'white', 'white',],
        };
    }

    handleBigCircle(index) {
        this.state.bigCircles[index] = this.props.activeColor;
        this.setState(this.state);
    }

    rowComplete() {
        this.props.rowFilled(this.state.bigCircles)
    }

    render() {
        const bigCircleStyle = {borderColor: 'grey', borderWidth: '2px'};
        const smallCircleStyle = {borderColor: 'black', borderWidth: '1px'};
        return (
            <div className="row">
                {
                    this.state.bigCircles.map(
                        (value, index) =>
                            <Circle
                                key={index}
                                color={this.state.bigCircles[index]}
                                size="big"
                                css={bigCircleStyle}
                                onClick={() => this.handleBigCircle(index)}
                            />)
                }
                <div className="fourDots">
                    {
                        this.props.smallCircles.map(
                            (value, index) =>
                                <Circle
                                    key={index}
                                    color={value}
                                    size="small"
                                    css={smallCircleStyle}/>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Row;
