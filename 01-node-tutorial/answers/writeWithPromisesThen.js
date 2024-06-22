const { writeFile } = require("fs").promises;

const lineOne = "This is the first line of code \n";
const lineTwo = "This is the second line of code \n";
const lineThree = "This is the third line of code \n";

writeFile(
	"temp.txt",
	`${lineOne}`,
	{ encoding: "utf-8", flag: "a" },
	console.log("First Line written")
)
	.then(() => {
		return writeFile(
			"temp.txt",
			`${lineTwo}`,
			{
				encoding: "utf-8",
				flag: "a",
			},
			console.log("Second line written")
		);
	})
	.then(() => {
    writeFile("temp.txt", `${lineThree}`, { encoding: "utf-8", flag: "a" });
		console.log("Third line written");
	})
	.catch((error) => {
		console.log("An error has occured: ", error);
	});
