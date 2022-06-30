const router = require('express').Router();
const {
    getOneThought,
    getThoughts,
    createThought,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughController');

//        api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

//        api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//        api/thoughts

router.route('/').get(getThoughts).post(createThought);

//        api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;