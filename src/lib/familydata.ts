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
            { label: "Full link youtube video(from Chula)", reflink: "https://www.youtube.com/live/JDlacSvFuIY?si=r1xwo82aQc1RBJya" },
          ]
    },
    {
      id: 1,
      title: "งานบวชหลวงพี่ภาสวิชฺโช",
      for: "timer",
      date:"6 July 2025",
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
    id: 999,
    title: "หลวงพี่ภาสวิชฺโช",
    for: "timer",
    date:"27 Oct 2025",
    description:"",
    imageString: "/family/timer/resizeหลวงพี่-fotor-20251128144850.jpg",
    imgRef: [
      "/family/timer/15วัดบวร.jpg",
      "/family/timer/quoteหลวงพี่.jpg",
      ],
      link: [
        { label: "วัดบวรนิเวศน์", reflink: "https://drive.google.com/drive/mobile/folders/17dYe0N-HyZDDV7SFjHcMP5Qzj9GGJW4w?usp=sharing" },
        { label: "รูปภาพ พระนวกะ", reflink: "https://drive.usercontent.google.com/download?id=1tel861-1VRwFeimZcisIj7wz724w0qu9&export=download" },
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
{
  id: 3,
  title: "Family Pic",
  for: "family",
  description:"",
  imageString: "/family/14fampiv.JPG",
},
{
  id: 4,
  title: "Family Pic",
  for: "family",
  description:"",
  imageString: "/family/15fampic.jpg",
},
{
  id: 5,
  title: "Countdown 2011",
  date: "2011",
  for: "family",
  description:"",
  imageString: "/family/16Countdown2011_02.JPG",
  imgRef: [
   "/family/16Countdown2011_02.JPG",
   "/family/17Countdown2011_01.JPG",
   "/family/18Countdown2011_03.JPG",
    ],
},
{
  id: 10082025,
  title: "ทำบุญออนเซ็น 2025",
  date: "10 Aug 2025",
  for: "family",
  description:"opening diora onsen with หลวงพี่ภาสวิชโช",
  imageString: "/family/51onsen.JPG",
  link: [
      { label: "รวมภาพ 2025-8-10 ทำบุญออนเซ็น", reflink: "https://drive.google.com/drive/folders/1PgjTGhzguA51hCBN2UZs1hLaPARbXVFK?usp=drive_link" },
  ]
},
{
  id: 6,
  title: "Supporo-Hokkaido 2007",
  date: "2007",
  for: "family",
  description:"",
  imageString: "/family/21suphok2007_01.JPG",
  imgRef: [
   "/family/21suphok2007_01.JPG",
   "/family/22suphok2007_02.JPG",
  "/family/23suphok2007_03.JPG",
  "/family/24suphok2007_05.JPG",
  "/family/25suphok2007_06.JPG",
  "/family/26suphok2007_07.JPG",
  "/family/27suphok2007_08.JPG",
  "/family/28suphok2007_09.JPG",
    ],
},
{
  id: 7,
  title: "Switzerland Snow",
  date: "April 2010",
  for: "family",
  description:"",
  imageString: "/family/29switzsnow_01.JPG",
  imgRef: [
"/family/29switzsnow_01.JPG",
"/family/30switzsnow_02.JPG",
"/family/31switzsnow_03.JPG",
"/family/32switzsnow_04.JPG",
    ],
},
{
  id: 8,
  title: "Tokyo Osaka 2008",
  date: "2008",
  for: "family",
  description:"",
  imageString: "/family/33tokosa2008_01.JPG",
  imgRef: [
"/family/33tokosa2008_01.JPG",
"/family/34tokosa2008_02.JPG",
"/family/35tokosa2008_03.JPG",
"/family/36tokosa2008_04.JPG",
    ],
},
{
  id: 9,
  title: "Thailand 18/2/2011",
  date: "Feb 2011",
  for: "family",
  description:"",
  imageString: "/family/37t02.JPG",
  imgRef: [
"/family/37t02.JPG",
"/family/37t02(1).JPG",
"/family/37t03.JPG",
"/family/37t04.JPG",
"/family/37t05.JPG",
    ],
},
{
  id: 10,
  title: "Thailand 09/04/2011",
  date: "9 April 2011",
  for: "family",
  description:"",
  imageString: "/family/38t06.JPG",
  imgRef: [
"/family/38t06.JPG",
"/family/38t07.JPG",
"/family/38t08.JPG",
    ],
},
{
  id: 11,
  title: "15/05/2011",
  date: "15 May 2011",
  for: "family",
  description:"",
  imageString: "/family/39t09.JPG",
},
{
  id: 12,
  title: "Thai 22/10/2010",
  date: "22 Oct 2010",
  for: "family",
  description:"",
  imageString: "/family/40t11.JPG",
},
{
  id: 13,
  title: "Thai 09/04/2011",
  date: "9 April 2011",
  for: "family",
  description:"",
  imageString: "/family/40thai.JPG",
},
{
  id: 14,
  title: "Japan Ski 2012",
  date: "April 2012",
  for: "family",
  description:"",
  imageString: "/skiwithfam.jpg",
  imgRef: [
  "/skiwithfam.jpg",
"/family/41japski2012_01.JPG",
"/family/42japski2012_02.JPG",
"/family/43japski2012_03.JPG",
"/family/44japski2012_04.JPG",
"/family/45japski2012_05.JPG",
    ],
},
{
  id: 15,
  title: "Beijing China 2012",
  date: "Oct 2012",
  for: "family",
  description:"",
  imageString: "/family/46beichina01.JPG",
  imgRef: [
   "/family/46beichina01.JPG",
"/family/47beichina02.JPG",
"/family/48beichina03.JPG",
"/family/49beichina04.JPG",
"/family/50beichina04.JPG",
    ],
},
{
  id: 16,
  title: "ขี่หลัง",
  for: "daddy",
  description:"",
  imageString: "/family/dad/00back.JPG",

},
{
  id: 17,
  title: "dad",
  for: "daddy",
  description:"",
  imageString: "/family/dad/01cute.JPG",

},
{
  id: 18,
  title: "K&B",
  for: "daddy",
  description:"",
  imageString: "/family/dad/01cute1.JPG",

},
{
  id: 19,
  title: "K&B",
  for: "daddy",
  description:"",
  imageString: "/family/dad/02food1.JPG",

},
{
  id: 20,
  title: "K&B",
  for: "daddy",
  description:"",
  imageString: "/family/dad/03food2.JPG",
  imgRef: [
    "/family/dad/03food2.JPG",
    "/family/dad/03food3.JPG",
     ],
},
{
  id: 21,
  title: "My graduation",
  for: "daddy",
  description:"",
  imageString: "/dadavatar.jpg",
  imgRef: [
    "/dadavatar.jpg",
    "/family/dad/04grad2.JPG",
    "/family/dad/04grad3.JPG",
    "/family/dad/04grad4.JPG",
    "/family/dad/04grad5.JPG",
     ],
},
{
  id: 22,
  title: "Japan Ski 2012",
  for: "daddy",
  date:"April 2012",
  description:"",
  imageString: "/family/dad/05japski2012_01.JPG",
  imgRef: [
   "/family/dad/05japski2012_01.JPG",
"/family/dad/05japski2012_02.JPG",
"/family/dad/05japski2012_03.JPG",
"/family/dad/05japski2012_04.JPG",
     ],
},
{
  id: 23,
  title: "Supporo-Hokkaido 2007",
  for: "daddy",
 date:"2007",
 description:"",
  imageString: "/family/dad/06suphok2007_01.JPG",
  imgRef: [
   "/family/dad/06suphok2007_01.JPG",
"/family/dad/06suphok2007_02.JPG",
"/family/dad/06suphok2007_03.JPG",
     ],
},
{
  id: 24,
  title: "เหยียบๆ",
  for: "daddy",
 description:"คิดค่าเหยียบนะคะ ถ้าเหยียบตอนนี้น่าจะแบนแน่เลย",
  imageString: "/family/dad/07scrub1.JPG",
  imgRef: [
  "/family/dad/07scrub1.JPG",
"/family/dad/07scrub2.JPG",
"/family/dad/07scrub3.JPG",
     ],
},
{
  id: 25,
  title: "Tokyo Osaka 2008",
  for: "daddy",
  date: "2008",
 description:"",
  imageString: "/family/dad/08tokosa2008_01.JPG",
  imgRef: [
 "/family/dad/08tokosa2008_01.JPG",
 "/family/dad/08tokosa2008_02.JPG",
 "/family/dad/08tokosa2008_03.JPG",
     ],
},
{
  id: 26,
  title: "Tokyo Osaka 2008",
  date: "2008",
  for: "mommy",
 description:"",
  imageString: "/family/mom/00tokosa2008_01.JPG",
  imgRef: [
"/family/mom/00tokosa2008_01.JPG",
"/family/mom/00tokosa2008_02.JPG",
"/family/mom/00tokosa2008_03.JPG",
"/family/mom/00tokosa2008_04.JPG",
"/family/mom/00tokosa2008_05.JPG",
"/family/mom/00tokosa2008_06.JPG",
     ],
},
{
  id: 27,
  title: "Supporo-Hokkaido 2007",
  date: "2007",
  for: "mommy",
 description:"",
  imageString: "/family/mom/01suphok2007_01.JPG",
  imgRef: [
"/family/mom/01suphok2007_01.JPG",
"/family/mom/01suphok2007_02.JPG",
"/family/mom/01suphok2007_03.JPG",
"/family/mom/01suphok2007_04.JPG",
"/family/mom/01suphok2007_05.JPG",
"/family/mom/01suphok2007_06.JPG",
"/family/mom/01suphok2007_07.JPG",
     ],
},
{
  id: 28,
  title: "Switzerland Snow",
  date: "April 2010",
  for: "mommy",
 description:"",
  imageString: "/family/mom/02switzsnow_01.JPG",
  imgRef: [
    "/family/mom/02switzsnow_01.JPG",
"/family/mom/02.JPG",
"/family/mom/02switzsnow_02.JPG",
"/family/mom/02switzsnow_04.JPG",
"/family/mom/02switzsnow_05.JPG",
"/family/mom/02switzsnow_06.JPG",
     ],
},
{
  id: 29,
  title: "Snow mobile 2019",
  date: "2019",
  for: "mommy",
 description:"",
  imageString: "/family/mom/03snowmobile2019_01.JPG",
  imgRef: [
   "/family/mom/03snowmobile2019_01.JPG",
   "/family/mom/03snowmobile2019_02.JPG",
   "/family/mom/03snowmobile2019_03.JPG",
     ],
},
{
  id: 30,
  title: "R&B Osaka",
  date: "Jan 2025",
  for: "mommy",
 description:"",
  imageString: "/family/mom/04rbosaka6.JPG",
  imgRef: [
    "/family/mom/04rbosaka1.jpg",
    "/family/mom/04rbosaka2.JPG",
    "/family/mom/04rbosaka3.JPG",
    "/family/mom/04rbosaka4.JPG",
    "/family/mom/04rbosaka5.JPG",
    "/family/mom/04rbosaka6.JPG",
     ],
},
{
  id: 31,
  title: "Japan Ski 2012",
  date: "April 2012",
  for: "mommy",
 description:"",
  imageString: "/family/mom/05japski2012_01.JPG",
  imgRef: [
"/family/mom/05japski2012_01.JPG",
"/family/mom/05japski2012_02.JPG",
"/family/mom/05japski2012_03.JPG",
"/family/mom/05japski2012_04.JPG",
     ],
},
{
  id: 32,
  title: "Centara Grand Mirage",
  for: "mommy",
 description:"",
  imageString: "/family/mom/06Centaragrandmirage1.JPG",
  imgRef: [
"/family/mom/06Centaragrandmirage1.JPG",
"/family/mom/06Centaragrandmirage2.JPG",
"/family/mom/06Centaragrandmirage3.JPG",
"/family/mom/06Centaragrandmirage4.JPG",
     ],
},
{
  id: 33,
  title: "My graduation",
  date: "3 Oct 2024",
  for: "mommy",
 description:"",
  imageString: "/momavatar.jpg",
  imgRef: [
    "/momavatar.jpg",
    "/family/mom/07grad2.JPG",
    "/family/mom/07grad4.JPG",
    "/family/mom/07grad5.JPG",
    "/family/mom/07grad6.JPG",
     ],
},
{
  id: 34,
  title: "Me & Mom",
  for: "mommy",
 description:"",
  imageString: "/family/mom/08IMG_1696.JPG",
},
{
  id: 35,
  title: "mommy",
  for: "mommy",
 description:"",
  imageString: "/family/mom/09IMG_1713.JPG",
},
{
  id: 36,
  title: "little me",
  for: "mommy",
 description:"",
  imageString: "/family/mom/10IMG_1722.JPG",
},{
  id: 37,
  title: "little me",
  for: "mommy",
 description:"",
  imageString: "/family/mom/13IMG_1728.JPG",
},
{
  id: 38,
  title: "อุแว้ อุแว้",
  for: "mommy",
 description:"",
  imageString: "/family/mom/14IMG_1781.JPG",
},
{
  id: 39,
  title: "Best Time",
  for: "timer",
 description:"",
  imageString: "/family/timer/00kiddo0.JPG",
},
{
  id: 40,
  title: "Best Time",
  for: "timer",
 description:"",
  imageString: "/family/timer/01kiddo1.jpg",
},
{
  id: 41,
  title: "Best Time",
  for: "timer",
 description:"",
  imageString: "/family/timer/02kiddo2.JPG",
},
{
  id: 42,
  title: "Best Time",
  for: "timer",
 description:"",
  imageString: "/family/timer/03IMG_1844.JPG",
  imgRef: [
   "/family/timer/03IMG_1844.JPG",
   "/family/timer/03kiddo9.JPG"
     ],
},
{
  id: 43,
  title: "Switzerland Snow",
  date: "April 2010",
  for: "timer",
 description:"",
  imageString: "/family/timer/04switzsnow_01.JPG",
  imgRef: [
  "/family/timer/04switzsnow_01.JPG",
  "/family/timer/04switzsnow_02.JPG",
  "/family/timer/04switzsnow_03.JPG",
     ],
},
{
  id: 44,
  title: "Tokyo Osaka 2008",
  date: "2008",
  for: "timer",
 description:"",
  imageString: "/family/timer/04tokosa2008_01.JPG",
  imgRef: [
  "/family/timer/04tokosa2008_01.JPG",
  "/family/timer/04tokosa2008_02.JPG",
  "/family/timer/04tokosa2008_03.JPG",
  "/family/timer/04tokosa2008_04.JPG",
  "/family/timer/04tokosa2008_05.JPG",
  "/family/timer/04tokosa2008_06.JPG",
     ],
},
{
id: 45,
title: "Supporo-Hokkaido 2007",
date: "2007",
for: "timer",
description:"",
imageString: "/family/timer/05suphok2007_01.JPG",
imgRef: [
"/family/timer/05suphok2007_01.JPG",
"/family/timer/05suphok2007_02.JPG",
   ],
},
{
  id: 46,
  title: "Snow mobile 2019",
  date: "2019",
  for: "timer",
  description:"",
  imageString: "/family/timer/06snowmobile2019_01.JPG",
  imgRef: [
    "/family/timer/06snowmobile2019_01.JPG",
    "/family/timer/06snowmobile2019_02.JPG",
    "/family/timer/06snowmobile2019_03.JPG",
    "/family/timer/06snowmobile2019_04.JPG",
     ],
  },
  {
    id: 47,
    title: "Japan Ski 2012",
    date: "April 2012",
    for: "timer",
    description:"",
    imageString: "/family/timer/08japski2012_01.JPG",
    imgRef: [
      "/family/timer/08japski2012_01.JPG",
      "/family/timer/08japski2012_02.JPG",
      "/family/timer/08japski2012_03.JPG",
       ],
    },
    {
    id: 48,
    title: "Timer Graduation",
    for: "timer",
    description:"",
    imageString: "/family/timer/09mergrad1.JPG",
    imgRef: [
      "/family/timer/09mergrad1.JPG",
      "/family/timer/09mergrad2.JPG",
      "/family/timer/09mergrad3.JPG",
      "/family/timer/09mergrad4.JPG",
       ],
    },
    {
      id: 49,
      title: "งานบวชหลวงพี่ภาสวิชฺโช",
      date:"6 July 2024",
      for: "timer",
      description:"",
      imageString: "/family/timer/10monk1.JPG",
      imgRef: [
        "/family/timer/10monk1.JPG",
        "/family/timer/10monk/.JPG",
         ],
      },
      {
        id: 50,
        title: "Chelsea",
        for: "timer",
        description:"",
        imageString: "/family/timer/11chelsea1.JPG",
        imgRef: [
          "/family/timer/11chelsea1.JPG",
          "/family/timer/11chelsea2.JPG",
          "/family/timer/11chelsea3.JPG",
           ],
        },
        {
          id: 51,
          title: "Pattaya 2018",
          date: "2018",
          for: "timer",
          description:"",
          imageString: "/family/timer/12pattaya20181.JPG",
          imgRef: [
          "/family/timer/12pattaya20181.JPG",
          "/family/timer/12pattaya20182.JPG",
          "/family/timer/12pattaya20185.JPG",
             ],
          },
          {
            id: 52,
            title: "My Graduation",
            date: "3 Oct 2024",
            for: "timer",
            description:"",
            imageString: "/timeravatar.jpg",
            imgRef: [
              "/timeravatar.jpg",
             "/family/timer/14grad2.JPG",
           "/family/timer/14grad3.JPG",
           "/family/timer/14grad4.JPG",
           "/family/timer/14grad5.JPG",
           "/family/timer/14grad6.JPG",
           "/family/timer/14grad7.JPG",
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
    description:"เด็กหญิงณัฐรดาคิดถึงพ่อเก่งมากค่ะ อยากให้กลับบ้านไวๆ",
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
    description:"เป็น เบิร์ดนกไปแล้ว",
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
    description:"ขอบคุณที่ไปส่งเป็นกำลังใจให้ในวันสำคัญของหนูนะคะ ดีใจมากที่พ่อเดินไปด้วยเพราะตื่นเต้นมากเลยค่ะ เป็นคณะแรกต้องไปแต่เช้าเลยด้วย",
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
    description:"มีคนมาส่งข้าวถึงที่ทำงานเลย",
    imageString: "/fordad/21aot.JPG",
  },
  {
    id: 9,
    title: "walking together",
    for: "daddy",
    description:"อยู่เดินด้วยกันแบบนี้เรื่อยๆเลยนะคะ เป็นช่วงเวลาที่สงบอากาศดีมากที่ได้เดินเที่ยวเล่นกับพ่อ",
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
    description: "แกะศิลาจารึก: \"แม่รัตน์คะ ลูกขอสัญญาว่าต่อไปนี้ลูกจะตื่นแต่เช้าทุกวันค่ะ เพื่อให้แม่ไม่ต้องตื่นแต่เช้ามาปลุกค่ะ ลูกเบซซ์ ป.๒/๒\" \n\n ต้องบอกเด็กคนนั้นแล้วแหละค่ะว่าทุกวันนี้ให้แม่ปวดหัวเพราะไม่ยอมแทนไม่ยอมตื่น ขอบคุณที่คอยปลุกและเป็นห่วงหนูตั้งแต่ตอนนั้นจนถึงตอนนี้นะคะ",
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
          title: "วันตัดชุดครุยเบซซ์",
          for: "mommy",
          description: "ขอบคุณที่ไปช่วยดูเลือกตั้งแต่เสื้อชุดยันรองเท้าเลยนะคะ",
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
          date: "Jan 2025",
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
          description: "ตื่นเต้นมาก ขอโทษที่ตอนนั้นพูดไม่ออกไม่ยอมคุยนะคะ แต่จริงๆรู้สึกดีมากที่แม่ไปส่งด้วยทำงานวันแรกเป็นสังคมใหม่ที่น่ากลัวสำหรับหนูมาก พอมีแม่อยู่ก็โล่งใจขึ้นเลยค่ะ",
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
          description: "แม่คอยห่วงโทรมาตั้งแต่หอที่สิงเลย ขอบคุณที่คอยเป็นห่วงแอบเอาขนมใส่กระเป๋าให้หนูเซอร์ไพรซ์ก่อนมานะคะ",
          imageString: "/formom/19sg.JPG",
        },
        {
          id: 10,
          title: "อาหารฝีมือแม่",
          for: "mommy",
          description: "อร่อยมากทุกจาน แทบเลียจาน มีแรงทำงานเลยค่ะ",
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
          description: "กลับมาจากทำงานเพื่อไปสุวรรณภูมิใหม่เพื่อไปส่งพ่อกับแม่อีกรอบนะคะ 555",
          imageString: "/formom/23airport.JPG",
        },
        {
          id: 12,
          title: "R&B osaka Duo trip",
          for: "mommy",
          description: " จริงๆก็อยู่คนเดียวได้ เที่ยวคนเดียวได้ กินข้าวคนเดียวได้ แต่แพงจังมากับแม่ดีกว่า(หยอกๆนะคะ) \n\nขอโทษที่เป็นไกด์ที่พาเหนื่อยไปหน่อยนะคะ \n\n{{video:https://drive.google.com/file/d/1IBsnbydptg7dC08S0lkVM1IeAzICpO88/preview}}\n\n",
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
    id: 12,
    title: "หลวงพี่ภาสวิชฺโช",
    for: "timer",
    description: "",
    imageString: "/former/พระนวกะ-fotor-20251128145722.jpg",
    imgRef: [
      "/former/พระนวกะ.jpg",
    ],
    link: [
      { label: "พระนวกะ (พัดยศ เปรียญ9-ห้ามเผยแพร่)", reflink: "https://drive.usercontent.google.com/download?id=1oyqM7G8dEbuyKNOgnonfcljtDzRHV6eV&export=download" },
    ]
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
    description: "เอาปริญญามาฝากคุณย่าแล้วนะคะ ได้ทำตามสัญญาแล้วนะคะ ทั้ง2อย่างเลยเรื่องทั้งเรื่องรับปริญญาและเงินเดือน ขอให้คุณย่ามีความสุขมีสุขภาพแข็งแรงค่ะ",
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