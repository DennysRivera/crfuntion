/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorldFB = onRequest({
  preserveExternalChanges: true,
  concurrency: 5,
  timeoutSeconds: 30,
  memory: "1GiB",
  region: "us-central1",
  minInstances: 1,
  maxInstances: 10,
  serviceAccount: "crjob-vpcsc@dennysp-dev.iam.gserviceaccount.com",
}, (request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!!");
});
