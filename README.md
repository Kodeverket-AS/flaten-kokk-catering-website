# Template repo
Bruk dette repositoriet for å starte nye NextJS baserte prosjekter. Husk å sjekk `package.json` og oppdater eventuelle deps

# Troubleshooting
### Tailwind autocomplete fungerer ikke
Sørg for at du har oppdatert tailwind intellisence, hvis det fortsetter kan du ligge til denne linjen i `settings.json`.</br>
For å finne riktig fil åpen du settings `ctrl + ,` (windows) og søker etter `tailwind css > experimental: config file`.
```console
"tailwindCSS.experimental.configFile": "src/assets/styles/globals.css"
```