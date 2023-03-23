import React from 'react';
import PropTypes from 'prop-types';
import '../styles/EFTs.css';

const Loading = ({ body }) => (
  <ul className={`${body} loading`}>
    <li />
  </ul>
);

Loading.propTypes = {
  body: PropTypes.string.isRequired,
};

export default Loading;
