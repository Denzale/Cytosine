const router = require('express').Router();

// Import our controllers
const noteRoutes = require('./notesController');
const userRoutes = require('./usersController');
const authRoutes = require('./authController');
const mentorRoutes = require('./mentorController');
const reviewRoutes = require('./reviewController');
const rookieRoutes = require ('./rookieController');

// Hook up to the router
router.use('/api/notes', noteRoutes);
router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/mentors', mentorRoutes);
router.use('/api/rookies', rookieRoutes);
router.use('/api/reviews', reviewRoutes);
// Export the router
module.exports = router;
