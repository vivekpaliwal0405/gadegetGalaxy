
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

const productController = require('../controllers/productController');
const signUpController = require('../controllers/userSignUpController');
const contactController = require('../controllers/contactController');
const cartController = require('../controllers/cartController');
const wishlistController = require('../controllers/wishlistController');

const authenticateToken = require('../Auth/userAuth');

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




//sign uproutes
router.post('/signup', signUpController.signupstore);
router.post('/login', signUpController.login);
router.get('/users', authenticateToken, signUpController.signupindex);
router.delete('/users/:id', authenticateToken, signUpController.signupdelete);


//contact routes
router.post("/contact", contactController.contactstore);
router.get("/contact", contactController.contactindex);
router.delete("/contact/:id", contactController.contactdelete);




//cart routes
router.post("/cart", authenticateToken, cartController.addItem);
router.get("/cart/:userId", authenticateToken, cartController.getCart);
router.delete("/cart/:userId/:productId", authenticateToken, cartController.removeItem);
// router.put("/cart/update-quantity", authenticateToken, cartController.updateQuantity);

//wishlist routes
router.post("/wishlist", authenticateToken, wishlistController.addItem);
router.get("/wishlist/:userId", authenticateToken, wishlistController.getWishlist);
router.delete("/wishlist/:userId/:productId", authenticateToken, wishlistController.removeItem);
module.exports = router;
