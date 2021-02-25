# import markdown
import json
# import re


def match(stt, end, s):
    # m = re.search(p, s)
    # if m:
    #     return m.group(1)
    # else:
    #     return ''
    try:
        if stt == '':
            sttIdx = 0
        else:
            sttIdx = s.find(stt) + len(stt)
        endIdx = s.find(end)
    except:
        print('wrong substring.')

    return s[sttIdx:endIdx]


def parseQuestion(question):
    # print(question)

    if '```javascript' in question:
        q = match('', '```javascript', question)
        code = match('```javascript', '```\n', question)+'\n'
        choices = match('```\n', '\n<details>', question).split('\n- ')[1:]
    elif '```html' in question:
        q = match('', '```html', question)
        code = match('```html', '```\n', question)+'\n'
        choices = match('```\n', '\n<details>', question).split('\n- ')[1:]
    else:
        q = match('', '\n\n-', question)
        code = ''
        choices = match('\n\n- ', '\n<details>', question).split('\n- ')

    return q, code, choices


def parseAnswer(answer):
    ans = match('#### Answer: ', '</p>\n</details>', answer)
    return ans


def main():
    with open('README.md', 'r') as f:
        content = f.read()
        # print(type(content))

    listContent = content.split('---\n\n###### ')[1:]
    # print(len(listContent))
    # # json.dumps(listContent)

    separator = '<summary><b>Answer</b></summary>\n<p>\n'

    arr = []
    for i, block in enumerate(listContent):
        oneQuiz = block.split(separator)

        question = oneQuiz[0]
        q, code, choices = parseQuestion(question)

        answer = oneQuiz[1]
        ans = parseAnswer(answer)
        arr.append([q, code, choices, ans])

        # if i == 25:
        #     print(question)
        #     print('---')
        #     print(q)
        #     print('---')
        #     print(code)
        #     print('---')
        #     print(choices)

        #     print(ans)
        #     break

    with open('js-questions.json', 'w') as outfile:
        json.dump(arr, outfile)


main()
