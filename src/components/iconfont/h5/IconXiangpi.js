/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconXiangpi = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M971.204502 304.803815c36.643107 38.04143 36.643107 98.246864 0 136.288294L570.936368 841.360243 250.476037 519.673149 649.517408 120.631779c37.164834-37.634859 97.800341-38.015579 135.43755-0.850744 0.286715 0.282015 0.56873 0.566379 0.850744 0.850744l185.3988 184.172036z"
        fill={getIconColor(color, 0, '#00ACEA')}
      />
      <path
        d="M570.936368 841.360243l-93.313957 93.313958v2.455877h-203.819059l-151.021211-153.477088c-37.634859-37.164834-38.015579-97.802691-0.850744-135.4352 0.282015-0.286715 0.566379-0.56873 0.850744-0.850744l127.693896-127.693897 320.460331 320.460331v1.226763z"
        fill={getIconColor(color, 1, '#00EFD1')}
      />
      <path
        d="M1024 372.33458a126.460082 126.460082 0 0 0-35.606703-84.719559l-185.401151-185.401151c-47.324413-46.652278-123.34147-46.652278-170.665883 0L105.593346 630.175901c-46.440767 44.642924-47.900193 118.483767-3.254919 164.926885 0.667435 0.693286 1.34427 1.379522 2.028155 2.058707l112.95863 110.502752H24.556428C10.993872 907.661895 0 918.658117 0 932.218323c0 13.562556 10.993872 24.556428 24.556428 24.556428h701.083792c13.562556 0 24.556428-10.993872 24.556428-24.556428s-10.993872-24.556428-24.556428-24.556428h-191.53967l454.292747-451.836869a117.856285 117.856285 0 0 0 35.606703-83.490446zM286.082741 907.661895L139.970936 762.779203c-27.463529-26.225015-28.467032-69.749281-2.242017-97.21281 0.728538-0.76379 1.475877-1.511129 2.242017-2.242016l110.502751-109.275988L536.556428 837.677602l-71.213407 69.986643h-179.26028zM952.786593 423.903314L570.936368 805.75354l-286.082741-286.080391L666.706203 137.820574c26.852498-27.801947 71.157004-28.572787 98.95895-1.72029 0.58283 0.564029 1.15861 1.137459 1.72029 1.72029l185.40115 184.172036a78.57634 78.57634 0 0 1 22.100551 50.33962 73.657534 73.657534 0 0 1-22.100551 51.571084z"
        fill={getIconColor(color, 2, '#083863')}
      />
    </svg>
  );
};

IconXiangpi.defaultProps = {
  size: 18,
};

export default IconXiangpi;