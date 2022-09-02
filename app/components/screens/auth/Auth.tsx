import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { styleCenter } from '../../layouts/Layout';
import tw from 'tailwind-rn';

const Auth: FC = () => {
  return (
    <View style={styleCenter}>
      <View style={tw('mx-5 justify-center items-center h-full')}>
        <Text>Auth</Text>
      </View>
    </View>
  );
};

export default Auth;
