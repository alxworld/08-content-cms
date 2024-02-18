const contentful = require('contentful')

const client = contentful.createClient({
  space: 'cokoppvoy6ef',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'cmQxKxYvIRfwNymOoW5Dn84XBt9tSGAQcufOI9Yvyhc'
})

client.getEntry('UsXbAffM8Mt3QSnz4neET')
  .then((entry) => console.log(entry))
  .catch(console.error)