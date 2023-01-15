import json

def questions_get(event, context):
    body = {
        "message": "Hello from GET questions!",
        "input": event,
    }

    response = {"statusCode": 200, "body": json.dumps(body)}

    return response

def questions_post(event, context):
    body = {
        "message": "Hello from POST questions!",
        "input": event,
    }

    response = { "statusCode": 200, "body": json.dumps(body) }

    return response
