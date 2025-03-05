import { useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { 
  useAnimatedStyle, 
  withRepeat, 
  withTiming,
  useSharedValue
} from 'react-native-reanimated';
import { Scan } from 'lucide-react-native';

export default function ScanScreen() {
  const insets = useSafeAreaInsets();
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.2, { duration: 1000 }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>NFC Scanner</Text>
      </View>

      <View style={styles.scanArea}>
        <Animated.View style={[styles.scanCircle, animatedStyle]}>
          <Scan size={48} color="#007AFF" />
        </Animated.View>
        <Text style={styles.scanText}>
          {Platform.OS === 'web' 
            ? 'NFC scanning is not available on web browsers'
            : 'Hold your device near an NFC tag'}
        </Text>
      </View>

      <View style={styles.infoArea}>
        <Text style={styles.infoText}>
          Supported tag types:
        </Text>
        <Text style={styles.tagTypes}>
          • NDEF{'\n'}
          • MIFARE Classic{'\n'}
          • ISO 14443-4{'\n'}
          • ISO/IEC 15693
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000000',
  },
  scanArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scanCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scanText: {
    marginTop: 24,
    fontSize: 16,
    color: '#8E8E93',
    textAlign: 'center',
  },
  infoArea: {
    padding: 16,
    backgroundColor: '#ffffff',
    margin: 16,
    borderRadius: 10,
  },
  infoText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  tagTypes: {
    fontSize: 15,
    color: '#3C3C43',
    lineHeight: 24,
  },
});