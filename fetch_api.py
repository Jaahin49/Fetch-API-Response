import requests

response = requests.get(' https://gorest.co.in/public/v1/users')
print(response.status_code)
print(response.json())