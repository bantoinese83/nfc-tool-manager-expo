import {View, Text, StyleSheet, FlatList, ListRenderItem} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Tag} from 'lucide-react-native';

interface HistoryItem {
    id: string;
    type: string;
    content: string;
    timestamp: string;
}

const mockHistory: HistoryItem[] = [
    {id: '1', type: 'NDEF', content: 'URL: https://example.com', timestamp: '2024-02-10 14:30'},
    {id: '2', type: 'MIFARE', content: 'Serial: A1B2C3D4', timestamp: '2024-02-10 13:15'},
    {id: '3', type: 'ISO 14443', content: 'ID: 123456789', timestamp: '2024-02-10 12:00'},
];

export default function HistoryScreen() {
    const insets = useSafeAreaInsets();

    const renderItem: ListRenderItem<HistoryItem> = ({item}) => (
        <View style={styles.historyItem}>
            <View style={styles.iconContainer}>
                <Tag size={24} color="#007AFF"/>
            </View>
            <View style={styles.itemContent}>
                <Text style={styles.itemType}>{item.type}</Text>
                <Text style={styles.itemData}>{item.content}</Text>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
        </View>
    );

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <View style={styles.header}>
                <Text style={styles.title}>Scan History</Text>
            </View>

            <FlatList
                data={mockHistory}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
                ListEmptyComponent={
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyText}>No scan history yet</Text>
                    </View>
                }
            />
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
    listContainer: {
        padding: 16,
    },
    historyItem: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F2F2F7',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    itemContent: {
        flex: 1,
    },
    itemType: {
        fontSize: 17,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 4,
    },
    itemData: {
        fontSize: 15,
        color: '#3C3C43',
        marginBottom: 4,
    },
    timestamp: {
        fontSize: 13,
        color: '#8E8E93',
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyText: {
        fontSize: 16,
        color: '#8E8E93',
    },
});