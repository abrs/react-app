import React, {Component} from 'react'

export default class Counter extends Component {

    constructor(props) {

        super(props)
        this.state = {
          count: props.initialCount
        }
    }

    add(value) {
        this.setState(prevState => {
            
            return {
                count: this.state.count + value
            }
        } )
    }

    render() {

        return (

            <div>
                <button onClick={() => this.add(-1)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={() => this.add(+1)}>+</button>
            </div>
        )
    }
}