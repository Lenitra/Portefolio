from flask import Flask, render_template
import os

app = Flask(__name__)

@app.errorhandler(Exception)
def all_exception_handler(e):
    e = str(e).split()[0]
    if e == "404":
        return render_template("404.html", code = 404, title = "Page Not Found", desc = "La page que vous cherchez à atteindre n'existe pas ou n'est plus/pas accessible."),404
    return render_template('404.html', code=e, title="Une erreur s'est produite", desc = "Vous pouvez nous contacter pour nous expliquer ce qu'il s'est passé pour qu'on puisse régler le problème." ), 500


@app.route('/')
def index():
    tmp = os.listdir('static/imgs/imgs')
    imgs = ""
    for i in tmp:
        imgs += i + ","
    nb = int(len(tmp)/2)
    return render_template('index.html',nb=nb, imgs = imgs)



if __name__ == '__main__':
    # ip
    app.run(host='51.178.41.82', port=5000)
    # app.run()
