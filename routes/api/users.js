const express = require('express');
const router = express.Router();

//item module
const User = require('../../models/User');

//@route    GET api/items
//@desc     get all items
//@access   public

router.get('/', (req, res, next) => {
    User.find()
        .select('first_name _id')
        .sort({ first_name: -1 })
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                users: docs,
            })
        })
});

router.get('/:id', (req, res, next) => {
    User.find({_id:req.params.id})
    .then(user=>{
        res.status(200).json({
            user: user
        })
    })
});


//@route    POST api/items
//@desc     Create items
//@access   public

router.post('/', (req, res) => {
    const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        nationality: req.body.nationality,
        occupation: req.body.occupation,
        postalCode: req.body.postalCode
    });
    // console.log(newUser)

    newUser.save()
        .then(user => res.json(user));
});



//@route    DELETE api/items/:id
//@desc     delete items
//@access   public

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})



module.exports = router;