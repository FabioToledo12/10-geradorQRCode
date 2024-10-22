import permittedCharacters from "./utils/permitted-characters.js";

async function handle() {
    // biome-ignore lint/style/useConst: <explanation>
	let characters = [];
	// biome-ignore lint/style/useConst: <explanation>
    let password = "";
	const passwordLength = process.env.PASSWORD_LENGTH;
    characters = await permittedCharacters()

	for( let i = 0; i < passwordLength; i++ ){
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }
    return password
}

export default handle;
