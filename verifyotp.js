import axios from "axios";

const API_URL = "https://test-server.chatbucket.chat/v1/auth/verify_otp"; // adjust endpoint
const TOKEN = "YOUR_JWT_TOKEN_HERE"; // 🔹 put your token here
const TOTAL_USERS = 50;

const resp = [];

const tsIds = [
  {
    tsid: '68e4f3138460ec474af734b3',
    phoneNumber: '8275890901',
    user: 1
  },
  {
    tsid: '68e4f3148460ec474af734b6',
    phoneNumber: '8275890902',
    user: 2
  },
  {
    tsid: '68e4f3158460ec474af734b9',
    phoneNumber: '8275890903',
    user: 3
  },
  {
    tsid: '68e4f3168460ec474af734bc',
    phoneNumber: '8275890904',
    user: 4
  },
  {
    tsid: '68e4f3178460ec474af734bf',
    phoneNumber: '8275890905',
    user: 5
  },
  {
    tsid: '68e4f3178460ec474af734c2',
    phoneNumber: '8275890906',
    user: 6
  },
  {
    tsid: '68e4f3188460ec474af734c5',
    phoneNumber: '8275890907',
    user: 7
  },
  {
    tsid: '68e4f3198460ec474af734c8',
    phoneNumber: '8275890908',
    user: 8
  },
  {
    tsid: '68e4f3198460ec474af734cb',
    phoneNumber: '8275890909',
    user: 9
  },
  {
    tsid: '68e4f31a8460ec474af734cf',
    phoneNumber: '8275890910',
    user: 10
  },
  {
    tsid: '68e4f31b8460ec474af734d2',
    phoneNumber: '8275890911',
    user: 11
  },
  {
    tsid: '68e4f31b8460ec474af734d5',
    phoneNumber: '8275890912',
    user: 12
  },
  {
    tsid: '68e4f31c8460ec474af734d8',
    phoneNumber: '8275890913',
    user: 13
  },
  {
    tsid: '68e4f31d8460ec474af734dc',
    phoneNumber: '8275890914',
    user: 14
  },
  {
    tsid: '68e4f31e8460ec474af734df',
    phoneNumber: '8275890915',
    user: 15
  },
  {
    tsid: '68e4f31f8460ec474af734e2',
    phoneNumber: '8275890916',
    user: 16
  },
  {
    tsid: '68e4f31f8460ec474af734e5',
    phoneNumber: '8275890917',
    user: 17
  },
  {
    tsid: '68e4f3208460ec474af734e8',
    phoneNumber: '8275890918',
    user: 18
  },
  {
    tsid: '68e4f3218460ec474af734eb',
    phoneNumber: '8275890919',
    user: 19
  },
  {
    tsid: '68e4f3228460ec474af734ee',
    phoneNumber: '8275890920',
    user: 20
  },
  {
    tsid: '68e4f3228460ec474af734f1',
    phoneNumber: '8275890921',
    user: 21
  },
  {
    tsid: '68e4f3238460ec474af734f4',
    phoneNumber: '8275890922',
    user: 22
  },
  {
    tsid: '68e4f3248460ec474af734f7',
    phoneNumber: '8275890923',
    user: 23
  },
  {
    tsid: '68e4f3248460ec474af734fa',
    phoneNumber: '8275890924',
    user: 24
  },
  {
    tsid: '68e4f3258460ec474af734fd',
    phoneNumber: '8275890925',
    user: 25
  },
  {
    tsid: '68e4f3268460ec474af73500',
    phoneNumber: '8275890926',
    user: 26
  },
  {
    tsid: '68e4f3268460ec474af73503',
    phoneNumber: '8275890927',
    user: 27
  },
  {
    tsid: '68e4f3278460ec474af73506',
    phoneNumber: '8275890928',
    user: 28
  },
  {
    tsid: '68e4f3288460ec474af73509',
    phoneNumber: '8275890929',
    user: 29
  },
  {
    tsid: '68e4f3288460ec474af7350c',
    phoneNumber: '8275890930',
    user: 30
  },
  {
    tsid: '68e4f3298460ec474af7350f',
    phoneNumber: '8275890931',
    user: 31
  },
  {
    tsid: '68e4f32a8460ec474af73512',
    phoneNumber: '8275890932',
    user: 32
  },
  {
    tsid: '68e4f32a8460ec474af73515',
    phoneNumber: '8275890933',
    user: 33
  },
  {
    tsid: '68e4f32b8460ec474af73518',
    phoneNumber: '8275890934',
    user: 34
  },
  {
    tsid: '68e4f32c8460ec474af7351b',
    phoneNumber: '8275890935',
    user: 35
  },
  {
    tsid: '68e4f32c8460ec474af7351e',
    phoneNumber: '8275890936',
    user: 36
  },
  {
    tsid: '68e4f32d8460ec474af73521',
    phoneNumber: '8275890937',
    user: 37
  },
  {
    tsid: '68e4f32e8460ec474af73524',
    phoneNumber: '8275890938',
    user: 38
  },
  {
    tsid: '68e4f32e8460ec474af73527',
    phoneNumber: '8275890939',
    user: 39
  },
  {
    tsid: '68e4f32f8460ec474af7352a',
    phoneNumber: '8275890940',
    user: 40
  },
  {
    tsid: '68e4f3308460ec474af7352d',
    phoneNumber: '8275890941',
    user: 41
  },
  {
    tsid: '68e4f3318460ec474af73530',
    phoneNumber: '8275890942',
    user: 42
  },
  {
    tsid: '68e4f3318460ec474af73533',
    phoneNumber: '8275890943',
    user: 43
  },
  {
    tsid: '68e4f3328460ec474af73536',
    phoneNumber: '8275890944',
    user: 44
  },
  {
    tsid: '68e4f3328460ec474af73539',
    phoneNumber: '8275890945',
    user: 45
  },
  {
    tsid: '68e4f3338460ec474af7353c',
    phoneNumber: '8275890946',
    user: 46
  },
  {
    tsid: '68e4f3348460ec474af7353f',
    phoneNumber: '8275890947',
    user: 47
  },
  {
    tsid: '68e4f3348460ec474af73542',
    phoneNumber: '8275890948',
    user: 48
  },
  {
    tsid: '68e4f3358460ec474af73545',
    phoneNumber: '8275890949',
    user: 49
  },
  {
    tsid: '68e4f3368460ec474af73548',
    phoneNumber: '8275890950',
    user: 50
  },
  {
    tsid: '68e4f3378460ec474af7354b',
    phoneNumber: '8275890951',
    user: 51
  },
  {
    tsid: '68e4f3378460ec474af7354e',
    phoneNumber: '8275890952',
    user: 52
  },
  {
    tsid: '68e4f3388460ec474af73551',
    phoneNumber: '8275890953',
    user: 53
  },
  {
    tsid: '68e4f3398460ec474af73554',
    phoneNumber: '8275890954',
    user: 54
  },
  {
    tsid: '68e4f3398460ec474af73557',
    phoneNumber: '8275890955',
    user: 55
  },
  {
    tsid: '68e4f33a8460ec474af7355a',
    phoneNumber: '8275890956',
    user: 56
  },
  {
    tsid: '68e4f33b8460ec474af7355d',
    phoneNumber: '8275890957',
    user: 57
  },
  {
    tsid: '68e4f33b8460ec474af73560',
    phoneNumber: '8275890958',
    user: 58
  },
  {
    tsid: '68e4f33c8460ec474af73563',
    phoneNumber: '8275890959',
    user: 59
  },
  {
    tsid: '68e4f33d8460ec474af73566',
    phoneNumber: '8275890960',
    user: 60
  },
  {
    tsid: '68e4f33d8460ec474af73569',
    phoneNumber: '8275890961',
    user: 61
  },
  {
    tsid: '68e4f33e8460ec474af7356c',
    phoneNumber: '8275890962',
    user: 62
  },
  {
    tsid: '68e4f33f8460ec474af7356f',
    phoneNumber: '8275890963',
    user: 63
  },
  {
    tsid: '68e4f33f8460ec474af73572',
    phoneNumber: '8275890964',
    user: 64
  },
  {
    tsid: '68e4f3408460ec474af73575',
    phoneNumber: '8275890965',
    user: 65
  },
  {
    tsid: '68e4f3418460ec474af73578',
    phoneNumber: '8275890966',
    user: 66
  },
  {
    tsid: '68e4f3418460ec474af7357b',
    phoneNumber: '8275890967',
    user: 67
  },
  {
    tsid: '68e4f3428460ec474af7357e',
    phoneNumber: '8275890968',
    user: 68
  },
  {
    tsid: '68e4f3438460ec474af73581',
    phoneNumber: '8275890969',
    user: 69
  },
  {
    tsid: '68e4f3438460ec474af73584',
    phoneNumber: '8275890970',
    user: 70
  },
  {
    tsid: '68e4f3448460ec474af73587',
    phoneNumber: '8275890971',
    user: 71
  },
  {
    tsid: '68e4f3458460ec474af7358a',
    phoneNumber: '8275890972',
    user: 72
  },
  {
    tsid: '68e4f3458460ec474af7358d',
    phoneNumber: '8275890973',
    user: 73
  },
  {
    tsid: '68e4f3468460ec474af73590',
    phoneNumber: '8275890974',
    user: 74
  },
  {
    tsid: '68e4f3478460ec474af73593',
    phoneNumber: '8275890975',
    user: 75
  },
  {
    tsid: '68e4f3478460ec474af73596',
    phoneNumber: '8275890976',
    user: 76
  },
  {
    tsid: '68e4f3488460ec474af73599',
    phoneNumber: '8275890977',
    user: 77
  },
  {
    tsid: '68e4f3498460ec474af7359c',
    phoneNumber: '8275890978',
    user: 78
  },
  {
    tsid: '68e4f3498460ec474af7359f',
    phoneNumber: '8275890979',
    user: 79
  },
  {
    tsid: '68e4f34a8460ec474af735a2',
    phoneNumber: '8275890980',
    user: 80
  },
  {
    tsid: '68e4f34b8460ec474af735a5',
    phoneNumber: '8275890981',
    user: 81
  },
  {
    tsid: '68e4f34b8460ec474af735a8',
    phoneNumber: '8275890982',
    user: 82
  },
  {
    tsid: '68e4f34c8460ec474af735ab',
    phoneNumber: '8275890983',
    user: 83
  },
  {
    tsid: '68e4f34d8460ec474af735ae',
    phoneNumber: '8275890984',
    user: 84
  },
  {
    tsid: '68e4f34d8460ec474af735b1',
    phoneNumber: '8275890985',
    user: 85
  },
  {
    tsid: '68e4f34e8460ec474af735b4',
    phoneNumber: '8275890986',
    user: 86
  },
  {
    tsid: '68e4f34f8460ec474af735b7',
    phoneNumber: '8275890987',
    user: 87
  },
  {
    tsid: '68e4f34f8460ec474af735ba',
    phoneNumber: '8275890988',
    user: 88
  },
  {
    tsid: '68e4f3508460ec474af735bd',
    phoneNumber: '8275890989',
    user: 89
  },
  {
    tsid: '68e4f3518460ec474af735c0',
    phoneNumber: '8275890990',
    user: 90
  },
  {
    tsid: '68e4f3528460ec474af735c3',
    phoneNumber: '8275890991',
    user: 91
  },
  {
    tsid: '68e4f3528460ec474af735c6',
    phoneNumber: '8275890992',
    user: 92
  },
  {
    tsid: '68e4f3538460ec474af735c9',
    phoneNumber: '8275890993',
    user: 93
  },
  {
    tsid: '68e4f3548460ec474af735cc',
    phoneNumber: '8275890994',
    user: 94
  },
  {
    tsid: '68e4f3548460ec474af735cf',
    phoneNumber: '8275890995',
    user: 95
  },
  {
    tsid: '68e4f3558460ec474af735d2',
    phoneNumber: '8275890996',
    user: 96
  },
  {
    tsid: '68e4f3558460ec474af735d5',
    phoneNumber: '8275890997',
    user: 97
  },
  {
    tsid: '68e4f3568460ec474af735d8',
    phoneNumber: '8275890998',
    user: 98
  },
  {
    tsid: '68e4f3578460ec474af735db',
    phoneNumber: '8275890999',
    user: 99
  },
  {
    tsid: '68e4f3578460ec474af735de',
    phoneNumber: '8275890100',
    user: 100
  }
]

async function main() {
  for (let i = 0; i < tsIds.length; i++) {
    const tsData = {
      tsid: tsIds[i].tsid,
      otp: `123456`,
    };

    try {
      const res = await axios.post(API_URL, tsData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      resp.push({
        accessToken: res.data.data.accessToken,
        user: tsIds[i].user,
      });
      // console.log(res.data.data.tsid);
    } catch (err) {
      console.error(err);
    }
  }

  console.log("🎉 All users processed");
  console.log(resp);
}

main();
