import json, requests

BASE_URL = "http://localhost:3000/api"

# Read local dataset files
with open("data/services.json", "r", encoding="utf-8") as f:
    services = json.load(f)
print("Local services examples:", [s["name"] for s in services[:3]])

# Fetch from API (run `node server.js` first)
try:
    r = requests.get(f"{BASE_URL}/services", timeout=5)
    r.raise_for_status()
    print("API services count:", len(r.json()))
except Exception as e:
    print("API call failed (start the server to test):", e)