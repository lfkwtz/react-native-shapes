import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export class Triangle extends PureComponent {
    static propTypes = {
        color: PropTypes.string,
        rotate: PropTypes.number,
        size: PropTypes.number,
        style: PropTypes.shape({}),
        type: PropTypes.oneOf(['equilateral', 'isosceles']),
    };

    static defaultProps = {
        color: '#000',
        rotate: 0,
        size: 1,
        style: {},
        type: 'equilateral',
    };

    render() {
        const { color, rotate, size, style, type } = this.props;

        return (
            <View
                style={[
                    {
                        width: 0,
                        height: 0,
                        borderLeftWidth: (size / 2) * 10,
                        borderRightWidth: (size / 2) * 10,
                        borderBottomWidth: (type === 'isosceles' ? size / 2 : size) * 10,
                        borderColor: 'transparent',
                        borderBottomColor: color,
                        transform: [{ rotate: `${rotate}deg` }],
                    },
                    style,
                ]}
            />
        );
    }
}
