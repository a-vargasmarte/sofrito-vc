const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
);

const table = base("Paragraphs");

const getParagraphs = async () => {
  const records = await table
    .select({
      fields: ["id", "body", "section", "post"],
      sort: [{ field: "id", direction: "asc" }]
    })
    .firstPage();

  const data = records.map(record => {
    let rec = record._rawJson.fields;
    rec.rec_id = record.id;

    return rec;
  });
  return data;
};

export default getParagraphs;
