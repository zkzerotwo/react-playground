import React from 'react'

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = { chamber: null,
        spinningTheChamber: false };
        console.log(this.state)
        console.log(props)
    }
    
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    trigger = () => {
        this.setState({
            spinningTheChamber: true
        })
        
        this.timeout = setTimeout(() => {
            const randomNumber = Math.ceil(Math.random() * 8)
            // console.log(randomNumber)
            this.setState({
                chamber: randomNumber,
                spinningTheChamber: false
            })
        }, 2000)
    }

    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
            return 'Spinning and pulling the trigger...'
        } else if (chamber === bulletInChamber) {
            return 'Boom, ya gone!'
        } else {
            return 'Ur good, m8'
        }
    }
    
    
    render() {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.trigger}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun