// Post Request button
//document.addEventListener("DOMContentLoaded", function () {
//  document.getElementById("postBtn").addEventListener("click", function () {
//    alert("Button clicked");
// });
//})



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("postBtn").addEventListener("click", function () {
        document.getElementById("msg").innerText = "Button clicked successfully";
    });
});