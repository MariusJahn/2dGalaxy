import React, { Component } from 'react'

type PlanetProps = {
    xPosition: number,
    yPosition: number,
    width: number,
    height: number,
    radius: number,
    mass: number,
}

type PlanetState = {
    xPosition: number,
    yPosition: number,
    width: number,
    height: number,
    radius: number,
    mass: number,
}

export class Planet extends Component<PlanetProps, PlanetState> {

    /**
     *
     */
    constructor(props: PlanetProps) {
        super(props);
        
        this.setState({
            xPosition: 0,
            yPosition: 0,
            width: 200,
            height: 200,
            radius: 10,
            mass: 0,
        })
    }

    render() {
        return (
            <>
                <circle cx={this.props.xPosition} cy={this.props.yPosition} r={this.props.radius}>

                </circle>
            </>
        )
    }



}