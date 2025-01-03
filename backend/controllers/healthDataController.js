import express from 'express';

const router = express.Router();

// Controller functions
const getHealthData = (req, res) => {
    res.send('Get health data');
};

const createHealthData = (req, res) => {
    res.send('Create health data');
};

const updateHealthData = (req, res) => {
    res.send('Update health data');
};

const deleteHealthData = (req, res) => {
    res.send('Delete health data');
};

// Routes
router.get('/', getHealthData);
router.post('/', createHealthData);
router.put('/:id', updateHealthData);
router.delete('/:id', deleteHealthData);

export default router;