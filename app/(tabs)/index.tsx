import { View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: 'white' }}>
          <Link href='/register'>Register</Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}
