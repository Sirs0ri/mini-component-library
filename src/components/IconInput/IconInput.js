import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 14,
    lineWidth: 1,
    iconSize: 16,
    fontPadding: 8,
    height: 24
  },
  large: {
    fontSize: 18,
    lineWidth: 2,
    iconSize: 24,
    fontPadding: 12,
    height: 36
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const styles = SIZES[size]
  if (!styles) {
    throw new Error(`Unknown IconInput size: ${size}`)
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{"--size": styles.iconSize + "px"}}>
        <Icon id={icon} size={styles.iconSize}/>
      </IconWrapper>
      <TextInput placeholder={placeholder} style={{
        "--height": styles.height + "px",
        "--width": (width / 16) + "rem",
        "--font-size": (styles.fontSize / 16) + "rem",
        "--border-thickness": styles.lineWidth + "px",
        }}/>
    </Wrapper>);
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover{
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
`

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};

  /* Reuse height for padding-left because it's the same value! */
  padding-left: var(--height);
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  outline-offset: 2px;

  &::placeholder{
    color: ${COLORS.gray500};
    font-weight: initial;
  }
`

export default IconInput;
