from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_redis import FlaskRedis
from flask import render_template, session

# Globally accessible libraries
# db = SQLAlchemy()
# r = FlaskRedis()


def create_app():
    """Initialize the core application."""
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object('config.config')
    app.config.from_pyfile('settings.py', silent=True)
    # Initialize Plugins
    # db.init_app(app)
    # r.init_app(app)
    # from . import routes

    # with app.app_context():
        # Include our Routes

    #     # Register Blueprints
    #     # app.register_blueprint(auth.auth_bp)
    #     # app.register_blueprint(admin.admin_bp)
    print(app.config.from_pyfile)
    return app
