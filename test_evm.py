import json
import requests
import _json

transaction_hash = "0x34d962f4089dd0e16cab1cb416d348447b6c40995941cb0ad39b08fc1c028739"
url = "https://deep-index.moralis.io/api/v2/transaction/" + transaction_hash

headers = {
    "Accept": "application/json",
    "X-API-Key": "test"
}

response = requests.get(url, headers=headers)
data = response.json()
from_address = data["from_address"]

print(response.text)
print("==================")
print(from_address)