import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      {displayedValue}
      <IconWrapper style={{"--size": 24 + "px"}}>
        <Icon id={"chevron-down"} size={24} />
      </IconWrapper>
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  /* This is the component that's actually visible to the user.
   * It contains the selected option and a "chevron-down" icon.
   */
  background-color: ${COLORS.transparentGray15};
  border: none;
  /* Make some space on the right for an icon! */
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  width: max-content;

  position: relative;

  color: ${COLORS.gray700};
  size: ${16 / 16}rem;

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  /* The icon is inside a div that wants to grow. 
   * This limits it to a set size and centers it.
   */
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
`

const HiddenSelect = styled.select`
  /* Make this select as big as the whole rest of the component, overlapping it.
   * This way, it's still clickable, and has the original behavior when focused.
   *
   * The actual content (ie selected option & icon) is shown via the rest of this component!
   */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 8px;

  /* Hide font, background & border to hide the select without using "opacity: 0".
   * Note: "color: transparent" also makes the caret transparent.
   */
  color: transparent;
  background: transparent;
  border: none;

  /* Restore original color for the options inside it */
  option {
    color: initial;
  }
`

export default Select;
