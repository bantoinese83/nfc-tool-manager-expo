import {View, Text, StyleSheet, Switch, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Moon, Vibrate, Lock, Database, Globe} from 'lucide-react-native';

export default function SettingsScreen() {
    const insets = useSafeAreaInsets();

    const renderSettingItem = (
        icon: JSX.Element,
        title: string,
        value: boolean | string = '',
        type: 'switch' | 'value' = 'switch'
    ) => (
        <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
                <View style={styles.iconContainer}>
                    {icon}
                </View>
                <Text style={styles.settingText}>{title}</Text>
            </View>
            {type === 'switch' && (
                <Switch
                    value={typeof value === 'boolean' ? value : false}
                    onValueChange={() => {
                    }}
                    trackColor={{false: '#D1D1D6', true: '#34C759'}}
                    thumbColor={Platform.OS === 'ios' ? '#FFFFFF' : value ? '#FFFFFF' : '#F4F3F4'}
                />
            )}
            {type === 'value' && (
                <Text style={styles.settingValue}>{value}</Text>
            )}
        </View>
    );

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <View style={styles.header}>
                <Text style={styles.title}>Settings</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Appearance</Text>
                {renderSettingItem(<Moon size={24} color="#007AFF"/>, 'Dark Mode', false)}
                {renderSettingItem(<Vibrate size={24} color="#007AFF"/>, 'Haptic Feedback', true)}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Security</Text>
                {renderSettingItem(<Lock size={24} color="#007AFF"/>, 'Encryption', true)}
                {renderSettingItem(
                    <Database size={24} color="#007AFF"/>,
                    'Data Backup',
                    'Last: Never',
                    'value'
                )}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Language</Text>
                {renderSettingItem(
                    <Globe size={24} color="#007AFF"/>,
                    'App Language',
                    'English',
                    'value'
                )}
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.version}>Version 1.0.0</Text>
                {Platform.OS === 'web' && (
                    <Text style={styles.webNotice}>
                        Note: Some features are limited in the web version
                    </Text>
                )}
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
    section: {
        marginTop: 20,
        backgroundColor: '#ffffff',
        paddingVertical: 8,
    },
    sectionHeader: {
        fontSize: 13,
        color: '#8E8E93',
        marginBottom: 8,
        marginLeft: 16,
        textTransform: 'uppercase',
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: '#F2F2F7',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    settingText: {
        fontSize: 17,
        color: '#000000',
    },
    settingValue: {
        fontSize: 17,
        color: '#8E8E93',
    },
    infoContainer: {
        padding: 16,
        alignItems: 'center',
    },
    version: {
        fontSize: 15,
        color: '#8E8E93',
        marginBottom: 8,
    },
    webNotice: {
        fontSize: 13,
        color: '#FF3B30',
        textAlign: 'center',
    },
});