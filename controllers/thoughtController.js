const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    console.log(req.body);
    Thought.find()
      .then(async (thoughts) => { return res.json(thoughts);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  createThought(req, res) {
    console.log('You are creating a thought');
    console.log(req.body);
    Thought.create(req.body)
      .then((thought) => { 
        return User.findOneAndUpdate(
          {_id: req.body.userId},
          {$push: { thoughts: thought._id}},
          {new: true},
        )}
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Thought was created, but no user with that id",
            })
          : res.json({
              message: "Thought created and assigned to user",
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json({ message: "Thought successfully deleted",})
      )
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json({message: "Thought updated"})
      )
      .catch((err) => res.status(500).json(err));
  },

  // add a reaction
  addReaction(req, res) {
    console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addtoSet: { reactions: req.body } },
      { new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.status(200).json(thought)
      )
      .catch((err) => {res.status(500).json(err);});
  },

  // Remove a reaction from a thought
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json({ message: "Reaction deleted" })
      )
      .catch((err) => {res.status(500).json(err);});
  },

};
