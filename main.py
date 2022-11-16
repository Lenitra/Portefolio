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
    # get all image names from the folder static\imgs\imgs
    # images = os.listdir(os.path.join(app.root_path, 'static/imgs/imgs'))
    return render_template('index.html')


@app.route('/art')
def art():
    return render_template('images.html')


if __name__ == '__main__':
    app.run()
