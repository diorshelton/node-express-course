const { people } = require("../data");

const getPeople = (req, res) => {
	res.status(200).json({ success: true, data: people });
};

const addPerson = (req, res) => {
  const name = req.body.name.trim();
	console.log(name);
	if (!name) {
		res.status(400).json({ success: false, message: "Please provide a name" });
	} else {
		people.push({ id: people.length + 1, name: req.body.name });
		res.status(201).json({ success: true, name: req.body.name });
	}
};

const getPerson = (req, res) => {
	const id = Number(req.params.id);
	const person = people.find((person) => person.id === id);
	if (person) {
		res.status(200).json({ success: true, data: person });
	} else {
		res.status(404).json({ success: false, message: "No such user id exists" });
	}
};

const deletePerson = (req, res) => {
	const id = Number(req.params.id);
	const person = people.find((person) => person.id === id);

	if (person) {
		const remains = people.filter((person) => person.id !== id);
		res.status(200).json({ success: true, data: remains });
	} else {
		res.status(404).json({ success: false, message: "No such user id exists" });
	}
};

module.exports = {
	getPeople,
	addPerson,
	getPerson,
	deletePerson,
};
