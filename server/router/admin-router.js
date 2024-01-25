const express = require("express");
const router = express.Router();
const { Users, Contacts, Services,DeleteUserById,UpdateUserById,GetUserById,GetServicesById,UpdateServicesById,DeleteContactById,DeleteServicesById } = require("../controller/admin-controller");
const authMiddleware=require("..//middleware/auth-middleware")
// Routes for Users
router.route("/users").get(authMiddleware,Users);

// Routes for Contacts
router.route("/contacts").get(Contacts);

// Routes for Services
router.route("/services").get(Services);

// Routes for delete user
router.route("/services").get(Services);
router.route("/user/delete/:id").delete(DeleteUserById);
router.route("/contact/delete/:id").delete(DeleteContactById);
router.route("/services/delete/:id").delete(DeleteServicesById);
router.route("/user/update/:id").patch(UpdateUserById);
router.route("/services/update/:id").patch(UpdateServicesById)

router.route("/user/:id").get(GetUserById);
router.route("/services/:id").get(GetServicesById);




module.exports = router;
