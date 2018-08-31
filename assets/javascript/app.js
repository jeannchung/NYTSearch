
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "cfe85d4712fa4c2390f499b4ec4e6d2d",
//   'q':'disney',
//   'begin_date':"20000101",
//   'end_date':"20180101"}
// )

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "cfe85d4712fa4c2390f499b4ec4e6d2d",
  'q': "disney",
  'begin_date': "2000" + "0101",
  'end_date': "2018" + "0101"
});




console.log(url)

$.get(url)
  .then(function (data) {
      console.log(data.response.docs)

  for(let i=0; i<=4;i++){
      console.log(data.response.docs[i].headline.main)  
      console.log(data.response.docs[i].byline.original)
      console.log(data.response.docs[i].pub_date)
      console.log(data.response.docs[i].web_url)
  }


  })
  .catch(function (e) { console.log(e) })