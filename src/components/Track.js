import React from 'react';

class Track extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <h3>{this.props.options.name}</h3>
            <p>{this.props.options.author}</p>
        </div>
        )
    }
}

export default Track;