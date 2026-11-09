"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // ad.config.json
  var ad_config_default = {
    appId: "tt4df03b4dd38fcff202",
    forceMock: true,
    rewardedVideo: {
      revive: "REPLACE_WITH_AD_UNIT_ID_REVIVE",
      hint: "REPLACE_WITH_AD_UNIT_ID_HINT",
      extraTube: "REPLACE_WITH_AD_UNIT_ID_EXTRA_TUBE",
      peek: "REPLACE_WITH_AD_UNIT_ID_PEEK",
      winUndo: "REPLACE_WITH_AD_UNIT_ID_WIN_UNDO",
      themeUnlock: "REPLACE_WITH_AD_UNIT_ID_THEME_UNLOCK"
    }
  };

  // src/content/levels.json
  var levels_default = {
    version: 1,
    game: "water-sort",
    levels: [
      {
        id: 1,
        name: "第一杯",
        tier: "warmup",
        capacity: 4,
        tubes: [
          [
            0,
            0,
            0
          ],
          [
            1,
            1,
            1
          ],
          [
            0
          ],
          [
            1
          ],
          []
        ],
        orders: [
          1,
          0
        ],
        tableSlots: 2,
        guideMoves: 2,
        tutorial: [
          {
            text: "先点这只还剩一点的杯子",
            tube: 2,
            wait: "select"
          },
          {
            text: "倒进同色里。倒满会先放到桌上，队首先不喝",
            tube: 0,
            wait: "pour"
          },
          {
            text: "队首想喝另一色。等那杯也倒满，两位都会离开。",
            wait: "dismiss"
          }
        ],
        origin: "handcrafted"
      },
      {
        id: 2,
        name: "先给队首",
        tier: "warmup",
        capacity: 4,
        tubes: [
          [
            0,
            0,
            0
          ],
          [
            1,
            1,
            1
          ],
          [
            0
          ],
          [
            1
          ],
          []
        ],
        orders: [
          0,
          1
        ],
        tableSlots: 1,
        guideMoves: 2,
        origin: "handcrafted"
      },
      {
        id: 3,
        name: "先放桌上",
        tier: "warmup",
        capacity: 4,
        tubes: [
          [
            1,
            1,
            1,
            0
          ],
          [
            0,
            0,
            0
          ],
          [
            1
          ],
          []
        ],
        orders: [
          1,
          0
        ],
        tableSlots: 2,
        guideMoves: 2,
        origin: "handcrafted"
      },
      {
        id: 4,
        name: "可以等一杯",
        tier: "warmup",
        capacity: 4,
        tubes: [
          [
            0,
            0,
            0
          ],
          [
            1,
            1,
            1
          ],
          [
            2,
            2,
            2
          ],
          [
            0
          ],
          [
            1
          ],
          [
            2
          ],
          []
        ],
        orders: [
          0,
          1,
          2
        ],
        tableSlots: 2,
        guideMoves: 3,
        origin: "handcrafted"
      },
      {
        id: 5,
        name: "问号下面",
        tier: "warmup",
        capacity: 4,
        tubes: [
          [
            0,
            0,
            1,
            1
          ],
          [
            0,
            0
          ],
          [
            1,
            1
          ],
          [],
          []
        ],
        orders: [
          0,
          1
        ],
        tableSlots: 1,
        fog: true,
        guideMoves: 3,
        origin: "handcrafted"
      },
      {
        id: 6,
        name: "桌上等一下",
        tier: "easy",
        capacity: 4,
        tubes: [
          [
            0,
            0,
            0,
            1
          ],
          [
            1,
            1,
            1
          ],
          [
            2,
            2,
            2
          ],
          [
            0
          ],
          [
            2
          ],
          []
        ],
        orders: [
          0,
          1,
          2
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 3,
        origin: "handcrafted"
      },
      {
        id: 7,
        name: "别抢做",
        tier: "easy",
        capacity: 4,
        tubes: [
          [
            0,
            0,
            2
          ],
          [
            1,
            1,
            1
          ],
          [
            2,
            2
          ],
          [
            0,
            0
          ],
          [
            1
          ],
          [
            2
          ],
          []
        ],
        orders: [
          0,
          1,
          2
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 4,
        origin: "handcrafted"
      },
      {
        id: 8,
        name: "两杯先等",
        tier: "easy",
        capacity: 4,
        tubes: [
          [
            2,
            0,
            0,
            0
          ],
          [
            0
          ],
          [
            2,
            1,
            1,
            1
          ],
          [
            1
          ],
          [
            2,
            2
          ]
        ],
        orders: [
          2,
          0,
          1
        ],
        tableSlots: 3,
        fog: true,
        guideMoves: 4,
        origin: "handcrafted"
      },
      {
        id: 9,
        name: "队首埋住了",
        tier: "easy",
        capacity: 4,
        tubes: [
          [
            1,
            1,
            0,
            0
          ],
          [
            2,
            2,
            0,
            0
          ],
          [
            1,
            1
          ],
          [
            2,
            2
          ],
          []
        ],
        orders: [
          0,
          1,
          2
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 4,
        origin: "handcrafted"
      },
      {
        id: 10,
        name: "先化冰块",
        tier: "medium",
        capacity: 4,
        tubes: [
          [
            2,
            0,
            0,
            0
          ],
          [
            0
          ],
          [
            2,
            1,
            1,
            1
          ],
          [
            1
          ],
          [
            2,
            2
          ],
          []
        ],
        orders: [
          2,
          0,
          1
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 2,
            color: 0
          }
        ],
        guideMoves: 5,
        origin: "handcrafted"
      },
      {
        id: 11,
        name: "小杯排队",
        tier: "medium",
        capacity: 3,
        tubes: [
          [
            0,
            0
          ],
          [
            1,
            2
          ],
          [
            0
          ],
          [
            1
          ],
          [
            1
          ],
          [
            2,
            2
          ],
          []
        ],
        orders: [
          1,
          0,
          2
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 0,
            color: 1
          }
        ],
        guideMoves: 4,
        origin: "handcrafted"
      },
      {
        id: 12,
        name: "绕一下",
        tier: "medium",
        capacity: 4,
        tubes: [
          [
            0,
            1
          ],
          [
            1,
            0
          ],
          [
            0,
            1
          ],
          [
            1,
            0
          ],
          [],
          []
        ],
        orders: [
          0,
          1
        ],
        tableSlots: 1,
        fog: true,
        guideMoves: 6,
        origin: "handcrafted"
      },
      {
        id: 13,
        name: "四色出餐",
        tier: "medium",
        capacity: 4,
        tubes: [
          [
            3
          ],
          [
            0,
            0,
            2,
            3
          ],
          [
            3
          ],
          [
            2,
            3
          ],
          [
            0,
            0,
            1,
            2
          ],
          [
            1,
            1,
            1,
            2
          ]
        ],
        orders: [
          3,
          2,
          1,
          0
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 8,
        origin: "handcrafted"
      },
      {
        id: 14,
        name: "座位要算",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            3,
            3,
            3,
            1
          ],
          [
            1,
            2
          ],
          [
            2
          ],
          [
            2
          ],
          [
            0,
            0,
            0,
            3
          ],
          [
            0,
            1,
            2,
            1
          ]
        ],
        orders: [
          2,
          3,
          1,
          0
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 8,
        origin: "handcrafted"
      },
      {
        id: 15,
        name: "先做这一杯",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            3,
            3,
            3,
            1
          ],
          [
            1,
            1,
            3,
            2
          ],
          [
            1,
            0
          ],
          [],
          [
            0,
            2,
            0
          ],
          [
            2,
            2,
            0
          ]
        ],
        orders: [
          2,
          3,
          0,
          1
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 8,
        origin: "handcrafted"
      },
      {
        id: 16,
        name: "别连做两杯",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [],
          [],
          [
            0,
            0,
            1,
            3
          ],
          [
            2,
            2,
            2,
            3
          ],
          [
            1,
            3,
            3,
            0
          ],
          [
            1,
            1,
            2,
            0
          ]
        ],
        orders: [
          3,
          2,
          0,
          1
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 9,
        origin: "handcrafted"
      },
      {
        id: 17,
        name: "队要排好",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            0,
            0,
            0,
            2
          ],
          [],
          [
            2,
            3,
            1
          ],
          [
            1
          ],
          [
            2,
            2,
            3,
            1
          ],
          [
            0,
            3,
            3,
            1
          ]
        ],
        orders: [
          1,
          3,
          2,
          0
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 9,
        origin: "handcrafted"
      },
      {
        id: 18,
        name: "打烊之前",
        tier: "hard",
        capacity: 4,
        tubes: [
          [
            0,
            2,
            2,
            0
          ],
          [
            2,
            2,
            0,
            3
          ],
          [
            1,
            1
          ],
          [
            1
          ],
          [
            1
          ],
          [
            3,
            3,
            0,
            3
          ]
        ],
        orders: [
          1,
          3,
          2,
          0
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 10,
        origin: "handcrafted"
      },
      {
        id: 19,
        name: "晨露",
        tier: "medium",
        capacity: 4,
        tubes: [
          [
            3,
            1,
            3
          ],
          [
            0,
            2,
            3,
            1
          ],
          [
            2,
            2,
            3,
            1
          ],
          [
            1
          ],
          [
            0,
            0,
            0,
            2
          ],
          []
        ],
        orders: [
          1,
          3,
          2,
          0
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 4,
            color: 1
          }
        ],
        guideMoves: 10,
        origin: "seeded"
      },
      {
        id: 20,
        name: "浅桃",
        tier: "medium",
        capacity: 4,
        tubes: [
          [
            3,
            3,
            3,
            1
          ],
          [
            3,
            2
          ],
          [
            1,
            1,
            2
          ],
          [
            2,
            0,
            2
          ],
          [],
          [
            0,
            0,
            0,
            1
          ]
        ],
        orders: [
          1,
          3,
          0,
          2
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 4,
            color: 1
          }
        ],
        guideMoves: 8,
        origin: "seeded"
      },
      {
        id: 21,
        name: "薄荷",
        tier: "medium",
        capacity: 4,
        tubes: [
          [
            0,
            0,
            1,
            3
          ],
          [
            3,
            3
          ],
          [
            1,
            0,
            3
          ],
          [
            2,
            2,
            2
          ],
          [
            1,
            0,
            1,
            2
          ],
          []
        ],
        orders: [
          3,
          2,
          0,
          1
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 4,
            color: 3
          }
        ],
        guideMoves: 9,
        origin: "seeded"
      },
      {
        id: 22,
        name: "奶霜",
        tier: "medium",
        capacity: 4,
        tubes: [
          [
            1
          ],
          [
            0,
            2,
            2,
            1
          ],
          [],
          [
            0,
            2,
            1
          ],
          [
            3,
            3,
            3,
            0
          ],
          [
            3,
            0,
            1,
            2
          ]
        ],
        orders: [
          2,
          1,
          0,
          3
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 4,
            color: 2
          }
        ],
        guideMoves: 11,
        origin: "seeded"
      },
      {
        id: 23,
        name: "杏子",
        tier: "medium",
        capacity: 4,
        tubes: [
          [
            2,
            2,
            2,
            3
          ],
          [
            0,
            0,
            1
          ],
          [
            3,
            3,
            3,
            1
          ],
          [
            2,
            0,
            1
          ],
          [
            0,
            1
          ],
          []
        ],
        orders: [
          1,
          3,
          0,
          2
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 0,
            color: 1
          }
        ],
        guideMoves: 9,
        origin: "seeded"
      },
      {
        id: 24,
        name: "晴空",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            2,
            2,
            2,
            1
          ],
          [
            0,
            3,
            3
          ],
          [
            3,
            0,
            0,
            3
          ],
          [
            1,
            1,
            1,
            2
          ],
          [
            0
          ],
          []
        ],
        orders: [
          0,
          3,
          2,
          1
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 0,
            color: 3
          },
          {
            tube: 3,
            color: 0
          }
        ],
        guideMoves: 10,
        origin: "seeded"
      },
      {
        id: 25,
        name: "丁香",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            1
          ],
          [
            2,
            2,
            2,
            3
          ],
          [
            0,
            0,
            0,
            1
          ],
          [],
          [
            3,
            3,
            3,
            2
          ],
          [
            1,
            0,
            1
          ]
        ],
        orders: [
          0,
          1,
          2,
          3
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 1,
            color: 1
          },
          {
            tube: 4,
            color: 0
          }
        ],
        guideMoves: 8,
        origin: "seeded"
      },
      {
        id: 26,
        name: "蜜瓜",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [],
          [
            1,
            1,
            1,
            3
          ],
          [
            2,
            2,
            0
          ],
          [
            3,
            3,
            3,
            1
          ],
          [
            0,
            2
          ],
          [
            0,
            0,
            2
          ]
        ],
        orders: [
          0,
          2,
          1,
          3
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 1,
            color: 0
          },
          {
            tube: 3,
            color: 2
          }
        ],
        guideMoves: 8,
        origin: "seeded"
      },
      {
        id: 27,
        name: "软云",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            1,
            2,
            0,
            3
          ],
          [],
          [
            2,
            2,
            0,
            3
          ],
          [],
          [
            0,
            3,
            3,
            0
          ],
          [
            1,
            1,
            1,
            2
          ]
        ],
        orders: [
          3,
          0,
          2,
          1
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 3,
            color: 3
          },
          {
            tube: 5,
            color: 0
          }
        ],
        guideMoves: 10,
        origin: "seeded"
      },
      {
        id: 28,
        name: "晚霞",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [],
          [
            0,
            0,
            3,
            2
          ],
          [
            1,
            1,
            2
          ],
          [
            1,
            1,
            2
          ],
          [
            3,
            3,
            3,
            0
          ],
          [
            0,
            2
          ]
        ],
        orders: [
          3,
          0,
          2,
          1
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 2,
            color: 0
          },
          {
            tube: 3,
            color: 3
          }
        ],
        guideMoves: 8,
        origin: "seeded"
      },
      {
        id: 29,
        name: "泡泡",
        tier: "medium",
        capacity: 4,
        tubes: [
          [
            2,
            2,
            2,
            3
          ],
          [
            4,
            3
          ],
          [
            4,
            4,
            4,
            3
          ],
          [],
          [
            1,
            0
          ],
          [
            1,
            1,
            1,
            0
          ],
          [
            0,
            0,
            3,
            2
          ]
        ],
        orders: [
          2,
          4,
          3,
          0,
          1
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 10,
        origin: "seeded"
      },
      {
        id: 30,
        name: "果冻",
        tier: "medium",
        capacity: 4,
        tubes: [
          [
            2,
            2,
            0,
            1
          ],
          [
            4,
            4,
            4,
            0
          ],
          [],
          [
            2,
            2,
            3
          ],
          [
            3,
            4,
            3,
            1
          ],
          [
            1,
            0,
            0
          ],
          [
            3,
            1
          ]
        ],
        orders: [
          1,
          4,
          3,
          2,
          0
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 12,
        origin: "seeded"
      },
      {
        id: 31,
        name: "砂糖",
        tier: "medium",
        capacity: 4,
        tubes: [
          [
            0,
            0,
            0,
            1
          ],
          [
            4,
            4,
            3
          ],
          [
            2,
            2,
            3
          ],
          [
            1,
            1,
            1,
            3
          ],
          [],
          [
            3,
            4
          ],
          [
            2,
            2,
            0,
            4
          ]
        ],
        orders: [
          4,
          1,
          3,
          2,
          0
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 10,
        origin: "seeded"
      },
      {
        id: 32,
        name: "青提",
        tier: "medium",
        capacity: 4,
        tubes: [
          [
            3,
            4,
            2
          ],
          [],
          [
            0,
            0,
            1,
            2
          ],
          [
            3,
            3,
            3,
            0
          ],
          [
            4,
            4,
            1,
            2
          ],
          [
            4,
            1,
            1,
            0
          ],
          [
            2
          ]
        ],
        orders: [
          2,
          1,
          0,
          4,
          3
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 11,
        origin: "seeded"
      },
      {
        id: 33,
        name: "樱粉",
        tier: "medium",
        capacity: 4,
        tubes: [
          [],
          [
            3,
            3,
            3,
            2
          ],
          [
            4,
            2,
            1,
            2
          ],
          [],
          [
            0,
            0,
            0,
            1
          ],
          [
            1,
            0,
            2,
            3
          ],
          [
            4,
            4,
            4,
            1
          ]
        ],
        orders: [
          3,
          2,
          0,
          1,
          4
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 12,
        origin: "seeded"
      },
      {
        id: 34,
        name: "湖绿",
        tier: "medium",
        capacity: 4,
        tubes: [
          [],
          [
            1,
            1,
            1,
            0
          ],
          [
            4,
            4,
            2,
            3
          ],
          [
            0,
            0,
            3,
            2
          ],
          [
            2
          ],
          [
            1,
            3,
            2
          ],
          [
            0,
            4,
            4,
            3
          ]
        ],
        orders: [
          2,
          3,
          1,
          4,
          0
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 12,
        origin: "seeded"
      },
      {
        id: 35,
        name: "奶茶",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            1,
            3,
            0,
            3
          ],
          [],
          [
            0,
            0,
            0,
            1
          ],
          [
            2,
            1,
            1,
            2
          ],
          [],
          [
            4,
            4,
            4,
            3
          ],
          [
            2,
            2,
            4,
            3
          ]
        ],
        orders: [
          4,
          0,
          3,
          1,
          2
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 3,
            color: 4
          }
        ],
        guideMoves: 10,
        origin: "seeded"
      },
      {
        id: 36,
        name: "香芋",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            3,
            3,
            0,
            2
          ],
          [
            0,
            0,
            1
          ],
          [],
          [
            2,
            2,
            1,
            2
          ],
          [
            4,
            4,
            4,
            1
          ],
          [
            1
          ],
          [
            3,
            3,
            4,
            0
          ]
        ],
        orders: [
          2,
          1,
          4,
          0,
          3
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 4,
            color: 2
          }
        ],
        guideMoves: 10,
        origin: "seeded"
      },
      {
        id: 37,
        name: "柠檬",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            2,
            2,
            0
          ],
          [
            4,
            4,
            0,
            2
          ],
          [
            1,
            1,
            1,
            3
          ],
          [
            0
          ],
          [
            4,
            4,
            2,
            0
          ],
          [
            3,
            3,
            3,
            1
          ],
          []
        ],
        orders: [
          2,
          0,
          4,
          1,
          3
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 5,
            color: 2
          }
        ],
        guideMoves: 11,
        origin: "seeded"
      },
      {
        id: 38,
        name: "海盐",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            4,
            4,
            2,
            1
          ],
          [
            3,
            3,
            1
          ],
          [],
          [
            0,
            0,
            2
          ],
          [
            2,
            2,
            1
          ],
          [
            4,
            4,
            3,
            0
          ],
          [
            3,
            0,
            1
          ]
        ],
        orders: [
          1,
          0,
          2,
          3,
          4
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 5,
            color: 1
          }
        ],
        guideMoves: 11,
        origin: "seeded"
      },
      {
        id: 39,
        name: "初雪",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            3,
            3,
            4,
            2
          ],
          [
            4,
            3,
            0,
            1
          ],
          [
            0,
            3,
            2
          ],
          [
            2
          ],
          [
            0,
            4,
            4,
            2
          ],
          [
            1,
            1,
            1,
            0
          ]
        ],
        orders: [
          2,
          1,
          3,
          4,
          0
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 12,
        origin: "seeded"
      },
      {
        id: 40,
        name: "暖阳",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            1,
            1,
            4
          ],
          [
            4
          ],
          [
            3,
            3,
            3,
            0
          ],
          [
            0,
            1,
            1,
            4
          ],
          [
            2,
            2,
            2,
            4
          ],
          [
            3,
            0,
            0,
            2
          ]
        ],
        orders: [
          4,
          1,
          2,
          0,
          3
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 8,
        origin: "seeded"
      },
      {
        id: 41,
        name: "豆沙",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            0,
            0,
            0,
            1
          ],
          [
            4
          ],
          [
            1,
            1,
            1,
            2
          ],
          [
            3,
            3,
            4
          ],
          [
            2,
            2,
            3,
            4
          ],
          [
            0,
            4,
            2,
            3
          ]
        ],
        orders: [
          3,
          2,
          4,
          1,
          0
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 9,
        origin: "seeded"
      },
      {
        id: 42,
        name: "青柠",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            1,
            1,
            1,
            4
          ],
          [
            2
          ],
          [
            4,
            2,
            2
          ],
          [
            3,
            3,
            4,
            2
          ],
          [
            3,
            3,
            1,
            0
          ],
          [
            0,
            0,
            0,
            4
          ]
        ],
        orders: [
          2,
          0,
          1,
          4,
          3
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 8,
        origin: "seeded"
      },
      {
        id: 43,
        name: "玫瑰",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            1,
            1,
            1,
            4
          ],
          [
            2,
            3,
            4,
            1
          ],
          [
            2,
            2,
            2,
            4
          ],
          [
            0,
            0,
            0,
            4
          ],
          [
            3,
            3,
            3,
            0
          ],
          [],
          []
        ],
        orders: [
          0,
          3,
          4,
          2,
          1
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 0,
            color: 3
          },
          {
            tube: 6,
            color: 0
          }
        ],
        guideMoves: 9,
        origin: "seeded"
      },
      {
        id: 44,
        name: "松石",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            1,
            1,
            2
          ],
          [
            3,
            2
          ],
          [],
          [
            2,
            3,
            2
          ],
          [
            0,
            0,
            3,
            4
          ],
          [
            4,
            4,
            4,
            1
          ],
          [
            1,
            0,
            0,
            3
          ]
        ],
        orders: [
          2,
          4,
          3,
          0,
          1
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 4,
            color: 2
          },
          {
            tube: 6,
            color: 4
          }
        ],
        guideMoves: 12,
        origin: "seeded"
      },
      {
        id: 45,
        name: "奶油",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            0,
            0,
            0,
            3
          ],
          [
            4,
            4,
            4,
            3
          ],
          [
            3,
            2,
            2,
            4
          ],
          [
            1,
            0
          ],
          [
            1,
            1,
            1,
            2
          ],
          [],
          [
            2,
            3
          ]
        ],
        orders: [
          4,
          0,
          1,
          2,
          3
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 0,
            color: 4
          },
          {
            tube: 4,
            color: 0
          }
        ],
        guideMoves: 10,
        origin: "seeded"
      },
      {
        id: 46,
        name: "蓝莓",
        tier: "tricky",
        capacity: 4,
        tubes: [
          [
            4,
            3,
            2
          ],
          [
            3,
            1,
            0
          ],
          [
            4,
            4,
            4,
            3
          ],
          [
            1,
            1,
            1,
            2
          ],
          [],
          [
            0,
            0,
            0,
            2
          ],
          [
            3,
            2
          ]
        ],
        orders: [
          0,
          2,
          1,
          3,
          4
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 2,
            color: 2
          },
          {
            tube: 3,
            color: 0
          }
        ],
        guideMoves: 10,
        origin: "seeded"
      },
      {
        id: 47,
        name: "蜜桃",
        tier: "hard",
        capacity: 4,
        tubes: [
          [
            1,
            2,
            3
          ],
          [
            5,
            5,
            5,
            0
          ],
          [
            2,
            1,
            3
          ],
          [
            3,
            1,
            3
          ],
          [
            2,
            2,
            1
          ],
          [
            4,
            4,
            4,
            5
          ],
          [],
          [
            0,
            0,
            0,
            4
          ]
        ],
        orders: [
          1,
          3,
          2,
          0,
          5,
          4
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 13,
        origin: "seeded"
      },
      {
        id: 48,
        name: "茉莉",
        tier: "hard",
        capacity: 4,
        tubes: [
          [
            5,
            0,
            5
          ],
          [
            5,
            5,
            2,
            4
          ],
          [],
          [
            3,
            3,
            2,
            1
          ],
          [
            3,
            3,
            0
          ],
          [
            2,
            4,
            4,
            4
          ],
          [
            1,
            1,
            2
          ],
          [
            0,
            0,
            1
          ]
        ],
        orders: [
          4,
          1,
          2,
          5,
          0,
          3
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 12,
        origin: "seeded"
      },
      {
        id: 49,
        name: "薄雾",
        tier: "hard",
        capacity: 4,
        tubes: [
          [
            3,
            3,
            5,
            0
          ],
          [
            3,
            3,
            4,
            2
          ],
          [],
          [
            5,
            5,
            1,
            4
          ],
          [
            1,
            1,
            1,
            4
          ],
          [
            2
          ],
          [
            0,
            4,
            2,
            2
          ],
          [
            0,
            5,
            0
          ]
        ],
        orders: [
          2,
          4,
          3,
          1,
          5,
          0
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 13,
        origin: "seeded"
      },
      {
        id: 50,
        name: "杏花",
        tier: "hard",
        capacity: 4,
        tubes: [
          [
            3,
            3,
            4,
            4
          ],
          [
            0,
            0,
            0,
            1
          ],
          [
            3,
            5,
            5,
            0
          ],
          [
            4,
            5,
            1,
            2
          ],
          [
            5,
            3,
            1,
            2
          ],
          [],
          [
            2
          ],
          [
            4,
            1,
            2
          ]
        ],
        orders: [
          2,
          0,
          1,
          3,
          5,
          4
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 14,
        origin: "seeded"
      },
      {
        id: 51,
        name: "苏打",
        tier: "hard",
        capacity: 4,
        tubes: [
          [
            2,
            2,
            2,
            4
          ],
          [
            5,
            5,
            2,
            1
          ],
          [
            5,
            1,
            1
          ],
          [
            0,
            0,
            0,
            3
          ],
          [
            3,
            4,
            4,
            5
          ],
          [
            1
          ],
          [
            3,
            3,
            0,
            4
          ]
        ],
        orders: [
          1,
          2,
          5,
          4,
          0,
          3
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 3,
            color: 5
          },
          {
            tube: 6,
            color: 1
          }
        ],
        guideMoves: 11,
        origin: "seeded"
      },
      {
        id: 52,
        name: "葡萄",
        tier: "hard",
        capacity: 4,
        tubes: [
          [
            2,
            2,
            5,
            2
          ],
          [
            4,
            4,
            4,
            3
          ],
          [
            0,
            0,
            2
          ],
          [
            0,
            0,
            5
          ],
          [
            4,
            1,
            1,
            3
          ],
          [
            3,
            3,
            1
          ],
          [
            5,
            5,
            1
          ]
        ],
        orders: [
          5,
          2,
          0,
          3,
          1,
          4
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 1,
            color: 0
          },
          {
            tube: 4,
            color: 5
          }
        ],
        guideMoves: 11,
        origin: "seeded"
      },
      {
        id: 53,
        name: "可可",
        tier: "hard",
        capacity: 4,
        tubes: [
          [
            3,
            3,
            4,
            1
          ],
          [
            1,
            1,
            0
          ],
          [
            2,
            2,
            2,
            5
          ],
          [
            0
          ],
          [
            3,
            3,
            2,
            0
          ],
          [
            5,
            5,
            5,
            0
          ],
          [
            4,
            4,
            4,
            1
          ]
        ],
        orders: [
          1,
          4,
          0,
          5,
          2,
          3
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 2,
            color: 4
          },
          {
            tube: 4,
            color: 1
          }
        ],
        guideMoves: 9,
        origin: "seeded"
      },
      {
        id: 54,
        name: "柚子",
        tier: "hard",
        capacity: 4,
        tubes: [
          [
            2,
            2,
            3,
            3
          ],
          [
            1,
            0,
            2,
            1
          ],
          [
            4,
            4,
            4,
            1
          ],
          [
            5,
            5,
            5,
            4
          ],
          [
            0,
            1,
            3
          ],
          [
            5,
            0,
            0,
            2
          ],
          [
            3
          ]
        ],
        orders: [
          3,
          2,
          1,
          0,
          4,
          5
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 2,
            color: 3
          },
          {
            tube: 3,
            color: 2
          }
        ],
        guideMoves: 14,
        origin: "seeded"
      },
      {
        id: 55,
        name: "晴海",
        tier: "expert",
        capacity: 4,
        tubes: [
          [
            2,
            5,
            0,
            5
          ],
          [
            5,
            5,
            6,
            3
          ],
          [
            0,
            0,
            0,
            6
          ],
          [
            4,
            4,
            4,
            2
          ],
          [
            3,
            3
          ],
          [
            1,
            1,
            4,
            2
          ],
          [
            6,
            3
          ],
          [
            1,
            1,
            6,
            2
          ]
        ],
        orders: [
          3,
          0,
          5,
          6,
          2,
          4,
          1
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 14,
        origin: "seeded"
      },
      {
        id: 56,
        name: "软糖",
        tier: "expert",
        capacity: 4,
        tubes: [
          [
            4,
            4,
            6
          ],
          [
            1,
            5,
            5,
            2
          ],
          [
            0,
            0,
            0,
            6
          ],
          [
            2,
            2,
            2,
            0
          ],
          [
            6
          ],
          [
            3,
            3,
            6,
            4
          ],
          [
            1,
            1,
            1,
            3
          ],
          [
            5,
            5,
            3,
            4
          ]
        ],
        orders: [
          4,
          6,
          0,
          2,
          3,
          5,
          1
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 11,
        origin: "seeded"
      },
      {
        id: 57,
        name: "春水",
        tier: "expert",
        capacity: 4,
        tubes: [
          [
            0,
            0,
            4,
            1
          ],
          [
            0,
            0,
            5,
            3
          ],
          [
            1,
            1,
            1,
            5
          ],
          [
            2,
            2
          ],
          [
            6,
            6,
            6,
            3
          ],
          [
            3,
            3,
            2
          ],
          [
            4,
            4,
            4,
            6
          ],
          [
            5,
            5,
            2
          ]
        ],
        orders: [
          2,
          3,
          1,
          5,
          6,
          4,
          0
        ],
        tableSlots: 2,
        fog: true,
        guideMoves: 12,
        origin: "seeded"
      },
      {
        id: 58,
        name: "秋梨",
        tier: "expert",
        capacity: 4,
        tubes: [
          [
            2,
            2,
            2,
            4
          ],
          [
            1,
            1,
            2,
            6
          ],
          [
            1,
            1,
            4,
            0
          ],
          [
            3,
            3,
            3,
            0
          ],
          [],
          [
            6,
            6,
            6,
            3
          ],
          [
            4,
            4,
            5,
            0
          ],
          [
            5,
            5,
            0,
            5
          ]
        ],
        orders: [
          0,
          3,
          5,
          4,
          6,
          2,
          1
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 0,
            color: 3
          },
          {
            tube: 5,
            color: 0
          }
        ],
        guideMoves: 12,
        origin: "seeded"
      },
      {
        id: 59,
        name: "白桃",
        tier: "expert",
        capacity: 4,
        tubes: [
          [
            3,
            3,
            2,
            1
          ],
          [
            0,
            0,
            5,
            6
          ],
          [
            0,
            0,
            6,
            3
          ],
          [
            4,
            4,
            4,
            2
          ],
          [
            1
          ],
          [
            2,
            1,
            1
          ],
          [
            6,
            5,
            2,
            4
          ],
          [
            5,
            5,
            3,
            6
          ]
        ],
        orders: [
          1,
          4,
          2,
          6,
          3,
          5,
          0
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 1,
            color: 4
          },
          {
            tube: 6,
            color: 1
          }
        ],
        guideMoves: 16,
        origin: "seeded"
      },
      {
        id: 60,
        name: "青梅",
        tier: "expert",
        capacity: 4,
        tubes: [
          [
            6,
            6,
            3,
            4
          ],
          [
            0,
            0,
            6,
            3
          ],
          [
            5,
            5,
            5,
            3
          ],
          [
            2,
            2,
            2,
            6
          ],
          [
            1,
            1,
            4,
            1
          ],
          [
            3,
            1
          ],
          [
            4,
            2,
            0,
            5
          ],
          [
            0,
            4
          ]
        ],
        orders: [
          1,
          3,
          5,
          6,
          2,
          4,
          0
        ],
        tableSlots: 2,
        fog: true,
        ice: [
          {
            tube: 2,
            color: 1
          },
          {
            tube: 6,
            color: 3
          }
        ],
        guideMoves: 15,
        origin: "seeded"
      }
    ]
  };

  // src/core/rules.ts
  function cloneTubes(tubes) {
    return tubes.map((tube) => tube.slice());
  }
  function topRun(tube) {
    if (tube.length === 0) return null;
    const color = tube[tube.length - 1];
    let count = 0;
    for (let i = tube.length - 1; i >= 0 && tube[i] === color; i--) count++;
    return { color, count };
  }
  function pourAmount(src, dst, capacity) {
    const run = topRun(src);
    if (!run) return 0;
    const space = capacity - dst.length;
    if (space <= 0) return 0;
    if (dst.length > 0 && dst[dst.length - 1] !== run.color) return 0;
    return Math.min(run.count, space);
  }
  function applyPour(tubes, move) {
    const next = cloneTubes(tubes);
    const src = next[move.src];
    const dst = next[move.dst];
    if (!src || !dst) throw new Error("pour index out of range");
    const color = src[src.length - 1];
    if (color === void 0) throw new Error("pour from empty tube");
    src.splice(src.length - move.amount, move.amount);
    for (let i = 0; i < move.amount; i++) dst.push(color);
    return next;
  }
  function legalMoves(tubes, capacity, blocked) {
    const moves = [];
    for (let src = 0; src < tubes.length; src++) {
      if (blocked?.[src]) continue;
      for (let dst = 0; dst < tubes.length; dst++) {
        if (src === dst || blocked?.[dst]) continue;
        const amount = pourAmount(tubes[src], tubes[dst], capacity);
        if (amount > 0) moves.push({ src, dst, amount });
      }
    }
    return moves;
  }

  // src/core/veil.ts
  function openingConceal(tubes, fog) {
    return tubes.map((tube) => {
      if (!fog || tube.length === 0) return tube.map(() => false);
      const top = tube[tube.length - 1];
      let run = 0;
      for (let i = tube.length - 1; i >= 0 && tube[i] === top; i--) run += 1;
      const hiddenUntil = tube.length - run;
      return tube.map((_, index) => index < hiddenUntil);
    });
  }
  function cloneConceal(conceal) {
    return conceal.map((row) => row.slice());
  }
  function revealTops(tubes, conceal) {
    return tubes.map((tube, index) => {
      const row = (conceal[index] ?? []).slice();
      row.length = tube.length;
      for (let i = 0; i < tube.length; i++) if (row[i] === void 0) row[i] = false;
      if (tube.length === 0) return [];
      const color = tube[tube.length - 1];
      for (let i = tube.length - 1; i >= 0 && tube[i] === color; i--) row[i] = false;
      return row;
    });
  }
  function pourConceal(conceal, src, dst, amount) {
    const next = cloneConceal(conceal);
    while (next.length <= Math.max(src, dst)) next.push([]);
    const from = next[src] ?? [];
    const to = next[dst] ?? [];
    const moving = from.splice(Math.max(0, from.length - amount), amount);
    while (moving.length < amount) moving.unshift(false);
    to.push(...moving);
    next[src] = from;
    next[dst] = to;
    return next;
  }
  function syncConceal(tubes, conceal) {
    return tubes.map((tube, index) => {
      if (tube.length === 0) return [];
      const row = (conceal[index] ?? []).slice();
      row.length = tube.length;
      for (let i = 0; i < tube.length; i++) if (row[i] === void 0) row[i] = false;
      return row;
    });
  }
  function iceMask(tubeCount, ice) {
    const mask = Array.from({ length: tubeCount }, () => null);
    for (const lock of ice ?? []) {
      if (lock.tube >= 0 && lock.tube < tubeCount) mask[lock.tube] = lock.color;
    }
    return mask;
  }
  function thaw(frozen, plated) {
    if (plated.length === 0) return frozen.slice();
    const done = new Set(plated);
    return frozen.map((lock) => lock !== null && done.has(lock) ? null : lock);
  }
  function blockedOf(frozen) {
    return frozen.map((lock) => lock !== null);
  }
  function hasConcealed(conceal) {
    return conceal.some((row) => row.some(Boolean));
  }

  // src/core/orders.ts
  var DEFAULT_TABLE_SLOTS = 2;
  function fullColor(tube, capacity) {
    if (tube.length !== capacity || tube.length === 0) return null;
    const color = tube[0];
    for (let i = 1; i < tube.length; i++) if (tube[i] !== color) return null;
    return color;
  }
  function resolveService(tubes, table, orders, tableSlots, capacity, blocked) {
    const nextTubes = cloneTubes(tubes);
    const nextTable = table.slice();
    const nextOrders = orders.slice();
    const plated = [];
    const served = [];
    while (nextOrders.length > 0) {
      let acted = false;
      if (nextTable.length < tableSlots) {
        const want2 = nextOrders[0];
        let pick = -1;
        for (let i = 0; i < nextTubes.length; i++) {
          if (blocked?.[i]) continue;
          if (fullColor(nextTubes[i], capacity) === want2) {
            pick = i;
            break;
          }
        }
        if (pick < 0) {
          for (let i = 0; i < nextTubes.length; i++) {
            if (blocked?.[i]) continue;
            if (fullColor(nextTubes[i], capacity) !== null) {
              pick = i;
              break;
            }
          }
        }
        if (pick >= 0) {
          const color = fullColor(nextTubes[pick], capacity);
          nextTubes[pick] = [];
          nextTable.push(color);
          plated.push(color);
          acted = true;
        }
      }
      const want = nextOrders[0];
      const at = nextTable.indexOf(want);
      if (at >= 0) {
        nextTable.splice(at, 1);
        nextOrders.shift();
        served.push(want);
        acted = true;
      }
      if (!acted) break;
    }
    return { tubes: nextTubes, table: nextTable, orders: nextOrders, plated, served };
  }
  function servicePhase(tubes, table, orders, tableSlots, capacity, blocked) {
    if (orders.length === 0) return "won";
    const tableFull = table.length >= tableSlots;
    const noMoves = legalMoves(tubes, capacity, blocked).length === 0;
    if (tableFull || noMoves) return "stuck";
    return "playing";
  }
  function stuckReason(tubes, table, orders, tableSlots, capacity, blocked) {
    if (orders.length === 0) return null;
    const tableFull = table.length >= tableSlots;
    const noMoves = legalMoves(tubes, capacity, blocked).length === 0;
    if (tableFull && noMoves) return "both";
    if (tableFull) return "table";
    if (noMoves) return "moves";
    return null;
  }
  function settleBoard(tubes, conceal, table, orders, tableSlots, capacity, frozen) {
    let nextTubes = cloneTubes(tubes);
    let nextConceal = cloneConceal(conceal);
    let nextTable = table.slice();
    let nextOrders = orders.slice();
    let nextFrozen = frozen.slice();
    const plated = [];
    const served = [];
    for (let guard = 0; guard < 8; guard++) {
      nextConceal = revealTops(nextTubes, syncConceal(nextTubes, nextConceal));
      const resolved = resolveService(
        nextTubes,
        nextTable,
        nextOrders,
        tableSlots,
        capacity,
        blockedOf(nextFrozen)
      );
      nextTubes = resolved.tubes;
      nextTable = resolved.table;
      nextOrders = resolved.orders;
      plated.push(...resolved.plated);
      served.push(...resolved.served);
      nextConceal = revealTops(nextTubes, syncConceal(nextTubes, nextConceal));
      const thawed = thaw(nextFrozen, resolved.plated);
      const changed = resolved.plated.length > 0 || resolved.served.length > 0 || thawed.some((lock, index) => lock !== nextFrozen[index]);
      nextFrozen = thawed;
      if (!changed) break;
    }
    return {
      tubes: nextTubes,
      conceal: nextConceal,
      table: nextTable,
      orders: nextOrders,
      frozen: nextFrozen,
      plated,
      served
    };
  }
  function inferOrders(tubes) {
    return [...new Set(tubes.flat())].sort((a, b) => a - b);
  }
  function replayOrderSolution(tubes, capacity, orders, tableSlots, solution, ice) {
    let state = settleBoard(tubes, openingConceal(tubes, false), [], orders, tableSlots, capacity, iceMask(tubes.length, ice));
    if (state.orders.length === 0) return "开局已经出完";
    for (let i = 0; i < solution.length; i++) {
      const move = solution[i];
      if (state.frozen[move.src] !== null || state.frozen[move.dst] !== null) {
        return `第 ${i + 1} 步碰到还冻着的杯子 (${move.src}->${move.dst})`;
      }
      const amount = pourAmount(state.tubes[move.src] ?? [], state.tubes[move.dst] ?? [], capacity);
      if (amount <= 0 || amount !== move.amount) {
        return `第 ${i + 1} 步不是合法的整段倒水 (${move.src}->${move.dst} 记录 ${move.amount} 实际 ${amount})`;
      }
      const poured = applyPour(state.tubes, move);
      const conceal = revealTops(poured, pourConceal(state.conceal, move.src, move.dst, move.amount));
      state = settleBoard(poured, conceal, state.table, state.orders, tableSlots, capacity, state.frozen);
      const phase = servicePhase(state.tubes, state.table, state.orders, tableSlots, capacity, blockedOf(state.frozen));
      if (phase === "won") {
        if (i !== solution.length - 1) return `第 ${i + 1} 步就已经出完了`;
        return null;
      }
      if (phase === "stuck") return `第 ${i + 1} 步之后卡住了`;
    }
    return "走完解法仍有客人没喝到";
  }
  function deriveServeOrders(tubes, capacity, solution) {
    let state = cloneTubes(tubes);
    const derived = [];
    const sweep = () => {
      let guard = 0;
      while (guard++ < state.length + 2) {
        let found = false;
        for (let i = 0; i < state.length; i++) {
          const color = fullColor(state[i], capacity);
          if (color === null) continue;
          derived.push(color);
          state[i] = [];
          found = true;
          break;
        }
        if (!found) break;
      }
    };
    sweep();
    for (let step = 0; step < solution.length; step++) {
      const move = solution[step];
      const amount = pourAmount(state[move.src] ?? [], state[move.dst] ?? [], capacity);
      if (amount <= 0 || amount !== move.amount) return { error: `出餐后第 ${step + 1} 步走不通` };
      state = applyPour(state, move);
      sweep();
    }
    if (state.some((tube) => tube.length > 0)) return { error: "解法结束后还有水没端走" };
    if (derived.length === 0) return { error: "没有端出任何一杯" };
    return { orders: derived };
  }
  function largestRun(tubes, color) {
    let best = 0;
    for (const tube of tubes) {
      let run = 0;
      for (const cell of tube) {
        if (cell === color) {
          run += 1;
          if (run > best) best = run;
        } else run = 0;
      }
    }
    return best;
  }
  function suggestServeMove(tubes, capacity, target, tableCount, tableSlots, blocked) {
    const moves = legalMoves(tubes, capacity, blocked);
    if (moves.length === 0) return null;
    const beforeRun = largestRun(tubes, target);
    let best = null;
    let bestScore = -Infinity;
    for (const move of moves) {
      const next = applyPour(tubes, move);
      const dest = next[move.dst];
      const src = tubes[move.src];
      const color = src[src.length - 1];
      const finished = fullColor(dest, capacity);
      let score = (largestRun(next, target) - beforeRun) * 28 + move.amount;
      if (finished === target) score += 320;
      else if (finished !== null) {
        const seatsLeft = tableSlots - tableCount;
        score += seatsLeft <= 1 ? -220 : 18;
      }
      if (color === target) score += 36;
      const uncovered = next[move.src];
      if (color !== target && uncovered.length > 0 && uncovered[uncovered.length - 1] === target) score += 42;
      if (color === target && (tubes[move.dst].length === 0 || tubes[move.dst][tubes[move.dst].length - 1] === target)) {
        score += 16;
      }
      if (tubes[move.dst].length === 0 && color !== target) score -= 8;
      if (score > bestScore) {
        bestScore = score;
        best = move;
      }
    }
    return best;
  }

  // src/core/generate.ts
  function mulberry32(seed) {
    let state = seed >>> 0;
    return () => {
      state = state + 1831565813 | 0;
      let t = Math.imul(state ^ state >>> 15, 1 | state);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function reverseMoves(tubes, capacity) {
    const found = [];
    for (let src = 0; src < tubes.length; src++) {
      const tube = tubes[src];
      const run = topRun(tube);
      if (!run) continue;
      const srcFull = tube.length === capacity;
      const pure = tube.every((color) => color === run.color);
      for (let dst = 0; dst < tubes.length; dst++) {
        if (dst === src) continue;
        const space = capacity - tubes[dst].length;
        if (space <= 0) continue;
        const dstTop = topRun(tubes[dst]);
        const sameLanding = dstTop?.color === run.color;
        if (!srcFull && sameLanding) continue;
        const maxAmount = Math.min(run.count, space);
        for (let amount = 1; amount <= maxAmount; amount++) {
          const leavesSame = amount < run.count;
          const leavesEmpty = tube.length - amount === 0;
          if (!leavesSame && !leavesEmpty) continue;
          if (pure && leavesEmpty && tubes[dst].length === 0) continue;
          found.push({ src, dst, amount });
        }
      }
    }
    return found;
  }
  function applyReverse(tubes, move) {
    const next = cloneTubes(tubes);
    const color = next[move.src][next[move.src].length - 1];
    if (color === void 0) throw new Error("reverse from empty");
    next[move.src].splice(next[move.src].length - move.amount, move.amount);
    for (let i = 0; i < move.amount; i++) next[move.dst].push(color);
    return next;
  }
  function pickWeighted(items, weight, rng) {
    let total = 0;
    const weights = items.map((item) => {
      const value = Math.max(0, weight(item));
      total += value;
      return value;
    });
    if (total <= 0) return items[Math.floor(rng() * items.length)];
    let ticket = rng() * total;
    for (let i = 0; i < items.length; i++) {
      ticket -= weights[i];
      if (ticket <= 0) return items[i];
    }
    return items[items.length - 1];
  }
  function scrambleSolved(colorCount, emptyCount, capacity, steps, rng) {
    const tubes = [];
    for (let color = 0; color < colorCount; color++) {
      tubes.push(Array.from({ length: capacity }, () => color));
    }
    for (let i = 0; i < emptyCount; i++) tubes.push([]);
    const forwards = [];
    for (let step = 0; step < steps; step++) {
      const options = reverseMoves(tubes, capacity);
      if (options.length === 0) break;
      const move = pickWeighted(options, (option) => reverseWeight(tubes, option), rng);
      const next = applyReverse(tubes, move);
      tubes.splice(0, tubes.length, ...next);
      forwards.push({ src: move.dst, dst: move.src, amount: move.amount });
    }
    forwards.reverse();
    const order = tubes.map((_, index) => index);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const swap = order[i];
      order[i] = order[j];
      order[j] = swap;
    }
    const oldToNew = new Array(order.length);
    order.forEach((oldIndex, newIndex) => {
      oldToNew[oldIndex] = newIndex;
    });
    return {
      tubes: order.map((oldIndex) => tubes[oldIndex]),
      solution: forwards.map((move) => ({
        src: oldToNew[move.src],
        dst: oldToNew[move.dst],
        amount: move.amount
      }))
    };
  }
  function reverseWeight(tubes, move) {
    const landing = tubes[move.dst];
    const color = tubes[move.src][tubes[move.src].length - 1];
    if (landing.length === 0) return 3;
    if (landing[landing.length - 1] !== color) return move.amount === 1 ? 8 : 5;
    return 1;
  }
  var CAMPAIGN_BANDS = [
    { from: 19, to: 23, colors: 4, empty: 2, minSteps: 8, maxSteps: 12, tier: "medium", minEmptyLeft: 1, tableSlots: 2, ice: "single", iceTiming: "early" },
    { from: 24, to: 28, colors: 4, empty: 2, minSteps: 10, maxSteps: 14, tier: "tricky", minEmptyLeft: 1, tableSlots: 2, ice: "double" },
    { from: 29, to: 34, colors: 5, empty: 2, minSteps: 10, maxSteps: 16, tier: "medium", minEmptyLeft: 1, tableSlots: 2, ice: "none" },
    { from: 35, to: 38, colors: 5, empty: 2, minSteps: 12, maxSteps: 16, tier: "tricky", minEmptyLeft: 1, tableSlots: 2, ice: "single" },
    { from: 39, to: 42, colors: 5, empty: 1, minSteps: 12, maxSteps: 18, tier: "tricky", minEmptyLeft: 0, tableSlots: 2, ice: "none" },
    { from: 43, to: 46, colors: 5, empty: 2, minSteps: 12, maxSteps: 18, tier: "tricky", minEmptyLeft: 1, tableSlots: 2, ice: "layered" },
    { from: 47, to: 50, colors: 6, empty: 2, minSteps: 12, maxSteps: 18, tier: "hard", minEmptyLeft: 1, tableSlots: 2, ice: "none" },
    { from: 51, to: 54, colors: 6, empty: 1, minSteps: 14, maxSteps: 20, tier: "hard", minEmptyLeft: 0, tableSlots: 2, ice: "double" },
    { from: 55, to: 57, colors: 7, empty: 1, minSteps: 14, maxSteps: 20, tier: "expert", minEmptyLeft: 0, tableSlots: 2, ice: "none" },
    { from: 58, to: 60, colors: 7, empty: 1, minSteps: 16, maxSteps: 22, tier: "expert", minEmptyLeft: 0, tableSlots: 2, ice: "layered" }
  ];
  function generateProceduralLevel(options) {
    const capacity = options.capacity ?? 4;
    const tableSlots = options.tableSlots ?? 2;
    const rng = mulberry32(options.seed >>> 0);
    const scrambled = scrambleSolved(options.colors, options.empty, capacity, options.steps, rng);
    const derived = deriveServeOrders(scrambled.tubes, capacity, scrambled.solution);
    if ("error" in derived) throw new Error(derived.error);
    const replayError = replayOrderSolution(scrambled.tubes, capacity, derived.orders, tableSlots, scrambled.solution);
    if (replayError) throw new Error(replayError);
    return { tubes: scrambled.tubes, solution: scrambled.solution, capacity, orders: derived.orders, tableSlots };
  }

  // src/content/chapters.ts
  var HANDCRAFTED_CHAPTERS = [
    { from: 1, to: 4 },
    { from: 5, to: 9 },
    { from: 10, to: 11 },
    { from: 12, to: 18 }
  ];
  function campaignChapters() {
    return [
      ...HANDCRAFTED_CHAPTERS,
      ...CAMPAIGN_BANDS.map((band) => ({ from: band.from, to: band.to }))
    ];
  }
  function chapterHasThreeStars(chapter, best) {
    if (chapter.to < chapter.from) return false;
    for (let id = chapter.from; id <= chapter.to; id++) {
      if (best[String(id)]?.stars !== 3) return false;
    }
    return true;
  }
  function hasFullThreeStarChapter(best) {
    return campaignChapters().some((chapter) => chapterHasThreeStars(chapter, best));
  }

  // src/content/shifts.ts
  var SHIFT_ENDS = [
    { title: "早班", end: 18 },
    { title: "午市", end: 42 },
    { title: "夜场", end: 60 }
  ];
  var CHAPTER_BLURBS = {
    "1-4": "订单和桌位。没有问号，没有冰",
    "5-9": "问号。杯口看得见，下面先盖住",
    "10-11": "问号，加上第一次单冰。第 10 关冻住杯子 2，要先做出颜色 0。第 11 关容量是 3，冻住杯子 0，要先做出颜色 1",
    "12-18": "问号。四色里的排队和桌位，没有冰",
    "19-23": "四色，2 个备用杯，2 个桌位，单冰。已知解法里，这层冰在前半段化开",
    "24-28": "四色，2 个备用杯，2 个桌位，双冰。两只杯子等两种颜色，两把钥匙没有先后链",
    "29-34": "五色，2 个备用杯，只有问号",
    "35-38": "五色，2 个备用杯，单冰",
    "39-42": "五色，只留 1 个备用杯，只有问号",
    "43-46": "五色，2 个备用杯，两层冰",
    "47-50": "六色，2 个备用杯，只有问号",
    "51-54": "六色，1 个备用杯，双冰",
    "55-57": "七色，1 个备用杯，只有问号",
    "58-60": "七色，1 个备用杯，两层冰"
  };
  function blurbFor(chapter) {
    const blurb = CHAPTER_BLURBS[`${chapter.from}-${chapter.to}`];
    if (!blurb) throw new Error(`选关没有第 ${chapter.from}–${chapter.to} 关的机制文案`);
    return blurb;
  }
  function campaignShifts() {
    const chapters = campaignChapters();
    let index = 0;
    const shifts = [];
    for (const spec of SHIFT_ENDS) {
      const group = [];
      while (index < chapters.length && chapters[index].to <= spec.end) {
        const chapter = chapters[index];
        group.push({ from: chapter.from, to: chapter.to, blurb: blurbFor(chapter) });
        index += 1;
      }
      const last = group[group.length - 1];
      if (!last || last.to !== spec.end) {
        throw new Error(`${spec.title} 应切在现有段边界 ${spec.end}`);
      }
      shifts.push({ title: spec.title, end: spec.end, chapters: group });
    }
    if (index !== chapters.length) {
      const rest = chapters[index];
      throw new Error(`第 ${rest.from}–${rest.to} 关没有分进早班、午市或夜场`);
    }
    let previous = 0;
    for (const shift of shifts) {
      for (const chapter of shift.chapters) {
        if (chapter.from !== previous + 1 || chapter.to < chapter.from || chapter.to > shift.end) {
          throw new Error(`${shift.title} 的第 ${chapter.from}–${chapter.to} 关没有接在现有段上`);
        }
        previous = chapter.to;
      }
    }
    return shifts;
  }
  function chapterProgress(chapter, source, currentId = source.unlocked) {
    const total = chapter.to - chapter.from + 1;
    let cleared = 0;
    let stars = 0;
    for (let id = chapter.from; id <= chapter.to; id++) {
      const record = source.best[String(id)];
      if (!record) continue;
      cleared += 1;
      stars += record.stars ?? 0;
    }
    return {
      from: chapter.from,
      to: chapter.to,
      total,
      cleared,
      stars,
      starMax: total * 3,
      current: currentId >= chapter.from && currentId <= chapter.to,
      locked: source.unlocked < chapter.from
    };
  }
  function levelSelect(levelIds, source) {
    const shifts = campaignShifts();
    const expected = [];
    for (const shift of shifts) {
      for (const chapter of shift.chapters) {
        for (let id = chapter.from; id <= chapter.to; id++) expected.push(id);
      }
    }
    const actual = [...levelIds].sort((a, b) => a - b);
    if (actual.length !== expected.length || actual.some((id, index) => id !== expected[index])) {
      throw new Error("选关关卡和 campaignChapters() 不一致");
    }
    const last = expected[expected.length - 1] ?? source.unlocked;
    const currentId = Math.min(source.unlocked, last);
    return shifts.map((shift) => {
      const chapters = shift.chapters.map((chapter) => {
        const progress = chapterProgress(chapter, source, currentId);
        const items = [];
        for (let id = chapter.from; id <= chapter.to; id++) {
          const record = source.best[String(id)];
          items.push({
            id,
            locked: id > source.unlocked,
            stars: record?.stars ?? 0,
            current: id === currentId,
            done: Boolean(record)
          });
        }
        return { ...progress, blurb: chapter.blurb, items };
      });
      return {
        title: shift.title,
        end: shift.end,
        cleared: chapters.reduce((sum, chapter) => sum + chapter.cleared, 0),
        total: chapters.reduce((sum, chapter) => sum + chapter.total, 0),
        stars: chapters.reduce((sum, chapter) => sum + chapter.stars, 0),
        starMax: chapters.reduce((sum, chapter) => sum + chapter.starMax, 0),
        chapters
      };
    });
  }

  // src/content/themes.ts
  var creamLiquids = [
    { base: "#ee6d93", light: "#ffd4e3", dark: "#d4537c" },
    { base: "#f39a62", light: "#ffe0c8", dark: "#d97842" },
    { base: "#e6be4e", light: "#fff1c2", dark: "#c99a2a" },
    { base: "#5ec99a", light: "#d7f6e8", dark: "#3aa87a" },
    { base: "#6eb0f5", light: "#dcecff", dark: "#4b8ed8" },
    { base: "#9b8ef0", light: "#e6e1ff", dark: "#7a6ad4" },
    { base: "#d589e8", light: "#f6dcff", dark: "#b56ac8" },
    { base: "#ff8fb8", light: "#ffe0ec", dark: "#e46d99" },
    { base: "#45c9bc", light: "#d4f7f3", dark: "#2aa89c" },
    { base: "#a6cc55", light: "#eef8cc", dark: "#84aa38" },
    { base: "#d9a06a", light: "#ffe6cf", dark: "#b87d48" },
    { base: "#7f93f0", light: "#e3e8ff", dark: "#6276d4" }
  ];
  var sodaLiquids = [
    { base: "#f2789a", light: "#ffd5e4", dark: "#d45578" },
    { base: "#ffb067", light: "#ffe6cf", dark: "#e08a3e" },
    { base: "#f2d56a", light: "#fff6d4", dark: "#d4b43a" },
    { base: "#3ec9a8", light: "#d4fff2", dark: "#1ea888" },
    { base: "#4aa8e8", light: "#d6eeff", dark: "#2b86c8" },
    { base: "#7f8ef0", light: "#e4e8ff", dark: "#5d6cd4" },
    { base: "#c98ef0", light: "#f4e2ff", dark: "#a86ad0" },
    { base: "#ff8eb6", light: "#ffe0ec", dark: "#e46a94" },
    { base: "#2eb8c8", light: "#d5f7fb", dark: "#1a96a6" },
    { base: "#9bc85a", light: "#eef8d4", dark: "#78a43a" },
    { base: "#e0b07a", light: "#fff0e0", dark: "#c09058" },
    { base: "#5c7ef0", light: "#e0e7ff", dark: "#4060d0" }
  ];
  var candyLiquids = [
    { base: "#ff5d8f", light: "#ffd0e0", dark: "#e43d72" },
    { base: "#ff9a4a", light: "#ffe0c4", dark: "#e07a28" },
    { base: "#ffd15c", light: "#fff3c8", dark: "#e0ae2c" },
    { base: "#3dce96", light: "#d4ffe9", dark: "#22a874" },
    { base: "#5aa6ff", light: "#d7e8ff", dark: "#3b84e0" },
    { base: "#a78bfa", light: "#ebe4ff", dark: "#8468e0" },
    { base: "#e879f0", light: "#f9d8ff", dark: "#c44ed0" },
    { base: "#ff7aa8", light: "#ffd6e6", dark: "#e25588" },
    { base: "#2ec9be", light: "#d2fff8", dark: "#1aa89c" },
    { base: "#b6e04a", light: "#f3ffc8", dark: "#8eb82a" },
    { base: "#ffb07a", light: "#ffe4d0", dark: "#e08a52" },
    { base: "#7c8cff", light: "#e2e6ff", dark: "#5a68e0" }
  ];
  var THEMES = {
    cream: {
      id: "cream",
      name: "奶油小屋",
      tagline: "暖奶油底，草莓和薄荷",
      bgTop: "#fff8f4",
      bgBottom: "#f4e4f6",
      ink: "#6d4a58",
      inkSoft: "rgba(109,74,88,0.66)",
      panel: "rgba(255,252,253,0.82)",
      panelLine: "#f3c9d6",
      accent: "#f09ab6",
      accentTop: "#ffd0e0",
      accentInk: "#6a3144",
      secondary: "#fffdfb",
      secondaryInk: "#6d4a58",
      glass: "rgba(255,255,255,0.78)",
      glassInner: "rgba(255,244,248,0.55)",
      glassStroke: "#e8b7c8",
      lip: "#f6c3d2",
      shine: "rgba(255,255,255,0.95)",
      shadow: "rgba(214,150,176,0.38)",
      danger: "#e07a90",
      star: "#f0b15a",
      hint: "#7dcfb0",
      card: "#fffafc",
      toastBg: "#7a5362",
      toastInk: "#fff8fb",
      blobs: ["rgba(255,196,214,0.55)", "rgba(214,196,255,0.45)", "rgba(190,232,214,0.5)"],
      liquids: creamLiquids
    },
    candy: {
      id: "candy",
      name: "糖果派对",
      tagline: "粉紫糖纸，水色更甜一点",
      bgTop: "#ffe7f2",
      bgBottom: "#e6dcff",
      ink: "#6a3d62",
      inkSoft: "rgba(106,61,98,0.66)",
      panel: "rgba(255,255,255,0.78)",
      panelLine: "#f5b6d4",
      accent: "#ff7eab",
      accentTop: "#ffc2d8",
      accentInk: "#ffffff",
      secondary: "#fff7fb",
      secondaryInk: "#6a3d62",
      glass: "rgba(255,255,255,0.7)",
      glassInner: "rgba(255,236,246,0.4)",
      glassStroke: "#f3a4c6",
      lip: "#ffb3d0",
      shine: "rgba(255,255,255,0.95)",
      shadow: "rgba(230,120,170,0.34)",
      danger: "#e45b86",
      star: "#ffb703",
      hint: "#5ed6b0",
      card: "#fff5fa",
      toastBg: "#8a4570",
      toastInk: "#fff7fb",
      blobs: ["rgba(255,154,196,0.38)", "rgba(190,170,255,0.42)", "rgba(160,230,210,0.4)"],
      liquids: candyLiquids
    },
    soda: {
      id: "soda",
      name: "海盐汽水",
      tagline: "浅海盐底，水色更透",
      bgTop: "#f4fcff",
      bgBottom: "#d5f2f4",
      ink: "#355c66",
      inkSoft: "rgba(53,92,102,0.66)",
      panel: "rgba(255,255,255,0.84)",
      panelLine: "#b7e0e4",
      accent: "#6ec8d4",
      accentTop: "#d7f6f8",
      accentInk: "#1e4d56",
      secondary: "#f7feff",
      secondaryInk: "#355c66",
      glass: "rgba(255,255,255,0.8)",
      glassInner: "rgba(230,248,250,0.55)",
      glassStroke: "#9fd4dc",
      lip: "#c5eef2",
      shine: "rgba(255,255,255,0.95)",
      shadow: "rgba(120,190,200,0.38)",
      danger: "#e07a90",
      star: "#f0b15a",
      hint: "#7dcfb0",
      card: "#f8feff",
      toastBg: "#3d6a72",
      toastInk: "#f4fcff",
      blobs: ["rgba(186,230,236,0.55)", "rgba(196,220,255,0.45)", "rgba(190,236,220,0.5)"],
      liquids: sodaLiquids
    }
  };
  var THEME_LIST = [THEMES.cream, THEMES.candy, THEMES.soda];
  function isThemeId(value) {
    return value === "cream" || value === "candy" || value === "soda";
  }
  function normalizeTheme(value) {
    if (value === "candy" || value === "pastel") return "candy";
    if (value === "soda") return "soda";
    if (value === "cream" || value === "classic") return "cream";
    return "cream";
  }
  function liquidOf(theme, color) {
    return theme.liquids[color % theme.liquids.length];
  }

  // src/content/unlocks.ts
  var UNLOCKABLE_THEME_IDS = ["soda"];
  function themeRequiresUnlock(id) {
    return UNLOCKABLE_THEME_IDS.some((themeId) => themeId === id);
  }
  function isThemeUnlocked(id, state) {
    if (!themeRequiresUnlock(id)) return true;
    if (state.unlockedThemes.includes(id)) return true;
    return hasFullThreeStarChapter(state.best);
  }

  // src/services/ads.ts
  function isPlaceholderAdUnit(id) {
    if (!id) return true;
    const trimmed = id.trim();
    if (!trimmed) return true;
    return trimmed.startsWith("REPLACE_") || trimmed.includes("YOUR_") || trimmed.includes("占位");
  }
  function createAdService(options) {
    const showDouyin = options.showDouyin ?? showDouyinRewarded;
    const usesMock = (placement) => {
      if (options.config.forceMock) return true;
      if (!options.tt?.createRewardedVideoAd) return true;
      return isPlaceholderAdUnit(options.config.rewardedVideo[placement]);
    };
    return {
      usesMock,
      async showRewarded(placement) {
        if (usesMock(placement)) {
          try {
            const answer = await options.requestMock(placement);
            return {
              status: answer === "completed" ? "completed" : "skipped",
              placement,
              mode: "mock"
            };
          } catch {
            return { status: "fallback", placement, mode: "mock" };
          }
        }
        const adUnitId = options.config.rewardedVideo[placement];
        try {
          const completed = await showDouyin(options.tt, adUnitId);
          return { status: completed ? "completed" : "skipped", placement, mode: "douyin" };
        } catch {
          return { status: "fallback", placement, mode: "douyin" };
        }
      }
    };
  }
  function showDouyinRewarded(tt, adUnitId) {
    const ad = tt.createRewardedVideoAd({ adUnitId });
    return new Promise((resolve, reject) => {
      let settled = false;
      const finish = (value) => {
        if (settled) return;
        settled = true;
        resolve(value);
      };
      const fail = (error) => {
        if (settled) return;
        settled = true;
        reject(error instanceof Error ? error : new Error("rewarded ad failed"));
      };
      const timer = setTimeout(() => fail(new Error("rewarded ad timeout")), 12e4);
      ad.onError(() => {
      });
      ad.onClose((res) => {
        clearTimeout(timer);
        if (res == null) {
          finish(true);
          return;
        }
        if (res.isEnded === true) {
          finish(true);
          return;
        }
        if (typeof res.count === "number" && res.count > 0) {
          finish(true);
          return;
        }
        finish(false);
      });
      ad.show().catch(() => ad.load().then(() => ad.show())).then(() => void 0).catch((error) => {
        clearTimeout(timer);
        fail(error);
      });
    });
  }
  var PLACEMENT_LABEL = {
    revive: "腾出桌位",
    hint: "下一杯颜色",
    extraTube: "加一个桌位",
    peek: "透视一只杯子",
    winUndo: "多一次撤销",
    themeUnlock: "解锁一套外观"
  };
  var HOME_NOTE = "看视频能提示、透视或加桌，过关也能多一次撤销";
  var TRIAL_HOME_NOTE = "试玩版。广告是模拟，没有真实收益。";
  function adDialogCopy(mock) {
    if (mock) {
      return {
        title: "试玩模拟",
        rewardPrefix: "游戏里",
        body: "不播放真广告，没有真实收益。点下面只是模拟看完或关掉。",
        complete: "模拟看完",
        skip: "模拟关掉"
      };
    }
    return {
      title: "激励视频",
      rewardPrefix: "奖励",
      body: "看完视频就会发放。中途关掉没有奖励。",
      complete: "我看完了",
      skip: "中途关闭"
    };
  }

  // src/services/analytics.ts
  function createAnalytics(report) {
    return {
      track(event, payload) {
        const safe = {};
        for (const [key, value] of Object.entries(payload)) {
          if (typeof value === "number" && Number.isFinite(value)) safe[key] = value;
          else if (typeof value === "boolean") safe[key] = value;
          else if (typeof value === "string" && value.length <= 40) safe[key] = value;
        }
        if (typeof console !== "undefined") console.info("[analytics]", event, safe);
        try {
          report?.(event, safe);
        } catch {
        }
      }
    };
  }

  // src/services/daily.ts
  var DAILY_COLORS = 4;
  var DAILY_EMPTY = 2;
  var DAILY_STEPS = 12;
  var DAILY_CAPACITY = 4;
  var DAILY_TABLE_SLOTS = 2;
  var DAILY_NAMES = ["晨露", "浅桃", "薄荷", "奶霜", "杏子", "晴空", "丁香", "蜜瓜", "软云", "晚霞", "青提", "海盐"];
  var DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
  var nowFn = () => /* @__PURE__ */ new Date();
  function localToday() {
    return formatLocalDate(nowFn());
  }
  function formatLocalDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  function isLocalDate(value) {
    const match = DATE_RE.exec(value);
    if (!match) return false;
    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
  }
  function formatDailyLabel(localDate) {
    const match = DATE_RE.exec(localDate);
    if (!match) return localDate;
    return `${Number(match[2])}月${Number(match[3])}日`;
  }
  function localDateSeed(localDate) {
    if (!isLocalDate(localDate)) throw new Error(`不是本地日期 ${localDate}`);
    const [year, month, day] = localDate.split("-").map(Number);
    return year * 1e4 + month * 100 + day;
  }
  function localDateGap(earlier, later) {
    const from = parts(earlier);
    const to = parts(later);
    const start = Date.UTC(from.year, from.month - 1, from.day);
    const end = Date.UTC(to.year, to.month - 1, to.day);
    return Math.round((end - start) / 864e5);
  }
  function streakFor(lastClearDate, streak, today) {
    if (!lastClearDate || !isLocalDate(lastClearDate) || !isLocalDate(today)) return 0;
    const gap = localDateGap(lastClearDate, today);
    if (gap >= 2) return 0;
    return Math.max(0, Math.floor(streak));
  }
  function settleDailyStreak(save, today) {
    const next = streakFor(save.dailyLastClearDate, save.dailyStreak, today);
    if (next === save.dailyStreak) return false;
    save.dailyStreak = next;
    return true;
  }
  function recordDailyClear(save, today, result) {
    if (!isLocalDate(today)) throw new Error(`不是本地日期 ${today}`);
    settleDailyStreak(save, today);
    const score = {
      date: today,
      moves: Math.max(0, Math.floor(result.moves)),
      stars: result.stars >= 3 ? 3 : result.stars >= 2 ? 2 : 1
    };
    if (save.dailyLastClearDate === today) {
      const prev = save.dailyResult;
      if (!prev || prev.date !== today || score.moves < prev.moves) save.dailyResult = score;
      return { counted: false };
    }
    const continued = save.dailyLastClearDate !== null && localDateGap(save.dailyLastClearDate, today) === 1;
    save.dailyStreak = continued ? save.dailyStreak + 1 : 1;
    save.dailyLastClearDate = today;
    save.dailyResult = score;
    return { counted: true };
  }
  function dailyHome(save, today, inProgress) {
    const done = save.dailyLastClearDate === today;
    const moves = done && save.dailyResult?.date === today ? save.dailyResult.moves : null;
    let actionLabel = "开始今日一单";
    if (inProgress) actionLabel = "继续今日一单";
    else if (done) actionLabel = "再做今日一单";
    return {
      date: today,
      dateLabel: formatDailyLabel(today),
      done,
      streak: streakFor(save.dailyLastClearDate, save.dailyStreak, today),
      moves,
      actionLabel
    };
  }
  function buildDailyLevel(localDate) {
    const seed = localDateSeed(localDate);
    const generated = generateProceduralLevel({
      seed,
      colors: DAILY_COLORS,
      empty: DAILY_EMPTY,
      steps: DAILY_STEPS,
      capacity: DAILY_CAPACITY,
      tableSlots: DAILY_TABLE_SLOTS
    });
    return {
      id: 0,
      name: DAILY_NAMES[seed % DAILY_NAMES.length],
      tier: "medium",
      capacity: generated.capacity,
      tubes: generated.tubes,
      orders: generated.orders,
      tableSlots: generated.tableSlots,
      guideMoves: generated.solution.length,
      origin: "seeded"
    };
  }
  function parts(localDate) {
    if (!isLocalDate(localDate)) throw new Error(`不是本地日期 ${localDate}`);
    const [year, month, day] = localDate.split("-").map(Number);
    return { year, month, day };
  }

  // src/services/storage.ts
  var SAVE_KEY = "watersort.save.v1";
  function defaultSave() {
    return {
      v: 1,
      sound: true,
      music: true,
      vibration: true,
      theme: "cream",
      unlockedThemes: [],
      unlocked: 1,
      best: {},
      tutorialDone: false,
      seenFog: false,
      seenIce: false,
      dailyLastClearDate: null,
      dailyStreak: 0,
      dailyResult: null
    };
  }
  function parseSave(raw) {
    const base = defaultSave();
    if (!raw) return base;
    try {
      const data = JSON.parse(raw);
      if (!data || data.v !== 1) return base;
      const unlockedThemes = sanitizeUnlockedThemes(data.unlockedThemes);
      const best = sanitizeBest(data.best);
      const theme = normalizeTheme(data.theme);
      const daily = sanitizeDaily(data);
      return {
        v: 1,
        sound: data.sound !== false,
        music: data.music !== false,
        vibration: data.vibration !== false,
        theme: isThemeUnlocked(theme, { unlockedThemes, best }) ? theme : "cream",
        unlockedThemes,
        unlocked: clamp(data.unlocked, 1, 9999),
        best,
        tutorialDone: data.tutorialDone === true,
        seenFog: data.seenFog === true,
        seenIce: data.seenIce === true,
        dailyLastClearDate: daily.dailyLastClearDate,
        dailyStreak: daily.dailyStreak,
        dailyResult: daily.dailyResult
      };
    } catch {
      return base;
    }
  }
  function serializeSave(save) {
    return JSON.stringify(save);
  }
  function clamp(value, min, max) {
    const number = typeof value === "number" && Number.isFinite(value) ? Math.floor(value) : min;
    return Math.min(max, Math.max(min, number));
  }
  function sanitizeUnlockedThemes(value) {
    if (!Array.isArray(value)) return [];
    const unlocked = [];
    for (const item of value) {
      if (!isThemeId(item) || !themeRequiresUnlock(item) || unlocked.includes(item)) continue;
      unlocked.push(item);
    }
    return unlocked;
  }
  function sanitizeDaily(data) {
    const dailyLastClearDate = typeof data.dailyLastClearDate === "string" && isLocalDate(data.dailyLastClearDate) ? data.dailyLastClearDate : null;
    const dailyResult = sanitizeDailyResult(data.dailyResult);
    return {
      dailyLastClearDate,
      dailyStreak: dailyLastClearDate ? clamp(data.dailyStreak, 0, 9999) : 0,
      dailyResult
    };
  }
  function sanitizeDailyResult(value) {
    if (!value || typeof value !== "object") return null;
    const date = value.date;
    const moves = value.moves;
    const stars = value.stars;
    if (typeof date !== "string" || !isLocalDate(date)) return null;
    if (typeof moves !== "number" || typeof stars !== "number") return null;
    return {
      date,
      moves: Math.max(0, Math.floor(moves)),
      stars: stars >= 3 ? 3 : stars >= 2 ? 2 : 1
    };
  }
  function sanitizeBest(value) {
    if (!value || typeof value !== "object") return {};
    const best = {};
    for (const [key, record] of Object.entries(value)) {
      if (!/^\d+$/.test(key) || !record || typeof record !== "object") continue;
      const moves = record.moves;
      const stars = record.stars;
      if (typeof moves !== "number" || typeof stars !== "number") continue;
      best[key] = {
        moves: Math.max(0, Math.floor(moves)),
        stars: stars >= 3 ? 3 : stars >= 2 ? 2 : 1
      };
    }
    return best;
  }

  // src/game/feedback.ts
  function winCardRect(width, height, safe) {
    const innerW = width - safe.left - safe.right;
    const stageW = Math.max(280, Math.min(innerW, 460));
    const stageX = safe.left + (innerW - stageW) / 2;
    const cardW = Math.min(stageW - 36, 360);
    const x = stageX + (stageW - cardW) / 2;
    const y = Math.max(safe.top + 8, height * 0.12);
    return { x, y, w: cardW, h: 400 };
  }
  function sparkCoversCard(x, y, card2) {
    return x >= card2.x && x <= card2.x + card2.w && y >= card2.y && y <= card2.y + card2.h;
  }
  function servePop(count) {
    const n = Math.max(1, Math.floor(count));
    return { text: n > 1 ? `${n} 位喝到啦` : "喝到啦", life: 900 };
  }
  function serveAnchor(width, height, safeTop) {
    const compact = height < 720;
    const orderH = compact ? 72 : 80;
    const orderY = safeTop + 8 + 42;
    return { x: width * 0.5, y: orderY + orderH * 0.45 };
  }
  function paletteOf(colors) {
    return colors.length > 0 ? [...colors] : ["#f09ab6"];
  }
  function serveSparks(anchor, colors, random = Math.random) {
    const palette = paletteOf(colors);
    const sparks = [];
    const count = 16;
    for (let i = 0; i < count; i++) {
      const life = 0.5 + random() * 0.22;
      sparks.push({
        kind: "serve",
        x: anchor.x + (random() - 0.5) * 92,
        y: anchor.y + (random() - 0.5) * 18,
        vx: (random() - 0.5) * 28,
        vy: -78 - random() * 46,
        life,
        maxLife: life,
        rot: random() * Math.PI,
        vr: (random() - 0.5) * 3,
        size: 4 + random() * 3,
        color: palette[i % palette.length]
      });
    }
    return sparks;
  }
  var WIN_COUNT = 108;
  function winSparks(width, height, safe, colors, random = Math.random) {
    const card2 = winCardRect(width, height, safe);
    const palette = paletteOf(colors);
    const sparks = [];
    for (let i = 0; i < WIN_COUNT; i++) {
      const spot = winSpot(width, height, card2, random);
      const life = 1.7 + random() * 0.8;
      sparks.push({
        kind: "win",
        x: spot.x,
        y: spot.y,
        vx: spot.vx,
        vy: spot.vy,
        life,
        maxLife: life,
        rot: random() * Math.PI,
        vr: (random() - 0.5) * 8,
        size: 8 + random() * 9,
        color: palette[i % palette.length]
      });
    }
    return sparks;
  }
  function winSpot(width, height, card2, random) {
    const gapLeft = card2.x;
    const gapRight = width - (card2.x + card2.w);
    const gapTop = card2.y;
    const gapBottom = height - (card2.y + card2.h);
    const zones = [];
    if (gapTop > 12) zones.push("top", "top", "top");
    if (gapBottom > 28) zones.push("bottom", "bottom");
    if (gapLeft > 14) zones.push("left");
    if (gapRight > 14) zones.push("right");
    const zone = zones[Math.floor(random() * Math.max(1, zones.length))] ?? "top";
    if (zone === "bottom") {
      return {
        x: 10 + random() * Math.max(8, width - 20),
        y: card2.y + card2.h + 12 + random() * Math.max(8, gapBottom - 20),
        vx: (random() - 0.5) * 50,
        vy: 24 + random() * 70
      };
    }
    if (zone === "left") {
      return {
        x: 4 + random() * Math.max(4, gapLeft - 8),
        y: card2.y + 8 + random() * Math.max(8, card2.h - 16),
        vx: -24 - random() * 36,
        vy: -50 - random() * 90
      };
    }
    if (zone === "right") {
      return {
        x: card2.x + card2.w + 6 + random() * Math.max(4, gapRight - 10),
        y: card2.y + 8 + random() * Math.max(8, card2.h - 16),
        vx: 24 + random() * 36,
        vy: -50 - random() * 90
      };
    }
    const rawY = 4 + random() * Math.max(6, gapTop - 10);
    return {
      x: 8 + random() * Math.max(8, width - 16),
      y: Math.max(1, Math.min(rawY, card2.y - 2)),
      vx: (random() - 0.5) * 70,
      vy: -16 - random() * 150
    };
  }

  // src/ui/draw.ts
  var FONT = '"Yuanti SC","YouYuan","Hiragino Maru Gothic ProN","PingFang SC","Hiragino Sans GB","Noto Sans SC","Microsoft YaHei",sans-serif';
  function roundRect(ctx, x, y, w, h, r) {
    const radius = Math.max(0, Math.min(r, w / 2, h / 2));
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.closePath();
  }
  function hitTest(hits, x, y) {
    for (let i = hits.length - 1; i >= 0; i--) {
      const hit = hits[i];
      if (x >= hit.x && y >= hit.y && x < hit.x + hit.w && y < hit.y + hit.h) return hit;
    }
    return null;
  }
  function text(ctx, value, x, y, size, color, align = "center", weight = 600) {
    ctx.fillStyle = color;
    ctx.font = `${weight} ${size}px ${FONT}`;
    ctx.textAlign = align;
    ctx.textBaseline = "middle";
    ctx.fillText(value, x, y);
  }
  function wrapText(ctx, value, maxWidth, size, weight = 500) {
    ctx.font = `${weight} ${size}px ${FONT}`;
    const lines = [];
    let rest = value;
    while (rest.length > 0) {
      if (ctx.measureText(rest).width <= maxWidth) {
        lines.push(rest);
        break;
      }
      let cut = 1;
      for (let i = 1; i <= rest.length; i++) {
        if (ctx.measureText(rest.slice(0, i)).width > maxWidth) {
          cut = Math.max(1, i - 1);
          break;
        }
        cut = i;
      }
      let split = cut;
      const punctuation = "，。、；！？,. ";
      for (let i = cut; i > Math.max(1, cut - 10); i--) {
        if (punctuation.includes(rest[i - 1] ?? "")) {
          split = i;
          break;
        }
      }
      lines.push(rest.slice(0, split));
      rest = rest.slice(split);
    }
    return lines;
  }
  function drawHeart(ctx, x, y, size, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = color;
    ctx.beginPath();
    const s = size;
    ctx.moveTo(0, s * 0.32);
    ctx.bezierCurveTo(-s * 0.05, s * 0.02, -s * 0.55, -s * 0.02, -s * 0.5, s * 0.32);
    ctx.bezierCurveTo(-s * 0.48, s * 0.62, 0, s * 0.78, 0, s * 0.95);
    ctx.bezierCurveTo(0, s * 0.78, s * 0.48, s * 0.62, s * 0.5, s * 0.32);
    ctx.bezierCurveTo(s * 0.55, -s * 0.02, s * 0.05, s * 0.02, 0, s * 0.32);
    ctx.fill();
    ctx.restore();
  }
  function drawSparkle(ctx, x, y, size, color, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.quadraticCurveTo(0, 0, size, 0);
    ctx.quadraticCurveTo(0, 0, 0, size);
    ctx.quadraticCurveTo(0, 0, -size, 0);
    ctx.quadraticCurveTo(0, 0, 0, -size);
    ctx.fill();
    ctx.restore();
  }
  function drawLock(ctx, cx, cy, size, color) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = Math.max(1.6, size * 0.14);
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(cx, cy - size * 0.12, size * 0.28, Math.PI * 0.98, Math.PI * 0.02, false);
    ctx.stroke();
    roundRect(ctx, cx - size * 0.36, cy - size * 0.02, size * 0.72, size * 0.5, size * 0.16);
    ctx.fill();
    ctx.restore();
  }
  function drawButton(ctx, hits, theme, spec, pressed) {
    const y = spec.y + (pressed ? 1 : 0);
    const radius = Math.min(spec.h / 2, 28);
    if (spec.kind !== "ghost") {
      ctx.fillStyle = theme.shadow;
      roundRect(ctx, spec.x, y + 5, spec.w, spec.h, radius);
      ctx.fill();
    }
    roundRect(ctx, spec.x, y, spec.w, spec.h, radius);
    if (spec.kind === "primary") {
      const gradient = ctx.createLinearGradient(spec.x, y, spec.x, y + spec.h);
      gradient.addColorStop(0, spec.disabled ? theme.secondary : theme.accentTop);
      gradient.addColorStop(1, spec.disabled ? theme.panel : theme.accent);
      ctx.fillStyle = gradient;
    } else if (spec.kind === "secondary") {
      ctx.fillStyle = theme.secondary;
    } else {
      ctx.fillStyle = theme.panel;
    }
    ctx.fill();
    if (spec.kind !== "primary") {
      ctx.strokeStyle = theme.panelLine;
      ctx.lineWidth = 1.75;
      ctx.stroke();
    }
    const ink = spec.disabled ? theme.inkSoft : spec.kind === "primary" ? theme.accentInk : theme.ink;
    text(ctx, spec.label, spec.x + spec.w / 2, y + spec.h / 2 + (spec.badge ? -8 : 0), spec.h < 44 ? 14 : 16, ink, "center", 700);
    if (spec.badge) {
      text(ctx, spec.badge, spec.x + spec.w / 2, y + spec.h / 2 + 11, 12, spec.kind === "primary" ? theme.accentInk : theme.ink, "center", 650);
    }
    hits.push({ id: spec.id, x: spec.x, y: spec.y, w: spec.w, h: spec.h });
  }
  function drawTube(ctx, tube) {
    const lift = tube.lift ?? 0;
    const shake = tube.shake ?? 0;
    const tilt = tube.tilt ?? 0;
    const x = tube.x + shake;
    const y = tube.y - lift;
    const { w, h } = tube;
    const originX = x + w / 2;
    const originY = y + h;
    ctx.save();
    ctx.translate(originX, originY);
    ctx.rotate(tilt);
    ctx.translate(-originX, -originY);
    const neckH = Math.max(14, Math.min(22, h * 0.12));
    const bodyY = y + neckH - 4;
    const bodyH = h - neckH + 4;
    const neckW = w * 0.52;
    const neckX = x + (w - neckW) / 2;
    const bodyRadius = Math.min(w * 0.46, bodyH * 0.34);
    ctx.fillStyle = tube.theme.shadow;
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y + h + 8, w * 0.38, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 0.45;
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y + h + 12, w * 0.28, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    if (tube.selected || tube.hint) {
      const glow = tube.hint === "dst" ? tube.theme.hint : tube.theme.accent;
      ctx.fillStyle = glow;
      ctx.globalAlpha = tube.hint ? 0.18 + Math.sin(tube.time / 160) * 0.08 : 0.22;
      roundRect(ctx, x - 7, bodyY - 8, w + 14, bodyH + 14, bodyRadius + 8);
      ctx.fill();
      ctx.globalAlpha = tube.hint ? 0.7 + Math.sin(tube.time / 140) * 0.25 : 0.9;
      ctx.strokeStyle = glow;
      ctx.lineWidth = 3.5;
      roundRect(ctx, x - 4, bodyY - 4, w + 8, bodyH + 8, bodyRadius + 4);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
    roundRect(ctx, x, bodyY, w, bodyH, bodyRadius);
    ctx.fillStyle = tube.theme.glass;
    ctx.fill();
    ctx.strokeStyle = tube.theme.glassStroke;
    ctx.lineWidth = 2.25;
    ctx.stroke();
    roundRect(ctx, neckX, y + 4, neckW, neckH + 8, neckW / 2);
    ctx.fillStyle = tube.theme.glass;
    ctx.fill();
    ctx.stroke();
    const pad = Math.max(5, w * 0.11);
    const innerX = x + pad;
    const innerW = w - pad * 2;
    const innerTop = bodyY + pad;
    const innerBottom = y + h - pad;
    const innerH = Math.max(8, innerBottom - innerTop);
    const unit = innerH / tube.capacity;
    let used = 0;
    for (const seg of tube.segs) used += seg.amount;
    const liquidTop = innerBottom - used * unit;
    ctx.save();
    roundRect(ctx, innerX, innerTop, innerW, innerH, Math.min(innerW / 2, bodyRadius - 2));
    ctx.clip();
    ctx.fillStyle = tube.theme.glassInner;
    ctx.fillRect(innerX, innerTop, innerW, innerH);
    let cursor = innerBottom;
    tube.segs.forEach((seg, segIndex) => {
      const segH = Math.max(0, seg.amount * unit);
      cursor -= segH;
      const palette = seg.concealed ? { base: "#d5e2f0", light: "#f4f8fc", dark: "#b7c9dc" } : liquidOf(tube.theme, seg.color);
      const gradient = ctx.createLinearGradient(innerX, cursor, innerX + innerW, cursor + segH);
      gradient.addColorStop(0, palette.dark);
      gradient.addColorStop(0.48, palette.base);
      gradient.addColorStop(1, palette.light);
      ctx.fillStyle = gradient;
      const soft = Math.min(12, segH / 2, innerW * 0.22);
      roundRect(ctx, innerX, cursor, innerW, segH + 1.2, soft);
      ctx.fill();
      if (seg.concealed && segH > 12) {
        text(ctx, "?", innerX + innerW / 2, cursor + segH / 2, Math.min(22, Math.max(12, segH * 0.55)), tube.theme.inkSoft, "center", 700);
      } else if (segH > 14) {
        ctx.fillStyle = "rgba(255,255,255,0.38)";
        ctx.beginPath();
        ctx.ellipse(innerX + innerW * 0.32, cursor + segH * 0.42, Math.max(2.5, innerW * 0.08), Math.max(2.5, Math.min(segH * 0.18, 8)), -0.5, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!seg.concealed && segIndex === tube.segs.length - 1) {
        ctx.fillStyle = palette.light;
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.ellipse(innerX + innerW / 2, cursor + 1, innerW * 0.46, Math.max(3.5, unit * 0.2), 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    });
    if (used > 0.2) {
      for (let i = 0; i < 2; i++) {
        const phase = tube.time / 700 + tube.index * 0.8 + i;
        const travel = (phase % 1 + 1) % 1;
        const bx = innerX + innerW * (0.62 + i * 0.12);
        const by = liquidTop + (innerBottom - liquidTop) * (1 - travel);
        ctx.fillStyle = "rgba(255,255,255,0.55)";
        ctx.beginPath();
        ctx.arc(bx, by, 2.2 + i, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
    ctx.fillStyle = tube.theme.shine;
    ctx.globalAlpha = 0.32;
    roundRect(ctx, x + w * 0.16, bodyY + bodyH * 0.14, Math.max(3, w * 0.08), bodyH * 0.34, 8);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y + 7, neckW * 0.46, 5.2, 0, 0, Math.PI * 2);
    ctx.fillStyle = tube.theme.lip;
    ctx.fill();
    ctx.strokeStyle = tube.theme.glassStroke;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y + 7, neckW * 0.28, 2.6, 0, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.65)";
    ctx.fill();
    if (tube.frozen !== null && tube.frozen !== void 0) {
      ctx.save();
      ctx.globalAlpha = 0.14;
      roundRect(ctx, x + 6, bodyY + 10, w - 12, bodyH - 18, Math.min(16, w / 2));
      ctx.fillStyle = "#d7f1ff";
      ctx.fill();
      ctx.restore();
    }
    ctx.restore();
    const localX = x + w / 2;
    const localY = y + 4;
    const dx = localX - originX;
    const dy = localY - originY;
    const cos = Math.cos(tilt);
    const sin = Math.sin(tilt);
    return { x: originX + dx * cos - dy * sin, y: originY + dx * sin + dy * cos };
  }
  function drawBackground(ctx, theme, width, height, time = 0) {
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, theme.bgTop);
    gradient.addColorStop(1, theme.bgBottom);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    const spots = [
      { x: width * 0.12, y: height * 0.08, r: width * 0.28, color: theme.blobs[0] },
      { x: width * 0.92, y: height * 0.16, r: width * 0.22, color: theme.blobs[1] },
      { x: width * 0.78, y: height * 0.72, r: width * 0.34, color: theme.blobs[2] },
      { x: width * 0.08, y: height * 0.86, r: width * 0.2, color: theme.blobs[0] }
    ];
    for (const spot of spots) {
      const glow = ctx.createRadialGradient(spot.x, spot.y, 8, spot.x, spot.y, spot.r);
      glow.addColorStop(0, spot.color);
      glow.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(spot.x, spot.y, spot.r, 0, Math.PI * 2);
      ctx.fill();
    }
    const twinkles = [
      [0.18, 0.22],
      [0.84, 0.3],
      [0.72, 0.12],
      [0.1, 0.58],
      [0.9, 0.62]
    ];
    twinkles.forEach(([px, py], index) => {
      const alpha = 0.35 + Math.sin(time / 700 + index) * 0.25;
      drawSparkle(ctx, width * px, height * py, 5 + index % 2, "#fffdf8", Math.max(0.15, alpha));
    });
  }
  function drawMiniCup(ctx, theme, x, y, w, h, color, time) {
    const palette = liquidOf(theme, color);
    const radius = Math.min(8, w / 2);
    ctx.save();
    ctx.fillStyle = theme.shadow;
    roundRect(ctx, x + 1, y + 3, w, h, radius);
    ctx.fill();
    roundRect(ctx, x, y, w, h, radius);
    ctx.fillStyle = theme.glass;
    ctx.fill();
    ctx.save();
    roundRect(ctx, x + 2, y + 4, w - 4, h - 6, Math.max(2, radius - 2));
    ctx.clip();
    const liquidH = (h - 8) * 0.72;
    const liquidY = y + h - 4 - liquidH;
    const gradient = ctx.createLinearGradient(x, liquidY, x, y + h);
    gradient.addColorStop(0, palette.light);
    gradient.addColorStop(0.35, palette.base);
    gradient.addColorStop(1, palette.dark);
    ctx.fillStyle = gradient;
    ctx.fillRect(x, liquidY, w, h);
    ctx.fillStyle = "rgba(255,255,255,0.45)";
    ctx.beginPath();
    ctx.ellipse(x + w / 2, liquidY + 1, w * 0.28, 2.2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.strokeStyle = theme.glassStroke;
    ctx.lineWidth = 1.5;
    roundRect(ctx, x, y, w, h, radius);
    ctx.stroke();
    ctx.strokeStyle = theme.shine;
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(x + 4, y + h * 0.72);
    ctx.lineTo(x + 4, y + 8);
    ctx.stroke();
    const strawX = x + w * 0.62;
    ctx.strokeStyle = theme.secondary;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(strawX, y + h * 0.45);
    ctx.lineTo(strawX + 3, y - 4 - Math.sin(time / 500) * 0.6);
    ctx.stroke();
    ctx.restore();
  }
  function drawGuest(ctx, theme, x, y, w, h, color, front, hinted, time) {
    ctx.save();
    const cx = x + w / 2;
    const feet = y + h - 2;
    const bob = front ? Math.sin(time / 280) * 1.2 : 0;
    ctx.fillStyle = "rgba(214, 160, 176, 0.28)";
    ctx.beginPath();
    ctx.ellipse(cx, feet, w * 0.28, 3.2, 0, 0, Math.PI * 2);
    ctx.fill();
    const bodyH = Math.max(16, h * 0.34);
    const bodyW = Math.max(16, w * 0.46);
    const bodyY = feet - bodyH - 1 + bob;
    roundRect(ctx, cx - bodyW / 2, bodyY, bodyW, bodyH, bodyW / 2);
    ctx.fillStyle = front ? theme.accentTop : "#fff6f2";
    ctx.fill();
    ctx.strokeStyle = theme.panelLine;
    ctx.lineWidth = 1.25;
    ctx.stroke();
    const headR = Math.min(w * 0.28, front ? 13 : 11);
    const headY = bodyY - headR + 2;
    ctx.fillStyle = front ? theme.accent : "#f3c3d4";
    ctx.beginPath();
    ctx.arc(cx, headY - headR * 0.15, headR * 1.05, Math.PI, 0);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#fff7f4";
    ctx.arc(cx, headY, headR, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = theme.panelLine;
    ctx.stroke();
    ctx.fillStyle = theme.accent;
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.arc(cx - headR * 0.38, headY + headR * 0.2, headR * 0.16, 0, Math.PI * 2);
    ctx.arc(cx + headR * 0.38, headY + headR * 0.2, headR * 0.16, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fillStyle = theme.ink;
    ctx.beginPath();
    ctx.arc(cx - headR * 0.26, headY - 1, Math.max(1.2, headR * 0.09), 0, Math.PI * 2);
    ctx.arc(cx + headR * 0.26, headY - 1, Math.max(1.2, headR * 0.09), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = theme.ink;
    ctx.lineWidth = 1.15;
    ctx.arc(cx, headY + headR * 0.22, headR * 0.28, 0.2, Math.PI - 0.2);
    ctx.stroke();
    const cupW = Math.max(11, Math.min(16, w * 0.34));
    const cupH = Math.max(14, Math.min(20, h * 0.3));
    drawMiniCup(ctx, theme, cx - cupW / 2, bodyY + bodyH * 0.28, cupW, cupH, color, time);
    if (front) {
      const bubbleW = Math.min(w - 2, 36);
      const bubbleX = cx - bubbleW / 2;
      const bubbleY = Math.max(y, headY - headR - 16);
      roundRect(ctx, bubbleX, bubbleY, bubbleW, 15, 8);
      ctx.fillStyle = hinted ? theme.hint : "#fff";
      ctx.fill();
      ctx.strokeStyle = hinted ? theme.hint : theme.panelLine;
      ctx.lineWidth = 1;
      ctx.stroke();
      text(ctx, "想喝", cx, bubbleY + 8, 10, theme.ink, "center", 700);
    }
    ctx.restore();
  }
  function drawSeat(ctx, theme, x, y, size, color, time) {
    ctx.save();
    const cx = x + size / 2;
    const saucerY = y + size * 0.72;
    ctx.fillStyle = "rgba(214, 160, 176, 0.25)";
    ctx.beginPath();
    ctx.ellipse(cx, saucerY + 3, size * 0.42, size * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fffdfb";
    ctx.beginPath();
    ctx.ellipse(cx, saucerY, size * 0.42, size * 0.13, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = theme.panelLine;
    ctx.lineWidth = 1.4;
    ctx.stroke();
    ctx.strokeStyle = "rgba(243, 201, 214, 0.9)";
    ctx.beginPath();
    ctx.ellipse(cx, saucerY, size * 0.24, size * 0.07, 0, 0, Math.PI * 2);
    ctx.stroke();
    if (color !== null) {
      const cupW = size * 0.42;
      const cupH = size * 0.58;
      drawMiniCup(ctx, theme, cx - cupW / 2, saucerY - cupH + 2, cupW, cupH, color, time);
    }
    ctx.restore();
  }
  function drawIceTag(ctx, theme, mouthX, mouthY, color, time) {
    const w = 52;
    const h = 20;
    const x = mouthX - w / 2;
    const y = mouthY - h - 10;
    ctx.save();
    ctx.fillStyle = "rgba(180, 210, 230, 0.35)";
    roundRect(ctx, x, y + 2, w, h, 10);
    ctx.fill();
    roundRect(ctx, x, y, w, h, 10);
    ctx.fillStyle = "#f4fbff";
    ctx.fill();
    ctx.strokeStyle = "#9ec6de";
    ctx.lineWidth = 1.25;
    ctx.stroke();
    drawMiniCup(ctx, theme, x + 4, y + 2, 11, 15, color, time);
    text(ctx, "先出", x + 34, y + 10, 11, "#3f647c", "center", 700);
    ctx.beginPath();
    ctx.moveTo(mouthX - 4, y + h);
    ctx.lineTo(mouthX, y + h + 5);
    ctx.lineTo(mouthX + 4, y + h);
    ctx.fillStyle = "#f4fbff";
    ctx.fill();
    ctx.restore();
  }
  function drawPointingArrow(ctx, x, tipY, time, color) {
    const bounce = Math.sin(time / 160) * 5;
    const tip = tipY - 2;
    const top = tip - 16 - bounce;
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, tip);
    ctx.lineTo(x - 7, top);
    ctx.lineTo(x + 7, top);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
  function stageBox(width, height, safe) {
    const innerW = width - safe.left - safe.right;
    const w = Math.max(280, Math.min(innerW, 460));
    const x = safe.left + (innerW - w) / 2;
    return { x, y: 0, w, h: height };
  }

  // src/core/types.ts
  var TIER_LABEL = {
    warmup: "热身",
    easy: "轻松",
    medium: "顺手",
    tricky: "要想想",
    hard: "有点难",
    expert: "烧脑"
  };

  // src/game/session.ts
  var UNDO_LIMIT = 5;
  var CLEAR_UNDO_BONUS = 1;
  var EXTRA_TUBE_LIMIT = 1;
  var REVIVE_LIMIT = 1;
  function createSession(level) {
    const orders = (level.orders?.length ? level.orders : inferOrders(level.tubes)).slice();
    const tableSlots = level.tableSlots ?? DEFAULT_TABLE_SLOTS;
    const conceal = openingConceal(level.tubes, level.fog === true);
    const frozen = iceMask(level.tubes.length, level.ice);
    const session = {
      level,
      tubes: cloneTubes(level.tubes),
      initial: cloneTubes(level.tubes),
      table: [],
      orders: orders.slice(),
      tableSlots,
      conceal,
      frozen,
      undoStack: [],
      undoLeft: UNDO_LIMIT,
      undoBonus: 0,
      extraLeft: EXTRA_TUBE_LIMIT,
      reviveLeft: REVIVE_LIMIT,
      moves: 0,
      selected: null,
      hint: null,
      status: "playing",
      stuckReason: null,
      tutorialStep: 0,
      lastPlated: [],
      lastServed: [],
      baseOrders: orders,
      baseSlots: tableSlots,
      baseConceal: cloneConceal(conceal),
      baseFrozen: frozen.slice()
    };
    applyResolve(session);
    session.lastPlated = [];
    session.lastServed = [];
    return session;
  }
  function selectTube(session, index) {
    if (session.status === "won") return { type: "locked" };
    if (index < 0 || index >= session.tubes.length) return { type: "locked" };
    const target = session.tubes[index];
    const frozenColor = session.frozen[index];
    if (session.selected === null) {
      if (frozenColor !== null && frozenColor !== void 0) return { type: "frozen", color: frozenColor };
      if (target.length === 0) return { type: "empty" };
      session.selected = index;
      return { type: "select", index };
    }
    if (session.selected === index) {
      session.selected = null;
      return { type: "deselect" };
    }
    const src = session.selected;
    const srcFrozen = session.frozen[src];
    if (srcFrozen !== null && srcFrozen !== void 0) return { type: "frozen", color: srcFrozen };
    if (frozenColor !== null && frozenColor !== void 0) return { type: "frozen", color: frozenColor };
    const amount = pourAmount(session.tubes[src], target, session.level.capacity);
    if (amount > 0) {
      const move = { src, dst: index, amount };
      session.undoStack.push({
        tubes: cloneTubes(session.tubes),
        table: session.table.slice(),
        orders: session.orders.slice(),
        conceal: cloneConceal(session.conceal),
        frozen: session.frozen.slice()
      });
      session.tubes = applyPour(session.tubes, move);
      session.conceal = revealTops(session.tubes, pourConceal(session.conceal, move.src, move.dst, move.amount));
      session.moves += 1;
      session.selected = null;
      session.hint = null;
      applyResolve(session);
      return { type: "pour", move };
    }
    if (target.length > 0) {
      session.selected = index;
      return { type: "switch", index };
    }
    return { type: "empty" };
  }
  function undo(session) {
    if (session.undoLeft <= 0 || session.undoStack.length === 0) return false;
    const snap = session.undoStack.pop();
    session.tubes = snap.tubes;
    session.table = snap.table;
    session.orders = snap.orders;
    session.conceal = cloneConceal(snap.conceal);
    session.frozen = snap.frozen.slice();
    session.undoLeft -= 1;
    session.moves = Math.max(0, session.moves - 1);
    session.selected = null;
    session.hint = null;
    session.lastPlated = [];
    session.lastServed = [];
    refreshStatus(session);
    return true;
  }
  function restartSession(session) {
    session.tubes = cloneTubes(session.initial);
    session.table = [];
    session.orders = session.baseOrders.slice();
    session.tableSlots = session.baseSlots;
    session.conceal = cloneConceal(session.baseConceal);
    session.frozen = session.baseFrozen.slice();
    session.undoStack = [];
    session.undoLeft = UNDO_LIMIT + session.undoBonus;
    session.extraLeft = EXTRA_TUBE_LIMIT;
    session.reviveLeft = REVIVE_LIMIT;
    session.moves = 0;
    session.selected = null;
    session.hint = null;
    session.tutorialStep = 0;
    applyResolve(session);
    session.lastPlated = [];
    session.lastServed = [];
  }
  function grantUndoCharges(session, count) {
    const added = Math.floor(count);
    if (!Number.isFinite(added) || added <= 0) return;
    session.undoLeft += added;
    session.undoBonus += added;
  }
  function grantEmptyTube(session) {
    if (session.status === "won") return false;
    session.tubes.push([]);
    session.conceal.push([]);
    session.frozen.push(null);
    for (const snapshot of session.undoStack) {
      snapshot.tubes.push([]);
      snapshot.conceal.push([]);
      snapshot.frozen.push(null);
    }
    session.selected = null;
    refreshStatus(session);
    return true;
  }
  function useExtraTube(session) {
    if (session.extraLeft <= 0 || session.status === "won") return false;
    session.tableSlots += 1;
    session.extraLeft -= 1;
    session.selected = null;
    session.hint = null;
    applyResolve(session);
    return true;
  }
  function useRevive(session) {
    if (session.reviveLeft <= 0 || session.status === "won") return false;
    session.reviveLeft -= 1;
    session.tableSlots += 1;
    session.selected = null;
    session.hint = null;
    applyResolve(session);
    if (legalMoves(session.tubes, session.level.capacity, blockedOf(session.frozen)).length === 0) grantEmptyTube(session);
    return true;
  }
  function grantHint(session) {
    const color = session.orders[0];
    if (color === void 0) {
      session.hint = null;
      return null;
    }
    const move = suggestServeMove(
      session.tubes,
      session.level.capacity,
      color,
      session.table.length,
      session.tableSlots,
      blockedOf(session.frozen)
    );
    if (!move) {
      session.hint = null;
      return null;
    }
    session.hint = { src: move.src, dst: move.dst, color };
    session.selected = move.src;
    return session.hint;
  }
  function starsFor(moves, guideMoves) {
    if (guideMoves <= 0) return 3;
    if (moves <= guideMoves) return 3;
    if (moves <= Math.ceil(guideMoves * 1.5)) return 2;
    return 1;
  }
  function revealCup(session, index) {
    const row = session.conceal[index];
    if (!row?.some(Boolean)) return false;
    const clear = (rows, at) => {
      if (!rows[at]) return;
      rows[at] = rows[at].map(() => false);
    };
    clear(session.conceal, index);
    for (const snap of session.undoStack) clear(snap.conceal, index);
    return true;
  }
  function peekIndex(session) {
    const selected = session.selected;
    if (selected !== null && session.conceal[selected]?.some(Boolean)) return selected;
    const target = session.orders[0];
    let best = -1;
    let score = -1;
    session.tubes.forEach((tube, index) => {
      const hidden = session.conceal[index]?.filter(Boolean).length ?? 0;
      if (hidden === 0) return;
      let value = hidden;
      if (target !== void 0 && tube.includes(target)) value += 5;
      if (value > score) {
        score = value;
        best = index;
      }
    });
    return best >= 0 ? best : null;
  }
  function usePeek(session) {
    if (session.status === "won" || !hasConcealed(session.conceal)) return null;
    const index = peekIndex(session);
    if (index === null || !revealCup(session, index)) return null;
    session.hint = null;
    return index;
  }
  function applyResolve(session) {
    const resolved = settleBoard(
      session.tubes,
      session.conceal,
      session.table,
      session.orders,
      session.tableSlots,
      session.level.capacity,
      session.frozen
    );
    session.tubes = resolved.tubes;
    session.conceal = resolved.conceal;
    session.table = resolved.table;
    session.orders = resolved.orders;
    session.frozen = resolved.frozen;
    session.lastPlated = resolved.plated;
    session.lastServed = resolved.served;
    refreshStatus(session);
  }
  function refreshStatus(session) {
    const blocked = blockedOf(session.frozen);
    const phase = servicePhase(
      session.tubes,
      session.table,
      session.orders,
      session.tableSlots,
      session.level.capacity,
      blocked
    );
    session.status = phase;
    session.stuckReason = phase === "stuck" ? stuckReason(session.tubes, session.table, session.orders, session.tableSlots, session.level.capacity, blocked) : null;
  }

  // src/ui/render.ts
  function render(ctx, view) {
    const hits = [];
    drawBackground(ctx, view.theme, view.width, view.height, view.time);
    let maxScroll = 0;
    let focusY = 0;
    if (view.screen === "home" && view.home) maxScroll = renderHome(ctx, hits, view, view.home);
    else if (view.screen === "levels" && view.levels) {
      const laid = renderLevels(ctx, hits, view, view.levels);
      maxScroll = laid.maxScroll;
      focusY = laid.focusY;
    } else if (view.screen === "skins" && view.skins) renderSkins(ctx, hits, view, view.skins);
    else if (view.screen === "settings" && view.settings) renderSettings(ctx, hits, view, view.settings);
    else if (view.screen === "howto") renderHowto(ctx, hits, view);
    else if (view.screen === "play" && view.play) renderPlay(ctx, hits, view, view.play);
    if (view.modal) {
      hits.length = 0;
      ctx.fillStyle = "rgba(92, 58, 78, 0.38)";
      ctx.fillRect(0, 0, view.width, view.height);
    }
    const card2 = view.modal?.kind === "win" ? winCardRect(view.width, view.height, view.safe) : null;
    for (const bit of view.bits) {
      if (card2 && sparkCoversCard(bit.x, bit.y, card2)) continue;
      ctx.save();
      ctx.translate(bit.x, bit.y);
      ctx.rotate(bit.rot);
      if (bit.kind === "serve") drawSparkle(ctx, 0, 0, bit.size, bit.color, bit.alpha);
      else {
        ctx.globalAlpha = bit.alpha;
        drawHeart(ctx, 0, -bit.size * 0.2, bit.size, bit.color);
      }
      ctx.restore();
    }
    if (view.modal) renderModal(ctx, hits, view, view.modal);
    if (view.toast) {
      const stage = stageBox(view.width, view.height, view.safe);
      const width = Math.min(stage.w - 48, 320);
      const x = stage.x + (stage.w - width) / 2;
      const y = view.screen === "play" ? view.height * 0.62 : view.screen === "levels" ? view.height - view.safe.bottom - 52 : view.height - view.safe.bottom - 48;
      roundRect(ctx, x, y, width, 40, 20);
      ctx.fillStyle = view.theme.toastBg;
      ctx.fill();
      text(ctx, view.toast, x + width / 2, y + 20, 14, view.theme.toastInk, "center", 650);
    }
    return { hits, maxScroll, focusY };
  }
  function renderHome(ctx, hits, view, home) {
    const stage = stageBox(view.width, view.height, view.safe);
    const cx = stage.x + stage.w / 2;
    const short = view.height < 680;
    const decoH = short ? 64 : 112;
    const decoTop = view.safe.top + (short ? 2 : 6);
    drawDecoTubes(ctx, view.theme, cx, decoTop, view.time, decoH);
    const titleY = decoTop + decoH + (short ? 16 : 24);
    drawHeart(ctx, cx - (short ? 96 : 118), titleY + 2, short ? 9 : 11, view.theme.accent);
    drawHeart(ctx, cx + (short ? 96 : 118), titleY + 2, short ? 9 : 11, view.theme.accent);
    text(ctx, "水色分装", cx, titleY, short ? 30 : 38, view.theme.ink, "center", 750);
    text(ctx, "看队首想喝什么，倒满同色再端上桌", cx, titleY + (short ? 26 : 34), short ? 13 : 15, view.theme.inkSoft, "center", 500);
    const trial = view.trial === true;
    if (trial) text(ctx, "试玩", cx, titleY + (short ? 44 : 54), 12, view.theme.accent, "center", 700);
    let y = titleY + (short ? 44 : 54) + (trial ? 18 : 0);
    if (home.showTip) {
      const tipH = short ? 36 : 40;
      const tipW = stage.w - 56;
      const tipX = stage.x + 28;
      roundRect(ctx, tipX, y, tipW, tipH, 14);
      ctx.fillStyle = view.theme.panel;
      ctx.fill();
      text(ctx, "第一次来的话，第 1 关会教你怎么出餐。", cx, y + tipH / 2, 13, view.theme.ink, "center", 500);
      y += tipH + (short ? 8 : 10);
    }
    text(ctx, `已整理 ${home.cleared} / ${home.total} 关`, cx, y + 8, 13, view.theme.inkSoft, "center", 500);
    y += short ? 20 : 24;
    const buttonW = stage.w - 48;
    const buttonX = stage.x + 24;
    const cardH = short ? 92 : 108;
    roundRect(ctx, buttonX, y, buttonW, cardH, 18);
    ctx.fillStyle = view.theme.panel;
    ctx.fill();
    ctx.strokeStyle = view.theme.panelLine;
    ctx.lineWidth = 2;
    ctx.stroke();
    const status = home.daily.done ? `已出餐 · ${home.daily.moves ?? 0} 步` : "还没出餐";
    text(ctx, `今日 · ${home.daily.dateLabel}`, buttonX + 16, y + (short ? 18 : 22), short ? 14 : 16, view.theme.ink, "left", 750);
    text(ctx, `连胜 ${home.daily.streak} 天`, buttonX + buttonW - 16, y + (short ? 18 : 22), short ? 14 : 16, view.theme.accent, "right", 750);
    text(ctx, status, buttonX + 16, y + (short ? 38 : 44), 13, view.theme.inkSoft, "left", 500);
    const dailyH = short ? 36 : 40;
    button(ctx, hits, view, {
      id: "nav:daily",
      label: home.daily.actionLabel,
      kind: "primary",
      x: buttonX + 12,
      y: y + cardH - dailyH - (short ? 8 : 10),
      w: buttonW - 24,
      h: dailyH
    });
    y += cardH + (short ? 10 : 14);
    const continueH = short ? 46 : 52;
    button(ctx, hits, view, { id: "nav:continue", label: home.continueLabel, kind: "secondary", x: buttonX, y, w: buttonW, h: continueH });
    y += continueH + 8;
    const levelsH = short ? 42 : 46;
    button(ctx, hits, view, { id: "nav:levels", label: "选择关卡", kind: "secondary", x: buttonX, y, w: buttonW, h: levelsH });
    y += levelsH + 8;
    const half = (buttonW - 12) / 2;
    const halfH = short ? 40 : 44;
    button(ctx, hits, view, { id: "nav:skins", label: "外观", kind: "secondary", x: buttonX, y, w: half, h: halfH });
    button(ctx, hits, view, { id: "nav:settings", label: "设置", kind: "secondary", x: buttonX + half + 12, y, w: half, h: halfH });
    const noteY = y + halfH + (short ? 18 : 26);
    if (noteY <= view.height - view.safe.bottom - 8) {
      text(ctx, trial ? TRIAL_HOME_NOTE : HOME_NOTE, cx, noteY, 13, view.theme.ink, "center", 650);
    }
    return 0;
  }
  function drawDecoTubes(ctx, theme, cx, y, time, height = 148) {
    const tubes = [
      { segs: [{ color: 0, amount: 3 }], lift: 0 },
      { segs: [{ color: 3, amount: 4 }], lift: Math.sin(time / 700) * 4 },
      { segs: [{ color: 4, amount: 2.2 + Math.sin(time / 500) * 0.25 }], lift: 0 }
    ];
    const w = 52;
    const gap = 16;
    let x = cx - (w * 3 + gap * 2) / 2;
    tubes.forEach((tube, index) => {
      drawTube(ctx, {
        x,
        y: y + tube.lift,
        w,
        h: height,
        capacity: 4,
        segs: tube.segs,
        theme,
        time,
        index
      });
      x += w + gap;
    });
  }
  function renderLevels(ctx, hits, view, levels) {
    const stage = stageBox(view.width, view.height, view.safe);
    header(ctx, hits, view, "选关");
    const top = view.safe.top + 64;
    const bottom = view.height - view.safe.bottom - 12;
    const viewH = Math.max(0, bottom - top);
    const pad = 14;
    const x = stage.x + pad;
    const width = stage.w - pad * 2;
    const cardPad = 12;
    const cardInner = width - cardPad * 2;
    const cols = cardInner >= 280 ? 5 : 4;
    const gap = 8;
    const cell = Math.min(56, Math.floor((cardInner - gap * (cols - 1)) / cols));
    const rowStep = cell + gap;
    const blocks = [];
    let cursor = 2;
    let focusY = 0;
    let activeShiftY = 0;
    let activeChapterY = 0;
    let activeChapterBottom = 0;
    let found = false;
    for (const shift of levels.shifts) {
      const shiftY = cursor;
      const statW = measureStat(ctx, shift.cleared, shift.total, shift.stars, shift.starMax, 12);
      ctx.font = `750 16px ${FONT}`;
      const chipW = ctx.measureText(shift.title).width + 22;
      const span = `${shift.chapters[0]?.from ?? shift.end}–${shift.end}`;
      ctx.font = `650 13px ${FONT}`;
      const spanW = ctx.measureText(span).width;
      const stacked = chipW + 8 + spanW + 12 + statW > width;
      const shiftH = stacked ? 48 : 30;
      blocks.push({ kind: "shift", y: shiftY, h: shiftH, shift, stacked });
      cursor += shiftH + 8;
      for (const chapter of shift.chapters) {
        const lines = wrapText(ctx, chapter.blurb, cardInner, 13, 500);
        const blurbH = Math.max(18, lines.length * 18);
        const rows = Math.max(1, Math.ceil(chapter.items.length / cols));
        const gridH = (rows - 1) * rowStep + cell;
        const chapterH = 12 + 22 + 6 + blurbH + 8 + 16 + 8 + 5 + 10 + gridH + 12;
        blocks.push({ kind: "chapter", y: cursor, h: chapterH, chapter, lines });
        if (chapter.current) {
          found = true;
          activeShiftY = shiftY;
          activeChapterY = cursor;
          activeChapterBottom = cursor + chapterH;
        }
        cursor += chapterH + 10;
      }
      cursor += 6;
    }
    const maxScroll = Math.max(0, cursor + 20 - viewH);
    if (found) {
      const spanH = activeChapterBottom - activeShiftY;
      focusY = spanH <= viewH ? activeShiftY : Math.max(0, activeChapterY - 4);
    }
    hits.push({ id: "levels:board", x: stage.x, y: top, w: stage.w, h: viewH });
    ctx.save();
    ctx.beginPath();
    ctx.rect(stage.x, top, stage.w, viewH);
    ctx.clip();
    for (const block of blocks) {
      const screenY = top + block.y - levels.scroll;
      if (screenY + block.h < top || screenY > bottom) continue;
      if (block.kind === "shift") drawShiftHeader(ctx, view.theme, x, screenY, width, block);
      else drawChapterCard(ctx, hits, view, x, screenY, width, cardPad, cardInner, cols, gap, cell, top, bottom, block);
    }
    ctx.restore();
    return { maxScroll, focusY };
  }
  function drawShiftHeader(ctx, theme, x, y, width, block) {
    const { shift, stacked } = block;
    const here = shift.chapters.some((chapter) => chapter.current);
    ctx.font = `750 16px ${FONT}`;
    const chipW = ctx.measureText(shift.title).width + 22;
    const chipH = 28;
    roundRect(ctx, x, y, chipW, chipH, 14);
    ctx.fillStyle = here ? theme.accent : theme.accentTop;
    ctx.fill();
    text(ctx, shift.title, x + chipW / 2, y + chipH / 2, 16, theme.accentInk, "center", 750);
    const span = `${shift.chapters[0]?.from ?? shift.end}–${shift.end}`;
    const statY = stacked ? y + chipH + 12 : y + chipH / 2;
    const statW = measureStat(ctx, shift.cleared, shift.total, shift.stars, shift.starMax, 12);
    ctx.font = `650 13px ${FONT}`;
    const spanW = ctx.measureText(span).width;
    const spanX = stacked ? x : x + chipW + 8;
    if (spanX + spanW + 8 + statW <= x + width) text(ctx, span, spanX, statY, 13, theme.inkSoft, "left", 650);
    drawStat(ctx, x + width, statY, "right", shift.cleared, shift.total, shift.stars, shift.starMax, theme, 12);
  }
  function drawChapterCard(ctx, hits, view, x, y, width, cardPad, cardInner, cols, gap, cell, clipTop, clipBottom, block) {
    const { chapter, lines } = block;
    const theme = view.theme;
    roundRect(ctx, x, y, width, block.h, 18);
    ctx.fillStyle = chapter.current ? theme.secondary : theme.panel;
    ctx.fill();
    ctx.strokeStyle = chapter.current ? theme.accent : theme.panelLine;
    ctx.lineWidth = chapter.current ? 2.5 : 1;
    ctx.stroke();
    const titleY = y + 23;
    const label = `${chapter.from}–${chapter.to}`;
    text(ctx, label, x + cardPad, titleY, 16, theme.ink, "left", 750);
    ctx.font = `750 16px ${FONT}`;
    const labelW = ctx.measureText(label).width;
    if (chapter.current) drawPill(ctx, x + cardPad + labelW + 8, titleY, "当前", theme.accent, theme.accentInk);
    else if (chapter.locked) text(ctx, "未解锁", x + cardPad + labelW + 8, titleY, 12, theme.inkSoft, "left", 650);
    const blurbH = Math.max(18, lines.length * 18);
    let lineY = y + 40;
    for (const line of lines) {
      text(ctx, line, x + cardPad, lineY + 9, 13, theme.ink, "left", 500);
      lineY += 18;
    }
    const statY = y + 40 + blurbH + 16;
    drawStat(ctx, x + cardPad, statY, "left", chapter.cleared, chapter.total, chapter.stars, chapter.starMax, theme, 12);
    const meterY = statY + 16;
    drawMeter(ctx, x + cardPad, meterY, cardInner, 5, chapter.total === 0 ? 0 : chapter.cleared / chapter.total, theme.accent, theme.panelLine);
    const gridTop = meterY + 5 + 10;
    chapter.items.forEach((item, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      const rowStart = row * cols;
      const rowCount = Math.min(cols, chapter.items.length - rowStart);
      const rowW = rowCount * cell + (rowCount - 1) * gap;
      const rowLeft = x + cardPad + Math.max(0, (cardInner - rowW) / 2);
      const cellX = rowLeft + col * (cell + gap);
      const cellY = gridTop + row * (cell + gap);
      roundRect(ctx, cellX, cellY, cell, cell, 16);
      ctx.fillStyle = item.locked ? theme.bgTop : item.current ? theme.accentTop : theme.secondary;
      ctx.fill();
      ctx.strokeStyle = item.current ? theme.accent : theme.panelLine;
      ctx.lineWidth = item.current ? 2.5 : 1;
      ctx.stroke();
      if (item.locked) {
        drawLock(ctx, cellX + cell / 2, cellY + cell / 2 - 8, 16, theme.inkSoft);
        text(ctx, String(item.id), cellX + cell / 2, cellY + cell / 2 + 16, 12, theme.inkSoft, "center", 500);
      } else {
        text(ctx, String(item.id), cellX + cell / 2, cellY + cell / 2 - (item.done ? 8 : 0), 18, theme.ink, "center", 750);
        if (item.done) text(ctx, starText(item.stars), cellX + cell / 2, cellY + cell - 14, 11, theme.star, "center", 700);
      }
      const hitTop = Math.max(cellY, clipTop);
      const hitBottom = Math.min(cellY + cell, clipBottom);
      if (hitBottom - hitTop < 8) return;
      hits.push({
        id: item.locked ? `level-locked:${item.id}` : `level:${item.id}`,
        x: cellX,
        y: hitTop,
        w: cell,
        h: hitBottom - hitTop
      });
    });
  }
  function drawPill(ctx, x, centerY, label, fill, ink) {
    ctx.font = `700 11px ${FONT}`;
    const pillW = ctx.measureText(label).width + 14;
    const pillH = 18;
    const y = centerY - pillH / 2;
    roundRect(ctx, x, y, pillW, pillH, 9);
    ctx.fillStyle = fill;
    ctx.fill();
    text(ctx, label, x + pillW / 2, centerY, 11, ink, "center", 700);
  }
  function measureStat(ctx, cleared, total, stars, starMax, size) {
    const clear = `通关 ${cleared}/${total}`;
    const star = `★ ${stars}/${starMax}`;
    ctx.font = `650 ${size}px ${FONT}`;
    const clearW = ctx.measureText(clear).width;
    ctx.font = `500 ${size}px ${FONT}`;
    const dotW = ctx.measureText(" · ").width;
    ctx.font = `700 ${size}px ${FONT}`;
    return clearW + dotW + ctx.measureText(star).width;
  }
  function drawStat(ctx, anchorX, y, align, cleared, total, stars, starMax, theme, size) {
    const clear = `通关 ${cleared}/${total}`;
    const dot = " · ";
    const star = `★ ${stars}/${starMax}`;
    const width = measureStat(ctx, cleared, total, stars, starMax, size);
    const x = align === "right" ? anchorX - width : anchorX;
    ctx.font = `650 ${size}px ${FONT}`;
    const clearW = ctx.measureText(clear).width;
    ctx.font = `500 ${size}px ${FONT}`;
    const dotW = ctx.measureText(dot).width;
    text(ctx, clear, x, y, size, theme.ink, "left", 650);
    text(ctx, dot, x + clearW, y, size, theme.inkSoft, "left", 500);
    text(ctx, star, x + clearW + dotW, y, size, theme.star, "left", 700);
  }
  function drawMeter(ctx, x, y, width, height, ratio, fill, track) {
    const radius = height / 2;
    roundRect(ctx, x, y, width, height, radius);
    ctx.fillStyle = track;
    ctx.fill();
    const amount = Math.max(0, Math.min(1, ratio)) * width;
    if (amount <= 0) return;
    roundRect(ctx, x, y, Math.max(height, Math.min(width, amount)), height, radius);
    ctx.fillStyle = fill;
    ctx.fill();
  }
  function renderSkins(ctx, hits, view, skins) {
    header(ctx, hits, view, "外观");
    const stage = stageBox(view.width, view.height, view.safe);
    const cardH = 176;
    let y = view.safe.top + 68;
    for (const theme of THEME_LIST) {
      const locked = skins.locked.includes(theme.id);
      const x = stage.x + 20;
      const w = stage.w - 40;
      roundRect(ctx, x, y, w, cardH, 22);
      ctx.fillStyle = view.theme.panel;
      ctx.fill();
      ctx.strokeStyle = theme.id === skins.current ? view.theme.accent : view.theme.panelLine;
      ctx.lineWidth = theme.id === skins.current ? 2.5 : 1;
      ctx.stroke();
      text(ctx, theme.name, x + 20, y + 24, 20, view.theme.ink, "left", 750);
      if (locked) text(ctx, "未解锁", x + w - 20, y + 24, 13, view.theme.inkSoft, "right", 650);
      text(ctx, locked ? "看完视频，或任意一章全部三星" : theme.tagline, x + 20, y + 48, 13, view.theme.inkSoft, "left", 500);
      const buttonW = 120;
      const buttonX = x + w - buttonW - 16;
      const miniW = 30;
      const miniStep = 36;
      const miniRoom = buttonX - 8 - (x + 16);
      const miniCount = Math.max(1, Math.min(4, Math.floor((miniRoom + (miniStep - miniW)) / miniStep)));
      const miniY = y + 68;
      for (let i = 0; i < miniCount; i++) {
        drawTube(ctx, {
          x: x + 16 + i * miniStep,
          y: miniY,
          w: miniW,
          h: 58,
          capacity: 4,
          segs: [{ color: i, amount: 4 - i % 2 }],
          theme,
          time: view.time,
          index: i
        });
      }
      const actionY = y + cardH - 50;
      if (locked) {
        button(ctx, hits, view, {
          id: `theme-unlock:${theme.id}`,
          label: "看视频解锁",
          badge: "视频",
          kind: "primary",
          x: buttonX,
          y: actionY,
          w: buttonW,
          h: 40
        });
      } else {
        button(ctx, hits, view, {
          id: `theme:${theme.id}`,
          label: theme.id === skins.current ? "使用中" : "用这套外观",
          kind: theme.id === skins.current ? "secondary" : "primary",
          x: buttonX,
          y: actionY,
          w: buttonW,
          h: 40
        });
      }
      y += cardH + 12;
    }
    const note = "奶油小屋和糖果派对随时能换。";
    if (y + 8 < view.height - view.safe.bottom) {
      text(ctx, note, stage.x + stage.w / 2, y + 8, 13, view.theme.inkSoft, "center", 500);
    }
  }
  function drawSwitch(ctx, x, y, on, theme) {
    const w = 48;
    const h = 28;
    roundRect(ctx, x, y, w, h, 14);
    ctx.fillStyle = on ? theme.accent : "#efe2e8";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(on ? x + w - 14 : x + 14, y + h / 2, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#fffdfb";
    ctx.fill();
    ctx.strokeStyle = on ? "rgba(255,255,255,0.7)" : theme.panelLine;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  function renderSettings(ctx, hits, view, settings) {
    header(ctx, hits, view, "设置");
    const stage = stageBox(view.width, view.height, view.safe);
    const rows = [
      { id: "setting:sound", label: "音效", value: settings.sound ? "开" : "关" },
      { id: "setting:music", label: "轻音乐", value: settings.music ? "开" : "关" },
      { id: "setting:vibration", label: "振动", value: settings.vibration ? "开" : "关" },
      { id: "setting:skins", label: "外观", value: settings.themeName },
      { id: "setting:howto", label: "怎么玩", value: "查看" }
    ];
    let y = view.safe.top + 76;
    for (const row of rows) {
      const x = stage.x + 20;
      const w = stage.w - 40;
      const toggle = row.id === "setting:sound" || row.id === "setting:music" || row.id === "setting:vibration";
      roundRect(ctx, x, y, w, 58, 16);
      ctx.fillStyle = view.theme.panel;
      ctx.fill();
      text(ctx, row.label, x + 18, y + 29, 16, view.theme.ink, "left", 650);
      if (toggle) drawSwitch(ctx, x + w - 66, y + 15, row.value === "开", view.theme);
      else text(ctx, row.value, x + w - 18, y + 29, 15, view.theme.accent, "right", 700);
      hits.push({ id: row.id, x, y, w, h: 58 });
      y += 68;
    }
    const lines = wrapText(ctx, "进度只存在这台设备上。没有账号，也不收集姓名、电话或精确位置。", stage.w - 56, 13, 500);
    lines.forEach((line, index) => {
      text(ctx, line, stage.x + stage.w / 2, y + 20 + index * 20, 13, view.theme.inkSoft, "center", 500);
    });
  }
  function renderHowto(ctx, hits, view) {
    header(ctx, hits, view, "怎么玩");
    const stage = stageBox(view.width, view.height, view.safe);
    const steps = [
      { title: "点一只有水的瓶子", body: "它会轻轻抬起来。再点一次可以放下。" },
      { title: "倒进同色或空瓶", body: "瓶口连着的同一种颜色会一次倒完，倒不进去就改选另一只。" },
      { title: "倒满就端上桌", body: "客人从队首开始喝。桌上坐满、队首又喝不了，就会卡住。看视频可以加桌位，也可以腾一腾。" },
      { title: "问号和冰块", body: "问号要倒到杯口才揭开。冻住的杯子先别倒，先把瓶上标的那色端出去。" }
    ];
    let y = view.safe.top + 80;
    steps.forEach((step, index) => {
      const x = stage.x + 20;
      const w = stage.w - 40;
      roundRect(ctx, x, y, w, 92, 18);
      ctx.fillStyle = view.theme.panel;
      ctx.fill();
      text(ctx, `${index + 1}`, x + 28, y + 28, 18, view.theme.accent, "center", 800);
      text(ctx, step.title, x + 48, y + 28, 16, view.theme.ink, "left", 750);
      const lines = wrapText(ctx, step.body, w - 40, 13, 500);
      lines.forEach((line, lineIndex) => text(ctx, line, x + 20, y + 58 + lineIndex * 18, 13, view.theme.inkSoft, "left", 500));
      y += 100;
    });
    button(ctx, hits, view, {
      id: "howto:ok",
      label: "知道了",
      kind: "primary",
      x: stage.x + 24,
      y: view.height - view.safe.bottom - 72,
      w: stage.w - 48,
      h: 52
    });
  }
  function renderPlay(ctx, hits, view, play) {
    const stage = stageBox(view.width, view.height, view.safe);
    const compact = view.height < 720;
    const top = view.safe.top + 8;
    button(ctx, hits, view, { id: "nav:home", label: "首页", kind: "secondary", x: stage.x + 16, y: top, w: 68, h: 36 });
    button(ctx, hits, view, {
      id: "nav:settings",
      label: "设置",
      kind: "secondary",
      x: stage.x + stage.w - 84,
      y: top,
      w: 68,
      h: 36
    });
    text(
      ctx,
      play.daily ? `今日一单 · ${play.levelName}` : `第 ${play.levelId} 关 · ${play.levelName}`,
      stage.x + stage.w / 2,
      top + 12,
      15,
      view.theme.ink,
      "center",
      750
    );
    text(ctx, `${TIER_LABEL[play.tier]} · ${play.moves} 步`, stage.x + stage.w / 2, top + 30, 11, view.theme.inkSoft, "center", 500);
    const orderH = compact ? 72 : 80;
    const tableH = compact ? 58 : 62;
    const orderY = top + 42;
    const tableY = orderY + orderH + 6;
    drawOrderQueue(ctx, view, play, stage.x + 12, orderY, stage.w - 24, orderH);
    if (view.servePop && !view.modal) drawServePop(ctx, view, stage.x + stage.w / 2, orderY + (orderH - 34) / 2, view.servePop);
    drawTableStrip(ctx, view, play, stage.x + 12, tableY, stage.w - 24, tableH);
    const toolH = 36;
    const mainH = 50;
    const bottomH = toolH + mainH + 14;
    const bottomY = view.height - view.safe.bottom - bottomH;
    const bannerH = play.tutorial || play.stuck ? 64 : 0;
    const bannerGap = 12;
    const areaTop = tableY + tableH + 6;
    const area = {
      x: stage.x + 6,
      y: areaTop,
      w: stage.w - 12,
      h: Math.max(120, bottomY - bannerH - bannerGap - areaTop)
    };
    const mouths = layoutAndDrawTubes(ctx, hits, view, play, area);
    if (play.stream && mouths[play.stream.src] && mouths[play.stream.dst]) {
      drawStream(ctx, view.theme, mouths[play.stream.src], mouths[play.stream.dst], play.stream.color, play.stream.progress, view.time);
    }
    play.tubes.forEach((tube, index) => {
      const mouth = mouths[index];
      if (!mouth || tube.frozen === null) return;
      drawIceTag(ctx, view.theme, mouth.x, mouth.y, tube.frozen, view.time);
    });
    if (play.tutorial?.tube !== void 0) {
      const mouth = mouths[play.tutorial.tube];
      if (mouth) drawPointingArrow(ctx, mouth.x, mouth.y, view.time, view.theme.accent);
    }
    if (play.tutorial) {
      drawBanner(ctx, hits, view, stage.x + 16, bottomY - bannerH, stage.w - 32, play.tutorial.text, "tutorial:skip", "跳过");
    } else if (play.stuck) {
      const message = play.stuckReason === "moves" ? "这几杯倒不开了。看视频可以救一下。" : play.stuckReason === "both" ? "桌位和杯子都卡住啦。看视频腾一腾。" : "桌上坐满啦，队首喝不了。看视频加个位。";
      drawBanner(ctx, hits, view, stage.x + 16, bottomY - bannerH, stage.w - 32, message, "btn:stuck", "复活");
    }
    const tools = [{ id: "btn:hint", label: "提示" }];
    if (play.fog) tools.push({ id: "btn:peek", label: "透视" });
    tools.push({ id: "btn:extra", label: play.extraLeft > 0 ? "加桌" : "已加", disabled: play.extraLeft <= 0 });
    const toolGap = 8;
    const toolW = (stage.w - 32 - toolGap * (tools.length - 1)) / tools.length;
    tools.forEach((tool, index) => {
      button(ctx, hits, view, {
        id: tool.id,
        label: tool.label,
        kind: "ghost",
        disabled: tool.disabled,
        x: stage.x + 16 + index * (toolW + toolGap),
        y: bottomY,
        w: toolW,
        h: toolH
      });
    });
    const mainGap = 10;
    const mainW = (stage.w - 32 - mainGap) / 2;
    const mainY = bottomY + toolH + 6;
    button(ctx, hits, view, {
      id: "btn:undo",
      label: "撤销",
      badge: `还能退 ${play.undoLeft} 次`,
      kind: "secondary",
      x: stage.x + 16,
      y: mainY,
      w: mainW,
      h: mainH
    });
    button(ctx, hits, view, {
      id: "btn:restart",
      label: "重开",
      kind: "secondary",
      x: stage.x + 16 + mainW + mainGap,
      y: mainY,
      w: mainW,
      h: mainH
    });
  }
  function drawOrderQueue(ctx, view, play, x, y, w, h) {
    roundRect(ctx, x, y, w, h, 18);
    ctx.fillStyle = view.theme.panel;
    ctx.fill();
    text(ctx, "排队", x + 24, y + 14, 11, view.theme.inkSoft, "center", 700);
    text(ctx, `${play.orders.length} 位`, x + 24, y + h - 14, 12, view.theme.ink, "center", 700);
    if (play.orders.length === 0) {
      text(ctx, "客人都喝到啦", x + w / 2 + 16, y + h / 2, 15, view.theme.ink, "center", 700);
      return;
    }
    const visible = Math.min(4, play.orders.length);
    const extra = play.orders.length - visible;
    const labelW = 52;
    const tailW = extra > 0 ? 32 : 8;
    const gap = 4;
    const inner = w - labelW - tailW - 8;
    const guestW = Math.max(40, Math.min(64, (inner - gap * Math.max(0, visible - 1)) / visible));
    let cursor = x + labelW;
    for (let i = 0; i < visible; i++) {
      const front = i === 0;
      const gw = front ? guestW : Math.max(36, guestW - 6);
      drawGuest(ctx, view.theme, cursor, y + 2, gw, h - 4, play.orders[i], front, front && play.hinting, view.time);
      cursor += gw + gap;
    }
    if (extra > 0) text(ctx, `+${extra}`, x + w - 16, y + h / 2, 13, view.theme.inkSoft, "center", 700);
  }
  function drawServePop(ctx, view, cx, y, pop) {
    const age = Math.max(0, view.time - pop.born);
    const t = Math.min(1, age / Math.max(1, pop.life));
    const alpha = t < 0.12 ? t / 0.12 : t > 0.7 ? (1 - t) / 0.3 : 1;
    const rise = t * 8;
    const w = Math.max(108, pop.text.length * 16 + 36);
    const h = 34;
    const x = cx - w / 2;
    ctx.save();
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
    roundRect(ctx, x, y - rise, w, h, 17);
    ctx.fillStyle = view.theme.toastBg;
    ctx.fill();
    drawSparkle(ctx, x + 18, y - rise + 17, 5, "#fff8fb", 0.95);
    text(ctx, pop.text, cx + 8, y - rise + 17, 15, view.theme.toastInk, "center", 750);
    ctx.restore();
  }
  function drawTableStrip(ctx, view, play, x, y, w, h) {
    const blocked = play.stuck && (play.stuckReason === "table" || play.stuckReason === "both");
    roundRect(ctx, x, y, w, h, 18);
    ctx.fillStyle = view.theme.panel;
    ctx.fill();
    if (blocked) {
      ctx.strokeStyle = view.theme.danger;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    text(ctx, "餐桌", x + 22, y + h / 2, 13, view.theme.ink, "center", 700);
    text(ctx, `${play.table.length}/${play.tableSlots}`, x + w - 28, y + h / 2, 13, blocked ? view.theme.danger : view.theme.inkSoft, "center", 700);
    const slots = Math.max(1, play.tableSlots);
    const gap = 8;
    const maxRow = Math.max(40, w - 112);
    const seat = Math.max(24, Math.min(46, h - 16, (maxRow - gap * (slots - 1)) / slots));
    const rowW = slots * seat + (slots - 1) * gap;
    const left = x + 48 + Math.max(0, (w - 96 - rowW) / 2);
    const seatY = y + (h - seat) / 2;
    for (let i = 0; i < slots; i++) {
      drawSeat(ctx, view.theme, left + i * (seat + gap), seatY, seat, play.table[i] ?? null, view.time);
    }
  }
  function layoutAndDrawTubes(ctx, hits, view, play, area) {
    const count = play.tubes.length;
    const cols = count <= 4 ? count : count <= 8 ? Math.ceil(count / 2) : count <= 12 ? 4 : 5;
    const rows = Math.ceil(count / cols);
    const gapX = 12;
    const gapY = 18;
    const headroom = 34;
    const maxW = (area.w - gapX * (cols - 1)) / cols;
    const innerH = Math.max(80, area.h - headroom);
    const maxH = (innerH - gapY * (rows - 1)) / rows;
    const w = Math.max(44, Math.min(72, maxW));
    const h = Math.max(96, Math.min(188, maxH));
    const gridH = rows * h + (rows - 1) * gapY;
    const top = area.y + headroom + Math.max(0, (innerH - gridH) / 2);
    const spots = play.tubes.map((_, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      const inRow = Math.min(cols, count - row * cols);
      const rowW = inRow * w + (inRow - 1) * gapX;
      const left = area.x + (area.w - rowW) / 2;
      return { x: left + col * (w + gapX), y: top + row * (h + gapY) };
    });
    const mouths = [];
    play.tubes.forEach((tube, index) => {
      const spot = spots[index];
      const x = spot.x;
      const y = spot.y;
      let tilt = 0;
      if (play.stream && play.stream.src === index) {
        const dest = spots[play.stream.dst];
        const dir = dest && dest.x >= x ? 1 : -1;
        tilt = dir * 0.42 * Math.sin(Math.min(1, play.stream.progress) * Math.PI);
      }
      const mouth = drawTube(ctx, {
        x,
        y,
        w,
        h,
        capacity: play.capacity,
        segs: tube.segs,
        theme: view.theme,
        time: view.time,
        index,
        tilt,
        lift: tube.lift,
        shake: tube.shake,
        selected: tube.selected,
        hint: tube.hint,
        frozen: tube.frozen
      });
      if (play.tutorial?.tube === index) {
        ctx.save();
        ctx.strokeStyle = view.theme.accent;
        ctx.globalAlpha = 0.85;
        ctx.lineWidth = 2.5;
        roundRect(ctx, x - 4, y - 6, w + 8, h + 10, 18);
        ctx.stroke();
        ctx.restore();
      }
      mouths.push(mouth);
      if (!play.stream) hits.push({ id: `tube:${index}`, x, y: y - tube.lift, w, h });
    });
    return mouths;
  }
  function drawStream(ctx, theme, from, to, color, progress, time) {
    const palette = theme.liquids[color % theme.liquids.length];
    const fade = progress < 0.12 ? progress / 0.12 : progress > 0.88 ? (1 - progress) / 0.12 : 1;
    const cpx = (from.x + to.x) / 2;
    const cpy = Math.min(from.y, to.y) - 28;
    ctx.save();
    ctx.globalAlpha = Math.max(0, fade);
    ctx.strokeStyle = palette.base;
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.quadraticCurveTo(cpx, cpy, to.x, to.y + 16);
    ctx.stroke();
    ctx.strokeStyle = palette.light;
    ctx.lineWidth = 2;
    ctx.stroke();
    for (let i = 0; i < 4; i++) {
      const t = (time / 400 + i / 4) % 1;
      const u = 1 - t;
      const x = u * u * from.x + 2 * u * t * cpx + t * t * to.x;
      const y = u * u * from.y + 2 * u * t * cpy + t * t * (to.y + 16);
      ctx.fillStyle = palette.light;
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
  function drawBanner(ctx, hits, view, x, y, w, message, actionId, action) {
    roundRect(ctx, x, y, w, 70, 16);
    ctx.fillStyle = view.theme.panel;
    ctx.fill();
    const lines = wrapText(ctx, message, w - 92, 13, 500);
    lines.slice(0, 2).forEach((line, index) => {
      text(ctx, line, x + 14, y + 24 + index * 18, 13, view.theme.ink, "left", 500);
    });
    button(ctx, hits, view, { id: actionId, label: action, kind: "primary", x: x + w - 78, y: y + 16, w: 64, h: 38 });
  }
  function renderModal(ctx, hits, view, modal) {
    const stage = stageBox(view.width, view.height, view.safe);
    const cardW = Math.min(stage.w - 36, 360);
    const x = stage.x + (stage.w - cardW) / 2;
    if (modal.kind === "win") renderWin(ctx, hits, view, modal, x, cardW);
    else if (modal.kind === "fail") renderFail(ctx, hits, view, modal, x, cardW);
    else if (modal.kind === "restart") renderRestart(ctx, hits, view, x, cardW);
    else renderAd(ctx, hits, view, modal, x, cardW);
  }
  function drawPopStars(ctx, cx, y, stars, elapsed, filled, empty) {
    for (let i = 0; i < 3; i++) {
      const t = Math.min(1, Math.max(0, (elapsed - i * 90) / 220));
      const pop = t <= 0 ? 0.2 : t < 1 ? 1 + Math.sin(t * Math.PI) * 0.4 : 1;
      ctx.save();
      ctx.translate(cx + (i - 1) * 30, y);
      ctx.scale(pop, pop);
      text(ctx, i < stars ? "★" : "☆", 0, 0, 28, i < stars ? filled : empty, "center", 800);
      ctx.restore();
    }
  }
  function renderWin(ctx, hits, view, modal, x, cardW) {
    const daily = modal.dailyStreak !== void 0;
    const cardH = daily ? 400 : modal.last ? 384 : 400;
    const y = Math.max(view.safe.top + 8, view.height * 0.12);
    card(ctx, view, x, y, cardW, cardH);
    drawHeart(ctx, x + 36, y + 36, 10, view.theme.accent);
    drawHeart(ctx, x + cardW - 36, y + 36, 10, view.theme.accent);
    text(ctx, "都喝到啦", x + cardW / 2, y + 46, 28, view.theme.ink, "center", 800);
    text(
      ctx,
      daily ? `今日一单 · ${modal.levelName}` : `第 ${modal.levelId} 关 · ${modal.levelName}`,
      x + cardW / 2,
      y + 78,
      14,
      view.theme.inkSoft,
      "center",
      500
    );
    drawPopStars(ctx, x + cardW / 2, y + 112, modal.stars, view.celebrate ?? 1e3, view.theme.star, view.theme.inkSoft);
    text(ctx, `用了 ${modal.moves} 步`, x + cardW / 2, y + 142, 14, view.theme.ink, "center", 600);
    const bw = cardW - 40;
    const rewardLabel = `看视频，多 ${CLEAR_UNDO_BONUS} 次撤销`;
    if (daily) {
      text(ctx, `连胜 ${modal.dailyStreak} 天`, x + cardW / 2, y + 168, 15, view.theme.accent, "center", 750);
      button(ctx, hits, view, { id: "modal:primary", label: "回首页", kind: "primary", x: x + 20, y: y + 190, w: bw, h: 48 });
      if (modal.rewardClaimed) {
        text(ctx, `下一局可以多撤销 ${CLEAR_UNDO_BONUS} 次`, x + cardW / 2, y + 262, 14, view.theme.ink, "center", 650);
      } else {
        button(ctx, hits, view, {
          id: "modal:reward",
          label: rewardLabel,
          badge: "视频",
          kind: "secondary",
          x: x + 20,
          y: y + 246,
          w: bw,
          h: 48
        });
      }
      button(ctx, hits, view, { id: "modal:secondary", label: "再做一次", kind: "secondary", x: x + 20, y: y + 304, w: bw, h: 44 });
    } else if (modal.last) {
      text(ctx, "客人都喝好啦", x + cardW / 2, y + 168, 13, view.theme.inkSoft, "center", 500);
      button(ctx, hits, view, { id: "modal:primary", label: "回到选关", kind: "primary", x: x + 20, y: y + 190, w: bw, h: 48 });
      if (modal.rewardClaimed) {
        text(ctx, `下一局可以多撤销 ${CLEAR_UNDO_BONUS} 次`, x + cardW / 2, y + 262, 14, view.theme.ink, "center", 650);
      } else {
        button(ctx, hits, view, {
          id: "modal:reward",
          label: rewardLabel,
          badge: "视频",
          kind: "secondary",
          x: x + 20,
          y: y + 246,
          w: bw,
          h: 48
        });
      }
      button(ctx, hits, view, { id: "modal:secondary", label: "再玩一次", kind: "secondary", x: x + 20, y: y + 304, w: bw, h: 44 });
    } else {
      button(ctx, hits, view, { id: "modal:primary", label: "下一关", kind: "primary", x: x + 20, y: y + 164, w: bw, h: 48 });
      if (modal.rewardClaimed) {
        text(ctx, `下一局可以多撤销 ${CLEAR_UNDO_BONUS} 次`, x + cardW / 2, y + 240, 14, view.theme.ink, "center", 650);
      } else {
        button(ctx, hits, view, {
          id: "modal:reward",
          label: rewardLabel,
          badge: "视频",
          kind: "secondary",
          x: x + 20,
          y: y + 220,
          w: bw,
          h: 48
        });
      }
      button(ctx, hits, view, { id: "modal:secondary", label: "再玩一次", kind: "secondary", x: x + 20, y: y + 276, w: bw, h: 44 });
      button(ctx, hits, view, { id: "modal:tertiary", label: "选关", kind: "ghost", x: x + 20, y: y + 328, w: bw, h: 40 });
    }
  }
  function renderFail(ctx, hits, view, modal, x, cardW) {
    const y = view.height * 0.2;
    const cardH = 340;
    card(ctx, view, x, y, cardW, cardH);
    text(ctx, "出餐卡住啦", x + cardW / 2, y + 40, 26, view.theme.ink, "center", 800);
    const body = modal.reason === "moves" ? "这几杯倒不开了。看完视频会多一个桌位，还倒不开就再给一只空瓶。" : modal.reason === "both" ? "桌位和杯子都卡住了。看完视频先腾一个位，不够再多一只空瓶。" : "桌上坐满啦，队首喝不了。看完视频会多一个桌位。";
    const lines = wrapText(ctx, body, cardW - 48, 14, 500);
    lines.forEach((line, index) => text(ctx, line, x + cardW / 2, y + 84 + index * 22, 14, view.theme.inkSoft, "center", 500));
    const bw = cardW - 40;
    button(ctx, hits, view, {
      id: "modal:primary",
      label: modal.reviveLeft > 0 ? "看视频复活" : "复活已用过",
      kind: "primary",
      badge: modal.reviveLeft > 0 ? "视频" : void 0,
      disabled: modal.reviveLeft <= 0,
      x: x + 20,
      y: y + 160,
      w: bw,
      h: 52
    });
    button(ctx, hits, view, { id: "modal:secondary", label: "重新开始", kind: "secondary", x: x + 20, y: y + 222, w: bw, h: 44 });
    button(ctx, hits, view, { id: "modal:dismiss", label: "先看看", kind: "ghost", x: x + 20, y: y + 272, w: (bw - 10) / 2, h: 40 });
    button(ctx, hits, view, {
      id: "modal:tertiary",
      label: modal.daily ? "回首页" : "回选关",
      kind: "ghost",
      x: x + 20 + (bw - 10) / 2 + 10,
      y: y + 272,
      w: (bw - 10) / 2,
      h: 40
    });
  }
  function renderRestart(ctx, hits, view, x, cardW) {
    const y = view.height * 0.28;
    card(ctx, view, x, y, cardW, 220);
    text(ctx, "要重开这一关吗？", x + cardW / 2, y + 42, 24, view.theme.ink, "center", 800);
    text(ctx, "客人会重新排队，桌位也回到原来的数量。", x + cardW / 2, y + 78, 14, view.theme.inkSoft, "center", 500);
    const bw = cardW - 40;
    button(ctx, hits, view, { id: "modal:primary", label: "重开", kind: "primary", x: x + 20, y: y + 112, w: bw, h: 48 });
    button(ctx, hits, view, { id: "modal:secondary", label: "继续倒", kind: "secondary", x: x + 20, y: y + 168, w: bw, h: 44 });
  }
  function renderAd(ctx, hits, view, modal, x, cardW) {
    const dialog = adDialogCopy(modal.mock);
    const lines = wrapText(ctx, dialog.body, cardW - 48, 14, 500);
    const cardH = modal.mock ? Math.max(300, 108 + lines.length * 22 + 116) : 250;
    const y = modal.mock ? Math.max(view.safe.top + 12, (view.height - cardH) / 2) : view.height * 0.22;
    card(ctx, view, x, y, cardW, cardH);
    text(ctx, dialog.title, x + cardW / 2, y + 40, 24, view.theme.ink, "center", 800);
    text(ctx, `${dialog.rewardPrefix}：${PLACEMENT_LABEL[modal.placement]}`, x + cardW / 2, y + 74, 15, view.theme.ink, "center", 650);
    lines.forEach((line, index) => text(ctx, line, x + cardW / 2, y + 108 + index * 22, 14, view.theme.inkSoft, "center", 500));
    const bw = cardW - 40;
    const by = y + cardH - 116;
    button(ctx, hits, view, { id: "ad:complete", label: dialog.complete, kind: "primary", x: x + 20, y: by, w: bw, h: 48 });
    button(ctx, hits, view, { id: "ad:skip", label: dialog.skip, kind: "secondary", x: x + 20, y: by + 56, w: bw, h: 44 });
  }
  function card(ctx, view, x, y, w, h) {
    ctx.fillStyle = view.theme.shadow;
    roundRect(ctx, x, y + 8, w, h, 28);
    ctx.fill();
    roundRect(ctx, x, y, w, h, 28);
    ctx.fillStyle = view.theme.card;
    ctx.fill();
    ctx.strokeStyle = view.theme.panelLine;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  function header(ctx, hits, view, title) {
    const stage = stageBox(view.width, view.height, view.safe);
    button(ctx, hits, view, {
      id: "nav:back",
      label: "返回",
      kind: "secondary",
      x: stage.x + 16,
      y: view.safe.top + 12,
      w: 72,
      h: 40
    });
    text(ctx, title, stage.x + stage.w / 2 + 16, view.safe.top + 32, 18, view.theme.ink, "center", 750);
  }
  function button(ctx, hits, view, spec) {
    drawButton(ctx, hits, view.theme, spec, view.pressedId === spec.id);
  }
  function starText(stars) {
    const filled = Math.max(0, Math.min(3, stars));
    return `${"★".repeat(filled)}${"☆".repeat(3 - filled)}`;
  }

  // src/game/visual.ts
  function easeInOut(t) {
    const x = Math.min(1, Math.max(0, t));
    return x < 0.5 ? 2 * x * x : 1 - (-2 * x + 2) ** 2 / 2;
  }
  function segsFromTube(tube, conceal) {
    const segs = [];
    tube.forEach((color, index) => {
      const concealed = conceal?.[index] === true;
      const last = segs[segs.length - 1];
      if (last && !!last.concealed === concealed && (concealed || last.color === color)) last.amount += 1;
      else segs.push({ color, amount: 1, concealed });
    });
    return segs;
  }
  function segsHidingTop(tube, hidden, conceal) {
    const visible = Math.max(0, tube.length - hidden);
    const full = Math.floor(visible + 1e-4);
    const frac = visible - full;
    const segs = [];
    for (let i = 0; i < full; i++) segs.push({ color: tube[i], amount: 1, concealed: conceal?.[i] === true });
    if (frac > 0.02 && full < tube.length) segs.push({ color: tube[full], amount: frac, concealed: conceal?.[full] === true });
    return segsFromAmounts(segs);
  }
  function segsAddingTop(tube, color, added, conceal) {
    const segs = segsFromTube(tube, conceal);
    if (added <= 0.02) return segs;
    const last = segs[segs.length - 1];
    if (last && last.color === color) last.amount += added;
    else segs.push({ color, amount: added });
    return segs;
  }
  function segsFromAmounts(segs) {
    const merged = [];
    for (const seg of segs) {
      const last = merged[merged.length - 1];
      if (last && !!last.concealed === !!seg.concealed && (seg.concealed || last.color === seg.color)) last.amount += seg.amount;
      else merged.push({ ...seg });
    }
    return merged;
  }
  function pourProgress(pour, now) {
    return easeInOut((now - pour.started) / pour.duration);
  }

  // src/game/app.ts
  var pack = levels_default;
  var adConfig = ad_config_default;
  function startGame(platform) {
    return new Game(platform).debugApi();
  }
  var Game = class {
    constructor(platform) {
      __publicField(this, "platform");
      __publicField(this, "save");
      __publicField(this, "ads");
      __publicField(this, "analytics");
      __publicField(this, "screen", "home");
      __publicField(this, "stack", []);
      __publicField(this, "session", null);
      __publicField(this, "modal", null);
      __publicField(this, "hits", []);
      __publicField(this, "maxScroll", 0);
      __publicField(this, "levelScroll", 0);
      /** 打开选关时滚到当前关所在的那一场。 */
      __publicField(this, "anchorLevels", false);
      __publicField(this, "gesture", null);
      __publicField(this, "listGesture", false);
      __publicField(this, "pour", null);
      /** Orders and table as they were before the pour animation, so the cup lands when the pour ends. */
      __publicField(this, "holdService", null);
      __publicField(this, "holdConceal", null);
      __publicField(this, "lesson", null);
      __publicField(this, "wonAt", 0);
      __publicField(this, "particles", []);
      /** 客人喝完的短句。和过关弹窗分开，到点就淡掉。 */
      __publicField(this, "serveNote", null);
      __publicField(this, "toastText", "");
      __publicField(this, "toastUntil", 0);
      __publicField(this, "pressedId", null);
      __publicField(this, "pressedAt", 0);
      __publicField(this, "shakeIndex", -1);
      __publicField(this, "shakeAt", 0);
      __publicField(this, "dismissAt", 0);
      __publicField(this, "busy", false);
      __publicField(this, "stuckNoted", false);
      __publicField(this, "last", 0);
      __publicField(this, "adResolve", null);
      /** 过关视频换来的撤销，下一局开始时加到 undoLeft，不写入存档。 */
      __publicField(this, "clearUndoPending", 0);
      /** 每日一单和主线分开记。每日过关不写 best，也不解锁下一关。 */
      __publicField(this, "playMode", "campaign");
      /** 这一局每日一单对应的本地日。过关记在这一天，不记在过关那一刻的日期。 */
      __publicField(this, "dailySessionDate", null);
      this.platform = platform;
      this.save = parseSave(platform.storageGet(SAVE_KEY));
      if (this.save.unlocked > pack.levels.length) this.save.unlocked = pack.levels.length;
      this.refreshDaily();
      platform.audio.muted = !this.save.sound;
      platform.audio.setMusic(this.save.music);
      this.ads = createAdService({
        config: adConfig,
        tt: platform.getTtAds(),
        requestMock: (placement) => this.openMockAd(placement)
      });
      this.analytics = createAnalytics((event, payload) => platform.reportAnalytics(event, payload));
      this.analytics.track("boot", { levels: pack.levels.length, theme: this.save.theme });
      this.last = platform.now();
      platform.onResize(() => this.draw());
      platform.onPointer((event) => this.onPointer(event));
      platform.onKey((key) => this.onKey(key));
      platform.onWheel((deltaY) => {
        if (this.screen !== "levels" || this.modal) return;
        this.levelScroll = clamp2(this.levelScroll + deltaY, 0, this.maxScroll);
        this.draw();
      });
      this.draw();
      platform.requestFrame((time) => this.frame(time));
    }
    frame(now) {
      const dt = Math.min(0.05, Math.max(0, (now - this.last) / 1e3));
      this.last = now;
      this.update(now, dt);
      this.draw();
      this.platform.requestFrame((time) => this.frame(time));
    }
    update(now, dt) {
      if (this.pressedId && now - this.pressedAt > 110) this.pressedId = null;
      const session = this.session;
      if (session && !this.save.tutorialDone) {
        const step = session.level.tutorial?.[session.tutorialStep];
        if (step?.wait === "dismiss" && this.dismissAt && now >= this.dismissAt) {
          session.tutorialStep += 1;
          this.dismissAt = 0;
          this.finishTutorialIfDone();
        }
      }
      if (this.pour && now - this.pour.started >= this.pour.duration) this.finishPour();
      for (const bit of this.particles) {
        bit.life -= dt;
        bit.vy += (bit.kind === "serve" ? 36 : 520) * dt;
        bit.x += bit.vx * dt;
        bit.y += bit.vy * dt;
        bit.rot += bit.vr * dt;
      }
      this.particles = this.particles.filter((bit) => bit.life > 0);
    }
    draw() {
      this.levelScroll = clamp2(this.levelScroll, 0, this.maxScroll);
      const size = this.platform.getSize();
      const now = this.platform.now();
      const rendered = render(this.platform.ctx, this.buildView(size.width, size.height, now));
      this.hits = rendered.hits;
      this.maxScroll = rendered.maxScroll;
      if (this.anchorLevels) {
        this.anchorLevels = false;
        const next = clamp2(rendered.focusY, 0, this.maxScroll);
        if (next !== this.levelScroll) {
          this.levelScroll = next;
          this.draw();
        }
        return;
      }
      if (this.levelScroll > this.maxScroll) this.levelScroll = this.maxScroll;
    }
    buildView(width, height, now) {
      this.refreshDaily();
      const theme = THEMES[this.save.theme];
      const frontier = Math.min(this.save.unlocked, pack.levels.length);
      const cleared = pack.levels.filter((level) => this.save.best[String(level.id)]).length;
      const view = {
        theme,
        width,
        height,
        safe: this.platform.safeArea(),
        time: now,
        pressedId: this.pressedId,
        toast: now < this.toastUntil ? this.toastText : null,
        modal: this.modal,
        bits: this.particles.map((bit) => ({
          x: bit.x,
          y: bit.y,
          color: bit.color,
          rot: bit.rot,
          size: bit.size,
          kind: bit.kind,
          alpha: Math.max(0, Math.min(1, bit.life / bit.maxLife))
        })),
        celebrate: this.modal?.kind === "win" ? now - this.wonAt : void 0,
        servePop: this.serveNote && now < this.serveNote.born + this.serveNote.life ? this.serveNote : null,
        screen: this.screen,
        trial: this.platform.kind === "browser"
      };
      if (this.screen === "home") {
        const daily = dailyHome(this.save, localToday(), this.dailyInProgress());
        view.home = {
          continueLabel: this.continueLabel(frontier),
          showTip: !this.save.tutorialDone,
          cleared,
          total: pack.levels.length,
          daily: {
            dateLabel: daily.dateLabel,
            done: daily.done,
            moves: daily.moves,
            streak: daily.streak,
            actionLabel: daily.actionLabel
          }
        };
      } else if (this.screen === "levels") {
        view.levels = {
          scroll: this.levelScroll,
          shifts: levelSelect(
            pack.levels.map((level) => level.id),
            this.save
          )
        };
      } else if (this.screen === "settings") {
        view.settings = {
          sound: this.save.sound,
          music: this.save.music,
          vibration: this.save.vibration,
          themeName: theme.name
        };
      } else if (this.screen === "skins") {
        view.skins = {
          current: this.save.theme,
          locked: THEME_LIST.filter((theme2) => !isThemeUnlocked(theme2.id, this.save)).map((theme2) => theme2.id)
        };
      } else if (this.screen === "play" && this.session) {
        view.play = this.buildPlay(now);
      }
      return view;
    }
    buildPlay(now) {
      const session = this.session;
      const tubes = session.tubes.map((tube, index) => {
        const conceal = this.pour && this.holdConceal ? this.holdConceal[index] : session.conceal[index];
        let segs = segsFromTube(tube, this.pour && (index === this.pour.src || index === this.pour.dst) ? conceal : session.conceal[index]);
        if (this.pour && index === this.pour.src) segs = segsHidingTop(this.pour.srcBase, this.pour.amount * pourProgress(this.pour, now), conceal);
        else if (this.pour && index === this.pour.dst) {
          segs = segsAddingTop(this.pour.dstBase, this.pour.color, this.pour.amount * pourProgress(this.pour, now), conceal);
        }
        const shaking = this.shakeIndex === index ? Math.max(0, 1 - (now - this.shakeAt) / 380) : 0;
        let hint = null;
        if (session.hint?.src === index) hint = "src";
        if (session.hint?.dst === index) hint = "dst";
        return {
          index,
          segs,
          lift: session.selected === index && !this.pour ? 18 : 0,
          shake: shaking ? Math.sin((now - this.shakeAt) * 0.08) * 6 * shaking : 0,
          selected: session.selected === index,
          hint,
          frozen: session.frozen[index] ?? null
        };
      });
      const steps = session.level.tutorial;
      const step = steps && !this.save.tutorialDone ? steps[session.tutorialStep] : void 0;
      const lessonText = this.lesson === "fog" ? "问号是还没看见的颜色。倒到杯口就会揭开。" : this.lesson === "ice" ? "冻住的杯子先别倒。先把瓶上标的那色端出去，冰就化。" : null;
      return {
        levelId: session.level.id,
        levelName: session.level.name,
        daily: this.playMode === "daily",
        tier: session.level.tier,
        moves: session.moves,
        capacity: session.level.capacity,
        tubes,
        stream: this.pour ? { src: this.pour.src, dst: this.pour.dst, color: this.pour.color, progress: pourProgress(this.pour, now) } : null,
        undoLeft: session.undoLeft,
        extraLeft: session.extraLeft,
        stuck: !this.pour && session.status === "stuck",
        stuckReason: this.pour ? null : session.stuckReason,
        orders: this.pour && this.holdService ? this.holdService.orders : session.orders,
        table: this.pour && this.holdService ? this.holdService.table : session.table,
        tableSlots: session.tableSlots,
        hinting: session.hint !== null,
        fog: session.level.fog === true,
        tutorial: step ? { text: step.text, tube: step.tube } : lessonText ? { text: lessonText } : null
      };
    }
    continueLabel(frontier) {
      const inProgress = this.session !== null && this.session.level.id === frontier && this.session.status !== "won" && this.session.moves > 0;
      if (inProgress) return `继续第 ${frontier} 关`;
      if (!this.save.best[String(frontier)] && frontier === 1) return "开始第一关";
      if (this.save.best[String(frontier)]) return `重玩第 ${frontier} 关`;
      return `开始第 ${frontier} 关`;
    }
    onPointer(event) {
      if (event.type === "down") {
        this.platform.audio.prime();
        const hit = hitTest(this.hits, event.x, event.y);
        this.pressedId = hit?.id ?? null;
        this.pressedAt = this.platform.now();
        this.gesture = { x: event.x, y: event.y, scroll: this.levelScroll, moved: false, id: hit?.id ?? null };
        this.listGesture = this.screen === "levels" && !this.modal && !!hit && (hit.id === "levels:board" || hit.id.startsWith("level"));
        return;
      }
      if (event.type === "move" && this.gesture && this.listGesture) {
        const dy = event.y - this.gesture.y;
        if (Math.abs(dy) > 8) this.gesture.moved = true;
        this.levelScroll = clamp2(this.gesture.scroll - dy, 0, this.maxScroll);
        this.draw();
        return;
      }
      if (event.type === "up" && this.gesture) {
        const distance = Math.hypot(event.x - this.gesture.x, event.y - this.gesture.y);
        const moved = this.gesture.moved || distance > 12;
        const id = this.gesture.id;
        this.gesture = null;
        this.listGesture = false;
        if (!moved && id) this.onTap(id);
        else this.draw();
        this.platform.audio.unlock();
      }
    }
    onKey(key) {
      this.platform.audio.prime();
      this.platform.audio.unlock();
      if (key === "Escape") {
        if (this.modal?.kind === "ad") return;
        if (this.modal) {
          this.modal = null;
          this.draw();
          return;
        }
        if (this.stack.length > 0) this.pop();
        else if (this.screen === "play") this.goHome();
        return;
      }
      if (key === "m" || key === "M") {
        this.toggleSound();
        return;
      }
      if (this.screen !== "play" || this.modal) return;
      if (key === "u" || key === "U") this.onUndo();
      if (key === "r" || key === "R") this.askRestart();
    }
    onTap(id) {
      if (this.pour && !id.startsWith("ad:")) return;
      if (this.busy && !id.startsWith("ad:")) return;
      if (id === "ad:complete" || id === "ad:skip") {
        this.resolveAd(id === "ad:complete");
        return;
      }
      if (this.modal) {
        this.onModal(id);
        return;
      }
      if (id === "nav:continue") this.continueGame();
      else if (id === "nav:daily") this.openDaily();
      else if (id === "nav:levels") this.openLevels();
      else if (id === "nav:skins" || id === "setting:skins") this.push("skins");
      else if (id === "nav:settings") this.push("settings");
      else if (id === "nav:home") this.goHome();
      else if (id === "nav:back" || id === "howto:ok") this.pop();
      else if (id === "setting:howto") this.push("howto");
      else if (id === "setting:sound") this.toggleSound();
      else if (id === "setting:music") this.toggleMusic();
      else if (id === "setting:vibration") this.toggleVibration();
      else if (id.startsWith("theme-unlock:")) void this.onUnlockTheme(id.slice("theme-unlock:".length));
      else if (id.startsWith("theme:")) this.applyTheme(id.slice("theme:".length));
      else if (id.startsWith("level-locked:")) this.toast("先通过上一关");
      else if (id.startsWith("level:")) this.startLevel(Number(id.slice("level:".length)));
      else if (id.startsWith("tube:")) this.onTube(Number(id.slice("tube:".length)));
      else if (id === "btn:undo") this.onUndo();
      else if (id === "btn:hint") void this.onHint();
      else if (id === "btn:peek") void this.onPeek();
      else if (id === "btn:extra") void this.onExtra();
      else if (id === "btn:restart") this.askRestart();
      else if (id === "btn:stuck") this.openFail();
      else if (id === "tutorial:skip") this.skipLessonOrTutorial();
    }
    onModal(id) {
      const modal = this.modal;
      if (!modal || modal.kind === "ad") return;
      if (modal.kind === "win") {
        if (modal.dailyStreak !== void 0) {
          if (id === "modal:primary") this.goHome();
          else if (id === "modal:reward") void this.onClearReward();
          else if (id === "modal:secondary") this.replay();
          return;
        }
        if (id === "modal:primary") {
          if (modal.last) this.openLevels();
          else this.startLevel(modal.levelId + 1);
        } else if (id === "modal:reward") void this.onClearReward();
        else if (id === "modal:secondary") this.replay();
        else if (id === "modal:tertiary") this.openLevels();
        return;
      }
      if (modal.kind === "fail") {
        if (id === "modal:primary") {
          if (modal.reviveLeft <= 0) this.toast("本关的复活已经用过啦");
          else void this.onRevive();
        } else if (id === "modal:secondary") this.doRestart();
        else if (id === "modal:dismiss") {
          this.modal = null;
          this.draw();
        } else if (id === "modal:tertiary") {
          if (modal.daily) this.goHome();
          else this.openLevels();
        }
        return;
      }
      if (id === "modal:primary") this.doRestart();
      else {
        this.modal = null;
        this.sfx("button");
        this.draw();
      }
    }
    continueGame() {
      const frontier = Math.min(this.save.unlocked, pack.levels.length);
      if (this.session && this.session.level.id === frontier && this.session.status !== "won") {
        this.screen = "play";
        this.stack = [];
        this.modal = null;
        this.sfx("button");
        this.draw();
        return;
      }
      this.startLevel(frontier);
    }
    startLevel(id) {
      if (!Number.isInteger(id) || id < 1 || id > pack.levels.length || id > this.save.unlocked) {
        this.toast("先通过上一关");
        return;
      }
      const level = pack.levels[id - 1];
      if (!level) return;
      this.playMode = "campaign";
      this.toastText = "";
      this.toastUntil = 0;
      this.session = createSession(level);
      if (this.clearUndoPending > 0) {
        grantUndoCharges(this.session, this.clearUndoPending);
        this.clearUndoPending = 0;
      }
      if (this.save.tutorialDone && level.tutorial) this.session.tutorialStep = level.tutorial.length;
      this.lesson = level.fog && !this.save.seenFog ? "fog" : level.ice?.length && !this.save.seenIce ? "ice" : null;
      this.pour = null;
      this.clearFlourish();
      this.modal = null;
      this.screen = "play";
      this.stack = [];
      this.stuckNoted = false;
      this.dismissAt = 0;
      this.analytics.track("level_start", { levelId: id, origin: level.origin });
      this.sfx("button");
      this.draw();
    }
    replay() {
      if (!this.session) return;
      if (this.playMode === "daily") {
        this.startDaily();
        return;
      }
      this.startLevel(this.session.level.id);
    }
    dailyInProgress() {
      return this.playMode === "daily" && this.dailySessionDate === localToday() && this.session !== null && this.session.status !== "won" && this.session.moves > 0;
    }
    openDaily() {
      if (this.dailyInProgress()) {
        this.screen = "play";
        this.stack = [];
        this.modal = null;
        this.sfx("button");
        this.draw();
        return;
      }
      this.startDaily();
    }
    startDaily() {
      this.refreshDaily();
      const today = localToday();
      this.dailySessionDate = today;
      const level = buildDailyLevel(today);
      this.playMode = "daily";
      this.toastText = "";
      this.toastUntil = 0;
      this.session = createSession(level);
      if (this.clearUndoPending > 0) {
        grantUndoCharges(this.session, this.clearUndoPending);
        this.clearUndoPending = 0;
      }
      this.lesson = null;
      this.pour = null;
      this.clearFlourish();
      this.modal = null;
      this.screen = "play";
      this.stack = [];
      this.stuckNoted = false;
      this.dismissAt = 0;
      this.analytics.track("level_start", { levelId: 0, origin: "daily" });
      this.sfx("button");
      this.draw();
    }
    /** 本地日变了且 dailyLastClearDate 断了至少一天时，把连胜写成 0。 */
    refreshDaily() {
      if (settleDailyStreak(this.save, localToday())) this.persist();
    }
    goHome() {
      this.screen = "home";
      this.stack = [];
      this.modal = null;
      this.sfx("button");
      this.draw();
    }
    openLevels() {
      this.modal = null;
      this.screen = "levels";
      this.stack = ["home"];
      this.levelScroll = 0;
      this.anchorLevels = true;
      this.sfx("button");
      this.draw();
    }
    push(screen) {
      this.stack.push(this.screen);
      this.screen = screen;
      this.sfx("button");
      this.draw();
    }
    pop() {
      this.screen = this.stack.pop() ?? "home";
      this.sfx("button");
      this.draw();
    }
    onTube(index) {
      const session = this.session;
      if (!session || this.pour || session.status === "won") return;
      const before = session.tubes.map((tube) => tube.slice());
      const beforeOrders = session.orders.slice();
      const beforeTable = session.table.slice();
      const beforeConceal = session.conceal.map((row) => row.slice());
      const result = selectTube(session, index);
      if (result.type === "pour") {
        this.holdService = { orders: beforeOrders, table: beforeTable };
        this.holdConceal = beforeConceal;
        const srcBase = before[result.move.src] ?? [];
        const color = srcBase[srcBase.length - 1];
        if (color === void 0) return;
        this.pour = {
          src: result.move.src,
          dst: result.move.dst,
          color,
          amount: result.move.amount,
          srcBase,
          dstBase: before[result.move.dst] ?? [],
          started: this.platform.now(),
          duration: 430 + result.move.amount * 85
        };
        this.sfx("pour");
        if (this.save.vibration) this.platform.vibrate("light");
        this.advanceTutorial("pour");
      } else if (result.type === "select" || result.type === "switch") {
        this.sfx("tap");
        if (result.type === "select" || result.type === "switch") this.advanceTutorial("select", result.index);
      } else if (result.type === "deselect") {
        this.sfx("tap");
      } else if (result.type === "empty") {
        this.sfx("error");
        this.shakeIndex = index;
        this.shakeAt = this.platform.now();
        this.toast("先点有水的瓶子");
      } else if (result.type === "frozen") {
        this.sfx("error");
        this.shakeIndex = index;
        this.shakeAt = this.platform.now();
        this.toast("这杯还冻着，先出瓶上标的那色");
      }
      this.draw();
    }
    advanceTutorial(kind, index) {
      const session = this.session;
      if (!session || this.save.tutorialDone) return;
      const step = session.level.tutorial?.[session.tutorialStep];
      if (!step) return;
      if (kind === "select" && step.wait === "select" && step.tube === index) session.tutorialStep += 1;
      if (kind === "pour" && step.wait === "pour") session.tutorialStep += 1;
      const next = session.level.tutorial?.[session.tutorialStep];
      if (next?.wait === "dismiss") this.dismissAt = this.platform.now() + 4200;
      this.finishTutorialIfDone();
    }
    finishTutorialIfDone() {
      const session = this.session;
      if (!session?.level.tutorial) return;
      if (session.tutorialStep >= session.level.tutorial.length) {
        this.save.tutorialDone = true;
        this.persist();
      }
    }
    skipLessonOrTutorial() {
      if (this.lesson === "fog") {
        this.save.seenFog = true;
        this.lesson = this.session?.level.ice?.length && !this.save.seenIce ? "ice" : null;
        this.persist();
        this.sfx("button");
        this.draw();
        return;
      }
      if (this.lesson === "ice") {
        this.save.seenIce = true;
        this.lesson = null;
        this.persist();
        this.sfx("button");
        this.draw();
        return;
      }
      this.skipTutorial();
    }
    skipTutorial() {
      if (!this.session) return;
      this.session.tutorialStep = this.session.level.tutorial?.length ?? 99;
      this.save.tutorialDone = true;
      this.persist();
      this.sfx("button");
      this.draw();
    }
    onUndo() {
      const session = this.session;
      if (!session || this.pour) return;
      if (session.undoLeft <= 0) {
        this.toast("本关撤销次数用完了");
        this.sfx("error");
        return;
      }
      if (!undo(session)) {
        this.toast("没有可撤销的步骤");
        this.sfx("error");
        return;
      }
      this.clearServePop();
      this.stuckNoted = false;
      this.sfx("undo");
      this.draw();
    }
    askRestart() {
      if (!this.session || this.pour) return;
      this.modal = { kind: "restart" };
      this.sfx("button");
      this.draw();
    }
    doRestart() {
      if (!this.session) return;
      restartSession(this.session);
      if (this.save.tutorialDone && this.session.level.tutorial) {
        this.session.tutorialStep = this.session.level.tutorial.length;
      }
      this.pour = null;
      this.clearFlourish();
      this.modal = null;
      this.stuckNoted = false;
      this.sfx("button");
      this.draw();
    }
    openFail() {
      if (!this.session) return;
      this.modal = this.failModal();
      this.draw();
    }
    failModal() {
      const session = this.session;
      if (!session) return null;
      return {
        kind: "fail",
        reviveLeft: session.reviveLeft,
        reason: session.stuckReason,
        daily: this.playMode === "daily"
      };
    }
    async onHint() {
      const session = this.session;
      if (!session || this.pour || session.status === "won") return;
      if (session.status === "stuck") {
        this.openFail();
        return;
      }
      const result = await this.playAd("hint");
      if (!result || result.status === "skipped") {
        this.toast("看完视频才能拿到提示");
        return;
      }
      const hint = grantHint(session);
      if (!hint) {
        this.toast("这步没有合适的提示");
        return;
      }
      if (result.status === "fallback") this.toast("广告暂时不可用，先送你一个提示");
      else this.toast("先帮队首做出这一色");
      this.sfx("reward");
      this.draw();
    }
    async onPeek() {
      const session = this.session;
      if (!session || this.pour || session.status === "won") return;
      if (session.level.fog !== true) {
        this.toast("这一关没有问号");
        return;
      }
      if (!session.conceal.some((row) => row.some(Boolean))) {
        this.toast("能看见的都看清啦");
        return;
      }
      const result = await this.playAd("peek");
      if (!result || result.status === "skipped") {
        this.toast("看完视频才能透视");
        return;
      }
      const index = usePeek(session);
      if (index === null) {
        this.toast("没有可以透视的杯子");
        return;
      }
      this.shakeIndex = index;
      this.shakeAt = this.platform.now();
      if (result.status === "fallback") this.toast("广告暂时不可用，先让你看清这只");
      else this.toast("这只杯子看清啦");
      this.sfx("reward");
      this.draw();
    }
    async onExtra() {
      const session = this.session;
      if (!session || this.pour || session.status === "won") return;
      if (session.extraLeft <= 0) {
        this.toast("本关的桌位已经加过啦");
        this.sfx("error");
        return;
      }
      const result = await this.playAd("extraTube");
      if (!result || result.status === "skipped") {
        this.toast("看完视频才会加桌位");
        return;
      }
      if (!useExtraTube(session)) {
        this.toast("现在加不了桌位");
        return;
      }
      this.stuckNoted = false;
      if (result.status === "fallback") this.toast("广告暂时不可用，这次多给你一个桌位");
      else this.toast("多了一个桌位");
      this.sfx("reward");
      this.draw();
    }
    async onRevive() {
      const session = this.session;
      if (!session) return;
      const result = await this.playAd("revive");
      if (!result || result.status === "skipped") {
        this.toast("看完视频才会腾出桌位");
        this.modal = this.failModal();
        this.draw();
        return;
      }
      const tubesBefore = session.tubes.length;
      if (!useRevive(session)) {
        this.toast("本关的复活已经用过啦");
        return;
      }
      this.stuckNoted = false;
      this.modal = null;
      const freedBottle = session.tubes.length > tubesBefore;
      if (result.status === "fallback") {
        this.toast(freedBottle ? "广告暂时不可用，先帮你腾位并加一只空瓶" : "广告暂时不可用，先帮你腾出一个桌位");
      } else {
        this.toast(freedBottle ? "腾出了桌位，又多了一只空瓶" : "腾出了一个桌位");
      }
      this.sfx("reward");
      this.draw();
    }
    async playAd(placement) {
      if (this.busy) return null;
      this.busy = true;
      try {
        const result = await this.ads.showRewarded(placement);
        this.analytics.track("ad_result", { placement, status: result.status, mode: result.mode });
        return result;
      } finally {
        this.busy = false;
      }
    }
    openMockAd(placement) {
      return new Promise((resolve) => {
        this.adResolve = resolve;
        this.modal = { kind: "ad", placement, mock: true };
        this.draw();
      });
    }
    resolveAd(completed) {
      const resolve = this.adResolve;
      this.adResolve = null;
      this.modal = null;
      this.sfx("button");
      resolve?.(completed ? "completed" : "skipped");
      this.draw();
    }
    finishPour() {
      if (!this.pour) return;
      this.pour = null;
      this.holdService = null;
      this.holdConceal = null;
      this.afterPour();
    }
    afterPour() {
      const session = this.session;
      if (!session) return;
      if (session.lastServed.length > 0) this.noteServed(session.lastServed);
      const waiting = session.lastPlated.some((color) => session.table.includes(color));
      if (session.status === "won") this.onWin();
      else if (session.status === "stuck") this.noteStuck();
      else {
        this.stuckNoted = false;
        const teaching = Boolean(session.level.tutorial) && !this.save.tutorialDone;
        if (waiting && !teaching) this.toast("先放桌上啦");
      }
    }
    onWin() {
      const session = this.session;
      if (!session) return;
      if (this.playMode === "daily") {
        this.onDailyWin(session);
        return;
      }
      const hadChapterStars = hasFullThreeStarChapter(this.save.best);
      const stars = starsFor(session.moves, session.level.guideMoves);
      const key = String(session.level.id);
      const prev = this.save.best[key];
      if (!prev || session.moves < prev.moves) this.save.best[key] = { moves: session.moves, stars };
      else if (stars > prev.stars) this.save.best[key] = { moves: prev.moves, stars };
      if (session.level.id < pack.levels.length) {
        this.save.unlocked = Math.max(this.save.unlocked, session.level.id + 1);
      }
      if (session.level.tutorial) this.save.tutorialDone = true;
      this.persist();
      this.wonAt = this.platform.now();
      this.spawnConfetti();
      this.sfx("win");
      if (this.save.vibration) this.platform.vibrate("success");
      this.analytics.track("level_win", { levelId: session.level.id, moves: session.moves, stars });
      this.modal = {
        kind: "win",
        levelId: session.level.id,
        levelName: session.level.name,
        moves: session.moves,
        stars,
        last: session.level.id === pack.levels.length,
        rewardClaimed: false
      };
      if (!hadChapterStars && hasFullThreeStarChapter(this.save.best)) {
        const names = THEME_LIST.filter((theme) => themeRequiresUnlock(theme.id) && !this.save.unlockedThemes.includes(theme.id)).map(
          (theme) => theme.name
        );
        if (names.length > 0) this.toast(`这一章全部三星，${names.join("、")}可以用了`);
      }
    }
    onDailyWin(session) {
      const today = this.dailySessionDate ?? localToday();
      const stars = starsFor(session.moves, session.level.guideMoves);
      recordDailyClear(this.save, today, { moves: session.moves, stars });
      this.persist();
      this.wonAt = this.platform.now();
      this.spawnConfetti();
      this.sfx("win");
      if (this.save.vibration) this.platform.vibrate("success");
      this.analytics.track("level_win", { levelId: 0, moves: session.moves, stars, origin: "daily" });
      this.modal = {
        kind: "win",
        levelId: 0,
        levelName: session.level.name,
        moves: session.moves,
        stars,
        last: false,
        rewardClaimed: false,
        dailyStreak: this.save.dailyStreak
      };
    }
    async onClearReward() {
      const modal = this.modal;
      if (!modal || modal.kind !== "win" || modal.rewardClaimed) return;
      const result = await this.playAd("winUndo");
      if (!result || result.status === "skipped") {
        this.modal = modal;
        this.toast("看完视频才会多一次撤销");
        return;
      }
      this.clearUndoPending += CLEAR_UNDO_BONUS;
      this.modal = { ...modal, rewardClaimed: true };
      this.sfx("reward");
      if (result.status === "fallback") this.toast("广告暂时不可用，下一局多一次撤销");
      else this.draw();
    }
    noteStuck() {
      const session = this.session;
      if (!session || this.stuckNoted) return;
      this.stuckNoted = true;
      this.analytics.track("level_stuck", { levelId: session.level.id });
      this.modal = this.failModal();
      this.sfx("error");
    }
    noteServed(colors) {
      const pop = servePop(colors.length);
      const now = this.platform.now();
      this.serveNote = { text: pop.text, born: now, life: pop.life };
      const theme = THEMES[this.save.theme];
      const palette = colors.map((color) => theme.liquids[color % theme.liquids.length].base);
      const size = this.platform.getSize();
      const anchor = serveAnchor(size.width, size.height, this.platform.safeArea().top);
      this.particles.push(...serveSparks(anchor, palette));
      if (this.session?.status !== "won") this.sfx("sip");
    }
    spawnConfetti() {
      const size = this.platform.getSize();
      const theme = THEMES[this.save.theme];
      this.particles.push(
        ...winSparks(
          size.width,
          size.height,
          this.platform.safeArea(),
          theme.liquids.map((liquid) => liquid.base)
        )
      );
    }
    clearFlourish() {
      this.particles = [];
      this.serveNote = null;
    }
    clearServePop() {
      this.serveNote = null;
      this.particles = this.particles.filter((bit) => bit.kind !== "serve");
    }
    applyTheme(id) {
      if (!isThemeId(id)) return;
      if (!isThemeUnlocked(id, this.save)) {
        this.toast("这套还没解锁");
        this.sfx("error");
        return;
      }
      const themeId = id;
      this.save.theme = themeId;
      this.persist();
      this.toast(`换成${THEMES[themeId].name}啦`);
      this.sfx("button");
      this.draw();
    }
    async onUnlockTheme(id) {
      if (!isThemeId(id) || !themeRequiresUnlock(id)) return;
      if (isThemeUnlocked(id, this.save)) {
        this.applyTheme(id);
        return;
      }
      const result = await this.playAd("themeUnlock");
      if (!result || result.status === "skipped") {
        this.toast("看完视频才会解锁这套外观");
        return;
      }
      if (!this.save.unlockedThemes.includes(id)) {
        this.save.unlockedThemes = [...this.save.unlockedThemes, id];
        this.persist();
      }
      this.sfx("reward");
      this.toast(result.status === "fallback" ? "广告暂时不可用，这套外观先给你" : `${THEMES[id].name}解锁啦`);
    }
    toggleSound() {
      this.save.sound = !this.save.sound;
      this.platform.audio.muted = !this.save.sound;
      this.persist();
      if (this.save.sound) this.sfx("button");
      this.draw();
    }
    toggleMusic() {
      this.save.music = !this.save.music;
      this.platform.audio.setMusic(this.save.music);
      this.persist();
      if (this.save.sound) this.sfx("button");
      this.draw();
    }
    toggleVibration() {
      this.save.vibration = !this.save.vibration;
      this.persist();
      this.sfx("button");
      if (this.save.vibration) this.platform.vibrate("light");
      this.draw();
    }
    toast(message) {
      this.toastText = message;
      this.toastUntil = this.platform.now() + 1700;
      this.draw();
    }
    sfx(name) {
      this.platform.audio.play(name);
    }
    persist() {
      this.platform.storageSet(SAVE_KEY, serializeSave(this.save));
    }
    debugApi() {
      return {
        tapId: (id) => {
          const hit = this.hits.find((item) => item.id === id);
          if (!hit) return false;
          const found = hitTest(this.hits, hit.x + hit.w / 2, hit.y + hit.h / 2);
          if (!found || found.id !== id) return false;
          this.onTap(id);
          return true;
        },
        click: (x, y) => {
          this.onPointer({ type: "down", x, y });
          this.onPointer({ type: "up", x, y });
        },
        getSnapshot: () => ({
          screen: this.screen,
          modal: this.modal?.kind ?? null,
          modalDetail: this.modal,
          hits: this.hits.map((hit) => ({ id: hit.id, x: hit.x, y: hit.y, w: hit.w, h: hit.h })),
          status: this.session?.status ?? null,
          tubes: this.session?.tubes ?? null,
          moves: this.session?.moves ?? 0,
          sound: this.save.sound,
          music: this.save.music,
          servePop: this.serveNote && this.platform.now() < this.serveNote.born + this.serveNote.life ? this.serveNote.text : null,
          sparks: this.particles.map((bit) => ({ kind: bit.kind, x: bit.x, y: bit.y })),
          theme: this.save.theme,
          unlockedThemes: this.save.unlockedThemes,
          clearUndoPending: this.clearUndoPending,
          unlocked: this.save.unlocked,
          cleared: Object.keys(this.save.best).length,
          tutorialStep: this.session?.tutorialStep ?? null,
          tutorialDone: this.save.tutorialDone,
          undoLeft: this.session?.undoLeft ?? null,
          extraLeft: this.session?.extraLeft ?? null,
          reviveLeft: this.session?.reviveLeft ?? null,
          orders: this.session?.orders ?? null,
          table: this.session?.table ?? null,
          tableSlots: this.session?.tableSlots ?? null,
          stuckReason: this.session?.stuckReason ?? null,
          fog: this.session?.level.fog === true,
          ice: this.session?.level.ice ?? null,
          conceal: this.session?.conceal ?? null,
          frozen: this.session?.frozen ?? null,
          levelId: this.session?.level.id ?? null,
          playMode: this.playMode,
          daily: dailyHome(this.save, localToday(), this.dailyInProgress()),
          toast: this.platform.now() < this.toastUntil ? this.toastText : null,
          hint: this.session?.hint ?? null,
          anim: this.pour ? "pour" : null,
          selected: this.session?.selected ?? null,
          adMock: this.ads.usesMock("hint")
        }),
        finishAnimation: () => {
          if (!this.pour) return false;
          this.finishPour();
          this.draw();
          return true;
        },
        /** Preview-only fixture. Not a player control. */
        loadFixture: (tubes, capacity) => {
          const level = {
            id: 9e3,
            name: "试玩",
            tier: "warmup",
            capacity,
            tubes,
            orders: inferOrders(tubes),
            tableSlots: DEFAULT_TABLE_SLOTS,
            guideMoves: 3,
            origin: "handcrafted"
          };
          this.playMode = "campaign";
          this.session = createSession(level);
          this.pour = null;
          this.clearFlourish();
          this.screen = "play";
          this.stack = [];
          this.stuckNoted = this.session.status === "stuck";
          this.modal = this.session.status === "stuck" ? { kind: "fail", reviveLeft: this.session.reviveLeft, reason: this.session.stuckReason } : null;
          this.draw();
        },
        jumpTo: (id) => {
          if (!Number.isInteger(id) || id < 1 || id > pack.levels.length) return;
          this.save.unlocked = Math.max(this.save.unlocked, id);
          this.save.tutorialDone = true;
          this.persist();
          this.startLevel(id);
        }
      };
    }
  };
  function clamp2(value, min, max) {
    if (max < min) return min;
    return Math.min(max, Math.max(min, value));
  }

  // src/services/music.ts
  var MUSIC_LOOP_SECONDS = 8;
  var MusicController = class {
    constructor(output, enabled = true) {
      __publicField(this, "output");
      __publicField(this, "enabled");
      __publicField(this, "unlocked", false);
      __publicField(this, "playing", false);
      this.output = output;
      this.enabled = enabled;
    }
    get isEnabled() {
      return this.enabled;
    }
    get isPlaying() {
      return this.playing;
    }
    setEnabled(enabled) {
      if (this.enabled === enabled) {
        if (enabled) this.tryStart();
        return;
      }
      this.enabled = enabled;
      if (!enabled) {
        this.halt();
        return;
      }
      this.tryStart();
    }
    /** 第一次点击、松手或按键时调用。关着的时候什么都不启动。 */
    unlock() {
      this.unlocked = true;
      this.tryStart();
    }
    tryStart() {
      if (!this.enabled || !this.unlocked || this.playing) return;
      let started = false;
      try {
        started = this.output.start();
      } catch {
        started = false;
      }
      this.playing = started;
    }
    halt() {
      if (!this.playing) return;
      this.playing = false;
      try {
        this.output.stop();
      } catch {
      }
    }
  };
  function renderMusicLoop(sampleRate) {
    const length = Math.max(1, Math.floor(sampleRate * MUSIC_LOOP_SECONDS));
    const out = new Float32Array(length);
    const melody = [60, 64, 67, 64, 62, 67, 69, 64];
    melody.forEach((midi, index) => {
      const freq = loopFreq(midi);
      addVoice(out, sampleRate, freq, index, 0.72, 0.16);
      addVoice(out, sampleRate, freq * 2, index + 0.02, 0.4, 0.035);
    });
    addPad(out, sampleRate, loopFreq(48), 0.045);
    addPad(out, sampleRate, loopFreq(55), 0.03);
    return out;
  }
  function addPad(out, sampleRate, freq, gain) {
    for (let i = 0; i < out.length; i++) {
      out[i] += Math.sin(2 * Math.PI * freq * i / sampleRate) * gain;
    }
  }
  function loopFreq(midi) {
    const raw = 440 * 2 ** ((midi - 69) / 12);
    const cycles = Math.max(1, Math.round(raw * MUSIC_LOOP_SECONDS));
    return cycles / MUSIC_LOOP_SECONDS;
  }
  function addVoice(out, sampleRate, freq, start, dur, gain) {
    const from = Math.max(0, Math.floor(start * sampleRate));
    const length = Math.floor(dur * sampleRate);
    const attack = Math.max(1, Math.floor(sampleRate * 0.03));
    const release = Math.max(1, Math.floor(sampleRate * 0.14));
    for (let i = 0; i < length; i++) {
      const index = from + i;
      if (index >= out.length) break;
      const env = Math.min(1, i / attack, (length - i) / release);
      out[index] += Math.sin(2 * Math.PI * freq * index / sampleRate) * env * gain;
    }
  }

  // src/services/audio.ts
  var SFX = {
    tap: [{ type: "sine", freq: 740, at: 0, dur: 0.06, gain: 0.08 }],
    button: [{ type: "sine", freq: 523, at: 0, dur: 0.05, gain: 0.07 }],
    pour: [
      { type: "triangle", freq: 520, to: 180, at: 0, dur: 0.26, gain: 0.08 },
      { type: "sine", freq: 240, to: 120, at: 0.02, dur: 0.22, gain: 0.05 }
    ],
    error: [
      { type: "square", freq: 196, at: 0, dur: 0.08, gain: 0.04 },
      { type: "square", freq: 146, at: 0.09, dur: 0.1, gain: 0.04 }
    ],
    undo: [{ type: "triangle", freq: 420, to: 220, at: 0, dur: 0.12, gain: 0.07 }],
    reward: [
      { type: "sine", freq: 659, at: 0, dur: 0.1, gain: 0.07 },
      { type: "sine", freq: 880, at: 0.09, dur: 0.14, gain: 0.07 }
    ],
    win: [
      { type: "sine", freq: 523, at: 0, dur: 0.12, gain: 0.07 },
      { type: "sine", freq: 659, at: 0.1, dur: 0.12, gain: 0.07 },
      { type: "sine", freq: 784, at: 0.2, dur: 0.12, gain: 0.07 },
      { type: "sine", freq: 1046, at: 0.3, dur: 0.22, gain: 0.08 }
    ],
    sip: [
      { type: "sine", freq: 784, at: 0, dur: 0.08, gain: 0.05 },
      { type: "sine", freq: 1046, at: 0.07, dur: 0.12, gain: 0.05 }
    ]
  };
  var AudioBus = class {
    constructor(options = {}) {
      this.options = options;
      __publicField(this, "muted", false);
      __publicField(this, "ctx", null);
      __publicField(this, "noise", null);
      __publicField(this, "bedBuffer", null);
      __publicField(this, "bedSource", null);
      __publicField(this, "bedGain", null);
      __publicField(this, "music");
      this.music = new MusicController({
        start: () => this.startBed(),
        stop: () => this.stopBed()
      });
    }
    /** 恢复音频上下文，不开始轻音乐。点下去就调用，好让这一下的音效能响。 */
    prime() {
      const ctx = this.context();
      if (ctx && ctx.state === "suspended") void ctx.resume();
    }
    /** 用户松手或按键之后。轻音乐关着就不会启动。 */
    unlock() {
      this.prime();
      this.music.unlock();
    }
    setMusic(enabled) {
      this.music.setEnabled(enabled);
    }
    play(name) {
      if (this.muted) return;
      if (this.options.preferFile && this.options.playFile) {
        try {
          this.options.playFile(name);
          return;
        } catch {
        }
      }
      const ctx = this.context();
      if (!ctx) {
        try {
          this.options.playFile?.(name);
        } catch {
        }
        return;
      }
      const now = ctx.currentTime + 0.01;
      if (name === "pour") this.burstNoise(ctx, now);
      for (const tone of SFX[name]) this.schedule(ctx, tone, now);
    }
    context() {
      if (this.ctx) return this.ctx;
      const host = globalThis;
      const Ctor = host.AudioContext ?? host.webkitAudioContext;
      if (!Ctor) return null;
      try {
        this.ctx = new Ctor();
      } catch {
        return null;
      }
      return this.ctx;
    }
    schedule(ctx, tone, origin) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = tone.type;
      osc.frequency.setValueAtTime(tone.freq, origin + tone.at);
      if (tone.to) osc.frequency.exponentialRampToValueAtTime(Math.max(40, tone.to), origin + tone.at + tone.dur);
      gain.gain.setValueAtTime(tone.gain, origin + tone.at);
      gain.gain.exponentialRampToValueAtTime(1e-4, origin + tone.at + tone.dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(origin + tone.at);
      osc.stop(origin + tone.at + tone.dur + 0.02);
    }
    startBed() {
      const ctx = this.context();
      if (!ctx) return false;
      this.stopBed();
      try {
        if (!this.bedBuffer || this.bedBuffer.sampleRate !== ctx.sampleRate) {
          const samples = renderMusicLoop(ctx.sampleRate);
          const buffer = ctx.createBuffer(1, samples.length, ctx.sampleRate);
          buffer.getChannelData(0).set(samples);
          this.bedBuffer = buffer;
        }
        const source = ctx.createBufferSource();
        source.buffer = this.bedBuffer;
        source.loop = true;
        const gain = ctx.createGain();
        const now = ctx.currentTime;
        gain.gain.setValueAtTime(1e-4, now);
        gain.gain.exponentialRampToValueAtTime(0.045, now + 0.45);
        source.connect(gain);
        gain.connect(ctx.destination);
        source.start(now);
        this.bedSource = source;
        this.bedGain = gain;
        return true;
      } catch {
        this.stopBed();
        return false;
      }
    }
    stopBed() {
      const source = this.bedSource;
      const gain = this.bedGain;
      this.bedSource = null;
      this.bedGain = null;
      if (!source) return;
      try {
        const ctx = this.ctx;
        if (ctx && gain) {
          const now = ctx.currentTime;
          gain.gain.cancelScheduledValues(now);
          gain.gain.setValueAtTime(Math.max(gain.gain.value, 1e-4), now);
          gain.gain.exponentialRampToValueAtTime(1e-4, now + 0.06);
          source.stop(now + 0.07);
        } else {
          source.stop();
        }
      } catch {
      }
    }
    burstNoise(ctx, origin) {
      if (!this.noise) {
        const length = Math.floor(ctx.sampleRate * 0.2);
        const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / length);
        this.noise = buffer;
      }
      const source = ctx.createBufferSource();
      source.buffer = this.noise;
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 900;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.05, origin);
      gain.gain.exponentialRampToValueAtTime(1e-4, origin + 0.2);
      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      source.start(origin);
      source.stop(origin + 0.21);
    }
  };

  // src/platform/browser.ts
  function createBrowserPlatform(root2) {
    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-label", "水色分装");
    canvas.style.touchAction = "none";
    canvas.style.display = "block";
    root2.replaceChildren(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("无法创建画布");
    let width = 360;
    let height = 640;
    let dpr = 1;
    const resizeListeners = /* @__PURE__ */ new Set();
    const pointerListeners = /* @__PURE__ */ new Set();
    const keyListeners = /* @__PURE__ */ new Set();
    const wheelListeners = /* @__PURE__ */ new Set();
    const fit = () => {
      const rect = root2.getBoundingClientRect();
      width = Math.max(320, rect.width || window.innerWidth);
      height = Math.max(480, rect.height || window.innerHeight);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      for (const listener of resizeListeners) listener();
    };
    fit();
    window.addEventListener("resize", fit);
    const point = (event, type) => {
      const rect = canvas.getBoundingClientRect();
      const payload = { type, x: event.clientX - rect.left, y: event.clientY - rect.top };
      for (const listener of pointerListeners) listener(payload);
    };
    canvas.addEventListener("pointerdown", (event) => {
      canvas.setPointerCapture?.(event.pointerId);
      event.preventDefault();
      point(event, "down");
    });
    canvas.addEventListener("pointermove", (event) => point(event, "move"));
    canvas.addEventListener("pointerup", (event) => point(event, "up"));
    canvas.addEventListener("pointercancel", (event) => point(event, "up"));
    canvas.addEventListener("contextmenu", (event) => event.preventDefault());
    canvas.addEventListener(
      "wheel",
      (event) => {
        event.preventDefault();
        for (const listener of wheelListeners) listener(event.deltaY);
      },
      { passive: false }
    );
    window.addEventListener("keydown", (event) => {
      for (const listener of keyListeners) listener(event.key);
    });
    const audio = new AudioBus();
    const platform = {
      kind: "browser",
      audio,
      ctx,
      getSize: () => ({ width, height }),
      onResize: (callback) => resizeListeners.add(callback),
      onPointer: (callback) => pointerListeners.add(callback),
      onKey: (callback) => keyListeners.add(callback),
      onWheel: (callback) => wheelListeners.add(callback),
      storageGet: (key) => {
        try {
          return localStorage.getItem(key);
        } catch {
          return null;
        }
      },
      storageSet: (key, value) => {
        try {
          localStorage.setItem(key, value);
        } catch {
        }
      },
      vibrate: (pattern) => {
        try {
          navigator.vibrate?.(pattern === "success" ? [12, 40, 18] : 12);
        } catch {
        }
      },
      getTtAds: () => null,
      reportAnalytics: () => void 0,
      now: () => performance.now(),
      requestFrame: (callback) => {
        requestAnimationFrame(callback);
      },
      safeArea: () => ({ top: 16, right: 16, bottom: 16, left: 16 }),
      playSfxFile: () => void 0
    };
    return platform;
  }

  // src/preview/main.ts
  var root = document.getElementById("app");
  if (!root) throw new Error("缺少 #app");
  var debug = startGame(createBrowserPlatform(root));
  Object.assign(globalThis, { __WATER_SORT__: debug });
  var jump = Number(new URLSearchParams(location.search).get("level"));
  if (Number.isInteger(jump) && jump > 0) debug.jumpTo(jump);
})();
