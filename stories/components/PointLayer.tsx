import * as React from "react";
import * as dat from 'dat.gui';

export default class PointLayer extends React.Component {

    private gui: dat.GUI;

    componentWillUnmount() {
        if (this.gui) {
            this.gui.destroy();
        }
    }

    render() {
        // const gui = new dat.GUI();
        // this.gui = gui;
        return (
            <h1>hello</h1>
        );
    }
}
