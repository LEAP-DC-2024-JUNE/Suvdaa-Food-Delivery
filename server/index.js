import express from "express";
import { connectDB } from "./connect-db.js";
import { ObjectId } from "mongodb";

const server = express();
const PORT = 3000;

server.use(express.json());

// 1. Create -> post huselt -> shine user uusgene
// -> 1. garaas utga awdag heseg back end heseg dr bhku (express.json)
//     - request
//     - express.json() ->
// -> 2. Cors ->
server.post("/create-user", async (request, response) => {
  let db = await connectDB();
  try {
    let result = await db.insertOne({
      name: request.body.name,
      age: request.body.age,
      phoneNumber: request.body.phoneNumber,
    });
    console.log(result);
    response.json({ success: true, result });
  } catch (error) {
    response.json({ success: false, error });
  }
});

// 2. Read -> get huselt -> baiga buh useriig awchirj log hiij haruuldg

server.get("/get-all-users", async (request, response) => {
  let db = await connectDB();
  try {
    let result = await db.find().toArray();

    response.json({ success: true, result });
  } catch (error) {
    console.log(error);
    response.json({ success: false, error });
  }
});

// 3. Update -> put huselt -> nasiig update hiideg

server.put("/update-user", async (request, response) => {
  // 1. findOneAndUpdate
  // 2. updateOne
  const { phoneNumber, age, name, id } = request.body;
  let db = await connectDB();
  try {
    let result = await db.findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          name,
          phoneNumber,
          age,
        },
      }
    );

    response.json({ success: true, result });
  } catch (error) {
    console.log(error);
    response.json({ success: false, error });
  }
});

// 4. Delete -> delete huselt -> ObjectId gaar barij awaad document iig ustgah
server.listen(PORT, () => {
  console.log(`server started http://localhost:${PORT}`);
});

//1.Create
// server.post("/create-user", async (request, response) => {
//   let db = await connectDB();
//   try {
//     let result = await db.insertOne({
//       name: "Suvdaa",
//       age: 36,
//     });
//     console.log(result);
//     response.json({ success: true, result });
//   } catch (error) {
//     response.json({ success: false, error });
//   }
// });

// //2.Read
// server.get("/get-all-users", async (request, response) => {
//   let db = await connectDB();
//   try {
//     let result = await db.find().toArray();

//     response.json({ success: true, result });
//   } catch (error) {
//     response.json({ success: false, error });
//   }
// });

// //3. Update

// server.put("/update-user", async (request, response) => {
//   let db = await connectDB();
//   try {
//     let result = await db.findOneAndUpdate(
//       {
//         id: new ObjectId("679900592e22782a8b946245"),
//       },
//       {
//         $set: {
//           name: "Suvd",
//           LastName: "Lkhagvasuren",
//           phonenumber: 11111111,
//           age: 37,
//         },
//       }
//     );

//     response.json({ success: true, result });
//   } catch (error) {
//     response.json({ success: false, error });
//   }
// });

// //4. Delete

// server.delete("/delete-user", async (request, response) => {
//   let db = await connectDB();
//   try {
//     let result = await db.collection("users").deleteOne({
//       _id: new ObjectId("679900592e22782a8b946245"),
//     });

//     response.json({ success: true, result });
//   } catch (error) {
//     response.json({ success: false, error });
//   }
// });

// server.listen(PORT, () => {
//   console.log(`server started http://localhost:${PORT}`);
// });

// import express from "express";//

// const server = express();//
// const PORT = 3000;//

// server.get("/hello", (request, response) => {
//   response.send("Hello world!");
// });//
