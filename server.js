import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(cors());

const read = (name) => JSON.parse(fs.readFileSync(new URL(`./data/${name}`, import.meta.url)));

app.get('/api/services', (_req, res) => {
  const { category } = _req.query;  // รับค่าจาก query parameter 'category'
  let data = read('services.json');  // อ่านข้อมูลจาก services.json
  
  // ถ้ามีการกรอง 'category' ให้กรองข้อมูล
  if (category) {
    data = data.filter(service => service.category === category);
  }

  res.json(data);
});

app.get('/api/icp-profiles', (_req, res) => {
  const { industry } = _req.query;  // รับค่าจาก query parameter 'industry'
  let data = read('icp_profiles.json');  // อ่านข้อมูลจาก icp_profiles.json
  
  // ถ้ามีการกรอง 'industry' ให้กรองข้อมูล
  if (industry) {
    data = data.filter(profile => profile.industry === industry);
  }

  res.json(data);
});

app.get('/api/case-studies', (_req, res) => {
  const { industry } = _req.query;  // รับค่าจาก query parameter 'industry'
  let data = read('case_studies.json');  // อ่านข้อมูลจาก case_studies.json
  
  // ถ้ามีการกรอง 'industry' ให้กรองข้อมูล
  if (industry) {
    data = data.filter(study => study.industry === industry);
  }

  res.json(data);
});

app.get('/api/frameworks', (_req, res) => {
  const { type } = _req.query;  // ตัวอย่าง ถ้าต้องการกรองตามประเภทของ framework
  let data = read('frameworks.json');  // อ่านข้อมูลจาก frameworks.json
  
  // ถ้ามีการกรอง 'type' ให้กรองข้อมูล
  if (type) {
    data = data.filter(framework => framework.type === type);
  }

  res.json(data);
});

app.get('/api/articles', (_req, res) => {
  const { topic } = _req.query;  // ตัวอย่าง ถ้าต้องการกรองตามหัวข้อของบทความ
  let data = read('articles.json');  // อ่านข้อมูลจาก articles.json
  
  // ถ้ามีการกรอง 'topic' ให้กรองข้อมูล
  if (topic) {
    data = data.filter(article => article.topics.includes(topic));
  }

  res.json(data);
});

app.get('/api/categories', (_req, res) => {
  const { type } = _req.query;  // ตัวอย่าง ถ้าต้องการกรองตามประเภทของ category
  let data = read('category_labels.json');  // อ่านข้อมูลจาก category_labels.json
  
  // ถ้ามีการกรอง 'type' ให้กรองข้อมูล
  if (type) {
    data = data.filter(category => category.type === type);
  }

  res.json(data);
});

app.get('/api/metadata', (_req, res) => {
  const { version } = _req.query;  // ตัวอย่าง ถ้าต้องการกรองตาม version ของ metadata
  let data = read('metadata.json');  // อ่านข้อมูลจาก metadata.json
  
  // ถ้ามีการกรอง 'version' ให้กรองข้อมูล
  if (version) {
    data = data.filter(meta => meta.version === version);
  }

  res.json(data);
});

app.get('/api/faq', (_req, res) => {
  const data = read('test_data.json');
  const faq = data.faq_sample || [];  // ดึง faq_sample จาก test_data.json
  res.json(faq);
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`NerdOptimize dataset API ready: http://localhost:${PORT}/api`));



