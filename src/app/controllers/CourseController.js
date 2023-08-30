const Course = require('../models/Course')
class CourseController {
  
    show(req, res) {
        res.send('COURSES DETAIL')
    }    
}

module.exports = new CourseController