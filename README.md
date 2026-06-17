<h1 align="center">
  <a href="https://chartdb.io#gh-light-mode-only">
    <img src="https://github.com/chartdb/chartdb/blob/main/src/assets/logo-light.png" width="400" height="70" alt="ChartDB">
  </a>
  <a href="https://chartdb.io##gh-dark-mode-only">
    <img src="https://github.com/chartdb/chartdb/blob/main/src/assets/logo-dark.png" width="400" height="70" alt="ChartDB">
  </a>
  <br>
</h1>

<p align="center">
  <b>Open-source database diagrams editor</b> <br />
  <b>No installations • No Database password required.</b> <br />
</p>

<h3 align="center">
  <a href="https://discord.gg/QeFwyWSKwC">Community</a>  &bull;
  <a href="https://www.chartdb.io?ref=github_readme">Website</a>  &bull;
  <a href="https://chartdb.io/templates?ref=github_readme">Examples</a>  &bull;
  <a href="https://app.chartdb.io?ref=github_readme">Demo</a>
</h3>

<h4 align="center">
  <a href="https://github.com/chartdb/chartdb?tab=AGPL-3.0-1-ov-file#readme">
    <img src="https://img.shields.io/github/license/chartdb/chartdb?color=blue" alt="ChartDB is released under the AGPL license." />
  </a>
  <a href="https://github.com/chartdb/chartdb/blob/main/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/QeFwyWSKwC">
    <img src="https://img.shields.io/discord/1277047413705670678?color=5865F2&label=Discord&logo=discord&logoColor=white" alt="Discord community channel" />
  </a>
  <a href="https://x.com/intent/follow?screen_name=jonathanfishner">
    <img src="https://img.shields.io/twitter/follow/jonathanfishner?style=social"/>
  </a>

</h4>

---

<p align="center">
  <img width='700px' src="./public/chartdb.png">
</p>

### 🎉 ChartDB

ChartDB is a powerful, web-based database diagramming editor.
Instantly visualize your database schema with a single **"Smart Query."** Customize diagrams, export SQL scripts, and access all features—no account required. Experience seamless database design here.

**What it does**:

- **Instant Schema Import**
  Run a single query to instantly retrieve your database schema as JSON. This makes it incredibly fast to visualize your database schema, whether for documentation, team discussions, or simply understanding your data better.

- **AI-Powered Export for Easy Migration**
  Our AI-driven export feature allows you to generate the DDL script in the dialect of your choice. Whether you're migrating from MySQL to PostgreSQL or from SQLite to MariaDB, ChartDB simplifies the process by providing the necessary scripts tailored to your target database.
- **Interactive Editing**
  Fine-tune your database schema using our intuitive editor. Easily make adjustments or annotations to better visualize complex structures.

### Status

ChartDB is currently in Public Beta. Star and watch this repository to get notified of updates.

### Supported Databases

- ✅ PostgreSQL (<img src="./src/assets/postgresql_logo_2.png" width="15"/> + <img src="./src/assets/supabase.png" alt="Supabase" width="15"/> + <img src="./src/assets/timescale.png" alt="Timescale" width="15"/> )
- ✅ MySQL
- ✅ SQL Server
- ✅ MariaDB
- ✅ SQLite (<img src="./src/assets/sqlite_logo_2.png" width="15"/> + <img src="./src/assets/cloudflare_d1.png" alt="Cloudflare D1" width="15"/> Cloudflare D1)
- ✅ CockroachDB
- ✅ ClickHouse

## Getting Started

