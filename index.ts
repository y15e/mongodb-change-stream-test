import * as mongodb from 'mongodb'

const dbName: string = 'stream-test'
const mongoUrl: string = 'mongodb://localhost:27018/' + dbName + '?readPreference=secondaryPreferred'

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const MongoClient = mongodb.MongoClient
const client = new MongoClient(mongoUrl, mongoOptions)

async function start() {
  try {
	
	await client.connect()
	
	const db = client.db(dbName)
	const collection = db.collection('items')
	
	const changeStreamIterator = collection.watch()
	while (true) {
	  const next = await changeStreamIterator.next()
	  console.log(next)
	}
	
  } catch (err) {
	console.dir(err)
  }
}

start()
