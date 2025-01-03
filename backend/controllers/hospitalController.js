import express from 'express';
import Hospital from '../models/hospitalModel.js';

const router = express.Router();

// Get all hospitals
router.get('/', async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        res.status(200).json(hospitals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single hospital by ID
router.get('/:id', async (req, res) => {
    try {
        const hospital = await Hospital.findById(req.params.id);
        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.status(200).json(hospital);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new hospital
router.post('/', async (req, res) => {
    const hospital = new Hospital(req.body);
    try {
        const newHospital = await hospital.save();
        res.status(201).json(newHospital);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a hospital by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedHospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedHospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.status(200).json(updatedHospital);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a hospital by ID
router.delete('/:id', async (req, res) => {
    try {
        const hospital = await Hospital.findByIdAndDelete(req.params.id);
        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.status(200).json({ message: 'Hospital deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;