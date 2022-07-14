import React, { Component } from 'react'
import { Planet } from './Planet';
import { Star } from './Star';

type StarSystemProps = {
    windowWidth: number,
    windowHeight: number,
    star: Star | undefined,
}

type StarSystemState = {
    windowWidth: number,
    windowHeight: number,
    star: Star | undefined,
}

export class StarSystem extends Component<StarSystemProps, StarSystemState> {

    /**
     *
     */
    constructor(props: StarSystemProps) {
        super(props);
        
        this.setState({
            windowWidth: 800,
            windowHeight: 600,
            star: undefined,
        })
    }

    render() {
        return (
        
            <>
                <svg width={this.props.windowWidth} height={this.props.windowHeight}>
                    <filter id="sofGlow" height="300%" width="300%" x="-75%" y="-75%">
                        <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken" />
                        <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />
                        <feFlood flood-color="	rgb(255,255,0)" result="glowColor" />
                        <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
                        <feMerge>
                            <feMergeNode in="softGlow_colored"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    <Star 
                    height={this.props.star?.props.height ?? 0}
                    width={this.props.star?.props.width ?? 0}
                    xPosition={this.props.star?.props.xPosition ?? 0}
                    yPosition={this.props.star?.props.yPosition ?? 0}
                    mass={this.props.star?.props.mass ?? 0}
                    radius={this.props.star?.props.radius ?? 0}
                    planets={[]}
                    ></Star>
                    <Planet 
                    height={this.props.star?.props.planets[0].props.height ?? 0}
                    width={this.props.star?.props.planets[0].props.width ?? 0}
                    xPosition={this.props.star?.props.planets[0].props.xPosition ?? 0}
                    yPosition={this.props.star?.props.planets[0].props.yPosition ?? 0}
                    mass={this.props.star?.props.planets[0].props.mass ?? 0}
                    radius={this.props.star?.props.planets[0].props.radius ?? 0}
                    ></Planet>
                    <defs>
                    </defs>
                </svg>
            </>

        )


    }



}