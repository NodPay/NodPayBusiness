import {style} from 'd3';
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

//where local file imported
import {Button} from '../../components/';
import {dimens, fonts, color} from '../../utils';

const screenHeight = Dimensions.get('window').height;
/**
 * component to render a walktrough
 * @param  {any} items
 * @param  {any} setItems
 * @param  {number} width
 * @param  {number} height
 * @param  {string} placement
 * @param  {number} indexActive
 * @param  {string} arrowStyle
 * @param  {any} children
 * @param  {func} onFinish
 */
const WalktroughTooltip = ({
  items,
  setItems,
  width,
  height,
  placement,
  indexActive,
  arrowStyle,
  children,
  onFinish,
}) => {
  const onBack = () => {
    const newData = items.map((row, currentIndex) => {
      if (currentIndex === indexActive - 1) {
        return {
          ...row,
          isActive: true,
        };
      }

      return {
        ...row,
        isActive: false,
      };
    });

    setItems(newData);
  };
  const onClose = () => {
    const newData = items.map((row, currentIndex) => {
      if (currentIndex === indexActive + 1) {
        return {
          ...row,
          isActive: true,
        };
      }

      return {
        ...row,
        isActive: false,
      };
    });

    setItems(newData);
    if (indexActive >= items.length - 1) {
      onFinish();
    }
  };
  const onDone = () => {
    const newData = items.map((row, currentIndex) => {
      return {
        ...row,
        isActive: false,
      };
    });

    setItems(newData);
    onFinish();
  };

  return (
    <Tooltip
      isVisible={indexActive < 0 ? false : items[indexActive].isActive}
      tooltipStyle={
        placement === 'top'
          ? {top: screenHeight - (Platform.OS === 'android' ? 300 : 320)}
          : {}
      }
      contentStyle={{width, height, backgroundColor: 'white'}}
      arrowStyle={arrowStyle}
      arrowSize={{height: dimens.default_14, width: dimens.default}}
      content={
        <>
          {indexActive >= 0 && (
            <View style={{padding: dimens.small}}>
              <Text style={styles.content}>{items[indexActive].content}</Text>
              <View
                style={[
                  styles.btnContainer,
                  {
                    paddingHorizontal:
                      indexActive > 0 ? dimens.default : dimens.large,
                  },
                ]}>
                {indexActive > 0 && indexActive < items.length - 1 && (
                  <Button
                    title="Back"
                    btnStyle={{
                      backgroundColor: 'white',
                      borderColor: color.btn_white,
                      borderWidth: 1,
                      height: dimens.large_40,
                      marginRight: dimens.small,
                      flex: 1,
                    }}
                    titleStyle={{fontFamily: fonts.sofia_bold}}
                    onPress={onBack}
                  />
                )}
                {indexActive < items.length - 1 ? (
                  <Button
                    title="Next"
                    btnStyle={{
                      backgroundColor: color.btn_black,
                      borderColor: color.btn_white,
                      borderWidth: 1,
                      height: dimens.large_40,
                      flex: 1,
                    }}
                    titleStyle={{fontFamily: fonts.sofia_bold, color: 'white'}}
                    onPress={onClose}
                  />
                ) : (
                  <Button
                    title="Done"
                    btnStyle={{
                      backgroundColor: color.btn_black,
                      borderColor: color.btn_white,
                      borderWidth: 1,
                      height: dimens.large_40,
                      flex: 1,
                    }}
                    titleStyle={{fontFamily: fonts.sofia_bold, color: 'white'}}
                    onPress={onDone}
                  />
                )}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingBottom: dimens.small,
                }}>
                {items.map((item, index) => (
                  <View
                    key={index}
                    style={[
                      item.isActive
                        ? {backgroundColor: color.btn_black}
                        : {backgroundColor: color.bg_grey},
                      styles.stepDot,
                    ]}
                  />
                ))}
              </View>
            </View>
          )}
        </>
      }
      placement={placement}
      onClose={onClose}>
      {children}
    </Tooltip>
  );
};

const styles = StyleSheet.create({
  content: {
    fontFamily: fonts.sofia_medium,
    fontSize: dimens.default_16,
    lineHeight: dimens.medium,
    color: color.btn_black,
    textAlign: 'center',
  },
  stepDot: {
    width: dimens.small,
    height: dimens.small,
    borderRadius: 50,
    marginHorizontal: dimens.supersmall,
  },
  btnContainer: {
    paddingTop: dimens.default_22,
    paddingBottom: dimens.default,
    flexDirection: 'row',
  },
});

export default WalktroughTooltip;
