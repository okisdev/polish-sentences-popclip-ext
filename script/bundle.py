import shutil

shutil.rmtree('src.popclipext', ignore_errors=True)
shutil.copytree('src', 'src.popclipext')
