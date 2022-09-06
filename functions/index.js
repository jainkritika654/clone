const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LQZ68SJu7GLcLZvGZX0y2TjpFhTSglq4AEZxaM5zOLvdC9fuyS9dwCEVbs7nvB1WzvN8d7ElZl3xTQRZbmDslEh00V0XsrDTq"
);
//App config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);
