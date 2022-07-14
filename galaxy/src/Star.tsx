import React, { Component } from 'react'
import { Planet } from './Planet';

type StarProps = {
    xPosition: number,
    yPosition: number,
    width: number,
    height: number,
    radius: number,
    mass: number,
    planets: Planet[],
}

type StarState = {
    xPosition: number,
    yPosition: number,
    width: number,
    height: number,
    radius: number,
    mass: number,
    planets: Planet[],
}

export class Star extends Component<StarProps, StarState> {

    /**
     *
     */
    constructor(props: StarProps) {
        super(props);
        
        this.setState({
            xPosition: 0,
            yPosition: 0,
            width: 200,
            height: 200,
            radius: 10,
            mass: 0,
            planets: [],
        })
    }

    render() {
        return (
            <>
                <circle cx={this.props.xPosition} cy={this.props.yPosition} r={this.props.radius} fill="yellow" filter='url(#sofGlow)'>
                
                </circle>
            </>
        )
    }



}