import React from 'react';

const LeftAlignmentRender = ({ children }) => <span>{children} ⇠</span>

export default {
  title: 'Left alignment',
  name: 'leftAlignment',
  type: 'boolean',
  blockEditor: {
    icon: () => '⇠',
    render: LeftAlignmentRender
  }
}
