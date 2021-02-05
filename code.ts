figma.showUI(__html__, {width: 374, height: 286 });

const male = ["Aaron","Adam","Alan","Albert","Alexander","Andrew","Anthony","Arthur","Austin","Benjamin","Billy","Bobby","Brandon","Brian","Bruce","Bryan","Carl","Charles","Christian","Christopher","Craig","Daniel","David","Dennis","Donald","Douglas","Dylan","Edward","Eric","Ethan","Eugene","Frank","Gary","George","Gerald","Gregory","Harold","Harry","Henry","Howard","Jack","Jacob","James","Jason","Jeffrey","Jeremy","Jerry","Jesse","Joe","John","Johnny","Jonathan","Jordan","Jose","Joseph","Joshua","Juan","Justin","Keith","Kenneth","Kevin","Kyle","Larry","Lawrence","Louis","Mark","Matthew","Michael","Nathan","Nicholas","Patrick","Paul","Peter","Philip","Phillip","Ralph","Randy","Raymond","Richard","Robert","Roger","Ronald","Roy","Russell","Ryan","Samuel","Scott","Sean","Stephen","Steven","Terry","Thomas","Timothy","Tyler","Vincent","Walter","Wayne","William","Willie","Zachary"],
const female = ["Alice","Amanda","Amber","Amy","Andrea","Angela","Ann","Anna","Ashley","Barbara","Betty","Beverly","Brenda","Brittany","Carol","Carolyn","Catherine","Cheryl","Christina","Christine","Crystal","Cynthia","Danielle","Deborah","Debra","Denise","Diana","Diane","Donna","Doris","Dorothy","Elizabeth","Emily","Emma","Evelyn","Frances","Gloria","Grace","Hannah","Heather","Helen","Jacqueline","Jane","Janet","Janice","Jean","Jennifer","Jessica","Joan","Joyce","Judith","Judy","Julia","Julie","Karen","Katherine","Kathleen","Kathryn","Kathy","Kelly","Kimberly","Laura","Lauren","Linda","Lisa","Lori","Madison","Margaret","Maria","Marie","Marilyn","Martha","Mary","Megan","Melissa","Michelle","Mildred","Nancy","Nicole","Olivia","Pamela","Patricia","Rachel","Rebecca","Rose","Ruth","Samantha","Sandra","Sara","Sarah","Sharon","Shirley","Stephanie","Susan","Tammy","Teresa","Theresa","Tiffany","Victoria","Virginia"],
const surname = ["Adams","Aguilar","Alexander","Allen","Alvarado","Alvarez","Anderson","Andrews","Armstrong","Arnold","Austin","Bailey","Baker","Banks","Barnes","Barnett","Barrett","Bates","Beck","Bell","Bennett","Berry","Bishop","Black","Bowman","Boyd","Bradley","Brewer","Brooks","Brown","Bryant","Burke","Burns","Burton","Butler","Campbell","Carlson","Carpenter","Carr","Carroll","Carter","Castillo","Castro","Chapman","Chavez","Chen","Clark","Cole","Coleman","Collins","Contreras","Cook","Cooper","Cox","Crawford","Cruz","Cunningham","Curtis","Daniels","Davidson","Davis","Day","Dean","Delgado","Diaz","Dixon","Douglas","Duncan","Dunn","Edwards","Elliott","Ellis","Estrada","Evans","Ferguson","Fernandez","Fields","Fisher","Flores","Ford","Foster","Fowler","Fox","Franklin","Freeman","Fuller","Garcia","Gardner","Garrett","Garza","George","Gibson","Gilbert","Gomez","Gonzales","Gonzalez","Gordon","Graham","Grant","Gray","Green","Greene","Griffin","Guerrero","Gutierrez","Guzman","Hall","Hamilton","Hansen","Hanson","Harper","Harris","Harrison","Hart","Harvey","Hawkins","Hayes","Henderson","Henry","Hernandez","Herrera","Hicks","Hill","Hoffman","Holland","Holmes","Hopkins","Howard","Howell","Hudson","Hughes","Hunt","Hunter","Jackson","Jacobs","James","Jenkins","Jensen","Jimenez","Johnson","Johnston","Jones","Jordan","Keller","Kelley","Kelly","Kennedy","Kim","King","Knight","Lane","Larson","Lawrence","Lawson","Lee","Lewis","Little","Long","Lopez","Lucas","Lynch","Marshall","Martin","Martinez","Mason","Matthews","May","McCoy","McDonald","Medina","Mendez","Mendoza","Meyer","Miller","Mills","Mitchell","Montgomery","Moore","Morales","Moreno","Morgan","Morris","Morrison","Munoz","Murphy","Murray","Myers","Nelson","Newman","Nguyen","Nichols","Obrien","Oliver","Olson","Ortega","Ortiz","Owens","Palmer","Parker","Patel","Patterson","Payne","Pearson","Pena","Perez","Perkins","Perry","Peters","Peterson","Phillips","Pierce","Porter","Powell","Price","Ramirez","Ramos","Ray","Reed","Reid","Reyes","Reynolds","Rice","Richards","Richardson","Riley","Rios","Rivera","Roberts","Robertson","Robinson","Rodriguez","Rogers","Romero","Rose","Ross","Ruiz","Russell","Ryan","Salazar","Sanchez","Sanders","Sandoval","Santos","Schmidt","Schneider","Schultz","Scott","Shaw","Silva","Simmons","Simpson","Sims","Smith","Snyder","Soto","Spencer","Stanley","Stephens","Stevens","Stewart","Stone","Sullivan","Taylor","Thomas","Thompson","Torres","Tran","Tucker","Turner","Valdez","Vargas","Vasquez","Wade","Wagner","Walker","Wallace","Walsh","Walters","Ward","Warren","Washington","Watkins","Watson","Weaver","Webb","Weber","Welch","Wells","West","Wheeler","White","Williams","Williamson","Willis","Wilson","Wong","Wood","Woods","Wright","Young"]
const images = ["https://i.imgur.com/6Yjoy1w.png","https://i.imgur.com/VClVVJ4.png","https://i.imgur.com/eM2vh3M.png","https://i.imgur.com/cxzfZKs.png","https://i.imgur.com/eAH8tdB.png","https://i.imgur.com/bn3Q4Tg.png","https://i.imgur.com/c04TKcG.png","https://i.imgur.com/RHwuOdC.png","https://i.imgur.com/ekGJNjX.png","https://i.imgur.com/9iEhNMu.png"]
let all = female.concat(male);

