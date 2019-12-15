import React from 'react';

class Track extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div onClick={() => this.props.setPlaying("/static/media/" + this.props.options.path)}>
            <h3>{this.props.options.name}</h3>t
            <p>{this.props.options.author}</p>
        </div>
        )
    }
}

export default Track;