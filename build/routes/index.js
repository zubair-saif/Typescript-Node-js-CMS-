"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var studentController_1 = require("../controllers/studentController");
var postsController = __importStar(require("../controllers/articles"));
var Routes = /** @class */ (function () {
    function Routes() {
        this.studentController = new studentController_1.StudentController();
    }
    Routes.prototype.routes = function (app) {
        app.route('/')
            .get(function (req, res) {
            res.status(200).send('Hello Good World!');
        });
        // Get all students
        app.route('/api/students')
            .get(this.studentController.getStudents);
        // Create a new student
        app.route('/api/students')
            .post(this.studentController.addNewStudent);
        // get a specific student
        app.route('/api/students/:studentId')
            .get(this.studentController.getStudentById);
        // update a specific student
        app.route('/api/students/:studentId')
            .put(this.studentController.updateStudent);
        // delete a specific student
        app.route('/api/students/:studentId')
            .delete(this.studentController.deleteStudent);
        // generate dummy data
        app.route('/api/dummy')
            .get(this.studentController.generateDummyData);
        // create a new articles 
        app.route('/api/create', postsController.createArticle);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=index.js.map