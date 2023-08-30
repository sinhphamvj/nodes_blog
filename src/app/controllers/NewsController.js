
class NewsController {
   
   //get/news
    index(req, res) {
        res.render('news');
    }    
    show(req, res) {
        res.send('NEW CONTROLLER');
    }    
}

module.exports = new NewsController