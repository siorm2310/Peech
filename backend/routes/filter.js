import express from 'express'
import {filterByPartialMatch,filterByRange,filterByStrictEqual} from '../controllers/filterController.js'
const router = express.Router()

router.route('/equals/:field/:fieldString').get(filterByStrictEqual)
router.route('/match/:field/:fieldString').get(filterByPartialMatch)
router.route('/range/:field/:minRange-:maxRange').get(filterByRange) 


export default router

