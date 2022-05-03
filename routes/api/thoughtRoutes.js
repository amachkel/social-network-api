const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtControllers.js");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/thoughtId")
  .get(getSingleThought)
  .delete(deleteThought)
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
