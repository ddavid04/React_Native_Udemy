import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalVis, setModalVis] = useState(false);
  const [goals, setGoals] = useState([])

  function startAddingGoalHandler() {
    setModalVis(!modalVis)
  }

  function addGoalHandler(goal) {
    setGoals((prev) => [...prev, { text: goal, key: Math.random().toString() },])
  }

  function deleteGoalHandler(tmp) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.text !== tmp);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add new Goal' onPress={startAddingGoalHandler} />
      {goals.length === 0 && <Text>No goals</Text>}
      <GoalInput onAddGoal={addGoalHandler} visible={modalVis} onCloseModal={startAddingGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={itemData => {
          return (
            <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} />
          )
        }}
        // keyExtractor={(item, index) => {
        //   return item.id
        // }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    alignItems: 'center'
  },
  goalsContainer: {
    flex: 3,
  },
});
