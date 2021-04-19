const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
);

const table = base("Posts");

export default async (req, res) => {
  const records = await table
    .select({
      fields: ["id", "title", "date"],
      sort: [{ field: "date", direction: "desc" }]
    })
    .firstPage();

  const data = records.map(record => {
    let rec = record._rawJson.fields;
    rec.rec_id = record.id;

    return rec;
  });

  res.statusCode = 200;
  res.json(data);
};
