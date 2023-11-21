const asyncHandler = require('express-async-handler');
// @desc getGoal
// @route GET api/task
// @access private
const getGoal = asyncHandler(async (req, res) => {
    res.json({message: 'get goals'})
})

// @desc setGoal
// @route POST api/task
// @access private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    console.log(req.body.text)
    res.json({message:'set goals'})
})

// @desc createGoal
// @route CREATE api/task/id
// @access private
const createGoal = asyncHandler(async (req, res) => {
    res.json({message:`create goal ${req.params.id}`})
})

// @desc deleteGoal
// @route DELETE api/task/id
// @access private
const deleteGoal =asyncHandler( async (req, res) => {
    res.json({message:`delete goal ${req.params.id}`})
})

module.exports = {
    getGoal,
    setGoal,
    createGoal,
    deleteGoal
}