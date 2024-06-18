const { writeFile, readFile } = require("fs").promises;

const one = "This is line one. \n";
const two = "This is line two. \n";
const three = "This is line three. \n";

const writer = async () => {
	try {
		await writeFile("tempt.txt", `${one}`, { encoding: "utf-8" });
		await writeFile("tempt.txt", `${two}`, { encoding: "utf-8", flag: "a" });
		await writeFile("tempt.txt", `${three}`, { encoding: "utf-8", flag: "a" });
	} catch (err) {
		console.log("The following error occured: ", err);
	}
};

const reader = async () => {
	try {
		const fileContent = await readFile("tempt.txt", "utf-8");
		return console.log(fileContent);
	} catch (err) {
		console.log("The following error occured: ", err);
	}
};

const readWrite = async () => {
	try {
		await writer();
		await reader();
	} catch (err) {
		console.log(err);
	}
};
readWrite();
