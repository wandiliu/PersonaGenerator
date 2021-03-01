figma.showUI(__html__, { width: 374, height: 286 });

const male = [
  "Aaron",
  "Adam",
  "Alan",
  "Albert",
  "Alexander",
  "Andrew",
  "Anthony",
  "Arthur",
  "Austin",
  "Benjamin",
  "Billy",
  "Bobby",
  "Brandon",
  "Brian",
  "Bruce",
  "Bryan",
  "Carl",
  "Charles",
  "Christian",
  "Christopher",
  "Craig",
  "Daniel",
  "David",
  "Dennis",
  "Donald",
  "Douglas",
  "Dylan",
  "Edward",
  "Eric",
  "Ethan",
  "Eugene",
  "Frank",
  "Gary",
  "George",
  "Gerald",
  "Gregory",
  "Harold",
  "Harry",
  "Henry",
  "Howard",
  "Jack",
  "Jacob",
  "James",
  "Jason",
  "Jeffrey",
  "Jeremy",
  "Jerry",
  "Jesse",
  "Joe",
  "John",
  "Johnny",
  "Jonathan",
  "Jordan",
  "Jose",
  "Joseph",
  "Joshua",
  "Juan",
  "Justin",
  "Keith",
  "Kenneth",
  "Kevin",
  "Kyle",
  "Larry",
  "Lawrence",
  "Louis",
  "Mark",
  "Matthew",
  "Michael",
  "Nathan",
  "Nicholas",
  "Patrick",
  "Paul",
  "Peter",
  "Philip",
  "Phillip",
  "Ralph",
  "Randy",
  "Raymond",
  "Richard",
  "Robert",
  "Roger",
  "Ronald",
  "Roy",
  "Russell",
  "Ryan",
  "Samuel",
  "Scott",
  "Sean",
  "Stephen",
  "Steven",
  "Terry",
  "Thomas",
  "Timothy",
  "Tyler",
  "Vincent",
  "Walter",
  "Wayne",
  "William",
  "Willie",
  "Zachary",
];
const female = [
  "Alice",
  "Amanda",
  "Amber",
  "Amy",
  "Andrea",
  "Angela",
  "Ann",
  "Anna",
  "Ashley",
  "Barbara",
  "Betty",
  "Beverly",
  "Brenda",
  "Brittany",
  "Carol",
  "Carolyn",
  "Catherine",
  "Cheryl",
  "Christina",
  "Christine",
  "Crystal",
  "Cynthia",
  "Danielle",
  "Deborah",
  "Debra",
  "Denise",
  "Diana",
  "Diane",
  "Donna",
  "Doris",
  "Dorothy",
  "Elizabeth",
  "Emily",
  "Emma",
  "Evelyn",
  "Frances",
  "Gloria",
  "Grace",
  "Hannah",
  "Heather",
  "Helen",
  "Jacqueline",
  "Jane",
  "Janet",
  "Janice",
  "Jean",
  "Jennifer",
  "Jessica",
  "Joan",
  "Joyce",
  "Judith",
  "Judy",
  "Julia",
  "Julie",
  "Karen",
  "Katherine",
  "Kathleen",
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
  "Marie",
  "Marilyn",
  "Martha",
  "Mary",
  "Megan",
  "Melissa",
  "Michelle",
  "Mildred",
  "Nancy",
  "Nicole",
  "Olivia",
  "Pamela",
  "Patricia",
  "Rachel",
  "Rebecca",
  "Rose",
  "Ruth",
  "Samantha",
  "Sandra",
  "Sara",
  "Sarah",
  "Sharon",
  "Shirley",
  "Stephanie",
  "Susan",
  "Tammy",
  "Teresa",
  "Theresa",
  "Tiffany",
  "Victoria",
  "Virginia",
];
const surname = [
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
  "Day",
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
  "Little",
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
];
const images = [
  "https://i.imgur.com/6Yjoy1w.png",
  "https://i.imgur.com/VClVVJ4.png",
  "https://i.imgur.com/eM2vh3M.png",
  "https://i.imgur.com/cxzfZKs.png",
  "https://i.imgur.com/eAH8tdB.png",
  "https://i.imgur.com/bn3Q4Tg.png",
  "https://i.imgur.com/c04TKcG.png",
  "https://i.imgur.com/RHwuOdC.png",
  "https://i.imgur.com/ekGJNjX.png",
  "https://i.imgur.com/9iEhNMu.png",
];
let all = female.concat(male);

