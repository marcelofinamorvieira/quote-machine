$(document).ready(function(){
  getNewQuote();
  $("#new-quote").click(function(){
    getNewQuote();
  });
  function getNewQuote(){
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(data){
    updateHTML(data);
    updateTweet(data);
    });
  };
  function updateHTML(data){
    $("#text").text(data.quoteText);
    $("#author").text(data.quoteAuthor);
  };
  function updateTweet(data){
    $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?text=" + data.quoteText.split(" ").join("%20") + "%20-" + data.quoteAuthor.split(" ").join("%20"));
  };
});