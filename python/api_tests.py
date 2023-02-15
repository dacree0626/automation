import requests
import json
# https://www.automationexercise.com/api_list

def apiGetProducts():
    r = requests.get('https://automationexercise.com/api/productsList')
    # text and status codes are parts of the response object
    return r.text, r.status_code # you can return many things at the same time
    # i bet you can return the object and call the things on the response, try that

#print(apiGetProducts())
#print(apiGetProducts()[0]) #you can call the parts of your response like array objects
#print(apiGetProducts()[1])


def apiPostProducts():
    # API URL: https://automationexercise.com/api/productsList
    # Request Method: POST
    # Response Code: 405
    # Response Message: This request method is not supported.
    r = requests.post('https://automationexercise.com/api/productsList')
    return r

#print(apiPostProducts().status_code) # the status code was supposed to be 405, but its a 200. the text resposne has all the 405 and error message. Weird.
#jsonPostProducts = json.loads(apiPostProducts().text) # the text response has a json body
#print(jsonPostProducts['responseCode']) 

def apiGetBrands():
    r = requests.get('https://automationexercise.com/api/brandsList')
    return r

jsonGetBrands = json.loads(apiGetBrands().text)
brands = jsonGetBrands['brands']
for b in brands:
    for key, val in b.items():
        if key == "id" and val == 1:
            print(val)