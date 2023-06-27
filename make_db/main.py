import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Firebase 인증 정보를 제공하는 서비스 계정 키 파일을 다운로드하고 경로를 설정합니다.
cred = credentials.Certificate('path/to/serviceAccountKey.json')
firebase_admin.initialize_app(cred)

# Firestore 데이터베이스를 가져옵니다.
db = firestore.client()

# 데이터를 추가할 컬렉션과 문서 ID를 설정합니다.
collection_name = 'users'
document_id = 'user1'

# 추가할 데이터를 딕셔너리 형태로 작성합니다.
data = {
    'name': 'John',
    'age': 30,
    'email': 'john@example.com'
}

# 데이터를 컬렉션에 추가합니다.
doc_ref = db.collection(collection_name).document(document_id)
doc_ref.set(data)

print('데이터가 성공적으로 추가되었습니다.')