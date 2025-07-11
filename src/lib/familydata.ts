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
      "/fordad/12ny.jpg",
       "/fordad/13ny.jpg",
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
          imageString: "/formom/19sg.JPG",
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
      "/former/01fighting.JPG",
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
    "/fromme/06total.png",
       ],
  },
];


export const daddySpecial: SpecialList[] = [
  {
    id: 0,
    title: "ถึง พ่อ",
    for: "daddy",
    description: `ถึง พ่อเก่ง ปะป๊าสุดหล่อของหนู
    \n\n
    \tเด็กน้อยนางฟ้าตัวน้อยของพ่อเติบโตมาอย่างดีไหมคะ🥺 หรือโตมาเป็นตัวป่วนแทนแล้วไหมคะ 555
    ขอบคุณที่พ่อคอยดูแลหนูทุกอย่างอยู่เสมอนะคะ พ่อคอยเป็นห่วงคอยดูแลหนูตลอด พ่อทำเรื่องยากๆในชีวิตหนูให้เป็นเรื่องง่ายๆ ทำเรื่องที่มันใหญ่หนักหนาของหนูให้เบาลงได้อยู่เสมอ พ่อเป็นคนที่หนูพึ่งพาได้ที่สุดในโลกมาตลอด ขอโทษที่ทำให้เหนื่อยหรือปวดหัวอยู่บ่อยๆนะคะ อย่าเพิ่งเหนื่อยกับหนูไปก่อนนะคะ
    \n\n
   \t ขอให้ทำสิ่งใดก็สมปรารถนานะคะ แต่ไม่ต้องห่วงค่ะ หนูเชื่อในตัวพ่อ พ่อหนูเก่งที่สุดในโลก พ่อหนูคิดดีทำดีอยู่แล้ว
    พ่อเป็นคนที่มุ่งหวังสิ่งใด พ่อทำได้ทุกอย่างเสมอ รวมถึงการผ่าตัดครั้งนี้ด้วยพ่อเก่งของหนูเองก็จะเก่งและผ่านไปได้ด้วยดีแข็งแรง
    \n\n
    \tหนูอาจจะมองโลกในแบบที่จริงจังกับตัวเองตึงกับตัวเองในหลายด้านไปหน่อย ขอโทษนะคะ แต่เดี๋ยวการเติบโตและเวลาก็คงขัดเกลามุมมองหนูไปเรื่อยๆ หวังว่าหนูจะเติบโตยิ่งขึ้นกว่านี้ให้เป็นที่พึ่งของพ่อและทุกคนได้ ให้พ่อได้ภูมิใจกับการเติบโตของหนู 
    \n\n
    \tขอโทษนะคะที่อาจจะยังมีให้ไม่เยอะมาก แต่ให้ด้วยความตั้งใจจริงของหนูค่ะ  ถึงอาจจะยังมีติดขัดกับงานและระบบของชีวิตการทำงานอยู่ อาจจะยังไม่ได้ภูมิใจหรือลงรอยกับงานมาก แต่หนูภูมิใจกับเงินก้อนนี้ที่หามาได้ด้วยน้ำพักน้ำแรงตัวเองและที่ได้ให้อะไรตอบแทนพ่อแม่กลับได้บ้างนะคะ ถึงจะเป็นจำนวนที่เล็กน้อยจริงๆ
    \n\n
    \tขอให้พ่อสุขภาพแข็งแรงอยู่กับหนูไปนานๆนะคะพ่อ อยู่จนอายุเกินร้อยกันนะคะ หนูรักพ่อมากๆๆๆๆนะคะ สุดหล่อของหนู
    \n\n
    จาก ลูกเบซซ์`,
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
  {
    id: 4,
    title: "My family drawing",
    date: "From Best, July 2024",
    for: "daddy",
    description: "หนูรัก คุณพ่อ คุณแม่ พี่ธาม มากๆเลยนะคะ",
    imageString: "/fromme/myfamdraw.jpg",
    folderRef: "/dadfile.png"
  },
];

export const mommySpecial: SpecialList[] = [
  {
    id: 0,
    title: "ถึง แม่",
    for: "mommy",
    description: `ถึง แม่รัตน์ คุณแม่ที่รักของหนู
\n\n
\tเด็กตัวดำๆฟันเหยินของแม่ ลูกลิงลูกหมาตัวน้อยที่โดนเก็บจากถังขยะ🥺 เติบโตมาอย่างดีไหมคะ
\n\n
\tขอบคุณที่คอยดูแลและใส่ใจหนูในทุกอย่างทุกเรื่องที่แม้แต่ตัวหนูเองก็ละเลยกับตัวเองไปนะคะ แม่เป็นคนที่ห่วงหนูที่สุดในโลกในทุกเรื่องและทุกอย่าง แต่ความเป็นห่วงของแม่ก็มีค่าต่อหนูเสมอและคอยช่วยดูแลหนูให้เติบโตมาได้ ตั้งแต่เรื่องการนอน การกิน การแต่งตัว การดูแลตัวเอง ไม่ว่าโตแค่ไหนถึง23หนูก็สามขวบกับสำหรับพ่อแม่เสมอ ขอบคุณสำหรับทุกครั้งที่ตื่นเช้าไปส่งหนูทำงาน ขอบคุณที่คอยแพคอาหารเป็นห่วงว่าหนูจะกินข้าวกินนมไหมนะคะ อาหารของแม่อร่อยจนหนูจะเลียจานอยู่ตลอด เวลาแพ็คอาหารของแม่ไปทำงานหนูก็กินอย่างอิ่มอร่อยมากค่ะ กินเกลี้ยงอย่างอร่อยและภูมิใจทุกครั้งไม่เคยเหลือ
\n\n
\tหนูขอโทษที่ชอบหงุดหงิดทำตัวไม่น่ารักหรือทำตัวดื้อบ่อยครั้ง เพราะกลับมาหนูก็เจอแต่แม่จริงๆ  หรือเวลาเราไปทริปกันแค่2คน เพราะในบางทีเราก็มีกันแค่นี้จริงๆ555 ไม่ว่าเมื่อไหร่ไม่ว่าตอนไหนหนูก็มีแม่อยู่เสมอ เกิดอะไรขึ้น หนูก็คิดถึงพ่อกับแม่ก่อนเหมือนวันแผ่นดินไหวที่ถึงแม้พ่อกับแม่จะอยู่ไกลหนูก็คิดถึงก่อนเป็นคนแรกเสมอ
\n\n

\tขอโทษนะคะที่อาจจะยังมีให้ไม่เยอะมาก แต่ให้ด้วยความตั้งใจจริงของหนูค่ะ  ถึงอาจจะยังมีติดขัดกับงานและระบบของชีวิตการทำงานอยู่ อาจจะยังไม่ได้ภูมิใจหรือลงรอยกับงานมาก แต่หนูภูมิใจกับเงินก้อนนี้ที่หามาได้ด้วยน้ำพักน้ำแรงตัวเองและที่ได้ให้อะไรตอบแทนพ่อแม่กลับได้บ้างนะคะ ถึงจะเป็นจำนวนที่เล็กน้อยจริงๆ หนูอยากเติบโตมากขึ้นให้เป็นที่พึ่งและเป็นคนที่พ่อกับแม่ภูมิใจ
\n\n
\tขอโทษที่ทำตัวให้น่าเป็นห่วงในหลายเรื่องนะคะ หนูคงสัญญาไม่ได้ว่าจะทำให้หายห่วงเพราะต่อให้หนูใช้ชีวิตอย่างดีขึ้นนอนให้ครบออกกำลังกาย แม่ก็คงเป็นห่วงหนูเสมออยู่ดีจริงไหมคะ 555 หนูรู้อยู่แล้ว
\tแต่หนูสัญญาว่าจะพยายามดูแลตัวเองให้ดีและให้แม่เป็นปวดหัวน้อยลงนะคะ และจะพยายามแก้นิสัยคิดลบจะพยายามคิดมากคิดเยอะให้น้อยลงนะคะ
\tหนูรักแม่มากๆๆๆๆนะคะ ขอให้แม่สุขภาพแข็งแรงมีความสุขไม่ต้องปวดหัว อยู่กับหนูไปนานๆเลยนะคะรัชชี่ที่รักของหนู อยู่คอยเป็นห่วงคอยบ่นหนูไปนานๆเลยนะคะ 
\n\n
จาก ลูกเบซซ์
`,
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
      { label: "ลิงก์2 ", reflink: "https://drive.google.com/file/d/11gyx-cgns5QUQrrdeDusTvuOEmXPc5Bo/view?usp=sharing" }
    ]
  },
  {
    id: 4,
    title: "My family drawing",
    date: "From Best, July 2024",
    for: "mommy",
    description: "หนูรัก คุณพ่อ คุณแม่ พี่ธาม มากๆเลยนะคะ",
    imageString: "/fromme/myfamdraw.jpg",
    folderRef: "/momfile.png",
  },
];

