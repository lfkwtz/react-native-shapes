import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export class Chevron extends PureComponent {
    static propTypes = {
        color: PropTypes.string,
        rotate: PropTypes.number,
        size: PropTypes.number,
        style: PropTypes.shape({}),
    };

    static defaultProps = {
        color: '#000',
        rotate: 0,
        size: 1,
        style: {},
    };

    render() {
        const { color, rotate, size, style } = this.props;

        const chevronTriangle = {
            backgroundColor: 'transparent',
            borderWidth: 0,
            borderTopWidth: 1.33 * size,
            borderLeftWidth: 5 * size,
            borderColor: 'transparent',
            borderLeftColor: color,
        };

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
