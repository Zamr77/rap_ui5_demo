# 📘 RAP + UI5 Demo: Book List App

This is a minimal end-to-end SAP RAP (ABAP RESTful Application Programming Model) and UI5 demo app showing how to connect an OData V4 RAP backend with a SAPUI5 frontend.

---

## 🔧 Backend Setup (ABAP RAP)

1. Create a table named `ZBOOK` with fields:
   - `ID` (key)
   - `TITLE`
   - `AUTHOR`
   - `PUBLISHED_YEAR`

2. Upload the following ABAP artifacts:
   - `ZI_BOOK` CDS View
   - `ZI_BOOK` Behavior Definition
   - `Z_BOOK_SERVICE` Service Definition
   - `Z_BOOK_SERVICE_BINDING` (OData V4 - UI)

3. Activate and publish the service.

4. Copy the OData V4 service URL.

---

## 🖥️ Frontend Setup (SAPUI5)

1. Install UI5 CLI (if not already):
```bash
npm install --global @ui5/cli
```

2. From the `frontend/` directory, run:
```bash
ui5 serve -o index.html
```

3. The app will open in your browser, showing a simple Book List table.

---

## 📂 Folder Structure

```
rap_ui5_demo/
├── backend/
│   ├── cds/
│   ├── behavior/
│   └── service/
├── frontend/
│   ├── webapp/
│   │   ├── View/
│   │   ├── Controller/
│   │   └── index.html
│   └── ui5.yaml
└── README.md
```

---

## 💬 

> “I built and deployed a small RAP-based OData service for book records, then connected it to a UI5 app using OData V4. This helped me learn projection views, behavior definitions, and how Fiori-style apps are integrated end-to-end.”

---

