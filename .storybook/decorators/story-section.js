/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const sectionStyles = css`
  font-family: sans-serif;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding: 0 50px 20px;
  color: #666;
  font-size: 14px;
`;

const titleStyles = css`
  font-size: 18px;
  font-weight: normal;
  color: #666;
`;

export const StorySection = ({ title, children }) => (
  <div css={sectionStyles}>
    {title && <h2 css={titleStyles}>{title}</h2>}
    {children}
  </div>
);

StorySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
