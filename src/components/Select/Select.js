import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper value={value} onChange={onChange}>
      {children}
      <Icon id={"chevron-down"} size={12}></Icon>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.select`
  background-color: ${COLORS.transparentGray15};
  border: none;
  padding: 12px 16px;
  border-radius: 8px;

  color: ${COLORS.gray700};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::-ms-expand {
    display: none;
  }

  &:hover {
    color: ${COLORS.black};
  }
`

export default Select;
