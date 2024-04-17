from flask import Flask
import datetime

x = datetime.datetime.now()

app = Flask(__name__)

@app.route("/data")
def hello():
    return{
        'name': 'Adam',
        "age": "21",
        "date":x,
        "programming": "Adam Smasher Ezzeldin"
    }

if __name__ == "__main__":
    app.run(debug=True)