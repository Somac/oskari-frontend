import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as AntDropdown } from 'antd';

export const Dropdown = ({ children, menu, click = true }) => (
    <AntDropdown overlay={menu} trigger={click ? ['click'] : ['hover']}>
        {children}
    </AntDropdown>
);

Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
    menu: PropTypes.any.isRequired,
    click: PropTypes.bool
};
