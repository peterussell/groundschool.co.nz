import json

def get(event, context):
    body = {
        "message": "Hello from GET questions!",
        "input": event,
    }

    response = {"statusCode": 200, "body": json.dumps(body)}

    return response

def post(event, context):
    body = {
        "message": "Hello from POST questions!",
        "input": event,
    }

    response = { "statusCode": 200, "body": json.dumps(body) }

    return response
