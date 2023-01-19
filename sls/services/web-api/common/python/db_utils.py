import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb')

def query_table(table_name, index_name, query_key, query_value):
    table = dynamodb.Table(table_name)
    res = table.query(
        IndexName=index_name, \
        KeyConditionExpression=Key(query_key).eq(query_value)
    )
    return res['Items']
