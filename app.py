from flask import Flask, render_template, request, redirect, session, url_for


app = Flask("Momentum - Clone")
app.secret_key = 'super secret key'
app.config['SESSION_TYPE'] = 'filesystem'


@app.route("/")
def home():
    if "username" in session:
        return redirect(url_for("main"))
     ########### dev ###########
    # session.pop("username", default=None)
    return render_template("index.html")

@app.route("/main", methods=["POST", "GET"])
def main():
    if request.method == "POST":
        session["username"] = request.form["username"]  # post 방식
        return render_template("main.html", uesrname=session["username"])
    else:
        if "username" in session:
            return render_template("main.html", uesrname=session["username"])
        else:
            return redirect("/")
    

if __name__ == "__main__":
    app.run("127.0.0.1:5000")

### flask run --host=0.0.0.0