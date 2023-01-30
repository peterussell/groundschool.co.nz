import db_utils
import list_utils
import request_utils
import response_utils

exam_questions_table_name = 'exam-questions'

def get(event, context):
    try:
        desired_count = int(request_utils.get_querystring_param(event, 'count'))
        exam_id = request_utils.get_path_param(event, 'examId')

        questions = _get_questions(exam_id, desired_count)
        return response_utils.make_200({ 'results': questions })

    except Exception as e:
        return response_utils.make_500(str(e))

def _get_questions(exam_id, desired_count):
    all_questions = _get_all_questions(exam_id)
    return list_utils.get_random_items(all_questions, desired_count)

def _get_all_questions(exam_id):
    return db_utils.query_table(exam_questions_table_name, 'examIdIndex', 'examId', exam_id)
