
class NewsController {
   
   //get/news
    index(req, res) {
        res.render('news');
    }    
    show(req, res) {
        res.send('FOR DETAIL');
    }    
}

module.exports = new NewsController