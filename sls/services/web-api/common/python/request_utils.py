import json

def get_path_param(event, param_name):
    return str(json.dumps(event['pathParameters'][param_name])).replace("\"", "")

def get_querystring_param(event, param_name):
    return str(json.dumps(event['queryStringParameters'][param_name])).replace("\"", "")
