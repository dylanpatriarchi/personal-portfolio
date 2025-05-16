# Portfolio Personale di Dylan Patriarchi

Portfolio in stile neobrutalist creato con Astro.js.

## Configurazione del Form di Contatto

Il form di contatto è configurato per inviare email utilizzando Nodemailer. Per farlo funzionare correttamente, segui questi passaggi:

1. Crea un file `.env` nella root del progetto con le seguenti variabili:
   ```
   # Configurazione Email
   EMAIL_HOST=smtp.tuodominio.it
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=tuaemail@example.com
   EMAIL_PASSWORD=la_tua_password
   EMAIL_TO=destinatario@example.com
   EMAIL_FROM_NAME=Portfolio Dylan
   ```

2. Sostituisci i valori con quelli corretti per il tuo provider email:
   - `EMAIL_HOST`: l'host SMTP del tuo provider (es. smtp.gmail.com, smtp.office365.com)
   - `EMAIL_PORT`: la porta SMTP (solitamente 587 per connessioni non sicure o 465 per SSL)
   - `EMAIL_SECURE`: impostalo a "true" se usi la porta 465, altrimenti "false"
   - `EMAIL_USER`: il tuo indirizzo email
   - `EMAIL_PASSWORD`: la password del tuo account email
   - `EMAIL_TO`: l'indirizzo email dove vuoi ricevere i messaggi
   - `EMAIL_FROM_NAME`: il nome che apparirà come mittente

3. Se stai usando Gmail, assicurati di:
   - Attivare l'accesso alle app meno sicure, oppure
   - Generare una password specifica per l'app nelle impostazioni di sicurezza del tuo account Google

## Sviluppo

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per la produzione
npm run build
```

## Tecnologie Utilizzate

- Astro.js
- Tailwind CSS
- Node.js
- Nodemailer

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
