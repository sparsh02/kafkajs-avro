const registerSchema = async () => {
    try {
      const schema = await readAVSCAsync("./avro/schema.avsc");
      const { id } = await registry.register(schema);
      return id;
    } catch (e) {
      console.log(e);
    }
  }; 