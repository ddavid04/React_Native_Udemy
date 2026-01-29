import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import { useState } from 'react';


export default function GoalInput(props) {
    const [goal, setGoal] = useState('')

    function goalInputHandler(entereedText) {

        setGoal(entereedText)
    }

    function addGoalHandler() {
        if (goal != '') {
            props.onAddGoal(goal)
            setGoal('')
        }
    }


    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Your course goal' style={styles.textInput} onChangeText={goalInputHandler} value={goal} />
                <View style={styles.buttonContainer}>
                    <Button title='Add goal' onPress={addGoalHandler} color={'green'}/>
                    <Button title='Close' color={'red'} onPress={props.onCloseModal}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        padding: 8,
        borderRadius: 5,
        marginRight: 8
    },
    buttonContainer: {
        flexDirection: 'row'
    }
})