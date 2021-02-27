const router = require("express").Router();
const Workout = require("../models/workout");

// Get all Workouts

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Create Workouts

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Edit a specfic workout

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Delete Workout

router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Get all Workouts

router.get("/api/workouts/range", (req, res) => {
  Workout.find()
    .limit(7)
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;