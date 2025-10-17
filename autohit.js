// import axios from "axios";

// const API_URL = "https://test-server.chatbucket.chat/v1/auth/login"; // adjust endpoint
// const TOKEN = "YOUR_JWT_TOKEN_HERE"; // 🔹 put your token here
// const TOTAL_USERS = 100;

// const resp = [];
// const tsIds = [];
// console.time('testSeq')
// async function main() {
  
//   for (let i = 1; i <= TOTAL_USERS; i++) {
//     const userData = {
//       phoneCode: "91",
//       phoneNumber:
//         i < 10 ? `827589090${i}` : i < 100 ? `82758909${i}` : `8275890${i}`,
//       deviceId: `abc12${i}-device`,
//     };

//     try {
//       const res = await axios.post(API_URL, userData, {
//         headers: {
//           Authorization: `Bearer ${TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       });

//       tsIds.push({
//         tsid: res.data.data.tsid,
//         phoneNumber: userData.phoneNumber,
//         user: i,
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   }
// console.timeEnd('testSeq')
//   console.log("🎉 All users processed");
//   // console.log("Response data:", resp);
//   console.log("TS IDs:", tsIds.length);
// }

// main();
// console.log(`completed task,,,,,,,,,,,,,,,,,,,,`)
//-----------------------------------------------------------


import axios from "axios";

const API_URL = "https://test-server.chatbucket.chat/v1/auth/login"; // adjust endpoint
const TOKEN = "YOUR_JWT_TOKEN_HERE"; // 🔹 put your token here
const TOTAL_USERS = 1000;

const resp = [];
const tsIds = [];

async function main() {
  let arr = [];
  for (let i = 1; i <= TOTAL_USERS; i++) {
    arr.push(i);
  }
  console.time('test')
  const res = await Promise.all(
    arr.map((i) => {
      const userData = {
        phoneCode: "91",
        phoneNumber:
          i < 10 ? `827589090${i}` : i < 100 ? `82758909${i}` : `8275890${i}`,
        deviceId: `abc12${i}-device`,
      };

      return axios
        .post(API_URL, userData, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
        })
        .catch((err) => console.log(`err in ${i}`, err.message));
    })
  );
  console.timeEnd('test')
  console.log("🎉 All users processed,,,,,,,,,,,,,,,,,,,,,,,,");
  // console.log("Response data:", resp);
  console.log("TS IDs:", res.map((item)=>item?.data?.data?.tsid)?.length);
}

main();

