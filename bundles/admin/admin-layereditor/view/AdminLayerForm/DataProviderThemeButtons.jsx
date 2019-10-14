import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'oskari-ui';
import styled from 'styled-components';

const PaddedButton = styled(Button)`
    margin-right: 5px;
`;

export const DataProviderThemeButtons = ({ getMessage }) => {
    return (
        <>
            <PaddedButton onClick={() => console.log('Click dataProvider')}>{getMessage('addDataProvider')}</PaddedButton>
            <PaddedButton>{getMessage('addTheme')}</PaddedButton>
        </>
    );
};

DataProviderThemeButtons.propTypes = {
    getMessage: PropTypes.func.isRequired
};
