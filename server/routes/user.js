const userControllers = require('../controllers/user');

router.post('/signin', userControllers.signup);
router.post('/login', userControllers.login);
