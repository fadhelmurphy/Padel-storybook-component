import React from 'react';
import PropTypes from 'prop-types';
import BsBanner from '@fdn/bs_banner'

/**
 * Primary UI component for user interaction
 */
export const FDSBanner = ({ ...props }) => <BsBanner {...props} />;

FDSBanner.propTypes = {
/**
 * Text with string value
 */
    title: PropTypes.string,
  /**
   * Text with string value
   */
  description: PropTypes.string,
  /**
   * Text with option string value
   */
  type: PropTypes.oneOf(["default", "info", "warning", "error"]),
  /**
   * Closable Boolean value
   */
  closable: PropTypes.bool,
};

FDSBanner.defaultProps = {
	type: "default",
	title: "Title Banner",
	description: "Description Banner",
	closable: false,
};
