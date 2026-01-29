import { StyleSheet, View, Text, Pressable } from "react-native";
export default function GoalItem(props) {

    function deleteItem() {
        props.onDeleteItem(props.text)
    }

    return (

        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#210644' }}
                style={({ pressed }) => [
                    { opacity: pressed ? 0.5 : 1 }
                ]}
                onPress={deleteItem}
            >

                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        padding: 8,
        color: 'white',
    }
})