var data = {
  title: "My favorite data",
  submittedBy: "Fred",
  points: 1337
}

// Your code here
localStorage.setItem("data", JSON.stringify(data));
console.log(JSON.parse(localStorage.getItem("data")));
data.points = 2000;
localStorage.setItem("data", JSON.stringify(data));
console.log(JSON.parse(localStorage.getItem("data")));
