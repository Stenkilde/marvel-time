import React, { Component } from 'react';

class TimelineItem extends Component {
    render() {
        console.log(this.props);

        return (
            <div>
                {this.props.movie.title}
            </div>
        );
    }
}

export default TimelineItem;