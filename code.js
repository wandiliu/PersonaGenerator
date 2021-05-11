var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 374, height: 286 });
const male_euro = [
    "Aaron",
    "Adam",
    "Alan",
    "Albert",
    "Alex",
    "Andrew",
    "Anthony",
    "Austin",
    "Benjamin",
    "Brandon",
    "Brian",
    "Chris",
    "Daniel",
    "David",
    "Dennis",
    "Dylan",
    "Edward",
    "Eric",
    "Ethan",
    "Eugene",
    "Frank",
    "Gary",
    "George",
    "Greg",
    "Henry",
    "Howard",
    "Jack",
    "Jacob",
    "James",
    "Jason",
    "Jeffrey",
    "Jeremy",
    "Jerry",
    "Joe",
    "John",
    "Johnny",
    "Jonathan",
    "Jordan",
    "Joseph",
    "Joshua",
    "Justin",
    "Keith",
    "Kevin",
    "Kyle",
    "Lawrence",
    "Mark",
    "Matthew",
    "Michael",
    "Nathan",
    "Nick",
    "Patrick",
    "Paul",
    "Peter",
    "Phillip",
    "Raymond",
    "Richard",
    "Robert",
    "Russell",
    "Ryan",
    "Samuel",
    "Scott",
    "Sean",
    "Stephen",
    "Steve",
    "Terry",
    "Thomas",
    "Tim",
    "Tyler",
    "Vincent",
    "Wayne",
    "William",
];
const male_hisp = [
    "Alejandro",
    "Jose",
    "Carlos",
    "Jorge",
    "Samuel",
    "Sebastián",
    "Óscar",
];
const male_easa = [
    "Zitong",
    "Yota",
    "Jun-woo",
    "Kenji",
    "Seo Joon",
    "Tian",
    "Sijie",
];
const male_soua = [
    "Parth",
    "Ishaan",
    "Sidarth",
    "Abhijit",
];
const male_mena = [
    "Mo",
    "Adir",
    "Fahim",
    "Jamaal",
    "Najeeb",
];
const female_euro = [
    "Amanda",
    "Amber",
    "Amy",
    "Andrea",
    "Angela",
    "Ann",
    "Anna",
    "Ashley",
    "Brittany",
    "Carol",
    "Catherine",
    "Cheryl",
    "Christina",
    "Christine",
    "Crystal",
    "Cynthia",
    "Danielle",
    "Deborah",
    "Denise",
    "Diana",
    "Elizabeth",
    "Emma",
    "Evelyn",
    "Gloria",
    "Grace",
    "Hannah",
    "Heather",
    "Helen",
    "Jacqueline",
    "Jane",
    "Janice",
    "Jean",
    "Jennifer",
    "Jessica",
    "Judy",
    "Julia",
    "Julie",
    "Karen",
    "Kathryn",
    "Kathy",
    "Kelly",
    "Kimberly",
    "Laura",
    "Lauren",
    "Linda",
    "Lisa",
    "Lori",
    "Madison",
    "Margaret",
    "Maria",
    "Megan",
    "Melissa",
    "Michelle",
    "Nancy",
    "Nicole",
    "Olivia",
    "Pamela",
    "Patricia",
    "Rachel",
    "Rebecca",
    "Rose",
    "Samantha",
    "Sandra",
    "Sara",
    "Sarah",
    "Sharon",
    "Stephanie",
    "Susan",
    "Tammy",
    "Teresa",
    "Victoria",
];
const female_hisp = [
    "Sofía",
    "Camila",
    "Victoria",
    "Mía",
    "Fernanda",
    "Alejandra",
];
const female_easa = [
    "Yi",
    "Kira",
    "Hitomi",
    "Eun-ji",
    "Hyeonjoo",
    "Saki",
    "Yuna",
];
const female_soua = [
    "Priya",
    "Ritu",
    "Tanvi",
    "Zara",
];
const female_mena = [
    "Aisha",
    "Noor",
    "Daria",
    "Yesim",
    "Rajaa",
];
const surname_euro = [
    "Adams",
    "Aguilar",
    "Alexander",
    "Allen",
    "Alvarado",
    "Alvarez",
    "Anderson",
    "Andrews",
    "Armstrong",
    "Arnold",
    "Austin",
    "Bailey",
    "Baker",
    "Banks",
    "Barnes",
    "Barnett",
    "Barrett",
    "Bates",
    "Beck",
    "Bell",
    "Bennett",
    "Berry",
    "Bishop",
    "Black",
    "Bowman",
    "Boyd",
    "Bradley",
    "Brewer",
    "Brooks",
    "Brown",
    "Bryant",
    "Burke",
    "Burns",
    "Burton",
    "Butler",
    "Campbell",
    "Carlson",
    "Carpenter",
    "Carr",
    "Carroll",
    "Carter",
    "Castillo",
    "Castro",
    "Chapman",
    "Chavez",
    "Chen",
    "Clark",
    "Cole",
    "Coleman",
    "Collins",
    "Contreras",
    "Cook",
    "Cooper",
    "Cox",
    "Crawford",
    "Cruz",
    "Cunningham",
    "Curtis",
    "Daniels",
    "Davidson",
    "Davis",
    "Dean",
    "Delgado",
    "Diaz",
    "Dixon",
    "Douglas",
    "Duncan",
    "Dunn",
    "Edwards",
    "Elliott",
    "Ellis",
    "Estrada",
    "Evans",
    "Ferguson",
    "Fernandez",
    "Fields",
    "Fisher",
    "Flores",
    "Ford",
    "Foster",
    "Fowler",
    "Fox",
    "Franklin",
    "Freeman",
    "Fuller",
    "Garcia",
    "Gardner",
    "Garrett",
    "Garza",
    "George",
    "Gibson",
    "Gilbert",
    "Gomez",
    "Gonzales",
    "Gonzalez",
    "Gordon",
    "Graham",
    "Grant",
    "Gray",
    "Green",
    "Greene",
    "Griffin",
    "Guerrero",
    "Gutierrez",
    "Guzman",
    "Hall",
    "Hamilton",
    "Hansen",
    "Hanson",
    "Harper",
    "Harris",
    "Harrison",
    "Hart",
    "Harvey",
    "Hawkins",
    "Hayes",
    "Henderson",
    "Henry",
    "Hernandez",
    "Herrera",
    "Hicks",
    "Hill",
    "Hoffman",
    "Holland",
    "Holmes",
    "Hopkins",
    "Howard",
    "Howell",
    "Hudson",
    "Hughes",
    "Hunt",
    "Hunter",
    "Jackson",
    "Jacobs",
    "James",
    "Jenkins",
    "Jensen",
    "Jimenez",
    "Johnson",
    "Johnston",
    "Jones",
    "Jordan",
    "Keller",
    "Kelley",
    "Kelly",
    "Kennedy",
    "Kim",
    "King",
    "Knight",
    "Lane",
    "Larson",
    "Lawrence",
    "Lawson",
    "Lee",
    "Lewis",
    "Long",
    "Lopez",
    "Lucas",
    "Lynch",
    "Marshall",
    "Martin",
    "Martinez",
    "Mason",
    "Matthews",
    "May",
    "McCoy",
    "McDonald",
    "Medina",
    "Mendez",
    "Mendoza",
    "Meyer",
    "Miller",
    "Mills",
    "Mitchell",
    "Montgomery",
    "Moore",
    "Morales",
    "Moreno",
    "Morgan",
    "Morris",
    "Morrison",
    "Munoz",
    "Murphy",
    "Murray",
    "Myers",
    "Nelson",
    "Newman",
    "Nguyen",
    "Nichols",
    "Obrien",
    "Oliver",
    "Olson",
    "Ortega",
    "Ortiz",
    "Owens",
    "Palmer",
    "Parker",
    "Patel",
    "Patterson",
    "Payne",
    "Pearson",
    "Pena",
    "Perez",
    "Perkins",
    "Perry",
    "Peters",
    "Peterson",
    "Phillips",
    "Pierce",
    "Porter",
    "Powell",
    "Price",
    "Ramirez",
    "Ramos",
    "Ray",
    "Reed",
    "Reid",
    "Reyes",
    "Reynolds",
    "Rice",
    "Richards",
    "Richardson",
    "Riley",
    "Rios",
    "Rivera",
    "Roberts",
    "Robertson",
    "Robinson",
    "Rodriguez",
    "Rogers",
    "Romero",
    "Rose",
    "Ross",
    "Ruiz",
    "Russell",
    "Ryan",
    "Salazar",
    "Sanchez",
    "Sanders",
    "Sandoval",
    "Santos",
    "Schmidt",
    "Schneider",
    "Schultz",
    "Scott",
    "Shaw",
    "Silva",
    "Simmons",
    "Simpson",
    "Sims",
    "Smith",
    "Snyder",
    "Soto",
    "Spencer",
    "Stanley",
    "Stephens",
    "Stevens",
    "Stewart",
    "Stone",
    "Sullivan",
    "Taylor",
    "Thomas",
    "Thompson",
    "Torres",
    "Tran",
    "Tucker",
    "Turner",
    "Valdez",
    "Vargas",
    "Vasquez",
    "Wade",
    "Wagner",
    "Walker",
    "Wallace",
    "Walsh",
    "Walters",
    "Ward",
    "Warren",
    "Washington",
    "Watkins",
    "Watson",
    "Weaver",
    "Webb",
    "Weber",
    "Welch",
    "Wells",
    "West",
    "Wheeler",
    "White",
    "Williams",
    "Williamson",
    "Willis",
    "Wilson",
    "Wong",
    "Wood",
    "Woods",
    "Wright",
    "Young",
    "Rodriguez",
    "Perez",
    "Moreno",
    "Garcia",
    "Gonzalez",
    "Ortiz",
    "Castro",
    "Alvarez",
    "Torres",
    "Ortega",
    "Molina",
    "Ruiz",
    "Cho",
    "Xu",
    "Zhao",
    "Kim",
    "Ryu",
    "Liu",
    "Sun",
    "Lam",
    "Woo",
    "Wu",
];
const surname_hisp = [
    "Hernández",
    "García",
    "Martínez",
    "López",
    "González",
    "Rodríguez",
    "Pérez",
    "Sánchez",
    "Ramírez",
    "Cruz",
    "Flores",
    "Gómez",
    "Morales",
    "Vázquez",
    "Reyes",
    "Jímenez",
    "Torres",
    "Díaz",
    "Gutiérrez",
    "Mendoza",
    "Ruiz",
    "Aguilar",
    "Ortiz",
    "Castillo",
    "Moreno",
    "Romero",
    "Álvarez",
    "Chávez",
    "Rivera",
    "Juárez",
    "Ramos",
    "Méndez",
    "Domínguez",
    "Herrera",
    "Medina",
    "Vargas",
    "Castro",
    "Guzmán",
    "Velázquez",
    "Muñoz",
    "Rojas",
    "Contreras",
    "Salazar",
    "Luna",
    "de la Cruz",
    "Ortega",
    "Guerrero",
    "Santiago",
    "Estrada",
];
const surname_easa = [
    "Cho",
    "Ito",
    "Park",
    "Kim",
    "Ryu",
    "Ren",
    "Sun",
    "Tseng",
    "Tong",
    "Um",
    "Som",
    "Lay",
    "Prak",
    "Song",
    "Law",
    "Kwok",
    "Yeung",
    "Lim",
    "Nguyen",
    "Tran",
    "Vo",
    "Ho",
];
const surname_soua = [
    "Balasubramanium",
    "Banerjee",
    "Bhatnagar",
    "Bose",
    "Chatterjee",
    "Chattopadhyay",
    "Chauhan",
    "Chavan",
    "Chopra",
    "Das",
    "Dasgupta",
    "Dutta",
    "Gavde",
    "Gupta",
    "Jain",
    "Jaiteley",
    "Jayaraman",
    "Jhadav",
    "Jindal",
    "Kadam",
    "Kapoor",
    "Kapur",
    "Khan",
    "Lobo",
    "Malhotra",
    "Malik",
    "Mehra",
    "Mehta",
    "Mistry",
    "Mittal",
    "Mukopadhyay",
    "Nair",
    "Patel",
    "Patil",
    "Pawar",
    "Pillai",
    "Powar",
    "Rangan",
    "Rangarajan",
    "Rao",
    "Rodrigues",
    "Rathore",
    "Sarin",
    "Saxena",
    "Sen",
    "Sengupta",
    "Shah",
    "Sharma",
    "Singh",
    "Singhal",
    "Subramanium",
    "Tata",
    "Tambe",
    "Trivedi",
    "Venkatesan",
    "Verma",
    "Vyas",
    "Yadav",
];
const surname_mena = [
    "Ali",
    "Fayed",
    "Hadid",
    "Isa",
    "Nader",
    "Rahman",
    "Ahmed",
    "Haque",
    "Hussain",
    "Hossain",
];
const unsplash = [
    'I2g6Oe9ElbE',
    'IAiA3CFf6kc',
    'VoBY0tQo52E',
    'QJEVpydulGs',
    'AeYr1eNyidA',
    'aZzXKGcyWqk',
    'UIrgThPxuJ4',
];
let all_euro = female_euro.concat(male_euro);
let all_hisp = female_hisp.concat(male_hisp);
let all_easa = female_easa.concat(male_easa);
let all_soua = female_soua.concat(male_soua);
let all_mena = female_mena.concat(male_mena);
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    if (msg.type === "create-rectangles") {
        // this works
        if (msg.contentType === "names") {
            for (const node of figma.currentPage.selection) {
                if (node.type === "TEXT") {
                    let textNode = node;
                    yield figma.loadFontAsync(textNode.fontName);
                    node.characters = getRandomItem(msg.gender);
                }
            }
        }
        // this doesn't work
        if (msg.contentType === "avatars") {
            for (const node of figma.currentPage.selection) {
                switch (node.type) {
                    case 'RECTANGLE':
                    case 'ELLIPSE':
                    case 'POLYGON':
                    case 'STAR':
                    case 'VECTOR': {
                        // Create a new array of fills, because we can't directly modify the old one
                        // const img_id = unsplash[Math.floor(Math.random() * Math.floor(unsplash.length))];
                        // console.log("image id is "+ img_id);            
                        // const url = 'https://picsum.photos/id/' + img_id + '/120';
                        const url = '';
                        const paint = yield downloadImage(url);
                        // const url = 'https://scripter.rsms.me/icon.png'
                        // let bytes = await getImage(url);    
                        // for (const paint of node.fills) {
                        //   newFills.push(await downloadImage(url))
                        // }
                        // let imageHash = figma.createImage(bytes).hash
                        node.fills = [paint];
                        figma.currentPage.selection = [node];
                        figma.viewport.scrollAndZoomIntoView([node]);
                        break;
                    }
                    default: {
                        // not supported, silently do nothing
                    }
                }
            }
        }
    }
    figma.closePlugin("done.");
});
// Randomize names
function getRandomItem(gender) {
    let sampleOfTen = [
        easaName(gender),
        euroName(gender),
        euroName(gender),
        euroName(gender),
        euroName(gender),
        euroName(gender),
        euroName(gender),
        euroName(gender),
        hispName(gender),
        souaName(gender),
        menaName(gender),
    ];
    let rand = Math.floor(Math.random() * Math.floor(sampleOfTen.length));
    return sampleOfTen[rand];
}
function easaName(gender) {
    let rand_f = Math.floor(Math.random() * Math.floor(female_euro.length));
    let rand_a = Math.floor(Math.random() * Math.floor(all_euro.length));
    let rand_s = Math.floor(Math.random() * Math.floor(surname_easa.length));
    return ((gender === "F"
        ? female_euro[rand_f]
        : gender === "M"
            ? male_euro[rand_f]
            : all_euro[rand_a]) +
        " " +
        surname_easa[rand_s]);
}
function souaName(gender) {
    let rand_f = Math.floor(Math.random() * Math.floor(female_soua.length));
    let rand_a = Math.floor(Math.random() * Math.floor(all_soua.length));
    let rand_s = Math.floor(Math.random() * Math.floor(surname_soua.length));
    return ((gender === "F"
        ? female_soua[rand_f]
        : gender === "M"
            ? male_soua[rand_f]
            : all_soua[rand_a]) +
        " " +
        surname_soua[rand_s]);
}
function menaName(gender) {
    let rand_f = Math.floor(Math.random() * Math.floor(female_mena.length));
    let rand_a = Math.floor(Math.random() * Math.floor(all_mena.length));
    let rand_s = Math.floor(Math.random() * Math.floor(surname_mena.length));
    return ((gender === "F"
        ? female_mena[rand_f]
        : gender === "M"
            ? male_mena[rand_f]
            : all_mena[rand_a]) +
        " " +
        surname_mena[rand_s]);
}
function hispName(gender) {
    let rand_f = Math.floor(Math.random() * Math.floor(female_hisp.length));
    let rand_a = Math.floor(Math.random() * Math.floor(all_hisp.length));
    let rand_s = Math.floor(Math.random() * Math.floor(surname_hisp.length));
    return ((gender === "F"
        ? female_hisp[rand_f]
        : gender === "M"
            ? male_hisp[rand_f]
            : all_hisp[rand_a]) +
        " " +
        surname_hisp[rand_s]);
}
function euroName(gender) {
    let rand_f = Math.floor(Math.random() * Math.floor(female_euro.length));
    let rand_a = Math.floor(Math.random() * Math.floor(all_euro.length));
    let rand_s = Math.floor(Math.random() * Math.floor(surname_euro.length));
    return ((gender === "F"
        ? female_euro[rand_f]
        : gender === "M"
            ? male_euro[rand_f]
            : all_euro[rand_a]) +
        " " +
        surname_euro[rand_s]);
}
// this works, but trying Rasmus' code
function downloadImage(url) {
    return __awaiter(this, void 0, void 0, function* () {
        figma.showUI(__html__, { visible: false });
        figma.ui.postMessage(url);
        const newBytes = yield new Promise((resolve, reject) => {
            figma.ui.onmessage = value => resolve(value);
        });
        const newPaint = { scaleMode: 'FILL', type: 'IMAGE', imageHash: figma.createImage(newBytes).hash };
        return newPaint;
    });
}
// async function addAvatar(node) {
//   const url = 'https://picsum.photos/1200'
//   const avatar = figma.createEllipse()
//   avatar.resize(128, 128)
//   const paint: Paint = await downloadImage(url)
//   avatar.fills = [ paint ]
//   if (node && (node.type === "GROUP" || node.type === "FRAME")) {
//     node.appendChild(avatar)
//   }
//   return avatar;
// }
// async function createAvatars () {
//   if (figma.currentPage.selection.length) {
//     await Promise.all(figma.currentPage.selection.map(selected => addAvatar(Node)))
//   } else {
//     const avatar = await addAvatar(Node)
//     figma.currentPage.appendChild(avatar);
//     figma.currentPage.selection = [avatar];
//     figma.viewport.scrollAndZoomIntoView([avatar]);  
//   } 
// }
// Rasmus code
// function fetchPaint (url) {
//   figma.showUI(`<script>
//   fetch(${JSON.stringify(url)}).then(r => {
//     if ((r.status+"")[0] != "2") throw Error(\`HTTP \${r.status} \${r.statusText}\`)
//     return r.arrayBuffer()
//   }).then(a => parent.postMessage({ pluginMessage: { data: new Uint8Array(a) }}, '*'))
//   .catch(err => parent.postMessage({ pluginMessage: { error: ""+err }}, '*'))
// </script>`, {
//   visible:false, // don't actually show a UI window
// })
// figma.ui.onmessage = msg => {
//   if (msg.data && msg.data.length > 0) {
//     let imageHash = figma.createImage(msg.data).hash
//     return imageHash;
//     }
//   figma.closePlugin(msg.error || "error")
// }
// return null;
// }
// async function getImage(urls: string): Promise<Uint8Array> {
//   let response: Response | null = null;
//     console.log("fetching")
//     const urlResponse = await fetch(urls);
//     console.log("fetched")
//     if (urlResponse && urlResponse.status === 200) {
//       console.log("in 1st if")
//       response = urlResponse;
//       console.log("responded")
//     }
//   if (!response || response.status !== 200) {
//     console.log("error")
//     throw new Error("Couldn't get the video cover image. Is the video URL correct?");
//   }
//   console.log("awaiting")
//   const buffer = await response.arrayBuffer();
//   console.log("finished waiting")
//   return new Uint8Array(buffer);
// }