figma.ui.onmessage = async (msg) => {
  if (msg.type === "create-rectangles") {
    // this works
    if (msg.contentType === "names") {
      for (const node of figma.currentPage.selection) {
        if (node.type === "TEXT") {
          let textNode = <TextNode>node;
          await figma.loadFontAsync(<FontName>textNode.fontName);
          // console.log(msg.gender);
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
          case 'VECTOR':
          case 'TEXT': {
            // Create a new array of fills, because we can't directly modify the old one
            const img_id = Math.floor(Math.random() * Math.floor(1000));
            console.log("image id is "+ img_id);            
            // const url = 'https://picsum.photos/id/' + img_id + '/120';
            const url = 'https://scripter.rsms.me/icon.png'
            let bytes = await getImage(url);    
            // for (const paint of node.fills) {
            //   newFills.push(await downloadImage(url))
            // }
            let imageHash = figma.createImage(bytes).hash
            node.fills = [ { type: "IMAGE", scaleMode: "FIT", imageHash } ];
            figma.currentPage.selection = [node]
            figma.viewport.scrollAndZoomIntoView([node])          
            break
          }
      
          default: {
            // not supported, silently do nothing
          }
        }
      }
    }
  }
  figma.closePlugin("done.");
};

// Randomize names
function getRandomItem(gender) {
  let rand_f = Math.floor(Math.random() * Math.floor(female.length));
  let rand_a = Math.floor(Math.random() * Math.floor(all.length));
  let rand_s = Math.floor(Math.random() * Math.floor(surname.length));
  return (
    (gender === "F"
      ? female[rand_f]
      : gender === "M"
      ? male[rand_f]
      : all[rand_a]) +
    " " +
    surname[rand_s]
  );
}

// this works, but trying Rasmus' code
// async function downloadImage(url) {
//   figma.showUI(__html__, { visible: false })

//   figma.ui.postMessage(url);

//   const newBytes: Uint8Array = await new Promise((resolve, reject) => {
//     figma.ui.onmessage = value => resolve(value as Uint8Array);
//   })

//   const newPaint: Paint = { scaleMode: 'FILL', type: 'IMAGE', imageHash: figma.createImage(newBytes).hash };
//   return newPaint;
// }

// async function addAvatar() {
//   const url = 'https://picsum.photos/1200'
//   const avatar = figma.createEllipse()
//   avatar.resize(128, 128)

//   const paint: Paint = await downloadImage(url)
//   avatar.fills = [ paint ]

//   // if (node && (node.type === "GROUP" || node.type === "FRAME")) {
//   //   node.appendChild(avatar)
//   // }
  
//   return avatar;
// }

// async function createAvatars () {
//   if (figma.currentPage.selection.length) {
//     await Promise.all(figma.currentPage.selection.map(selected => addAvatar()))
//   } else {
//     const avatar = await addAvatar()
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

async function getImage(urls: string): Promise<Uint8Array> {
  let response: Response | null = null;

    console.log("fetching")
    const urlResponse = await fetch(urls);
    console.log("fetched")
    if (urlResponse && urlResponse.status === 200) {
      console.log("in 1st if")
      response = urlResponse;
      console.log("responded")
    }

  if (!response || response.status !== 200) {
    console.log("error")
    throw new Error("Couldn't get the video cover image. Is the video URL correct?");
  }

  console.log("awaiting")
  const buffer = await response.arrayBuffer();
  console.log("finished waiting")

  return new Uint8Array(buffer);
}

