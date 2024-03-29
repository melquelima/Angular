from flask import Flask
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager, Server
from app.models.Outros.GDrive import Drive
import os

app = Flask(__name__)
cors = CORS(app)
app.config.from_object('config')
db = SQLAlchemy(app)
lm = LoginManager()
lm.init_app(app)
lm.needs_refresh_message = (u"Session timedout, please re-login")

migrate = Migrate(app,db)
manager = Manager(app)
manager.add_command('db',MigrateCommand)
manager.add_command('runserver', Server(host='0.0.0.0', port=5000))

gd = Drive("v3")
gd.connectDrive()

from app.controllers.Filters.filters import *
from app.controllers.API.selecao.selecao import *
from app.controllers.API.portfolio import *
from app.controllers.Routes import default,login,selecao,portfolio