Use the [cloud version](https://app.chartdb.io?ref=github_readme_2) or deploy locally:

### How To Use

```bash
npm install
npm run dev
```

### Build

```bash
npm install
npm run build
```

Or like this if you want to have AI capabilities:

```bash
npm install
VITE_OPENAI_API_KEY=<YOUR_OPEN_AI_KEY> npm run build
```

### Run the Docker Container

```bash
docker run -e OPENAI_API_KEY=<YOUR_OPEN_AI_KEY> -p 8080:80 ghcr.io/chartdb/chartdb:latest
```

#### Build and Run locally

```bash
docker build -t chartdb .
docker run -e OPENAI_API_KEY=<YOUR_OPEN_AI_KEY> -p 8080:80 chartdb
```

#### Using Custom Inference Server

```bash
# Build
docker build \
  --build-arg VITE_OPENAI_API_ENDPOINT=<YOUR_ENDPOINT> \
  --build-arg VITE_LLM_MODEL_NAME=<YOUR_MODEL_NAME> \
  -t chartdb .

# Run
docker run \
  -e OPENAI_API_ENDPOINT=<YOUR_ENDPOINT> \
  -e LLM_MODEL_NAME=<YOUR_MODEL_NAME> \
  -p 8080:80 chartdb
```

> **Privacy Note:** ChartDB includes privacy-focused analytics via Fathom Analytics. You can disable this by adding `-e DISABLE_ANALYTICS=true` to the run command or `--build-arg VITE_DISABLE_ANALYTICS=true` when building.

> **Note:** You must configure either Option 1 (OpenAI API key) OR Option 2 (Custom endpoint and model name) for AI capabilities to work. Do not mix the two options.

Open your browser and navigate to `http://localhost:8080`.

Example configuration for a local vLLM server:

```bash
VITE_OPENAI_API_ENDPOINT=http://localhost:8000/v1
VITE_LLM_MODEL_NAME=Qwen/Qwen2.5-32B-Instruct-AWQ
```

## 🖥️ Desktop App

ChartDB is also available as a native Windows desktop application using Electron.

### Features

- **Fully offline** — all data stored locally via IndexedDB, no cloud required
- **Native window** — frameless window with custom title bar
- **NSIS installer** — standard Windows setup with desktop shortcut, custom install path, and admin elevation
- **Auto-update ready** — built on electron-builder infrastructure

### Development

```bash
# Requirements: Node.js 22 LTS
npm install
npm run dev      # Start Vite dev server
npm run start    # Launch Electron app with hot-reload
```

### Build Windows Installer

```bash
npm run make
```

The installer is created at `out/make/nsis/x64/chartdb-desktop Setup <version>.exe`.

**Installer features:**
- Installs to `C:\Program Files (x86)\ChartDB` by default (customizable)
- Desktop shortcut with app icon
- Runs as administrator (per-machine install)
- "Launch ChartDB" checkbox on finish

### Database Reset

The app stores diagrams locally using IndexedDB. To reset the database before building (ensures a clean distributed app):

```bash
npm run db:reset
```

This runs automatically before `npm run package` and `npm run make`.

### Clean Build

To remove build caches and ensure the smallest installer size:

```bash
npm run clean   # Removes .vite cache, stats, etc.
npm run make    # Full clean build
```

## Try it on our website

1. Go to [ChartDB.io](https://chartdb.io?ref=github_readme_2)
2. Click "Go to app"
3. Choose the database that you are using.
4. Take the magic query and run it in your database.
5. Copy and paste the resulting JSON set into ChartDB.
6. Enjoy Viewing & Editing!

## 💚 Community & Support

- [Discord](https://discord.gg/QeFwyWSKwC) (For live discussion with the community and the ChartDB team)
- [GitHub Issues](https://github.com/chartdb/chartdb/issues) (For any bugs and errors you encounter using ChartDB)
- [Twitter](https://x.com/intent/follow?screen_name=jonathanfishner) (Get news fast)

## Contributing

We welcome community contributions, big or small, and are here to guide you along
the way. Message us in the [ChartDB Community Discord](https://discord.gg/QeFwyWSKwC).

For more information on how to contribute, please see our
[Contributing Guide](/CONTRIBUTING.md).

This project is released with a [Contributor Code of Conduct](/CODE_OF_CONDUCT.md).
By participating in this project, you agree to follow its terms.

Thank you for helping us make ChartDB better for everyone :heart:.

## License

ChartDB is licensed under the [GNU Affero General Public License v3.0](LICENSE)
