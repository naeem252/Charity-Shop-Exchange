import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import '@vaadin/vaadin-checkbox';

export default function CheckboxField(props) {
  const { onChange, keyToUpdate, label } = props;

  const checkBoxRef = useRef(null);

  useEffect(() => {
    function handleChange(e) {
      onChange({ keyToUpdate, value: e.target.checked }, e);
    }

    checkBoxRef.current.addEventListener('change', handleChange);
  }, []);

  return (
    <vaadin-checkbox
      theme="custom"
      ref={checkBoxRef}
      checked
      // value={value}
      class="checkbox-font">
      {label}
    </vaadin-checkbox>
  );
}

CheckboxField.propTypes = {
  keyToUpdate: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
