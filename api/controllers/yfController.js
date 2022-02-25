import axios from 'axios'

const getCurrentPrice = async (req, res) => {
  const stockId = req.params.stockId

  const price = await _getPrice(stockId)

  if (price.error) {
    return res.status(400).send({
      error: 'Ticker symbol not found',
    })
  }

  res.json({
    price: price,
  })
}

const _getPrice = async (ticker) => {
  const baseUrl = 'https://finance.yahoo.com/quote'

  const response = await axios.get(`${baseUrl}/${ticker}/`)

  try {
    const price = parseFloat(
      response.data
        .split(`"${ticker}":{"sourceInterval"`)[1]
        .split('regularMarketPrice')[1]
        .split('fmt":"')[1]
        .split('"')[0]
    )

    return price
  } catch (err) {
    console.log('error >>> ', err)

    return { error: err }
  }
}

export { getCurrentPrice }
