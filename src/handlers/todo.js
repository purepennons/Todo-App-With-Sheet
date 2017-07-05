import co from 'co'
import R from 'ramda'

export const moveTodoHandler = ({startAt, endAt, enterMouseCoor, endMouseCoor, lastEvent}, todos) => {
    // calculate the new todos
    if (startAt === endAt) return todos

    const findTodoIndex = id => (todo, idx, arr) => (todo.id === id)

    const src_item_idx = todos.findIndex(findTodoIndex(startAt))
    let dst_item_idx = todos.findIndex(findTodoIndex(endAt))

    const isDstItemIdxChangedAfterRemoved = dst_item_idx > src_item_idx
    
    // if insertPosition is negative, it means that the srouce will be insert to the top of destination.
    // Otherwise, it will be insert to the bottom of destination.
    const insertPosition = endMouseCoor[1] - enterMouseCoor[1]

    let updated_todos = R.clone(todos)

    // remove original item
    const src_item = updated_todos.splice(src_item_idx, 1)[0]
    if (isDstItemIdxChangedAfterRemoved) dst_item_idx = dst_item_idx - 1
    
    // insert to new position
    if (insertPosition > 0) {
        // insert to bottom of destination
        updated_todos.splice(dst_item_idx + 1, 0, src_item)
    } else {
        // insert to top of destination
        updated_todos.splice(dst_item_idx, 0, src_item)
    }

    return updated_todos
}