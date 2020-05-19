# """Routes for logged-in application."""
from flask import render_template, session
# from flask_login import current_user
# from flask import current_app as app
# from .assets import compile_auth_assets
from flask_login import login_required
#
#
# # Blueprint Configuration
# main_bp = Blueprint('main_bp', __name__,
#                     template_folder='templates',
#                     static_folder='static')
# compile_auth_assets(app)
#
#
# @main_bp.route('/', methods=['GET'])
# @login_required
# def dashboard():
#     """Logged in Dashboard screen."""
#     session['redis_test'] = 'This is a session variable.'
#     return render_template('dashboard.html',
#                            title='Flask-Session Tutorial.',
#                            template='dashboard-template',
#                            current_user=current_user,
#                            body="You are now logged in!")
#
#
# @main_bp.route('/session', methods=['GET'])
# @login_required
# def session_view():
#     """Display session variable value."""
#     return render_template('session.html',
#                            title='Flask-Session Tutorial.',
#                            template='dashboard-template',
#                            session_variable=str(session['redis_test']))


@login_required
def login():
    """Display session variable value."""
    return render_template('login.html', title='Login', template='Login')


def index():
    """Display session variable value."""
    return render_template('index.html', title='Index', template='Index')


def errorv1():
    """Display session variable value."""
    return render_template('error-V1.html', title='Error-V1', template='Error-V1')


def errorv2():
    """Display session variable value."""
    return render_template('error-V2.html', title='Error-V2', template='Error-V2')


def forms():
    """Display session variable value."""
    return render_template('forms.html', title='Forms', template='Forms')


def lockscreen():
    """Display session variable value."""
    return render_template('lock-screen.html', title='Lock-Screen', template='Lock-Screen')


def passwordrecovery():
    """Display session variable value."""
    return render_template('password-recovery.html', title='Password-Recovery', template='Password-Recovery')


def profile():
    """Display session variable value."""
    return render_template('profile.html', title='Profile', template='Profile')


def table():
    """Display session variable value."""
    return render_template('tables.html', title='Table', template='Table')
