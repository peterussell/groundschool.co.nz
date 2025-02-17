import response_utils

def get(event, context):
    try:
        return response_utils.make_200({ "availableExams": _get_exams() })
    except Exception as e:
        return response_utils.make_500(str(e))


def _get_exams():
    # TODO: should come from database
    return [
      {
        "id": "ppl-1",
        "name": "Air Law",
        "licenseType": "PPL",
        "slug": "air-law",
        "availableQuestions": 32,
        "aspeqName": "PPL Air Law (Aeroplane)",
        "aspeqExamInfo": {
            "durationMinutes": 70,
            "numberOfQuestions": 35,
            "allowedMaterials": []
        }
      },
      {
        "id": "ppl-2",
        "name": "Air Tech",
        "licenseType": "PPL",
        "slug": "air-tech",
        "availableQuestions": 20,
        "aspeqName": "PPL Aircraft Technical Knowledge (Aeroplane)",
        "aspeqExamInfo": {
            "durationMinutes": 90,
            "numberOfQuestions": 45,
            "allowedMaterials": []
        }
      },
      {
        "id": "ppl-3",
        "name": "Flight Radio",
        "slug": "flight-radio",
        "licenseType": "PPL",
        "availableQuestions": 159,
        "aspeqName": "FRTO Flight Radio",
        "aspeqExamInfo": {
            "durationMinutes": 40,
            "numberOfQuestions": 25,
            "allowedMaterials": []
        }
      },
      {
        "id": "ppl-4",
        "name": "Human Factors",
        "licenseType": "PPL",
        "slug": "human-factors",
        "availableQuestions": 20,
        "aspeqName": "PPL Human Factors",
        "aspeqExamInfo": {
            "durationMinutes": 40,
            "numberOfQuestions": 35,
            "allowedMaterials": []
        }
      },
      {
        "id": "ppl-5",
        "name": "Meteorology",
        "licenseType": "PPL",
        "slug": "meteorology",
        "availableQuestions": 18,
        "aspeqName": "PPL Meteorology",
        "aspeqExamInfo": {
            "durationMinutes": 70,
            "numberOfQuestions": 35,
            "allowedMaterials": []
        }
      },
      {
        "id": "ppl-6",
        "name": "Nav & Flight Planning",
        "licenseType": "PPL",
        "slug": "nav-flight-planning",
        "availableQuestions": 42,
        "aspeqName": "PPL Air Navigation and Flight Planning",
        "aspeqExamInfo": {
            "durationMinutes": 70,
            "numberOfQuestions": 25,
            "allowedMaterials": []
        }
      },
      {
        "id": "cpl-1",
        "name": "Air Law",
        "licenseType": "CPL",
        "slug": "air-law",
        "availableQuestions": 0,
        "aspeqName": "CPL Air Law (Aeroplane)",
        "aspeqExamInfo": {
            "durationMinutes": 120,
            "numberOfQuestions": 60,
            "allowedMaterials": []
        }
      },
      {
        "id": "cpl-2",
        "name": "Air Tech",
        "licenseType": "CPL",
        "slug": "air-tech",
        "availableQuestions": 0,
        "aspeqName": "CPL General Aircraft Technical Knowledge (Aeroplane)",
        "aspeqExamInfo": {
              "durationMinutes": 120,
              "numberOfQuestions": 45,
              "allowedMaterials": []
        }
      },
      {
        "id": "cpl-3",
        "name": "Human Factors",
        "slug": "human-factors",
        "licenseType": "CPL",
        "availableQuestions": 0,
        "aspeqName": "CPL Human Factors",
        "aspeqExamInfo": {
            "durationMinutes": 90,
            "numberOfQuestions": 40,
            "allowedMaterials": []
        }
      },
      {
        "id": "cpl-4",
        "name": "Meteorology",
        "licenseType": "CPL",
        "slug": "meteorology",
        "availableQuestions": 0,
        "aspeqName": "CPL Meteorology",
        "aspeqExamInfo": {
            "durationMinutes": 120,
            "numberOfQuestions": 50,
            "allowedMaterials": []
        }
      },
      {
        "id": "cpl-5",
        "name": "Navigation",
        "licenseType": "CPL",
        "slug": "nav-general",
        "availableQuestions": 0,
        "aspeqName": "CPL Flight Navigation General",
        "aspeqExamInfo": {
            "durationMinutes": 180,
            "numberOfQuestions": 45,
            "allowedMaterials": []
        }
      },
      {
        "id": "cpl-6",
        "name": "Principles of Flight",
        "licenseType": "CPL",
        "slug": "principles-of-flight",
        "availableQuestions": 0,
        "aspeqName": "CPL Principles of Flight & Aircraft Performance",
        "aspeqExamInfo": {
            "durationMinutes": 120,
            "numberOfQuestions": 45,
            "allowedMaterials": []
        }
      },
      {
        "id": "ir-1",
        "name": "Air Law",
        "licenseType": "IR",
        "slug": "air-law",
        "availableQuestions": 0,
        "aspeqName": "IR Air Law",
        "aspeqExamInfo": {
            "durationMinutes": 120,
            "numberOfQuestions": 60,
            "allowedMaterials": []
        }
      },
      {
        "id": "ir-2",
        "name": "Navigation",
        "licenseType": "IR",
        "slug": "nav",
        "availableQuestions": 0,
        "aspeqName": "IR Flight Navigation (IFR)",
        "aspeqExamInfo": {
            "durationMinutes": 180,
            "numberOfQuestions": 60,
            "allowedMaterials": []
        }
      },
      {
        "id": "ir-3",
        "name": "Instruments & Nav Aids",
        "slug": "instruments-navaids",
        "licenseType": "IR",
        "availableQuestions": 0,
        "aspeqName": "IR Instruments and Navigation Aids",
        "aspeqExamInfo": {
            "durationMinutes": 90,
            "numberOfQuestions": 30,
            "allowedMaterials": []
        }
      },
      {
        "id": "q-1",
        "name": "Light gun signals",
        "slug": "light-gun-signals",
        "licenseType": "Quiz",
        "availableQuestions": 12,
        "aspeqName": "",
        "aspeqExamInfo": {
            "durationMinutes": 20,
            "numberOfQuestions": 12,
            "allowedMaterials": []
        }
      },
      {
        "id": "q-2",
        "name": "Transponder codes",
        "slug": "transponder-codes",
        "licenseType": "Quiz",
        "availableQuestions": 16,
        "aspeqName": "",
        "aspeqExamInfo": {
            "durationMinutes": 25,
            "numberOfQuestions": 16,
            "allowedMaterials": []
        }
      },
      {
        "id": "q-3",
        "name": "ELTs and PLBs",
        "slug": "elts-and-plbs",
        "licenseType": "Quiz",
        "availableQuestions": 5,
        "aspeqName": "",
        "aspeqExamInfo": {
            "durationMinutes": 10,
            "numberOfQuestions": 5,
            "allowedMaterials": []
        }
      }
    ]
