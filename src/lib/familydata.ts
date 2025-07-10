export interface FamilyLink {
    label: string;
    reflink: string;
}

export interface FamilyList {
    id: number;
    title: string;
    for: "family" | "daddy" | "mommy" | "timer" | "best";
    date?: string;
    description: string;
    imageString: string;
    imgRef?: string[];
    link?: FamilyLink[];
  }

  export interface SpecialList {
    id: number;
    title: string;
    for:  "daddy" | "mommy" | "timer" ;
    date?: string;
    description: string;
    imageString: string;
    folderRef: string;
    imgRef?: string[];
    link?: FamilyLink[];
  }

export const familyData: FamilyList[] = [
    {
        id: 0,
        title: "Best's graduation",
        for: "best",
        date:"3 Oct 2024" ,
        description:"",
        imageString: "/bestbg.jpg",
        imgRef: [
          "/bestbg.jpg",
          "/family/01_งานรับปริญญา.JPG",
          "/family/02_งานรับปริญญา.JPG",
          "/family/03_งานรับปริญญา.JPG",
          "/fordad/00_ย่าปรญ.JPG",
          ],
          link: [
            { label: "3/10/2024 รูปวันรับจริง", reflink: "https://photos.app.goo.gl/ngAVUSNh44h21nRH7" },
            { label: "21/9/2024 รูปวันซ้อม", reflink: "https://photos.app.goo.gl/ZgnAvJ33DxYa1Mn77" },
            { label: "รูปกล้องเจเจ้", reflink: "https://drive.google.com/drive/folders/1KSCrbuPQHc1JCi9JaTfZqrCKuZ14JLWk?usp=share_link" },
            { label: "My storage", reflink: "https://drive.google.com/drive/folders/1aUVJpxJ124uAOzIpGLgORI37ELJ8g4vs?usp=sharing" },
          ]
    },
    {
      id: 1,
      title: "งานบวชหลวงพี่ภาสวิชฺโช",
      for: "timer",
      date:"6 July 2024",
      description:"",
      imageString: "/family/05_งานบวชหลวงพี่.JPG",
      imgRef: [
        "/family/05_งานบวชหลวงพี่.JPG",
        "/family/06_งานบวชหลวงพี่.JPG",
        "/family/08_งานบวชหลวงพี่.JPG",
        "/family/09_งานบวชหลวงพี่.JPG",
        ],
        link: [
          { label: "งานบวช_06072025", reflink: "https://photos.app.goo.gl/86uVobf9ZkV4rjae9" },
          { label: "My storage", reflink: "https://drive.google.com/drive/folders/1ObUUufc2MGRsbKsrRAYSlLZfDv0YgnmL?usp=sharing" },
        ]
  },
  {
    id: 2,
    title: "Timer's graduation",
    for: "timer",
    description:"",
    imageString: "/family/10_ปรญเม่อ.JPG",
    imgRef: [
     "/family/10_ปรญเม่อ.JPG",
     "/family/11_ปรญเม่อ.JPG",
     "/family/12_ปรญเม่อ.JPG",
     "/family/13_ปรญเม่อ.JPG",
      ],
},

];

