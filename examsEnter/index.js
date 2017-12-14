// var listData = [
//     {
//         sectionData:
//             {
//                 info : "JS API"
//             },
//         rowsData:[
//             {
//                 name : "token.alert(a,b)"
//             },
//         ]
//     },
// ]

// window.onload = function(){
//     token.log("onload");
//     let list = document.getElementById("list");
//     list.reloadData(listData);
//     list.setOnClick((section,index)=>{token.alert("提示","你点击了section"+section+" index"+index)});
// }
//

var newMap = new Map();
newMap.set("key",{obj:"time"});

var password = newMap.get("key");
console.log(password);