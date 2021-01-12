import React from 'react'

class Accordion extends React.Component {
    static defaultProps = { 
        sections: [] 
    };

    state = {
        currentSectionIndex: null
    };

    setSectionIndex = (sectionIndex) => {
        this.setState({currentSectionIndex: sectionIndex})
    }
    
    renderListItem(sections, index, sectionIndex) {
        return (
            <li key={index}>
                <button onClick={() => this.setSectionIndex(index)}>
                {sections.title}
            </button>
            {(sectionIndex === index) && <p>
                {sections.content}
            </p>}
            </li>
        )
    }

    render() {
        // console.log(this.props.sections)
        const { currentSectionIndex } = this.state
        const { sections } = this.props
        return (
            <ul>
                {sections.map((sections, index) => 
                this.renderListItem(sections, index, currentSectionIndex)
                )}
            </ul>
        )
    }
}
export default Accordion;