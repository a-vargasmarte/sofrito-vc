const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
);

const table = base("Posts");

export default (id) => {
  const record = await table.find(id);

  res.statusCode = 200;
  res.json(record);
};
