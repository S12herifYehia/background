// window.onload = function () {
var arr1 = [
  ["1", "img/1.jpg"],
  ["2", "img/2.jpg"],
  ["3", "img/3.jpg"],
  ["4", "img/4.jpg"],
  ["5", "img/5.jpg"],
  ["6", "img/6.jpg"],
  ["7", "img/7.jpg"],
  ["8", "img/8.jpg"],
  ["9", "img/9.jpg"],
  ["10", "img/10.jpg"],
  ["11", "img/11.jpg"],
  ["12", "img/12.jpg"],
];

document.getElementById("bo").style.backgroundColor = "#5356FF";
arr1.forEach((i) => {
  // console.log(i[0])
  document.getElementById("photo").innerHTML += `
            <div style="text-align:center">
            <h1 id="heading" style="color:#DFF5FF; background-color:#378CE7; padding:5px; border:1px solid #DFF5FF; text-shadow: 4px 2px 5px black;">Background ${i[0]}</h1>
            <img id="img" style="border:3px solid #378CE7; border-radius:15px;  " width="100%" src="${i[1]}">
            <a style="padding:10px 30px; color:#DFF5FF; text-decoration:none; font-size:20px; font-weight:bold; display:block; width:fit-content; margin:10px auto 0px; border:3px solid #DFF5FF;" id="link" href="${i[1]}" download="photo${i[0]}">
            <div class="top"></div>
            تحميل
            <div class="bottom"></div>
            </a>
            <div style="width:100%;height:3px; background-color:#378CE7; margin:20px 0px;"></div>
            </div>`;
});

// }
