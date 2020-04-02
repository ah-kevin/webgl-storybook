import * as React from 'react';
// @ts-ignore
import notes from './Point.md';
import { storiesOf } from "@storybook/react";
import PointLayer from "./components/PointLayer";

storiesOf('PointLayer', module).add('偏移坐标系', () => <PointLayer/>,
    {
        notes: {markdown: notes}
    }
);
