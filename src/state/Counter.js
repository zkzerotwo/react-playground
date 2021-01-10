import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = {
            count: 0,
            step: 5
        }

    }
    handleButtonClick = () => {
        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)
        console.log('clicked!')
        
        const newCount = this.state.count + this.state.step
        this.setState({
            count: newCount
        })
    }
    render() {
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button onClick= {this.handleButtonClick}>
                    Add 1
        </button>
            </div>
        )
    }
}

export default Counter