import { v4 } from 'uuid';

const fakeDatabase = {
  todos: [{
    id: v4(),
    text: 'hey',
    completed: false
  }, {
    id: v4(),
    text: 'ho',
    completed: false
  }, {
    id: v4(),
    text: 'set this up!',
    completed: true
  }]
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getTodos = (filter) => {
  return delay(2000).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed);
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  })
}

//just using this to show how to create promise based middleware...
export const getUserName = () => {
  return delay(2000).then(() => {
    return 'Steve';
  })
}