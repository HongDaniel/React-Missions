// //Actions
// const ADD = 'item/ADD';
// const DELETE = 'item/DELETE';
// const LOAD = 'item/LOAD';

// const initialState = {
//     items: ['ToDoList 끝내기'],
// };

// //Action-Creator
// export const loadItem = (item) => {
//     return { type: LOAD, item };
// };

// export const addItem = (item) => {
//     return { type: ADD, item };
// };

// export const deleteItem = (item) => {
//     return { type: DELETE, item };
// };

// //Reducer
// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case LOAD:
//             return state;

//         case ADD:
//             const new_items = [...state.items, { action }];
//             return { items: new_items };

//         case DELETE:
//             const new_items = state.items.filter((el, idx) => {
//                 if (idx !== action.item) {
//                     return el;
//                 }
//             });
//         default:
//             return state;
//     }
// }
