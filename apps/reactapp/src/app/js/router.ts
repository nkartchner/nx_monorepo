import React from 'react';
import Home from '../components/home'

export class Route {
    constructor(path: string, name: string, component: React.ComponentClass | React.FunctionComponent) {
        this.path = path;
        this.name = name;
        this.component = component;
    }

    path: string
    name: string
    component: React.ComponentClass | React.FunctionComponent
}

export const routes: Route[] = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
]