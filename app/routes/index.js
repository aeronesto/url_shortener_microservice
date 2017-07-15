'use strict';

module.exports = function(app,db) {
  app.route('/')
    .get(function(req, res){
      var html = 'This API can be used to CHECK that a page is in the database or to ADD it to the database.<br/><br/>' +
               'To CHECK that a link is in the database, append to the app URL: "\< url \>" </br>' + 
               'where \< url \> is the URL that you want to check. </br></br>' +  
               'Example entry:</br>' + 
               '<a href="https://aeronesto-url-shortener-microservice.glitch.me/https://aerotuck.com">https://aeronesto-url-shortener-microservice.glitch.me/https://aerotuck.com</a> <br/><br/>' + 
               'Output: <br/>Redirects to link<br/><br/>' +
               'To ADD to the database, append to the app URL: "/new/\< url \>" </br>' + 
               'where \< url \> is the URL that you want to add. </br></br>' +  
               'Example entry:</br>' + 
               '<a href="https://aeronesto-url-shortener-microservice.glitch.me/new/https://aerotuck.com">https://aeronesto-url-shortener-microservice.glitch.me/new/https://aerotuck.com</a> <br/><br/>' +
               'Example output: <br/>' + 
               '{"original_url":"<a target="_blank" href="https://aerotuck.com">https://aerotuck.com</a>","short_url":"<a href="https://aeronesto-url-shortener-microservice.glitch.me/4793" target="_blank">https://aeronesto-url-shortener-microservice.glitch.me/4793</a>"}';
    
      res.send(html)
    });
  app.route('/new')
    .get(function(req, res) {
      res.render('index', {
        err: "Error: You need to add a proper url"
      });
    });
}; 