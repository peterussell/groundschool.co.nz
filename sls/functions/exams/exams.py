import json

def get_exams(event, context):
    body = {
        "message": "Hello from GET exams!",
        "input": event,
    }

    response = { "statusCode": 200, "body": json.dumps(body) }

    return response
