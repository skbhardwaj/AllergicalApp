//Import React and Hooks we needed
import React from 'react';

//Import all required component
import { ActivityIndicator, StyleSheet } from 'react-native';

const ActivityIndicatorLoader = (props) => {
  const { animating, size, color, style } = props;

  return (
    <>
      <ActivityIndicator
        animating={animating}
        color={color || '#FFFFFF'}
        size={size || 'large'}
        style={[styles.activityIndicator, style]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});

export default ActivityIndicatorLoader;
