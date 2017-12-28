var cats = {
    printCats () {
        const cats = ["Manoli", "Dexter"];
        console.log(`The Cats: ${cats}`);
    },
    printCat (cat = "Dexter") {
        console.log(`One Cat: ${cat}`)
    }
};

export default cats;