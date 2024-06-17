import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

const staticPath = join(__dirname, '..', 'static')
const root = join(__dirname, '..', '..', '..')

app.use(express.static(staticPath))
app.use(express.static(root))

const port = 3000

const handleListening = () => {
  console.log(`listening on http://localhost:${port}`)
}

const main = () => {
  app.listen(port, handleListening)
}

main()
