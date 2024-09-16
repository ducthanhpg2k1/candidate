import React from 'react';

import classNames from 'classnames';

interface TextProps {
  children: React.ReactNode;
  type?:
    | 'font-14-400'
    | 'font-15-600'
    | 'font-14-600'
    | 'font-18-700'
    | 'font-17-600'
    | 'font-16-700'
    | 'font-14-700'
    | 'font-12-400'
    | 'font-13-400'
    | 'font-20-700'
    | 'font-15-700'
    | 'font-15-400'
    | 'font-12-600'
    | undefined;
  color?: 'text-black' | 'text-primary' | undefined;
  fontFamily?: 'font-lato' | 'font-montserrat' | undefined;
  disabled?: boolean;
  state?: null | 'disable';
  className?: string;
  onClick?: () => void;
  element?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

const Text: React.FC<TextProps> = ({
  type,
  color,
  fontFamily,
  disabled = false,
  className = '',
  onClick = () => {},
  children,
  element = 'p',
}) => {
  const classes = classNames(type, color, fontFamily, { 'text-disable': disabled }, className);

  return React.createElement(
    element,
    {
      className: classes,
      onClick,
    },
    React.createElement(React.Fragment, undefined, children),
  );
};

export default Text;
