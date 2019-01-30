import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export class Chevron extends PureComponent {
    static propTypes = {
        color: PropTypes.string,
        rotate: PropTypes.number,
        size: PropTypes.number,
        style: PropTypes.shape({}),
        type: PropTypes.oneOf(['thin', 'thick']),
    };

    static defaultProps = {
        color: '#000',
        rotate: 0,
        size: 1,
        style: {},
        type: 'thin',
    };

    render() {
        const { color, rotate, size, style, type } = this.props;

        const chevronTriangle = {
            backgroundColor: 'transparent',
            borderWidth: 0,
            borderTopWidth: 1.33 * size,
            borderLeftWidth: 5 * size,
            borderColor: 'transparent',
            borderLeftColor: color,
        };

        if (type === 'thin') {
            return (
                <View
                    style={[
                        {
                            borderLeftWidth: 0,
                            borderLeftColor: 'transparent',
                            borderTopWidth: 1.5 * size,
                            borderTopColor: color,
                            borderRightWidth: 1.5 * size,
                            borderRightColor: color,
                            width: 7 * size,
                            height: 7 * size,
                            transform: [
                                { translateX: 1.5 * size },
                                { translateY: -2.4 * size },
                                { rotate: `${rotate + 135}deg` },
                            ],
                        },
                        style,
                    ]}
                />
            );
        }

        return (
            <View
                style={[
                    {
                        width: 10 * size,
                        height: 3.33 * size,
                        transform: [{ rotate: `${rotate}deg` }],
                    },
                    style,
                ]}
            >
                <View
                    style={{
                        width: 10 * size,
                        height: 3.33 * size,
                        backgroundColor: color,
                    }}
                />
                <View
                    style={[
                        chevronTriangle,
                        {
                            position: 'absolute',
                            top: -1.33 * size,
                            left: 0,
                        },
                    ]}
                />
                <View
                    style={[
                        chevronTriangle,
                        {
                            position: 'absolute',
                            top: -1.33 * size,
                            right: 0,
                            transform: [{ scaleX: -1 }],
                        },
                    ]}
                />
                <View
                    style={[
                        chevronTriangle,
                        {
                            position: 'absolute',
                            bottom: -1.33 * size,
                            left: 0,
                            transform: [{ scale: -1 }],
                        },
                    ]}
                />
                <View
                    style={[
                        chevronTriangle,
                        {
                            position: 'absolute',
                            bottom: -1.33 * size,
                            right: 0,
                            transform: [{ scaleY: -1 }],
                        },
                    ]}
                />
            </View>
        );
    }
}
