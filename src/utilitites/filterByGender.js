const filterByGender = (menInState, womenInState, data) => {
  if (
    (menInState === true && womenInState === true) ||
    (menInState === null && womenInState === null) ||
    (menInState === false && womenInState === false)||
    (menInState === false && womenInState === null)||
    (menInState === null && womenInState === false)
  ) {
    return data;
  } else if (menInState === true) {
    return data.filter((i) => i.gender === "men");
  } else if (womenInState === true) {
    return data.filter((i) => i.gender === "women");
  }
};

// const filterByMen = (menInState, data) => {
//   if (menInState === null) {
//     return data;
//   } else if (menInState === true) {
//     return data.filter((i) => i.gender === "men");
//   }
//   return data;
// };

// const filterByWomen = (womenInState, data) => {
//   if (womenInState === null) {
//     return data;
//   } else if (womenInState === true) {
//     return data.filter((i) => i.gender === "women");
//   }
//   return data;
// };

export { filterByGender };
