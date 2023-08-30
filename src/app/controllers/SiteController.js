const Course = require('../models/Course')
class SiteController {

   //get/home
    index(req, res, next) {

        Course.find({})
       // .then((data) => {res.json(data)} )   
            .then(courses => {
                courses = courses.map(courses => courses.toObject()) 
                res.render('home',{courses})
            })
               
            .catch(next)   
      
    }    
    //get/search
    search(req, res) {
        res.render('search');
    }    
}

module.exports = new SiteController