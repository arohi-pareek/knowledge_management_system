// // import { CoursesArr } from "../../../StaticContent/Courses";
// import {
//   SUBSCRIBE_COURSE__REQUEST,
//   SUBSCRIBE_COURSE__SUCCESS,
//   SUBSCRIBE_COURSE__FAILURE,
// } from "../Constant/ActionTypes";

// const initialState = {
//   loading: false,
//   subArr: "",
//   error: false,
// };

// export default (state = initialState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case SUBSCRIBE_COURSE__SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         subArr: state.subArr.map((item, i) => {
//           if (item?.name == action.payload.name) {
//             return {
//               ...item,
//               subscribe: !item.subscribe,
//             };
//           } else {
//             return item;
//           }
//         }),
//         error: false,
//       };
//     default:
//       return state;
//   }
// };