//daddy dataset
export const daddyData: FamilyList[] = [
  {
    id: 0,
    title: "Happy Daddy Birthday",
    for: "daddy",
    description:"",
    imageString: "/fordad/06bd.PNG",
  },
  {
    id: 1,
    title: "To dad",
    for: "daddy",
    description:"",
    imageString: "/fordad/07card.JPG",
  },
  {
    id: 2,
    title: "ความในใจของดญ.ณัฐรดา? ป.3/5 ",
    for: "daddy",
    description:"",
    imageString: "/fordad/08inner.jpg",
  },
  {
    id: 3,
    title: "แด่พ่อเก่ง(ปาป๋า)",
    for: "daddy",
    description:"",
    imageString: "/fordad/10love.jpg",
  },
  {
    id: 4,
    title: "Dad (Bird) Day",
    for: "daddy",
    description:"",
    imageString: "/fordad/11dadbd.jpg",
  },
  {
    id: 5,
    title: "Happy New Year 2010",
    date: "2010",
    for: "daddy",
    description:"by ดญ. ณัฐรดา ป.3/5",
    imageString: "/fordad/12ny.jpg",
    imgRef: [
      "/formom/12ny.jpg",
       "/formom/13ny.jpg",
     ],
  },
  {
    id: 6,
    title: "Best's graduation day",
    date: "3 Oct 2024",
    for: "daddy",
    description:"",
    imageString: "/fordad/14grad.JPG",
    imgRef: [
      "/fordad/14grad.JPG",
      "/fordad/14grad02.JPG",
       "/fordad/15grad.PNG",
       "/fordad/16grad.PNG",
     ],
  },
  {
    id: 7,
    title: "K&B Cute",
    for: "daddy",
    description:"",
    imageString: "/fordad/17cute.JPG",
    imgRef: [
      "/fordad/17cute.JPG",
      "/fordad/18cute.JPG",
      "/fordad/19cute.JPG",
      "/fordad/20cute.JPG",
     ],
  },
  {
    id: 8,
    title: "ส่งพ่อบิน",
    date:"7 July 2024",
    for: "daddy",
    description:"",
    imageString: "/fordad/21aot.JPG",
  },
  {
    id: 9,
    title: "walking together",
    for: "daddy",
    description:"",
    imageString: "/fordad/22walk.JPG",
    imgRef: [
     "/fordad/22walk.JPG",
     "/fordad/23walk.JPG",
     ],
  },
];

//mommy dataset
export const mommyData: FamilyList[] = [
  {
    id: 0,
    title: "การ์ดจากดญ.ณัฐรดา ป.2/2",
    for: "mommy",
    description:"",
    // description: "แกะศิลาจารึก: \"แม่รัตน์คะ ลูกขอสัญญาว่าต่อไปนี้ลูกจะตื่นแต่เช้าทุกวันค่ะ เพื่อให้แม่ไม่ต้องตื่นแต่เช้ามาปลุกค่ะ ลูกเบซซ์ ป.๒/๒\" \n\n ต้องบอกเด็กคนนั้นแล้วแหละค่ะว่าทุกวันนี้ให้แม่ปวดหัวเพราะไม่ยอมแทนไม่ยอมตื่น ขอบคุณที่คอยปลุกและเป็นห่วงหนูตั้งแต่ตอนนั้นจนถึงตอนนี้นะคะ",
    imageString: "/formom/01promise.jpg",
  },
  { id: 1,
    title: "การ์ดวันแม่",
    for: "mommy",
    description: "",
    imageString: "/formom/02momday.jpg",
    imgRef: [
       "/formom/02momday.jpg",
        "/formom/03momday.jpg",
      ],
    },
    { id: 2,
      title: "รักแม่",
      for: "mommy",
      description: "",
      imageString: "/formom/05lovem.jpg",
      imgRef: [
         "/formom/05lovem.jpg",
          "/formom/04lovem.jpg",
        ],
      },
      { id: 3,
        title: "แด่ แม่รัตน์",
        for: "mommy",
        date: "2011",
        description: "",
        imageString: "/formom/06foru.jpg",
        },
        {
          id: 4,
          title: "สุขสันต์วันแม่",
          for: "mommy",
          description: "",
          imageString: "/formom/07momcard.jpg",
          imgRef: [
             "/formom/07momcard.jpg",
              "/formom/08momcard.jpg",
            ],
        },
        {
          id: 5,
          title: "วันรับชุดครุยเบซซ์",
          for: "mommy",
          description: "",
          imageString: "/formom/10grad.JPG",
          imgRef: [
            "/formom/10grad.JPG",
            "/formom/09gard.JPG",
            ],
        },
        {
          id: 6,
          title: "Sea Sand Sun",
          date: "May 2025",
          for: "mommy",
          description: "",
          imageString: "/formom/11filter.jpg",
          imgRef: [
            "/formom/11filter.jpg",
            "/formom/12filter.jpg",
            ],
        },
        {
          id: 7,
          title: "R&B",
          for: "mommy",
          description: "",
          imageString: "/formom/13cutet.JPG",
          imgRef: [
            "/formom/13cutet.JPG",
            "/formom/14cutet.JPG",
            ],
        },
        {
          id: 8,
          title: "ทำงานวันแรก AOT",
          for: "mommy",
          description: "",
          imageString: "/formom/15work.JPG",
          imgRef: [
            "/formom/15work.JPG",
            "/formom/16work.JPG",
            "/formom/17work.JPG",
            "/formom/18work.JPG",
            ],
        },
        {
          id: 9,
          title: "Video Call from SG",
          for: "mommy",
          description: "",
          imageString: "/formom/19SG.JPG",
        },
        {
          id: 10,
          title: "อาหารฝีมือแม่",
          for: "mommy",
          description: "",
          imageString: "/formom/21food.JPG",
          imgRef: [
           "/formom/21food.JPG",
           "/formom/20food.JPG",
            ],
        },
        {
          id: 11,
          title: "ส่งแม่ขึ้นเครื่อง",
          for: "mommy",
          description: "",
          // description: "กลับมาสุวรรณภูมิดพื่อไปสุวรรณภูมิใหม่",
          imageString: "/formom/23airport.JPG",
        },
        {
          id: 12,
          title: "R&B osaka Duo trip",
          for: "mommy",
          description: " จริงๆก็อยู่คนเดียวได้ เที่ยวคนเดียวได้ กินข้าวคนเดียวได้ แต่แพงจังมากับแม่ดีกว่า(หยอกๆนะคะ) \n\nขอบคุณแม่ที่พาไปเที่ยวที่ญี่ปุ่นนะคะ \n\n{{video:https://drive.google.com/file/d/1IBsnbydptg7dC08S0lkVM1IeAzICpO88/preview}}\n\n",
          //ขอโทษที่เป็นไกด์ที่ไาเหนื่อยไปหน่อยนะคะ
          imageString: "/formom/24solotrip.JPG",
          imgRef: [
           "/formom/24solotrip.JPG",
           "/formom/25solotrip.JPG",
           "/formom/28solotrip.JPG",
            ],
        },
];

