import json

# Load FAQ data
with open("data/faq.json") as f:
    faq_data = json.load(f)

def get_response(user_input):
    user_input = user_input.lower()
    for question, answer in faq_data.items():
        if question.lower() in user_input:
            return answer
    return "Sorry, I couldn't understand. Please contact the admin office for more details."