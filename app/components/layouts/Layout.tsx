import { View, ScrollView } from 'react-native';
import React, { FC } from 'react';
import tw from 'tailwind-rn';

interface ILayout {
  isScrollView?: boolean;
  children: JSX.Element;
}

export const styleCenter = tw('h-full w-full bg-white pt-16');

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
  return (
    <View style={styleCenter}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  );
};

export default Layout;
