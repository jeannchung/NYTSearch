
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "cfe85d4712fa4c2390f499b4ec4e6d2d",
//   'q':'disney',
//   'begin_date':"20000101",
//   'end_date':"20180101"}
// )



$('#searchButton').on('click', function () {
    event.preventDefault()

    let searchTerm = $('#sTermInput').val().trim()
    let startDate = $('#sStartYear').val().trim() +'0101'
    let endDate = $('#sEndYear').val().trim() + '0101'
    let recordNumber = $('#sRecordNum').val().trim()

    console.log(searchTerm)
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "cfe85d4712fa4c2390f499b4ec4e6d2d",
        'q': `${searchTerm}`,
        'begin_date': `${startDate}`,
        'end_date': `${endDate}`
    });
    $.get(url)
        .then(function (data) {
            console.log(data.response.docs)

            for (let i = 0; i <= recordNumber - 1; i++) {
                if (data.response.docs[i].headline.main) {
                 headline = data.response.docs[i].headline.main
                }
                if (data.response.docs[i].byline.original) {
                 author = data.response.docs[i].byline.original
                }
                if (data.response.docs[i].pub_date) {
                 date = data.response.docs[i].pub_date
                }
                if (data.response.docs[i].web_url) {
                 website = data.response.docs[i].web_url
                }
               



                $('#returnedArticles').append(`<h3>${headline}</h3>
                <h3>${author}</h3>
                <h3>${date}</h3>
                <a href='${website}'>${website}</a>
                `)
               
            }


        })
        .catch(function (e) { console.log(e) })
})



// console.log(url)

