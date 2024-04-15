from flask import Flask


app = Flask(__name__)

@app.route("/")
def hello():
    return "Adam is quite the stinky, smelly boy."

if __name__ == "__main__":
    app.run(debug=True)