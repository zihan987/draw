/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconBaocun = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M903.639237 957.078845 120.49584 957.078845c-14.145162 0-25.611308-11.466146-25.611308-25.611308L94.884532 759.907183c0-14.145162 11.467169-25.611308 25.611308-25.611308s25.611308 11.466146 25.611308 25.611308l0 145.949047 731.919758 0L878.026906 759.907183c0-14.145162 11.466146-25.611308 25.611308-25.611308s25.611308 11.466146 25.611308 25.611308L929.249521 931.467537C929.250544 945.612699 917.784398 957.078845 903.639237 957.078845z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M513.32467 785.51849c-6.417153 0-12.83226-2.397606-17.795295-7.191796L270.735609 561.15349c-10.172687-9.827833-10.45205-26.041096-0.624217-36.214806 9.828856-10.17371 26.043143-10.451026 36.21583-0.624217L513.32467 724.295104 720.322118 524.314467c10.171664-9.827833 26.38595-9.54847 36.214806 0.624217 9.827833 10.172687 9.54847 26.386974-0.623193 36.214806L531.118941 778.326695C526.15693 783.120884 519.7408 785.51849 513.32467 785.51849z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M513.32467 785.51849c-14.145162 0-25.611308-11.466146-25.611308-25.611308L487.713362 92.356454c0-14.145162 11.466146-25.611308 25.611308-25.611308s25.611308 11.467169 25.611308 25.611308l0 667.550729C538.935977 774.052345 527.469831 785.51849 513.32467 785.51849z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </svg>
  );
};

IconBaocun.defaultProps = {
  size: 18,
};

export default IconBaocun;