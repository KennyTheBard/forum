const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    const {
        projectId
    } = req.state;

    try {
        validateFields({
            project_id: {
                value: projectId,
                type: 'int'
            },
        });

        const tasks = await TasksService.getAllForProject(parseInt(projectId));
        res.json(tasks);
    } catch (err) {
        next(err);
    }
});

module.exports = router;