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

export const familyData: FamilyList[] = [
    {
        id: 0,
        title: "Best graduation",
        for: "family",
        date:"11 June 2912" ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageString: "/familypic.jpg",
        imgRef: [
            "/familypic.jpg",
            "/dadavatar.jpg",
            "/momavatar.jpg",
            "/timeravatar.jpg",
            "/bestavatar.jpg"
          ],
          link: [
            { label: "Hey link ", reflink: "https://drive.google.com/drive/folders/1ObUUufc2MGRsbKsrRAYSlLZfDv0YgnmL?usp=sharing" },
            { label: "Hckkdc; ", reflink: "https://drive.google.com/drive/folders/1ObUUufc2MGRsbKsrRAYSlLZfDv0YgnmL?usp=sharing" }
          ]
    },
    {
        id: 1,
        title: "Best graduation",
        for: "mommy",
        date: undefined ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageString: "/familypic.jpg",
        imgRef: undefined,
        link: undefined
    },
    {
        id: 2,
        title: "Best graduation",
        for: "daddy",
        date:"11 June 2912" ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageString: "/familypic.jpg",
        imgRef: undefined,
        link: [
            { label: "Hey link ", reflink: "https://drive.google.com/drive/folders/1ObUUufc2MGRsbKsrRAYSlLZfDv0YgnmL?usp=sharing" }
          ]
    },
    {
        id: 3,
        title: "Best graduation",
        for: "timer",
        date:"11 June 2912" ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageString: "/familypic.jpg",
        imgRef: [
            "/familypic.jpg",
            "/dadavartar.jpg",
            "/momavartar.jpg",
            "/timeravartar.jpg",
            "/bestavartar.jpg"
          ],
          link: [
            { label: "Hey link ", reflink: "https://drive.google.com/drive/folders/1ObUUufc2MGRsbKsrRAYSlLZfDv0YgnmL?usp=sharing" }
          ]
    },
    {
        id: 4,
        title: "Best graduation",
        for: "best",
        date:"11 June 2912" ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageString: "/familypic.jpg",
        imgRef: [
            "/familypic.jpg",
            "/dadavartar.jpg",
            "/momavartar.jpg",
            "/timeravartar.jpg",
            "/bestavartar.jpg"
          ],
          link: [
            { label: "Hey link ", reflink: "https://drive.google.com/drive/folders/1ObUUufc2MGRsbKsrRAYSlLZfDv0YgnmL?usp=sharing" }
          ]
    },
    {
        id: 5,
        title: "Best graduation",
        for: "family",
        date:"11 June 2912" ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageString: "/familypic.jpg",
        imgRef: [
            "/familypic.jpg",
            "/dadavartar.jpg",
            "/momavartar.jpg",
            "/timeravartar.jpg",
            "/bestavartar.jpg"
          ],
          link: [
            { label: "Hey link ", reflink: "https://drive.google.com/drive/folders/1ObUUufc2MGRsbKsrRAYSlLZfDv0YgnmL?usp=sharing" }
          ]
    },
    {
        id: 6,
        title: "Best graduation",
        for: "family",
        date:"11 June 2912" ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageString: "/familypic.jpg",
        imgRef: [
            "/familypic.jpg",
            "/dadavartar.jpg",
            "/momavartar.jpg",
            "/timeravartar.jpg",
            "/bestavartar.jpg"
          ],
          link: [
            { label: "Hey link ", reflink: "https://drive.google.com/drive/folders/1ObUUufc2MGRsbKsrRAYSlLZfDv0YgnmL?usp=sharing" }
          ]
    },

];

//daddy dataset
export const daddyData: FamilyList[] = [
  {
    id: 0,
    title: "Daddy Graduation",
    for: "daddy",
    description: "Short description",
    imageString: "/mompic.jpg",
  },
  // ...more items
];

//mommy dataset
export const mommyData: FamilyList[] = [
  {
    id: 0,
    title: "Mommy Graduation",
    for: "mommy",
    description: "Short description",
    imageString: "/mompic.jpg",
  },
  // ...more items
];

//timer dataset
export const timerData: FamilyList[] = [
  {
    id: 0,
    title: "Timer Graduation",
    for: "timer",
    description: "Short description",
    imageString: "/mompic.jpg",
  },
  // ...more items
];

//tseb datset
export const tsebData: FamilyList[] = [
  {
    id: 0,
    title: "Mommy Graduation",
    for: "best",
    description: "Short description",
    imageString: "/mompic.jpg",
  },
  // ...more items
];