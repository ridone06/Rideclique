import {StyleSheet} from 'react-native';

const CircularStdBlack = 'CircularStd-Black';
const CircularStdBlackItalic = 'CircularStd-BlackItalic';
const CircularStdBold = 'CircularStd-Bold';
const CircularStdBoldItalic = 'CircularStd-BoldItalic';
const CircularStdBook = 'CircularStd-Book';
const CircularStdBookItalic = 'CircularStd-BookItalic';
const CircularStdMedium = 'CircularStd-Medium';
const CircularStdMediumItalic = 'CircularStd-MediumItalic';

export const textStyles = StyleSheet.create({
  title1: {
    fontSize: 32,
    fontWeight: '300',
    lineHeight: 34,
    letterSpacing: 0.364,
    // color: '#000',
    fontFamily: CircularStdBold
  },
  title2: {
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 28,
    letterSpacing: 0.352,
    fontFamily: CircularStdBold
  },
  title3: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.38,
    fontFamily: CircularStdBold
  },
  headline: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.408,
    color:'#FFF',
    fontFamily: CircularStdBold
  },
  body: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.408,
    fontFamily: CircularStdMedium,
    // color: '#FFF'
  },
  input: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.408,
    fontFamily: CircularStdBook,
    color: '#000'
  },
  callout: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: -0.32,
    fontFamily: CircularStdBook
  },
  subhead: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.24,
    fontFamily: CircularStdBook
  },
  footnote: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: -0.078,
    fontFamily: CircularStdBook
  },
  caption1: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    fontFamily: CircularStdBook,
  },
  caption2: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0.066,
    fontFamily: CircularStdBook
  },
});