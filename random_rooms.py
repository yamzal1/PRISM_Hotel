import requests
import json
import random
from faker import Faker

fake = Faker()

url = 'https://pommedeterre-20df.restdb.io/rest/chambre'

payload = json.dumps({
    "description": fake.paragraph(),
    "name": fake.name_nonbinary(),
    "slug": "single_basic",
    "type": "single",
    "price": random.randint(50, 500),
    "size": random.randint(10, 100),
    "capacity": random.randint(1, 5),
    "pets": (random.randint(0, 1) == 0),
    "breakfast": (random.randint(0, 1) == 0),
    "featured": (random.randint(0, 1) == 0),
    "extras": fake.words(10),
    "images": [
        {
          "fields": {
            "file": {
              "url": "https://picsum.photos/300/200"
            }
          }
        },
        {
          "fields": {
            "file": {
              "url": "https://picsum.photos/300/200"
            }
          }
        },
        {
          "fields": {
            "file": {
              "url": "https://picsum.photos/300/200"
            }
          }
        },
        {
          "fields": {
            "file": {
              "url": "https://picsum.photos/300/200"
            }
          }
        }
    ]
})

payload

headers = {
    'content-type': 'application/json',
    'x-apikey': '62348bc0dced170e8c83a37c'
}

response = requests.post(url, data=payload, headers=headers)
response.text
