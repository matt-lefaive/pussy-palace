import re
import os

vtt_file_path = input("Enter path to VTT file: ")

f = open(vtt_file_path, 'r')
text = f.read()
blocks = text.split('\n\n')

vtt_block = re.compile('^\d{2}:\d{2}:\d{2}.\d{3}( --> \d{2}:\d{2}:\d{2}.\d{3})?$')

class Caption(object):
    _start = 0
    _end = 0
    _text = ''

    def __init__(self, start, end, text):
        self._start = start
        self._end = end
        self._text = text

    def __str__(self):
        return f'\t\t"start": {self._start},\n\t\t"end": {self._end},\n\t\t"text": "{self._text}"\n'

def timestamp_to_ms(t):
    comps = re.split('\.|:', t)
    return int(comps[0])*60*60*1000 + int(comps[1])*60*1000 + int(comps[2])*1000 + int(comps[3])

def captions_to_json(filename):
    json = filename.strip('.vtt\n') + ': [\n'
    for i in range(len(captions)):
        json += '\t{\n' + str(captions[i]) + '\t}'
        if i < len(captions) - 1:
            json += ','
        json += '\n'
    json += ']'
    return json



# MAIN
captions = []

for i in range(len(blocks)):
    lines = blocks[i].split('\n')
    if (vtt_block.match(lines[0])):
        (start, end) = lines[0].split(' --> ')
        start = timestamp_to_ms(start)
        end = timestamp_to_ms(end)
        text = ' '.join(lines[1:])
        captions.append(Caption(start, end, text))

filename = '"' + os.path.basename(vtt_file_path).strip('.vtt') + '":\n'
print(captions_to_json(vtt_file_path.strip('.vtt')))
        


