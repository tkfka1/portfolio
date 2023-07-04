import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import json

# Firebase 서비스 계정 키 파일 경로
cred = credentials.Certificate("firebase-adminsdk.json")

# Firebase 앱 초기화
firebase_admin.initialize_app(cred)

# # Firebase 앱 초기화
# firebase_admin.initialize_app(cred, {
#     'databaseURL': 'https://your-project-id.firebaseio.com'
# })

# Firestore 데이터베이스 클라이언트 가져오기
db = firestore.client()

## Firebase 데이터베이스 참조 가져오기 실시간 데이터베이스, firestore

## 실시간 데이터베이스
# ref = db.reference('/users')

## 데이터 읽기
# data = ref.get()
# print(data)

## firestore
ref = db.collection('portfolio')
docs = ref.stream()

## 출력하기
# for doc in docs:
#     print(f"{doc.id} => {doc.to_dict()}")

# Firestore 문서 데이터를 리스트로 변환
doc_list = [doc.to_dict() for doc in docs]
print(doc_list)

# JSON 문자열로 변환
json_data = json.dumps(doc_list)
# print(json_data)
## json make

with open('get_data.json', 'w') as f:
    f.write(json_data)

