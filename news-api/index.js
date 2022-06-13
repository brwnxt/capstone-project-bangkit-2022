const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f2bbf8ebb20e48eb9416318d57e82b47');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
    sources: 'Republika.co.id,Kompas.com',
    q: 'skins',
    category: 'health',
    language: 'id',
    country: 'id'
}).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
});
// To query /v2/everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
    q: 'bitcoin',
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',
    from: '2017-12-01',
    to: '2017-12-12',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
}).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
});
// To query sources
// All options are optional
newsapi.v2.sources({
    category: 'technology',
    language: 'en',
    country: 'us'
}).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        sources: [...]
      }
    */
});