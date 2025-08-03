---
type: overview
domain: system-state
subject: Obsidian CustomJS Startup
status: active
summary: Details the technology stack, setup process, and technical constraints.
---
# Technical Context

## 1. Technologies Used
*   **Language:** JavaScript (ES6+ for Classes)
*   **Platform:** Obsidian
*   **Core Dependencies:**
    *   Obsidian `CustomJS` Plugin
    *   Obsidian `Dataview` Plugin (for vault path detection)
*   **Runtime:** Node.js (as provided by the Obsidian environment)
*   **Version Control:** Git / GitHub

## 2. Development Setup & Environment
*   **Prerequisites:**
    *   An Obsidian vault.
    *   The `CustomJS` and `Dataview` community plugins must be installed and enabled.
*   **Setup Steps for Users:**
    1.  Copy `scripts/startup.js` into your designated CustomJS folder.
    2.  Create and populate `.obsidian/customjs-startup.json` with paths to your class files.
    3.  Restart Obsidian.
*   **Setup Steps for Developers:**
    1.  Clone this repository.
    2.  Open the folder in a code editor like VSCode or Cursor.
    3.  To test changes, manually copy the `startup.js` file to your vault's CustomJS folder and restart Obsidian.

## 3. Technical Constraints
*   **Dependency on Obsidian:** The script is entirely dependent on the Obsidian application and its plugin ecosystem. It cannot run standalone.
*   **API Reliance:** It relies on the `CustomJS` plugin to execute it and on the `app.vault.adapter.basePath` property being available from the Obsidian API.
*   **Security Context:** The use of `eval()` means that users should only ever point the configuration to their own trusted scripts.

## 4. Code & Branching Strategy
*   **VCS:** Git
*   **Hosting:** GitHub
*   **Branching Model:** Main branch for releases. Feature branches for development.
*   **Commit Messages:** Conventional Commits standard.

## 5. Build & Deployment Process
*   **Deployment:** Deployment is a manual process. For users, it involves copying the `startup.js` file into their vault. For the project itself, a release consists of tagging a commit on the `main` branch in GitHub.
