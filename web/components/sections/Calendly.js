import React from 'react';
import PropTypes from 'prop-types';
import { InlineWidget, PopupText, openPopupWidget } from 'react-calendly';
import CalendarIcon from '../icons/Calendar';

import styles from './Calendly.module.css';

const Calendly = (props) => {
  const { url, calendlyPresentation, popupText, className } = props;

  const renderCalendly = () => {
    switch (calendlyPresentation) {
      case 'CustomButton':
        return <CustomButton />;
      case 'PopupText':
        return <PopupText url={url} text={popupText} />;
      default:
        return <InlineWidget url={url} />;
    }
  };

  const CustomButton = () => (
    <div className={className}>
      <button className={styles.iconButton} onClick={() => openPopupWidget({ url })}>
        <CalendarIcon className={styles.icon} />
      </button>
      <button className={`btn ${styles.customButton}`} onClick={() => openPopupWidget({ url })}>
        <span className={styles.customButtonText}>{popupText}</span>
      </button>
    </div>
  );

  return renderCalendly();
};

Calendly.propTypes = {
  url: PropTypes.string,
  calendlyPresentation: PropTypes.string,
  popupText: PropTypes.string,
  className: PropTypes.string
};

export default Calendly;
