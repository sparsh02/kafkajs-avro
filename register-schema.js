const { SchemaRegistry } = require('@kafkajs/confluent-schema-registry')

const registry = new SchemaRegistry({ host: 'http://localhost:8081' })

const schema = `
  {
    "type": "record",
    "name": "RandomTest",
    "namespace": "examples",
    "fields": [{ "type": "string", "name": "fullName" }]
  }
`
const { id } = await registry.register({ type: SchemaType.AVRO, schema })