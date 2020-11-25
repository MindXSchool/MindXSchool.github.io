// const API_KEY = "Eb7ECaiMR4dqQ6vSmlu4dtV327Czq6jXTyTtX5lB";
// const url_target = "https://quizapi.io/api/v1/questions";

// // https://quizapi.io/api/v1/questions?apiKey=Eb7ECaiMR4dqQ6vSmlu4dtV327Czq6jXTyTtX5lB&category=Linux&limit=10
// const questionsEl = document.querySelector("#questions");
// async function fetchData(category, limit, callback) {
//   const req = await fetch(
//     `${url_target}?apiKey=${API_KEY}&category=${category}&limit=${limit}`
//   );
//   const res = await req.json();
//   callback(res);
// }

// function generatorQuizz(quizzs) {
//   console.log(quizzs);
//   let generatorHTML = "";
//   for (let i = 0; i < quizzs.length; i++) {
//     if (i === 0) {
//       const ans = generatorAns(quizzs[i].answers);
//       generatorHTML += `
//         <div class="question q-${i + 1} q-first q-active">
//             <div class="q-title">${quizzs[i].question}</div>
//             <div class="answers">
//                 ${ans}
//             </div>
//         </div>
//         `;
//     } else if (i === quizzs.length - 1) {
//       const ans = generatorAns(quizzs[i].answers);
//       generatorHTML += `
//         <div class="question q-${i + 1} q-last">
//             <div class="q-title">${quizzs[i].question}</div>
//             <div class="answers">
//                 ${ans}
//             </div>
//         </div>
//         `;
//     } else {
//       const ans = generatorAns(quizzs[i].answers);
//       generatorHTML += `
//         <div class="question q-${i + 1}">
//             <div class="q-title">${quizzs[i].question}</div>
//             <div class="answers">
//                 ${ans}
//             </div>
//         </div>
//         `;
//     }
//   }
//   questionsEl.insertAdjacentHTML("afterbegin", generatorHTML);
// }

// function generatorAns(ans) {
//   const newObj = Object.keys(ans)
//     .filter((e) => ans[e] !== null)
//     .reduce((o, e) => {
//       o[e] = ans[e];
//       return o;
//     }, {});
//   let ansHTML = "";
//   for (let key in newObj) {
//     ansHTML += `
//         <label class="ans-wrap">
//             <input class="ans" type="radio" name="r-1" />
//             <span class="ans-text">${newObj[key]}</span>
//         </label>
//     `;
//   }
//   return ansHTML;
// }

// fetchData("Linux", 10, generatorQuizz);
