import React, { Component } from 'react';
import './timeline.css';

class TimelineItem extends Component {
    render() {
        console.log(this.props);

        return (
            <div className="tl-item">
                <p className="title">{this.props.movie.title}</p>
                {this.props.movie.types.map((type, index) => {
                    return (
                        <p className="type" key={index}>{type}</p>
                    );
                })}
            </div>
        );
    }
}

export default TimelineItem;