//timer dataset
export const timerData: FamilyList[] = [
  {
    id: 0,
    title: "Fighting",
    for: "timer",
    description: "",
    imageString: "/former/00fighting.jpg",
    imgRef: [
      "/former/00fighting.jpg",
      "/former/01fighting.jpg",
    ],
  },
  {
    id: 1,
    title: "วิชานินจา",
    for: "timer",
    description: "Piggyback! วิชานินจาตัวเบา w/ my bro ไม่ค่อยจะเบียวกันเลย",
    imageString: "/former/02back.JPG",
    imgRef: [
      "/former/02back.JPG",
      "/former/03back.JPG",
      "/former/04back.JPG",
    ],
  },
  {
    id: 2,
    title: "Food",
    for: "timer",
    description: "",
    imageString: "/former/05food.JPEG",
  },
  {
    id: 3,
    title: "พี่ธามในสวน",
    for: "timer",
    description: "ดญ ณัฐรดาบอกว่าเป็นรูปพี่ธามในสวน ศิลปินเอกไหมล่ะ",
    imageString: "/former/06art.jpg",
  },
  {
    id: 4,
    title: "ถึงธามเมอ",
    for: "timer",
    description: "",
    imageString: "/former/07card.jpg",
    imgRef: [
     "/former/07card.jpg",
     "/former/08card.jpg"
    ],
  },
  {
    id: 5,
    title: "For you",
    for: "timer",
    description: "",
    imageString: "/former/09foru.jpg",
  },
  {
    id: 6,
    title: "บรึ๋นนน",
    for: "timer",
    description: "",
    imageString: "/former/10wah.JPG",
    imgRef: [
    "/former/10wah.JPG",
    "/former/11wah.JPG",
    "/former/12wah.JPG",
    ],
  },
  {
    id: 7,
    title: "my bro",
    for: "timer",
    description: "",
    imageString: "/former/13close.JPG",
    imgRef: [
    "/former/13close.JPG",
    "/former/14close.JPG",
    "/former/15close.JPG",
    ],
  },
  {
    id: 8,
    title: "eiei",
    for: "timer",
    description: "",
    imageString: "/former/18dd.JPG",
    imgRef: [
    "/former/18dd.JPG",
    "/former/17dd.JPG",
    "/former/19dd.JPG",
    ],
  },
  {
    id: 9,
    title: "hmmm",
    for: "timer",
    description: "",
    imageString: "/former/20eiei.JPG",
    imgRef: [
   "/former/20eiei.JPG",
   "/former/21eiei.JPG",
    ],
  },
  {
    id: 10,
    title: "Thx mu bro",
    for: "timer",
    description: "",
    imageString: "/former/22apple.JPG",
  },
  {
    id: 11,
    title: "คร่อก",
    for: "timer",
    description: "",
    imageString: "/former/23lean.JPG",
  },
  
];

