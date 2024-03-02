const admin = require("firebase-admin");
const firebaseConfig=require("../config/FireBaseConfig.json")

// Initialize Firebase Admin SDK
async function sendNotification(){
    console.log("function called for notification")
    console.log(firebaseConfig)
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});

// Create a notification message
const message = {
  notification: {
    title: "Hello from LearnLegacy",
    body: "This is a test notification.",
  },
  token: "cWyA0jLtZrL_vuKHHZ9ZKu:APA91bH2gdz_ddkIuFeb7maexLOPJN-LEChUakXtFpo1FyNDQC0l783Bg_ZthEONIHnys9lyaWYxaNAf1cfwvTYHKhoWb4aP4YOs0qKLXW8GulUidQ7bmbFew9XEld-uc46Cvzj3nmAB",
};

// Send a message to the device corresponding to the provided registration token
admin
  .messaging()
  .send(message)
  .then((response) => {
    console.log("Successfully sent message:");
  })
  .catch((error) => {
    console.error("Error sending message:",error);
  });
  console.log("Admin");
}
module.exports={sendNotification}