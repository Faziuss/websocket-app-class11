const {Router} = require('express')

const router = Router()

router.get('/',(req,res)=>{
    return res.render('chat',{})
})

module.exports = router