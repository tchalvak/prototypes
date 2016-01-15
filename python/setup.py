try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup

config = {
    'description': 'Prototyping',
    'author': 'Roy R.',
    'url': 'http://github.com/tchalvak/prototypes',
    'author_email': 'tchal.vakSPAM@gmail.com',
    'version': '0.1',
    'install_requires': ['nose'],
    'packages': ['boa'],
    'scripts': [],
    'name': 'skeleton'
}

setup(**config)
