

var quoteList =
  [
    {
      quote: '"A room without books is like a body without a soul."',     //index of 0
      author: "― Marcus Tullius Cicero"
    },
    {
      quote: '"You only live once, but if you do it right, once is enough."',         // index of 1
      author: "― Mae West"
    },
    {
      quote: '"Be the change that you wish to see in the world."',   //index of 2
      author: "― Mahatma Gandhi"
    },
    {
      quote: '"If you tell the truth, you don\'t have to remember anything."',   //index of 3
      author: "― Mark Twain"
    }
  ]

function newQuote() {
  var num = Math.floor((Math.random() * quoteList.length))
  document.getElementById("thequote").innerHTML = quoteList[num].quote;
  document.getElementById("authorQuote").innerHTML = quoteList[num].author;

}