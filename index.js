

function main() {
	if (Bun.argv.length !== 3){
		console.log("Invalid amount of CLI arguments")
		return
	}
	let baseURL = null
	try {
		baseURL = URL(Bun.argv[2]);
	} catch (err) {
		console.log(`${err.message}: ${Bun.argv[2]}`);
	}
	console.log(`Taking as baseURL the following '${baseURL}'`)
}

main()
