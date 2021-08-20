import React from 'react';

import { PlotImg } from './Plot.styles';

const Plot = ({img_src}) => (
    <div>
        <PlotImg src={img_src} alt="plot" />
    </div>
);

export default Plot;