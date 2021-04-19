const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
);
import { getParagraphs, getSections } from "./index";

const table = base("Posts");

const getPostById = async id => {
  const records = Promise.all([getParagraphs(), getSections()])
    .then(records => {
      return Promise.all(
        records.map(res => {
          return res;
        })
      );
    })
    .catch(err => err);

  const content = await records;

  const paragraphs = content[0].filter(paragraph => paragraph.post[0] == id);
  const sections = content[1].filter(section => section.post[0] == id);

  for (let section of sections) {
    section.paragraphs = [];
    for (let paragraph of paragraphs) {
      if (paragraph.section && section.rec_id == paragraph.section[0]) {
        section.paragraphs.push(paragraph);
      }
    }
  }

  const post = await table.find(id);
  post.fields.sections = sections;

  return post.fields;
};

export default getPostById;
