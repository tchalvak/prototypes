import yaml
import configparser
from yaml import load, dump

config = configparser.ConfigParser()
config.read('config.ini')
print config.sections()

print config['bitbucket.org']['User']
print config['bitbucket.org']['ForwardX11']
print config['topsecret.server.com'].getboolean('ForwardX11')
print config['bitbucket.org'].getboolean('ForwardX11')
print config.getboolean('bitbucket.org', 'Compression')

print 'End of configparser output tests'


documents = """
---
- Ada
- APL
- ASP

- Assembly
- Awk
---
- Basic
---
- C
- C#    # Note that comments are denoted with ' #' (space then #).
- C++
- Cold Fusion
...
"""

for data in yaml.load_all(documents):
    print data


'''
stream = file('document.yaml', 'r')    # 'document.yaml' contains a single YAML document.
for data in yaml.load_all(stream):
    print(data)
'''