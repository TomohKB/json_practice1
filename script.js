// // JSONデータ
// const jsonData = {
//   name: "太郎",
//   age: 30,
//   hobbies: ["読書", "映画鑑賞"],
// };

// // JSONデータをHTMLに表示
// const jsonDisplay = document.getElementById("json-display");
// jsonDisplay.textContent = JSON.stringify(jsonData, null, 2); // 整形して表示

// JavaScriptオブジェクト
// const jsObject = {
//   name: "太郎",
//   age: 30,
//   hobbies: ["読書", "映画鑑賞"],
//   greet: function () {
//     return `こんにちは、${this.name}です！`;
//   },
// };

// const jsObject = {
//   name: "久保",
//   age: 25,
//   greet: function () {
//     return`こんにちは、${this.name}で、${this.age}歳です`;
//   },
// };

// // HTMLを取得している
// const greetButton = document.getElementById("greet-button");
// const greetMessage = document.getElementById("greet-message");

// greetButton.addEventListener("click", function () {
//   greetMessage.textContent = jsObject.greet();
//   alert("このボタンは押されました")
//   console.log("osareta")
// });
// JavaScriptオブジェクトをHTMLに表示
// const jsObjectDisplay = document.getElementById("js-object-display");
// jsObjectDisplay.textContent = JSON.stringify(
//   {
//     name: jsObject.name,
//     age: jsObject.age,
//     hobbies: jsObject.hobbies,
//   },
//   null,
//   2
// );

// 挨拶ボタンのクリックイベント
// const greetButton = document.getElementById("greet-button");
// const greetMessage = document.getElementById("greet-message");
// greetButton.addEventListener("click", function () {
//   greetMessage.textContent = jsObject.greet();
// });
