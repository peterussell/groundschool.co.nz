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

def item_exists(table_name, column_name, value):
    # If the result exists, it will contain an 'Item' key
    return 'Item' in get_item(table_name, column_name, value)

def get_item(table_name, pk_name, pk_value):
    table = dynamodb.Table(table_name)
    return table.get_item(Key={pk_name: pk_value})

def put_item(table_name, item):
    table = dynamodb.Table(table_name)
    table.put_item(Item=item)
