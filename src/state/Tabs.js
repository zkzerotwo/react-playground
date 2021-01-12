import React from "react";

class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    state = {
        currentTabIndex: null
    };
    handleButtonClick = (index) => {
        console.log('button clicky clicky')
        this.setState({ currentTabIndex: index })
    }
    renderButtons() {
        return this.props.tabs.map((tab, index) => (
            <button key={index} onClick={this.handleButtonClick}>
                {tab.name}
            </button>
        ))
    }
    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }
    render() {
        return (
            <div>
                <div>
                    {this.renderButtons()}
                    {this.props.tabs.length && this.renderContent()}
                </div>
            </div>
        )
    }
}

export default Tabs;