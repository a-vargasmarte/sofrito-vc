import getPosts from "../../lib/getPosts";

export default async (req, res) => {
  const records = await getPosts();

  const data = records.map(record => {
    let rec = record._rawJson.fields;
    rec.rec_id = record.id;

    return rec;
  });

  res.statusCode = 200;
  res.json(data);
};
