import json
import uuid
import datetime

import db_utils
import response_utils

exams_table_name = 'exams'
exam_questions_table_name = 'exam-questions'

def post(event, context):
    try:
        req = json.loads(event['body'])

        # Check that a matching exam exists
        exam_id = req['examId']
        if not db_utils.item_exists(exams_table_name, 'id', exam_id):
            return response_utils.make_500('Exam not found with ID ' + exam_id)

        # Load remaining request fields
        question = req['question']
        correct_answer = req['correctAnswer']
        incorrect_answer_1 = req['incorrectAnswer1']
        incorrect_answer_2 = req['incorrectAnswer2']
        incorrect_answer_3 = req['incorrectAnswer3']
        syllabus_ref = ''
        author_name = ''

        if 'syllabusReference' in req:
            syllabus_ref = req['syllabusReference']

        if 'authorName' in req:
            author_name = req['authorName']

        # Add the question
        question_id = _add_question(exam_id, question, correct_answer,
            incorrect_answer_1, incorrect_answer_2, incorrect_answer_3,
            syllabus_ref, author_name)

        return response_utils.make_200({
            'success': True,
            'message': 'Question successfully added, ID: ' + question_id
        })

    except Exception as e:
        return response_utils.make_500(str(e))

def _add_question(exam_id, question, correct_answer, incorrect_answer_1,
    incorrect_answer_2, incorrect_answer_3, syllabus_ref, author_name):
    question_id = str(uuid.uuid4())
    item = {
        'id': question_id,
        'examId': exam_id,
        'question': question,
        'correctAnswer': correct_answer,
        'incorrectAnswer1': incorrect_answer_1,
        'incorrectAnswer2': incorrect_answer_2,
        'incorrectAnswer3': incorrect_answer_3,
        'syllabusReference': syllabus_ref,
        'authorName': author_name,
        'addedDate': str(datetime.datetime.now()),
    }
    db_utils.put_item(exam_questions_table_name, item)
    return question_id
