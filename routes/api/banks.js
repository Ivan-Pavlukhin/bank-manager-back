const express = require('express')

const { banks: ctrl } = require('../../controllers')
const { validation, controllerWrapper } = require('../../middlewares')
const { joiSchema } = require('../../models/bank')

const router = express.Router()

router.post('/', validation(joiSchema), controllerWrapper(ctrl.add))

router.get('/', controllerWrapper(ctrl.getAll))

router.delete('/:id', controllerWrapper(ctrl.del))

router.patch('/:id', controllerWrapper(ctrl.update))

module.exports = router