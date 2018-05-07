import React, { Component } from 'react';
import TimelineItem from './timeline-item.js';
import { movies } from './movies.js';

class Timeline extends Component {
    render() {
        return (
            <div>
                {movies.map((movie, index) => {
                    return(
                        <TimelineItem movie={movie} key={index} />
                    );
                })}
            </div>
        );
    }
}

export default Timeline;