import chalk from "chalk"
import prompt from "prompt"
import { promptSchemaMain } from "./prompts-schema/prompts-schema-main.js"
import createPassword from "./services/password/create.js"
import createQRCode from "./services/qr-code/create.js"


async function main() {
    prompt.get(promptSchemaMain, async (err, choose) => {
        
        if(err) console.log(chalk.red.bold(err))

        // if(choose.select == 1) console.log("escolheu QRCode")
        if(choose.select == 1) await createQRCode()
        
        // if(choose.select == 2) console.log("escolheu Password")
        if(choose.select == 2) await createPassword()
    })
    prompt.start()
}

main()