export const TodoState = {
    todo: {
        id: '',
        isDone: false,
        content: '',
        category: '',
        date: null
    },
    todos: [],
    category_list: ['normal', 'work', 'family'],
    category_color: {
        normal: {
            id: 'normal',
            color: 'default'
        },
        work: {
            id: 'work',
            color: 'red'
        },
        family: {
            id: 'family',
            color: 'green'
        }
    }
}