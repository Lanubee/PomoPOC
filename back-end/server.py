from flask import Flask
import datetime

x = datetime.datetime.now()

app = Flask(__name__)

@app.route("/data")
def hello():
    return{
        'Name': 'Adam',
        "Age": "21",
        "Date":x,
        "programming": "Adam Smasher Ezzeldin"
    }

if __name__ == "__main__":
    app.run(debug=True)