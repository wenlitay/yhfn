import express from 'express'
import routes from './api/routes/yfRoutes'

const app = express()

const port = process.env.PORT || 3000

app.use('/', routes)

app.listen(port, () =>
  console.log(`Yahoofinance app listening on port ${port}!`)
)

app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + ' not found' })
})
