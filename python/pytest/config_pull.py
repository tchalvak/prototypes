import yaml
import configparser
from yaml import load, dump
import pprint

'''

config = configparser.ConfigParser()
config.read('config.ini')
print config.sections()

print config['bitbucket.org']['User']
print config['bitbucket.org']['ForwardX11']
print config['topsecret.server.com'].getboolean('ForwardX11')
print config['bitbucket.org'].getboolean('ForwardX11')
print config.getboolean('bitbucket.org', 'Compression')

print 'End of configparser output tests'


'''

phpini = configparser.ConfigParser()
phpini.read('/etc/php5/fpm/php.ini');
print 'Printing phpini keys'
i = 10
for key in phpini:
    if key == 'Session':
        for val in phpini['Session']:
            print 'Values: '+val
    print('Key: '+key)
    i -= i


#pprint.pprint(vars(phpini))

print 'Config var test was found to be: [';
phpini.get('Session', 'session.name')

print ']'


print 'Printing yaml information'

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