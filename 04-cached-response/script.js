$.get('https://www.reddit.com/r/aww.json')
  .done(function (response) {
    //What to do if HTTP was successful
    localStorage.setItem("redditData", JSON.stringify(response));
    console.log("Online!");
    console.log(JSON.parse(localStorage.getItem("redditData")));
  })
  .fail(function (error) {
    //What to do if HTTP failed
    console.log("Offline!");
    console.log(JSON.parse(localStorage.getItem("redditData")));
  })
