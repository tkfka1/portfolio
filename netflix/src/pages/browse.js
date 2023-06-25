import React from 'react';
import { useContent } from '../hooks';

export default function Browse() {
    const { series } = useContent('series');
    const { films } = useContent('films');
    console.log(series, films);
    return (


        <div>
            <h1>Browse</h1>
            <h1>h</h1>
            <h1>h</h1>

        </div>
    );
}