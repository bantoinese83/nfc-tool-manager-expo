import {View, Text, StyleSheet, FlatList, ListRenderItem} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BookMarked, Tag} from 'lucide-react-native';

interface FavoriteItem {
    id: string;
    name: string;
    type: string;
    content: string;
    notes: string;
}

const mockFavorites: FavoriteItem[] = [
    {
        id: '1',
        name: 'Office Door',
        type: 'MIFARE',
        content: 'Access Card',
        notes: 'Main entrance access card'
    },
    {
        id: '2',
        name: 'Business Card',
        type: 'NDEF',
        content: 'Contact Info',
        notes: 'Personal NFC business card'
    },
];

export default function FavoritesScreen() {
    const insets = useSafeAreaInsets();

    const renderItem: ListRenderItem<FavoriteItem> = ({item}) => (
        <View style={styles.favoriteItem}>
            <View style={styles.itemHeader}>
                <View style={styles.iconContainer}>
                    <Tag size={24} color="#007AFF"/>
                </View>
                <Text style={styles.itemName}>{item.name}</Text>
                <BookMarked size={20} color="#FFB800"/>
            </View>
            <View style={styles.itemContent}>
                <Text style={styles.itemType}>{item.type}</Text>
                <Text style={styles.itemData}>{item.content}</Text>
                <Text style={styles.notes}>{item.notes}</Text>
            </View>
        </View>
    );

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <View style={styles.header}>
                <Text style={styles.title}>Favorites</Text>
            </View>

            <FlatList
                data={mockFavorites}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
                ListEmptyComponent={
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyText}>No favorites yet</Text>
                        <Text style={styles.emptySubtext}>
                            Add frequently used tags to your favorites for quick access
                        </Text>
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
    favoriteItem: {
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
    itemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
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
    itemName: {
        flex: 1,
        fontSize: 17,
        fontWeight: '600',
        color: '#000000',
    },
    itemContent: {
        paddingLeft: 52,
    },
    itemType: {
        fontSize: 15,
        color: '#3C3C43',
        marginBottom: 4,
    },
    itemData: {
        fontSize: 15,
        color: '#3C3C43',
        marginBottom: 4,
    },
    notes: {
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
        fontWeight: '600',
        color: '#8E8E93',
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 14,
        color: '#8E8E93',
        textAlign: 'center',
    },
});