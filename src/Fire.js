import firebase from 'firebase';

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }
  init = () =>
    firebase.initializeApp({
      apiKey: 'AIzaSyBwFVhbduM0YjjtbNkV-Gebpt8KvKKQ9DU',
      authDomain: 'chatapp-a91f1.firebaseapp.com',
      databaseURL: 'https://chatapp-a91f1.firebaseio.com',
      projectId: 'chatapp-a91f1',
      storageBucket: 'chatapp-a91f1.appspot.com',
      messagingSenderId: '1036776129433'
    });

  observeAuth = () => {
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  };

  onAuthStateChanged = user => {
    if (!user) {
      try {
        // 4.
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get ref() {
    return firebase.database().ref('messages');
  }

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user
    };
    return message;
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];

      const message = {
        text,
        user,
        timestamp: this.timestamp
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);

  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;