export const timerSpecial: SpecialList[] = [
  {
    id: 0,
    title: "To Timer",
    for: "timer",
    description: `ถึง ธามเมอร์
\n\n
\tหลวงพี่ อนุโมทนาบุญนะคะ แต่ขออนุญาติใช้คำเรียกเฉกเช่นทิดทั่วไปหลังจากนี้นะคะ เนื่องจากตอนเขียนจดหมายนี้ โยมน้องตั้งใจจะเขียนก่อนหลวงพี่บวชและคิดว่าคงได้ให้หลวงพี่อ่านจดหมายฉบับนี้หลังจากสึกหลังออกพรรษาแล้ว เพราะงั้นขอขมานะคะ ถ้าหลังจากนี้โยมน้องจะใช้คำที่ไม่เหมาะสมทั่วไป
\n\n
สวัสดีเมอร์
\n\n
\tขอยินดีและขออนุโมทาบุญกับการที่นายบวชให้พ่อนะ นายมีวินัยและฝึกฝนได้ดีมาก  ฉันนั่งพับเพียบไปแค่หนึ่งชมวันเดียวยังจะเป็นลมเลย
\n\n
\tขอบคุณที่คอยดูแลปกป้องเราอยู่เสมอ ขอบคุณที่คอยสังเกตเรา และคอยเป็นห่วง ขอบคุณที่เห็นว่าเราแบกอะไรไว้ จะพยายามวางลง ไม่ต้องเป็นห่วงนะ เราแค่พยายามกับการใช้ชีวิตในแบบของเราและพยายามทำให้ชีวิตเราตรงกับสิ่งที่เรา valueให้ค่า ขอโทษที่อาจจะยังปล่อยวางได้ลำบากอยู่
\n\n
\tขอบคุณที่คอย cheer up คอย reassure และเห็นคุณค่าในตัวเราเสมอนะ 
นายเป็นไม่กี่คนที่คอยสังเกตตลอดถึงเสียงที่เราส่งให้ใครไปไม่ถึง นายคอยฟังเสียงที่เราส่งไปไม่ถึงคนอื่นที่ไม่คิดว่าจะมีคนฟังเสียงของเราเสมอ ขอบคุณนะที่คอยรับฟังคอยสังเกต
\n\n
\tขอบคุณที่คอยบอกอยู่เสมอว่าภูมิใจในตัวฉันนะ นายเป็นกำลังใจสำคัญของฉันเลย
\n\n
\tฉันเองก็ภูมิใจในตัวนายเหมือนกัน สำหรับฉันแล้วนายเป็นคนที่เก่งในด้านของนาย ฉันก็ทำได้ในแบบของฉัน ถึงเราจะต่างกันสุดขั้วแต่ก็ดีแล้วจะได้พึ่งพากันคนละด้าน นายเก่งนะ สำหรับฉันนายเป็นคนที่พึ่งพาได้ ไม่ว่าเมื่อไหร่นายก็คอยปกป้องฉันเสมอ เหมือนพี่ธามคนที่เอาเรื่องคนที่แกล้งฉันหรือขโมยโยโย่ฉันตอนเด็ก พี่ชายที่ฉันโทรไปร้องไห้ตอนตี3ว่าไม่มีapple pencilไปสอบออนไลน์ในวันพรุ่งนี้ก็สามารถหามาให้ฉันได้ พี่ที่ฉันอยากได้อะไรก็จะคอยหามาให้ เดือดร้อนอะไรก็คอยช่วย ในเรื่องสกิลเอาตัวรอดและการใช้ชีวิต นายเก่งจริงๆ 
\n\n
\tฉันเองก็ยินดีช่วยนายเสมอและตลอดที่สุดที่ทำได้นะ ไม่ว่าเมื่อไหร่เราก็รู้กันเสมอ We always have each other's back ไม่ว่านายจะเป็นยังไงในสายตาคนอื่น นายก็คือเมอร์ พี่ชายที่น่ารักของฉัน  ฉันก็รักนายที่สุดในโลกมากๆ พี่ชายที่รักคนเดียวของฉัน ฉันจะอยู่กับนายเสมอแหละ นายก็อยู่กับฉันไปนานๆ รักเมอร์มากๆนะ

จาก สำลี
`,
    imageString: "/timeravatar.jpg",
     folderRef: "/timerfile.png"
  },
  {
    id: 4,
    title: "My family drawing",
    date: "From Best, July 2024",
    for: "timer",
    description: "หนูรัก คุณพ่อ คุณแม่ พี่ธาม มากๆเลยนะคะ",
    imageString: "/fromme/myfamdraw.jpg",
    folderRef: "/timerfile.png"
  },
];