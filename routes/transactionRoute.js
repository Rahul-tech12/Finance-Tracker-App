const express=require('express')
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction } = require('../controllers/transactionCtrl')
const router=express.Router()
router.post('/add-transaction',addTransaction)
router.post('/get-transaction',getAllTransaction)
router.post('/edit-transaction',editTransaction)
router.post('/delete-transaction',deleteTransaction)
module.exports = router