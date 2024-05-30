// Array to store all the NFT objects
let nftC = [];

// Function to mint a new NFT with given metadata
function mintNFT(name, age, eyeColor, shirtType, accessory) {
    // Create the NFT object with the provided metadata
    const nft = {
        name: name,
        age: age,
        eyeColor: eyeColor,
        shirtType: shirtType,
        accessory: accessory
    };
    // Add the new NFT to the collection
    nftC.push(nft);
}

// Function to list all NFTs in the collection
function listNFTs() {
    for (let i = 0; i < nftC.length; i++) {
        const nft = nftC[i];
        console.log(`NFT --> ${i + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Age: ${nft.age}`);
        console.log(`Eye Color: ${nft.eyeColor}`);
        console.log(`Shirt Type: ${nft.shirtType}`);
        console.log(`Accessory: ${nft.accessory}`);
        console.log('--------------------------');
    }
}

// Function to get the total number of NFTs minted
function getTotalSupply() {
    return nftC.length;
}

// Mint a few NFTs with different metadata
mintNFT("Ram", 21, "Blue", "T-Shirt", "Necklace");
mintNFT("mukesh", 20, "Green", "Hoodie", "Watch");
mintNFT("jason", 22, "Brown", "Jacket", "Ring");

// List all the NFTs with their metadata
listNFTs();

// Print the total number of NFTs minted
console.log(`Total Supply: ${getTotalSupply()}`);
