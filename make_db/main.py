import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import random
import json
import configparser
from time import strftime

data_file_path = ""
key_file_path = ""
random_field_id = True
random_document_id = True
config = configparser.ConfigParser()
json_data = {}

def config_generator():
    global config
    global data_file_path
    global key_file_path
    global random_field_id
    global random_document_id
    
    # 설정파일 오브젝트 만들기
    config['system'] = {}
    config['system']['title'] = 'Input Firebase'
    config['system']['data'] = 'data.json'
    config['system']['key'] = 'firebase-adminsdk.json'
    config['system']['random_field_id'] = "True"
    config['system']['random_document_id'] = "True"
    config['system']['lastdo'] = strftime('%Y-%m-%d %H:%M:%S')

    # 설정파일 저장
    with open('config.ini', 'w', encoding='utf-8') as configfile:
        config.write(configfile)

def config_end_generator():
    global config
    global data_file_path
    global key_file_path
    global random_field_id
    global random_document_id
    
    # 설정파일 오브젝트 만들기
    config['system'] = {}
    config['system']['title'] = 'Input Firebase'
    config['system']['data'] = data_file_path
    config['system']['key'] = key_file_path
    config['system']['lastdo'] = strftime('%Y-%m-%d %H:%M:%S')
    config['system']['random_field_id'] = random_field_id
    config['system']['random_document_id'] = random_document_id
    # 설정파일 저장
    with open('config.ini', 'w', encoding='utf-8') as configfile:
        config.write(configfile)

def config_read():
    global config
    global data_file_path
    global key_file_path
    global random_field_id
    global random_document_id

    try:
        config.read('config.ini', encoding='utf-8')
        random_field_id = config['system']['random_field_id']
        random_document_id = config['system']['random_document_id']
        data_file_path = config['system']['data']
        key_file_path = config['system']['key']
    except:
        print("config.ini 파일이 없습니다. 기본값으로 새로 생성하겠습니다.")
        config_generator()
        return False

    if random_field_id != "True":
        if random_field_id != "False":
            print("random_field_id 설정이 잘못되었습니다. True 혹은 False를 지정해 주십시오")
            return False
    if random_document_id != "True":
        if random_document_id != "False":
            print("random_document_id 설정이 잘못되었습니다. True 혹은 False를 지정해 주십시오")
            return False
    if data_file_path[-5:] != ".json":
        print("data_file_path 설정이 잘못되었습니다. 확장자가 .json 인지 확인해 주십시오")
        return False
    if key_file_path[-5:] != ".json":
        print("key_file_path 설정이 잘못되었습니다. 확장자가 .json 인지 확인해 주십시오")
        return False
    
    return True

def json_generator():
    global data_file_path
    with open(data_file_path, 'r') as f:
        print(f"성공적으로 {data_file_path} 을 가져왔습니다.")
        return json.load(f)


def getUUID():
    temp = ''
    uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    for k,v in enumerate(uuid):
        ran = int(random.random()*16)
        if v == 'y':
            ran = ran & 0x3 | 0x8
        temp +=  hex(ran)[2:]
    return temp

def makedata():
    global json_data

    cred = ""
    db = ""

    # Firebase 인증 정보를 제공하는 서비스 계정 키 파일을 다운로드하고 경로를 설정합니다.
    try:
        cred = credentials.Certificate('firebase-adminsdk.json')
        firebase_admin.initialize_app(cred)
        db = firestore.client()
        print("api 인증 성공")
    except:
        print("key파일이 존재하지 않거나 api에 오류가 있습니다.")
        return False
    
    # 데이터를 추가할 컬렉션과 문서 ID를 설정합니다.
    def input_data(data,collection_name):
        # 추가할 데이터를 딕셔너리 형태로 작성합니다.
        document_id = ""
        if data.get("document_id"):
            document_id = data["document_id"]
        data["document_id"] = ""
        del data["document_id"]

        if random_field_id == "True":
            data["id"] = getUUID()

        # 데이터를 컬렉션에 추가합니다.
        if random_document_id == "True":
            doc_ref = db.collection(collection_name).document()
        else:
            doc_ref = db.collection(collection_name).document(document_id)
        doc_ref.set(data)


    json_data = json_generator()

    for c in json_data:
        print(f"input collection_name : {c}")
        for i in json_data[c]:
            input_data(i,c)
    print('데이터가 성공적으로 추가되었습니다.')

def main():
    if config_read() == False:
        return
    makedata()
    config_end_generator()

if __name__ == "__main__":
    main()