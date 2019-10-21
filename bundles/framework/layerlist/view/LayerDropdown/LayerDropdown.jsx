import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown, Menu } from 'oskari-ui';
import styled from 'styled-components';

const StyledButton = styled(Button)`
border: 1px solid #a4a4a4;
height: 52px;
`;

const OpenButton = ({ title }) => (
    <StyledButton
        size="large"
        icon="plus"
        title={title} />
);

OpenButton.propTypes = {
    title: PropTypes.string
};

export const LayerDropdown = ({ items, title }) => {
    const menu = <Menu items={items} />;
    return (
        <Dropdown menu={menu}>
            <OpenButton title={title} />
        </Dropdown>
    );
};

LayerDropdown.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string
};
