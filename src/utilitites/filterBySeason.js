const filterBySeason = (summerInState, winterInState, data) => {
  if (
    (summerInState === true && winterInState === true) ||
    (summerInState === null && winterInState === null)||
    (summerInState === false && winterInState === false)||
    (summerInState === null && winterInState === false)||
    (summerInState === false && winterInState === null)
  ) {
    return data;
  } else if (summerInState === true) {
    return data.filter((i) => i.season === "summer");
  } else if (winterInState === true) {
    return data.filter((i) => i.season === "winter");
  }
};

// const filterBySummer = (summerInState, data) => {
//   if (summerInState === null) {
//     return data;
//   } else if (summerInState === true) {
//     return data.filter((i) => i.season === "summer");
//   }
//   return data;
// };

// const filterByWinter = (winterInState, data) => {
//   if (winterInState === null) {
//     return data;
//   } else if (winterInState === true) {
//     return data.filter((i) => i.season === "winter");
//   }
//   return data;
// };

export { filterBySeason };