//tseb datset
export const tsebData: FamilyList[] = [
  {
    id: 0,
    title: "Best's Graduation",
    for: "best",
    description: "\n\n{{video:https://drive.google.com/file/d/1EYdlY9V09l78T3pXokgii0xnRjMJyRx7/preview}}\n\n",
    imageString: "/fromme/00ปริญญา.JPG",
    imgRef: [
      "/fromme/00ปริญญา.JPG",
      "/fromme/00ปริญญา2.JPG",
       ],
  },
  {
    id: 1,
    title: "ใครเอ่ย",
    for: "best",
    description: "",
    imageString: "/fromme/01ใครเอ่ย.jpg",
  },
  {
    id: 2,
    title: "ครอบครัวของฉัน",
    for: "best",
    description: "",
    imageString: "/fromme/02ครอบครัวฉัน.JPG",
    imgRef: [
     "/fromme/02ครอบครัวฉัน.JPG",
     "/fromme/03ครอบครัวฉัน.JPG",
       ],
  },
  {
    id: 3,
    title: "ถึงครอบครัว",
    for: "best",
    description: "",
    imageString: "/fromme/04ถึงครอบครัว.jpg",
  },
  {
    id: 4,
    title: "my job",
    for: "best",
    description: "",
    imageString: "/fromme/05aob.jpg",
    imgRef: [
     "/fromme/05aob.jpg",
    "/fromme/05first.JPG",
    "/fromme/06total.PNG",
       ],
  },
];


export const daddySpecial: SpecialList[] = [
  {
    id: 0,
    title: "ถึง พ่อ",
    for: "daddy",
    description: "Short description",
    imageString: "/dadavatar.jpg",
    folderRef: "/dadfile.png"
  },
  {
    id: 1,
    title: "รับปริญญากับคุณย่า",
    for: "daddy",
    description: "",
    imageString: "/fordad/00_ย่าปรญ.JPG",
    folderRef: "/dadfile.png",
    imgRef: [
      "/fordad/00_ย่าปรญ.JPG",
      "/fordad/01_ย่าปรญ.JPG",
      "/fordad/02_ย่าปรญ.JPG",
      "/fordad/03_ย่าปรญ.JPG",
      "/fordad/04_ย่าปรญ.JPG",
      "/fordad/05_ย่าปรญ.JPG",
    ],
  },
];

export const mommySpecial: SpecialList[] = [
  {
    id: 0,
    title: "ถึง แม่",
    for: "daddy",
    description: "Short description",
    imageString: "/momavatar.jpg",
    folderRef: "/momfile.png",
  },
  {
    id: 1,
    title: "คุณยาย",
    for: "daddy",
    description: "\"สวัสดี นี่ยายน้อยเอง\" รักคุณย้ายคุณยาย \n\n{{video:https://drive.google.com/file/d/11gyx-cgns5QUQrrdeDusTvuOEmXPc5Bo/preview}}\n\n \n\nเผื่อแม่จะได้หาเจอง่ายๆเวลาคิดถึงคุณยายนะคะ",
    imageString: "/yaynoy.jpg",
    imgRef: [
      "/yaynoy.jpg",
      "/yaynoy2.jpg",
    ],
    folderRef: "/momfile.png",
    link: [
      { label: "ลิงก์1 (ก่อนตัดต่อ)", reflink: "https://drive.google.com/file/d/1DIgttXBKG-Jhun5Dkf6bAiSCNK_uFoWP/view?usp=sharing" },
      { label: "ลิ้งค์2 ", reflink: "https://drive.google.com/file/d/11gyx-cgns5QUQrrdeDusTvuOEmXPc5Bo/view?usp=sharing" }
    ]
  },
];

export const timerSpecial: SpecialList[] = [
  {
    id: 0,
    title: "To Timer",
    for: "daddy",
    description: "Short description",
    imageString: "/timeravatar.jpg",
     folderRef: "/timerfile.png"
  },
  // ...more items
];