// Array of paragraphs
const texts = [
    `I'm baby freegan poke venmo shoreditch. La croix organic flexitarian cred adaptogen vinyl bitters thundercats pitchfork. Vexillologist fixie fanny pack, fashion axe vice pitchfork DIY yuccie 8-bit banjo cornhole poke palo santo XOXO. Readymade fixie chicharrones DIY letterpress offal semiotics distillery.I'm baby freegan poke venmo shoreditch. La croix organic flexitarian cred adaptogen vinyl bitters thundercats pitchfork. Vexillologist fixie fanny pack, fashion axe vice pitchfork DIY yuccie 8-bit banjo cornhole poke palo santo XOXO. Readymade fixie chicharrones DIY letterpress offal semiotics distillery.`,
    `Art party succulents brooklyn hoodie hell of irony. Pork belly single-origin coffee letterpress tbh asymmetrical salvia art party offal mixtape hella scenester actually. Four dollar toast distillery shabby chic, DIY ennui flexitarian chillwave portland mixtape gluten-free raw denim letterpress sustainable selvage. Fixie cloud bread taxidermy, you probably haven't heard of them banh mi selfies tousled plaid kombucha mixtape chicharrones succulents microdosing migas ramps.`,
    `Rubber cheese pecorino who moved my cheese. Stilton gouda cheddar monterey jack cauliflower cheese emmental cottage cheese macaroni cheese. Smelly cheese stinking bishop cheese and biscuits airedale halloumi bocconcini when the cheese comes out everybody's happy camembert de normandie. Fromage frais cheese triangles smelly cheese camembert de normandie babybel babybel cow gouda. Cow bavarian bergkase cheese strings cheese slices smelly cheese cheese and wine danish fontina dolcelatte. The big cheese fromage boursin queso cottage cheese rubber cheese mascarpone cheeseburger. Cottage cheese.`,
    `Organic jianbing aesthetic meh. Disrupt hell of tumblr, godard succulents farm-to-table meditation +1 chicharrones mustache asymmetrical coloring book tacos schlitz shoreditch. Af banh mi tattooed, four loko bespoke tumblr roof party glossier put a bird on it leggings poke XOXO readymade yr tilde. Vegan seitan wolf affogato polaroid art party. Knausgaard intelligentsia mixtape occupy distillery lo-fi shaman. Intelligentsia cronut leggings direct trade. Semiotics la croix vinyl, microdosing chillwave tofu skateboard echo park try-hard fam typewriter offal vexillologist coloring book.`,
    `Tumblr poutine pickled aesthetic tofu, biodiesel mixtape wolf fingerstache vexillologist listicle austin kickstarter shabby chic sartorial. Narwhal actually sustainable, ugh taxidermy truffaut put a bird on it vape shoreditch. Beard post-ironic occupy, skateboard church-key live-edge vape locavore distillery chia typewriter 8-bit man bun keffiyeh lyft. Retro semiotics meditation paleo franzen glossier irony.`,
    `Fruitcake jelly-o lemon drops croissant sweet chupa chups sweet dessert. Biscuit oat cake caramels chocolate cake pie gummi bears. Sweet roll gummi bears cupcake. Jelly-o pie chocolate pudding liquorice muffin dragée gummies marshmallow. Pie sweet jujubes biscuit danish chocolate cake chocolate. Cheesecake cookie cheesecake. Halvah sweet roll sesame snaps. Chocolate candy canes jelly-o chocolate bar oat cake tart.`,
    `Synth next level kickstarter sriracha polaroid, neutra activated charcoal cornhole. Vinyl hammock biodiesel lumbersexual +1. Wolf typewriter semiotics trust fund lo-fi disrupt palo santo. Chia four loko direct trade flexitarian. Glossier banh mi seitan cloud bread, humblebrag hashtag craft beer tilde lomo subway tile locavore synth fingerstache. Brooklyn craft beer palo santo wolf pour-over photo booth. Letterpress chartreuse synth, glossier slow-carb edison bulb celiac vape pickled.`,
    `Irony art party meggings, gluten-free flannel raw denim organic etsy microdosing street art. Humblebrag heirloom roof party kombucha, viral umami salvia four dollar toast man braid food truck hexagon readymade forage pop-up. Prism ramps shabby chic man bun post-ironic PBR&B pour-over migas organic DIY. Vegan taiyaki paleo taxidermy fixie deep v jianbing. Small batch thundercats skateboard adaptogen banh mi, taxidermy shaman yr hot chicken semiotics venmo lomo. Butcher XOXO blue bottle, paleo slow-carb hell of YOLO PBR&B subway tile bespoke kinfolk bitters jianbing everyday carry biodiesel.`,
    `Toffee powder chocolate cake chocolate marshmallow croissant. Donut cheesecake cotton candy jelly beans chocolate topping carrot cake carrot cake. Chupa chups sweet dessert jelly beans pastry marzipan. Liquorice brownie lemon drops muffin wafer jelly tootsie roll. Cheesecake oat cake cupcake tart candy. Icing biscuit chocolate tart croissant. Pastry candy chupa chups gingerbread donut dessert ice cream biscuit. Soufflé macaroon cake tootsie roll macaroon jelly beans. Cookie pudding jelly beans gingerbread cheesecake chocolate. Sesame snaps caramels tart brownie oat cake marshmallow dessert gingerbread.`,
    `If anyone asks where I am, I've left the country. Nancy, seriously, you're gonna be so cool now, it's ridiculous. Hey kiddo, would you like a balloon? Nancy, seriously, you're gonna be so cool now, it's ridiculous. Bitchin' So, Jonathan, how was the pull-out?`
];

// Select the necessary DOM elements
const contParagraphs = document.getElementById('container-paragraphs');
const generateBtn = document.getElementById('submit-btn');
const amount = document.getElementById('paragraphs');

// Set the 'max' attribute on the input to the length of the array
amount.setAttribute('max', texts.length);

generateBtn.addEventListener('click', function (e) {
    e.preventDefault();
    
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * texts.length);
    
    if (value < 0 && window.location == 'file:///home/chronos/u-6bd29e45b3bc8c8d2ea956218f5b313e9f137347/Downloads/random-lorem/index.html') {
        alert('Enter an empty data to randomly generate or the number of paragraphs you want.');
    } else if (value < 0 && window.location == 'file:///home/chronos/u-6bd29e45b3bc8c8d2ea956218f5b313e9f137347/Downloads/random-lorem/spanish.html') {
      alert('Introduce un dato vacío para generar aleatoriamente o la cantidad de párrafos que quieres.');
    } else if (isNaN(value) || value === 0 || value > texts.length) {
        contParagraphs.innerHTML = `<p>${texts[random]}</p>`;
    } else {
        let selItems = texts.slice(0, value);
        contParagraphs.innerHTML = selItems.map(par => {
            return `<p>${par}</p>`;
        }).join(' ');
    }
});