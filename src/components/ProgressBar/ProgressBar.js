/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    padding: "0",
    borderRadius: 4,
  },
  medium: {
    height: 12,
    padding: "0",
    borderRadius: 4,
  },
  large: {
    height: 16,
    padding: "4px 4px",
    borderRadius: 8,
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]
  if (!styles) {
    throw new Error(`Unknown Progressbar size: ${size}`)
  }

  const transformValue = Math.min(0, -100+value)
  return <Wrapper
    role='progressbar'
    aria-valuenow={value}
    aria-valuemin="0"
    aria-valuemax="100"
    style={{
      "--padding": styles.padding,
      "--borderRadius": styles.borderRadius + "px"
    }}
  >
    <VisuallyHidden>{value} %</VisuallyHidden>
    <BarWrapper>
      <Bar style={{
          "--width": transformValue + "%",
          "--height": styles.height + "px"
        }}
      />
    </BarWrapper>
  </Wrapper>;
};



const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding)
`

const BarWrapper = styled.div`
  border-radius: 4px;
  /* trim progressbar corners */
  overflow: hidden;
`

const Bar = styled.div`
  height: var(--height);
  transform: translateX(var(--width));
  background-color: ${COLORS.primary};
  transition: transform 150ms;
`

export default ProgressBar;
