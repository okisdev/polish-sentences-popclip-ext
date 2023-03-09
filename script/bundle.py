import os
import shutil

if os.path.exists('polish-sentences.popclipext'):
    shutil.rmtree('polish-sentences.popclipext', ignore_errors=True)
shutil.copytree('src', 'polish-sentences.popclipext')
