// interfaces/interfaces.ts

export interface IProductsAPI {
    id: number;
    title: Title;
    price: number;
    description: string;
    images: string[];
    creationAt: Date;
    updatedAt: Date;
    category: Category;
}

export interface Category {
    id: number;
    name: Name;
    image: string;
    creationAt: Date;
    updatedAt: Date;
}

export enum Name {
    Clothes = "Clothes",
    Electronics = "Electronics",
    Furniture = "Furniture",
    Shoes = "Shoes",
}

export enum Title {
    Bag = "bag",
    ChicSummerDenimEspadrilleSandals = "Chic Summer Denim Espadrille Sandals",
    ClassicBlueSuedeCasualShoes = "Classic Blue Suede Casual Shoes",
    ElegantGoldenBaseStoneTopDiningTable = "Elegant Golden-Base Stone Top Dining Table",
    ElegantPatentLeatherPeepToePumpsWithGoldToneHeel = "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
    ElegantPurpleLeatherLoafers = "Elegant Purple Leather Loafers",
    ElegantSolidWoodDiningTable = "Elegant Solid Wood Dining Table",
    Fbfvghdfdfrg = "fbfvghdfdfrg",
    FuturisticHolographicSoccerCleats = "Futuristic Holographic Soccer Cleats",
    HelloSir = "Hello sir",
    Hi = "Hi",
    KripikSingkongSabana = "kripik singkong sabana",
    MidCenturyModernWoodenDiningTable = "Mid-Century Modern Wooden Dining Table",
    ModernEleganceTealArmchair = "Modern Elegance Teal Armchair",
    ModernErgonomicOfficeChair = "Modern Ergonomic Office Chair",
    ModernMinimalistWorkstationSetup = "Modern Minimalist Workstation Setup",
    NewProduct = "New Product",
    RainbowGlitterHighHeels = "Rainbow Glitter High Heels",
    SleekMirrorFinishPhoneCase = "Sleek Mirror Finish Phone Case",
    SleekModernLaptopForProfessionals = "Sleek Modern Laptop for Professionals",
    SleekModernLeatherSofa = "Sleek Modern Leather Sofa",
    SleekSmartwatchWithVibrantDisplay = "Sleek Smartwatch with Vibrant Display",
    StylishRedSilverOverEarHeadphones = "Stylish Red & Silver Over-Ear Headphones",
    TestProduct = "test Product",
    TitleTestProduct = "Test Product",
    VibrantRunnersBoldOrangeBlueSneakers = "Vibrant Runners: Bold Orange & Blue Sneakers",
}