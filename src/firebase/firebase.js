import * as firebase from 'firebase';


const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default };


// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// } );

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// } );

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value' , (snapshot) => {
//   const expenses = [];
//   snapshot.forEach( (childSnapshot) => {
//     expenses.push({
//        id: childSnapshot.key,
//        ... childSnapshot.val()
//     });
//   });
//   console.log(expenses)
// });

// database.ref('expenses')
//   .once('value')
//   .then( (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
//   });


// database.ref('expenses').push({
//   description: 'Go Run',
//   note: '',
//   amount: 123,
//   createdAt: 3244
// });



// database.ref('notes/-MJXMsTFb0KCW1TAmXSv').remove();

// database.ref('notes').push({
//    title: 'course topics',
//    body: 'React native, angular, python'
// });





// const onChangeValue = database.ref().on('value', (snapshot) => {
//    const { name , job} = snapshot.val()

//     console.log(`${name} is a ${job.title} at ${job.company}`)
// });


// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//   const val =  snapshot.val();
//   console.log(val);
// })
// .catch( e => {
//    console.log('Error fetching data', e)
// });

// database.ref().set({
//   name: 'Jhonatan mendes',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Guarulhos',
//     country: 'Brazil'
//   },
  
// }).then(() => {
//    console.log('Data is saved');
// }).catch((err)=> {
//     console.log('This failed.' ,err); 
// });



// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })


// database.ref()
//   .remove()
//   .then(()=> {
//     console.log('isSingle removed')
//   }).catch(e => {
//     console.log('remove went wrong' , e);
//   });
