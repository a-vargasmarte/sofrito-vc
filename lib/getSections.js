const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
);

const table = base("Sections");

const getSections = async () => {
  const records = await table
    .select({
      fields: [
        "id",
        "heading",
        "source",
        "alt",
        "caption",
        "paragraph",
        "post"
      ],
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

export default getSections;
