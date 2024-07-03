
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

const productController = require('../controllers/productController');
const signUpController = require('../controllers/userSignUpController');
const contactController = require('../controllers/contactController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/products/img');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });
//product routes
router.post("/product", upload.single("img"), productController.store);
router.get("/product", productController.index);
router.delete("/product/:id", productController.delete);
router.get("/product/:id", productController.search);
router.put("/product/:id", upload.single("img"), productController.update);




//sign up router
router.post("/signup", signUpController.signupstore);
router.get("/signup", signUpController.signupindex);
router.delete("/signup/:id", signUpController.signupdelete);



//contact routes
router.post("/contact", contactController.contactstore);
router.get("/contact", contactController.contactindex);
router.delete("/contact/:id", contactController.contactdelete);


module.exports = router;
