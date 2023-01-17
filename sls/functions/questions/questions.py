import json
from random import randrange

import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb')

exam_questions_table_name = 'exam-questions'

def get(event, context):
    try:
        desired_count = int(_get_querystring_param(event, 'count'))
        exam_id = _get_path_param(event, 'examId')

        questions = _get_questions(exam_id, desired_count)
        return _build_success_response({ 'results': questions })

    except Exception as e:
        return _build_500_error_response(str(e))

def _get_questions(exam_id, desired_count):
    all_questions = _get_all_questions(exam_id)
    return _get_random_items(all_questions, desired_count)
  
def _get_all_questions(exam_id):
    return _query_table(exam_questions_table_name, 'examIdIndex', 'examId', exam_id)

# =============================================
# TODO: --- shared functions: move to layer ---
# =============================================
def _build_500_error_response(error_message):
    return {
        'statusCode': 500,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({ 'error': error_message })
    }

def _build_success_response(response_body):
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(response_body)
    }

def _get_random_items(items, desired_count):
    if desired_count >= len(items):
        return items

    # Loop and select a random item until we have the desired number of items
    selected_items = []
    for i in range(desired_count):
        index = randrange(len(items))
        selected_items.append(items.pop(index))

    return selected_items

def _get_path_param(event, param_name):
    return str(json.dumps(event['pathParameters'][param_name])).replace("\"", "")

def _get_querystring_param(event, param_name):
    return str(json.dumps(event['queryStringParameters'][param_name])).replace("\"", "")

def _query_table(table_name, index_name, query_key, query_value):
    table = dynamodb.Table(table_name)
    res = table.query(
        IndexName=index_name, \
        KeyConditionExpression=Key(query_key).eq(query_value)
    )
    return res['Items']

def post(event, context):
    body = {
        "message": "Hello from POST questions!",
        "input": event,
    }

    response = { "statusCode": 200, "body": json.dumps(body) }

    return response
