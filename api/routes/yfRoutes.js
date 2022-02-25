import { Router } from 'express'
import { getCurrentPrice } from '../controllers/yfController'

const router = Router()

router.get('/price/:stockId', async (req, res) => {
  return getCurrentPrice(req, res)
})

export default router
