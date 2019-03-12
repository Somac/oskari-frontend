import React from 'react';
import PropTypes from 'prop-types';
import List from 'antd/lib/list';
import 'antd/lib/list/style/css';

export const ListComponent = ({header, footer, dataSource}) => {
    return (
        <List
            header={header}
            footer={footer}
            bordered
            dataSource={dataSource}
            renderItem={item => (<List.Item>{item}</List.Item>)}
        />
    );
};

ListComponent.propTypes = {
    header: PropTypes.string,
    footer: PropTypes.string,
    dataSource: PropTypes.array
};
