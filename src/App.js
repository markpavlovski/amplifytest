import React, { useEffect, useReducer } from 'react';

import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';

import { createHaiku } from './graphql/mutations';
import { listHaikus } from './graphql/queries';
import { onCreateHaiku } from './graphql/subscriptions';

import awsconfig from './aws-exports';
import './App.css';

API.configure(awsconfig);
PubSub.configure(awsconfig);

// Action Types
const QUERY = 'QUERY';
const SUBSCRIPTION = 'SUBSCRIPTION';

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case QUERY:
      return {...state, todos: action.todos};
    case SUBSCRIPTION:
      return {...state, todos:[...state.todos, action.todo]}
    default:
      return state;
  }
};

async function createNewTodo() {
  const todo = {content: "RealTime and Offline" };
  await API.graphql(graphqlOperation(createHaiku, { input: todo }));
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getData() {
      const todoData = await API.graphql(graphqlOperation(listHaikus));
      dispatch({ type: QUERY, todos: todoData.data.listHaikus.items });
    }
    getData();

    const subscription = API.graphql(graphqlOperation(onCreateHaiku)).subscribe({
      next: (eventData) => {
        const todo = eventData.value.data.onCreateHaiku;
        dispatch({ type: SUBSCRIPTION, todo });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
      <div className="App">
        <button onClick={createNewTodo}>Add Todo</button>
        <div>
          {state.todos.length > 0 ?
              state.todos.map((todo) => <p key={todo.id}>{todo.content}</p>) :
              <p>Add some todos!</p>
          }
        </div>
      </div>
  );
}

export default App;