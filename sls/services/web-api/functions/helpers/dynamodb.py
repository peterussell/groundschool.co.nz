import json
import boto3

s3client = boto3.client('s3')
ddbclient = boto3.resource('dynamodb')

def seed_exams(event, context):
    return _seed('exams', event, context)

def seed_exam_questions(event, context):
    return _seed('exam-questions', event, context)

def _seed(table_name, event, context):
    bucketname = event['Records'][0]['s3']['bucket']['name']
    jsonfilename = event['Records'][0]['s3']['object']['key'].strip()

    print(bucketname)
    print(jsonfilename)

    jsonobject = s3client.get_object(Bucket=bucketname,Key=jsonfilename)

    jsonfilereader = jsonobject['Body'].read()
    jsonDict = json.loads(jsonfilereader)

    for item in jsonDict:
        print(item)
        table = ddbclient.Table(table_name)
        table.put_item(Item=item)

    return {
        'statusCode': 200,
        'body': json.dumps('JSON Data Imported')
    }