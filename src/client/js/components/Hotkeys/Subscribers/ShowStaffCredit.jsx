import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import StaffCredit from '../../StaffCredit/StaffCredit';

const ShowStaffCredit = (props) => {

  return <StaffCredit onClose={() => props.onDeleteRender(this)} />;

};

ShowStaffCredit.propTypes = {
  onDeleteRender: PropTypes.func.isRequired,
};

ShowStaffCredit.getHotkeyStrokes = () => {
  return [['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']];
};

export default ShowStaffCredit;
