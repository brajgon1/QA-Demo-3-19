const {
    formatTitle, 
    shortenBio, 
    formatDate, 
    formatTime, 
    convertLength, 
    formatLength, 
    formatLocation
} = require("../public/utils.js");

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
};

describe("Formatting Strings", () => {
    test("formatTitle should capitalize the first letter of each word", ()=> {
        let expected = "Nulla Ac";
        let actualValue = formatTitle(testData.title)
        expect(actualValue).toBe(expected);
    }),
    
    test("shortenBio should return the a shortened bio adding ..", () => {
        let expected = "About the Speaker: Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi...";
        let actual = shortenBio(testData.bio);
        expect(actual).toBe(expected)
    });
});

describe("Formatting Dates and Times", () => {
    test("formatDate should return a formatted date", () => {
    let expected = "March 14, 2022"
    let actualValue = formatDate(testData.datetime)
    expect(actualValue).toBe(expected);
    });

    test("format the time of the event", () => {
	let expected = "8:00 AM";
	let actual = formatTime(testData.datetime);
	expect(actual).toBe(expected);
	});

    test("formatting the length of the event", () => {
        let expected = "Length: 1 hour and 5 minutes";
        let convertedString = convertLength(testData.length)
        let actual  = formatLength(convertedString);
        expect(actual).toBe(expected);
    })
})
