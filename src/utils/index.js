export const navOptions = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "listing",
    label: "All Materiales",
    path: "/product/listing/all-products",
  },
  {
    id: "listingMen",
    label: "1°A",
    path: "/product/listing/men",
  },
  {
    id: "listingWomen",
    label: "1°B",
    path: "/product/listing/women",
  },
  {
    id: "listingKids",
    label: "1°C",
    path: "/product/listing/kids",
  },
  {
    id: "listingSega",
    label: "2°A",
    path: "/product/listing/sega",
  },
  {
    id: "listingSegb",
    label: "2°B",
    path: "/product/listing/segb",
  },
  {
    id: "listingSegc",
    label: "2°C",
    path: "/product/listing/segc",
  },
  {
    id: "listingTera",
    label: "3°A",
    path: "/product/listing/tera",
  },
  {
    id: "listingTerb",
    label: "3°B",
    path: "/product/listing/terb",
  },
  {
    id: "listingTerc",
    label: "3°C",
    path: "/product/listing/terc",
  },
  // {
  //   id: "listingTerc",
  //   label: "4 A",
  //   path: "/product/listing/terc",
  // },
  // {
  //   id: "listingTerc",
  //   label: "4 B",
  //   path: "/product/listing/terc",
  // },
  // {
  //   id: "listingTerc",
  //   label: "4 C",
  //   path: "/product/listing/terc",
  // },
  // {
  //   id: "listingTerc",
  //   label: "4 D",
  //   path: "/product/listing/terc",
  // },
  // {
  //   id: "listingTerc",
  //   label: "5 A",
  //   path: "/product/listing/terc",
  // },
  // {
  //   id: "listingTerc",
  //   label: "5 B",
  //   path: "/product/listing/terc",
  // },
  // {
  //   id: "listingTerc",
  //   label: "5 C",
  //   path: "/product/listing/terc",
  // },
  // {
  //   id: "listingTerc",
  //   label: "5 D",
  //   path: "/product/listing/terc",
  // },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Manage All Material",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Add New Material",
    path: "/admin-view/add-product",
  },
];
//new
export const docenNavOptions = [
  {
    id: "docenListing",
    label: "Manage All Material",
    path: "/admin-view/all-products",
  },
  {
    id: "docenNewProduct",
    label: "Add New Material",
    path: "/docen-view/add-product",
  },
];


export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Admin",
      },
      {
        id: "docen",
        label: "Docen",
      },
      {
        id: "student",
        label: "student",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Name",
    componentType: "input",
  },
  // {
  //   id: "price",
  //   type: "number",
  //   placeholder: "Enter price",
  //   label: "Price",
  //   componentType: "input",
  // },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Category",
    componentType: "select",
    options: [
      {
        id: "men",
        label: "1°A",
      },
      {
        id: "women",
        label: "1°B",
      },
      {
        id: "kids",
        label: "1°C",
      },
      {
        id: "sega",
        label: "2°A",
      },
      {
        id: "segb",
        label: "2°B",
      },
      {
        id: "segc",
        label: "2°C",
      },
      // {
      //   id: "kids",
      //   label: "1 C",
      // },
      {
        id: "tera",
        label: "3°A",
      },
      {
        id: "terb",
        label: "3°B",
      },
      {
        id: "terc",
        label: "3°C",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Enter Campo Formativo",
    label: "Campo Formativo",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "On New",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Yes",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  // {
  //   id: "priceDrop",
  //   type: "number",
  //   placeholder: "Enter Price Drop",
  //   label: "Price Drop",
  //   componentType: "input",
  // },
];
//new
export const docenAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Name",
    componentType: "input",
  },
  // {
  //   id: "price",
  //   type: "number",
  //   placeholder: "Enter price",
  //   label: "Price",
  //   componentType: "input",
  // },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Category",
    componentType: "select",
    options: [
      {
        id: "men",
        label: "1 A",
      },
      {
        id: "women",
        label: "1°B",
      },
      {
        id: "kids",
        label: "1°C",
      },
      {
        id: "sega",
        label: "2°A",
      },
      {
        id: "segb",
        label: "2°B",
      },
      {
        id: "segc",
        label: "2°C",
      },
      // {
      //   id: "kids",
      //   label: "1 C",
      // },
      {
        id: "tera",
        label: "3°A",
      },
      {
        id: "terb",
        label: "3°B",
      },
      {
        id: "terc",
        label: "3°C",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Enter deliveryInfo",
    label: "Campo Formativo",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "On New",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Yes",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  // {
  //   id: "priceDrop",
  //   type: "number",
  //   placeholder: "Enter Price Drop",
  //   label: "Price Drop",
  //   componentType: "input",
  // },
];
//

export const AvailableSizes = [
  {
    id: "s",
    label: "Facil",
  },
  {
    id: "m",
    label: "Mediano",
  },
  {
    id: "l",
    label: "Dificil",
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyBmcy6FbFQrUvp6yYAWsfsA8JiFS-UZoFs",
  authDomain: "saberser-js-plataformaedu-2023.firebaseapp.com",
  projectId: "saberser-js-plataformaedu-2023",
  storageBucket: "saberser-js-plataformaedu-2023.appspot.com",
  messagingSenderId: "930134419388",
  appId: "1:930134419388:web:ab27532c79083918536db9",
  measurementId: "G-TK7V9TXN3S"
};

export const firebaseStroageURL =
  "gs://saberser-js-plataformaedu-2023.appspot.com";

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Enter your full name",
    label: "Full Name",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Enter your full address",
    label: "Address",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Enter your city",
    label: "City",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Enter your country",
    label: "Country",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Enter your postal code",
    label: "Postal Code",
    componentType: "input",
  },
];
