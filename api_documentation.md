# NerdOptimize Dataset API Documentation

Base URL: `http://localhost:3000/api`

## Endpoints

### `GET /case-studies` → List all case studies
- **Parameters**:
  - `industry`: Optional. Filter by industry (e.g., "Healthcare", "E-commerce").
- **Example**:
  ```bash 
  curl "http://localhost:3000/api/case-studies?industry=Healthcare" | jq .

### `GET /services` → List all services
- **Parameters**:
  - `category`: Optional. Filter by service category (e.g., "SEO", "CRO").
- **Example**:
  ```bash
  curl "http://localhost:3000/api/services?category=seo" | jq .

### `GET /frameworks` → List all frameworks
- **Example**:
  ```bash
  curl http://localhost:3000/api/frameworks | jq .


- `POST /services` → Create a new service
  - **Body** (JSON):
    ```json
    {
      "name": "New SEO Service",
      "summary": "A detailed description of the new SEO service.",
      "deliverables": ["Item 1", "Item 2"],
      "outcomes": ["Outcome 1", "Outcome 2"]
    }
    ```

### Error Responses:
- **400 Bad Request**: Invalid input data.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: Server encountered an unexpected condition.

#### **ตัวอย่างการเพิ่มในส่วน API Documentation**
อธิบายรายละเอียดเพิ่มเติมเกี่ยวกับการกรองข้อมูล, การโพสต์ข้อมูล, และข้อผิดพลาดที่อาจเกิดขึ้น

---

**สรุป**: เพิ่มตัวอย่างการใช้ POST, การจัดการ Error, และการกรองข้อมูลผ่านพารามิเตอร์ต่าง ๆ

---

### ถ้าพร้อมแล้ว เราจะไปที่ **Case Studies (case_studies.json)**:contentReference[oaicite:1]{index=1}กันต่อเลยไหมครับ?
