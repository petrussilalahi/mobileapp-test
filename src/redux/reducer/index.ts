import {ADD_COMMAND, TOGGLE_SHOW_MORE} from '../types';

const initialState = {
  todos: [
    {
      id: 1,
      name: 'Usup Suparma1',
      date: 'Mar 27, 2023',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
      image: 'https://picsum.photos/200',
      comments: [
        {
          id: 1,
          name: 'Usup Suparma',
          comment: 'lorem ipsum dolor sit amet',
        },
        {
          id: 2,
          name: 'Usup Suparma',
          comment: 'lorem ipsum dolor sit amet',
        },
      ] as any[],
      comment: 0,
      downvote: 0,
      upvote: 0,
      showMore: true,
    },
    {
      id: 2,
      name: 'Usup Suparma2',
      date: 'Mar 27, 2023',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
      image: 'https://picsum.photos/200',
      comments: [
        {
          id: 1,
          name: 'Usup Suparma',
          comment: 'lorem ipsum dolor sit amet',
        },
        {
          id: 2,
          name: 'Usup Suparma',
          comment: 'lorem ipsum dolor sit amet',
        },
      ] as any[],
      comment: 0,
      downvote: 0,
      upvote: 0,
      showMore: true,
    },
    {
      id: 3,
      name: 'Usup Suparma3',
      date: 'Mar 27, 2023',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
      image: 'https://picsum.photos/200',
      comments: [
        {
          id: 1,
          name: 'Usup Suparma',
          comment: 'lorem ipsum dolor sit amet',
        },
        {
          id: 2,
          name: 'Usup Suparma',
          comment: 'lorem ipsum dolor sit amet',
        },
      ] as any[],
      comment: 0,
      downvote: 0,
      upvote: 0,
      showMore: true,
    },
  ] as any[],
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_COMMAND:
      return {
        todos: [
          ...state.todos.filter((item: any) => item.id !== action.data.id),
          action.data,
        ],
      };
    case TOGGLE_SHOW_MORE:
      const {id} = action.data;
      const updatedTodos = state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            showMore: !todo.showMore,
          };
        }
        return todo;
      });

      return {
        ...state,
        todos: updatedTodos,
      };
    case 'ADD_COMMENT':
      const {id: idComment} = action.data;
      const updatedTodosComment = state.todos.map(todo => {
        if (todo.id === idComment) {
          return {
            ...todo,
            comments: [
              ...todo.comments,
              {
                id: todo.comments.length + 1,
                name: 'Usup Suparma Comment',
                comment: action.data.comment,
              },
            ],
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodosComment,
      };
    case 'UPVOTE':
      const {id: idUpvote} = action.data;
      const updatedTodosUpvote = state.todos.map(todo => {
        if (todo.id === idUpvote) {
          return {
            ...todo,
            upvote: todo.upvote + 1,
          };
        }
        return todo;
      });

      return {
        ...state,
        todos: updatedTodosUpvote,
      };
    case 'DOWNVOTE':
      const {id: idDownvote} = action.data;
      const updatedTodosDownvote = state.todos.map(todo => {
        if (todo.id === idDownvote) {
          return {
            ...todo,
            downvote: todo.downvote + 1,
          };
        }
        return todo;
      });

      return {
        ...state,
        todos: updatedTodosDownvote,
      };
    default:
      return state;
  }
};

export default todoReducer;
