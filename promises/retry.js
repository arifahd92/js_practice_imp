//retry mechanism
function retry() {
  console.log(`retry called`);
  return new Promise((res, rej) => {
    setTimeout(() => {
      const rand = Math.random();
      console.log({ rand });
      rand > 0.5 ? res("resolved") : rej("rejected");
    }, 1000);
  });
}

function doSomeTaskReturn() {
  setTimeout(async () => {
    for (let i = 1; i <= 5; i++) {
      if (i !== 1) {
        console.log(`waiting for five second...`)
        await new Promise((res) => setTimeout(res, 5000))
      }
      const data = await retry()
        .then(() => true)
        .catch(() => false);
      console.log({ data });
      if (data) {
        break;
      }
    }
  }, 0);
  return 5;
}
doSomeTaskReturn();
const sample = {
  "phoneNumbers": [
    {
      "id": "126",
      "label": "Phone",
      "number": "+91 70 52 229034"
    }
  ],
  "isStarred": false,
  "postalAddresses": [],
  "thumbnailPath": "",
  "department": "",
  "jobTitle": "",
  "emailAddresses": [],
  "urlAddresses": [],
  "suffix": null,
  "company": "",
  "imAddresses": [],
  "note": null,
  "middleName": "",
  "displayName": "Anubhav Kumar",
  "familyName": "Kumar",
  "givenName": "Anubhav",
  "prefix": null,
  "hasThumbnail": false,
  "rawContactId": "30",
  "recordID": "30"
}
console.log(JSON.parse(sample))