figma.ui.onmessage = async msg => {

  if (msg.type === 'create-rectangles') {
    // this works
    if (msg.contentType === "names")  {
      for (const node of figma.currentPage.selection) {
        if (node.type === "TEXT") {
          let textNode = <TextNode>node
          await figma.loadFontAsync(<FontName>textNode.fontName)
          // console.log(msg.gender);
          node.characters = getRandomItem(msg.gender);
        }
      }    
    }
    // this doesn't work
    if (msg.contentType === "avatars") {
      for (const node of figma.currentPage.selection) {     
        console.log("in main xx")           
        await placeIfApplicable(node);
      }
      }    
    }
    }
  }
};

// Randomize names
function getRandomItem(gender) {
  let rand_f = Math.floor(Math.random() * Math.floor(female.length));
  let rand_a = Math.floor(Math.random() * Math.floor(all.length));
  let rand_s = Math.floor(Math.random() * Math.floor(surname.length)) 
  return (gender==="F" ? female[rand_f] 
       : gender==="M" ? male[rand_f]
       : all[rand_a])
      + " " + surname[rand_s];
}

// Me trying to get an image on the screen
async function placeAvatar() {
  console.log("in placeavatar")           
  figma.showUI(__html__, { visible: false })
  console.log("before postmessage")           
  figma.ui.postMessage('')
  console.log("after postmessage")           
  const newBytes: Uint8Array = await new Promise((resolve, reject) => {
    console.log("in promise")           
    figma.ui.onmessage = value => resolve(value as Uint8Array)
    console.log(value)           
  })
  let imageHash = figma.createImage(newBytes).hash
  console.log("image created")           
  return { type: "IMAGE", scaleMode: "FILL", imageHash }
}

async function placeIfApplicable(node) {
  switch (node.type) {
    case 'RECTANGLE':
    case 'ELLIPSE':
    case 'POLYGON':
    case 'STAR':
    case 'VECTOR':
    case 'TEXT': {
      const newFills = []
      console.log("newfills pls")           
      // newFills.push(await placeAvatar(node))
      for (const paint of node.fills) {
          console.log ("is in paint of node.fills")
          // Get the (encoded) bytes for this image.
          const image = figma.getImageByHash(paint.imageHash)
          console.log ("got it")
          const bytes = await image.getBytesAsync()
          console.log ("got bytes")
          // Create an invisible iframe to act as a "worker" which
          // will do the task of decoding and send us a message
          // when it's done.
          figma.showUI(__html__, { visible: false })
          console.log ("worked")
          // Send the raw bytes of the file to the worker.
          figma.ui.postMessage(bytes)
          console.log ("bytes sent")
          // Wait for the worker's response.
          const newBytes = await new Promise((resolve, reject) => {
            console.log ("in promise, nice!")
            figma.ui.onmessage = value => resolve(value)
          })
    
          // Create a new paint for the new image.
          const newPaint = JSON.parse(JSON.stringify(paint))
          newPaint.imageHash = figma.createImage(newBytes).hash
          newFills.push(newPaint)    
      console.log("pushed")           
      node.fills = newFills
      break
    }
    default: {
      let err = "Can't be applied to a " + node.type + '. Please select the available shape and run the plugin again'
      return figma.closePlugin(err)
    }
  }
}
