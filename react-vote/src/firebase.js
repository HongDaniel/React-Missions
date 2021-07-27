import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: 'AIzaSyA1fO819AFzVPJlGHb3hJk_-YeVwV4v_VU',
    authDomain: 'voting-site-a21c4.firebaseapp.com',
    projectId: 'voting-site-a21c4',
    storageBucket: 'voting-site-a21c4.appspot.com',
    messagingSenderId: '853565859436',
    appId: '1:853565859436:web:b8af45635f8dbee97d9a49',
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();
const auth = firebase.auth();
// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore, auth };
