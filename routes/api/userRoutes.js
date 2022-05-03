const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userControllers.js");

router.route("/").get(getUsers).post(createUser);

router
  .route("/userId")
  .get(getSingleUser)
  .delete(deleteUser)
  .post(addFriend)
  .delete(removeFriend);
module.exports = router;
