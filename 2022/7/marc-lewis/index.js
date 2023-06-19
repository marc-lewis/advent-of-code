const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

function getFileSystem(input) {
	let path = [];
	const fileSystem = { size: 0 };

	input.forEach(line => {
		if(line.startsWith("$ cd")) {
			const [_, dirName] = line.match(/^\$ cd (.+)$/);
			if (dirName === "/") {
				path = [];
			} else if (dirName === "..") {
				path.pop();
			} else {
				path.push(dirName);
			}
		} else if (line.startsWith("$ ls")) {
			return;
		} else if (line.startsWith("dir")) {
			return;
		} else {
			const [_, fileSize] = line.match(/^(\d+)/);
			const dir = path.reduce((currentDir, newDir) => {
				if(!currentDir[newDir]) {
					currentDir[newDir] = { size: 0 }
				}
				return currentDir[newDir];
			}, fileSystem);
			dir.size += parseInt(fileSize);
		}
	});

	return fileSystem;
}

function calculateSizes (fileSystem) {
	const sizes = [];
	let dirSize = 0;
	for (const [key, value] of Object.entries(fileSystem)) {
		if(key === "size") {
			dirSize += value;
		} else {
			dirSize += calculateSizes(value).reduce((sum, size) => sum + size, 0);
		}
	}
	sizes.push(dirSize);
	// RIP functional coding
	allSizes.push(...sizes);
	return sizes;
}

function part1(allSizes) {
	return allSizes.reduce((sum, size) => size <= 100000 ? sum + size : sum, 0)
}

function part2(allSizes) {
	const sizeTotal = 70000000;
	const sizeRequired = 30000000;
	let smallestDir = sizeTotal;
	const unusedSpace = sizeTotal - allSizes[allSizes.length - 1];

	allSizes.forEach(size => {
		if (unusedSpace + size >= sizeRequired) {
			if (size < smallestDir) {
				smallestDir = size;
			}
		}
	});
	return smallestDir;
}

const allSizes = [];
calculateSizes(getFileSystem(input));

console.log(part1(allSizes));
console.log(part2(allSizes));
