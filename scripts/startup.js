/*
 *  ███   CustomJS Startup
 * █ ███  Version: 1.0.0
 * █ ███  Author: Benjamin Pequet
 *  ███   GitHub: https://github.com/pequet/obsidian-customjs-startup/
 *
 * Purpose:
 *   This script dynamically loads and constructs specified CustomJS classes
 *   directly from their source files upon Obsidian startup. It is designed to
 *   provide a reliable loading mechanism, especially for complex setups
 *   involving symlinks, by reading classes from a JSON configuration file.
 *
 * Prerequisites:
 *   - Obsidian Community Plugin: `CustomJS`
 *   - Obsidian Community Plugin: `DataviewJS`
 *
 * Usage:
 *   1. Place this script in your CustomJS folder.
 *   2. Create `customjs-startup.json` in your vault's `.obsidian` directory.
 *   3. Populate the JSON file with the vault-relative paths to your class files.
 *
 * Example `customjs-startup.json`:
 *   {
 *     "filesToLoad": [
 *       "path/to/YourClass1.js",
 *       "path/to/YourClass2.js"
 *     ]
 *   }
 *
 * Changelog:
 *   1.0.0 - 2025-08-03 - Initial release.
 *
 * Support the Project:
 *   - Buy Me a Coffee: https://buymeacoffee.com/pequet
 *   - GitHub Sponsors: https://github.com/sponsors/pequet
 */

// --- Class Definitions ---

class Startup {
    /**
     * Initializes the startup sequence by logging a startup message
     * and immediately calling the class loader method.
     */
    constructor() {
        console.log("Startup script loaded and ready 💪");
        this.loadAndConstructClasses();
    }

    /**
     * Reads a JSON configuration file to get a list of class files,
     * then dynamically loads and constructs them.
     */
    loadAndConstructClasses() {
        if (typeof app === 'undefined' || !app?.vault?.adapter) {
            console.error("CustomJS Startup: Obsidian `app` object not available. Cannot load classes.");
            return;
        }

        const fs = require('fs');
        const path = require('path');

        const vaultPath = app.vault.adapter.basePath;
        const configPath = path.join(vaultPath, '.obsidian', 'customjs-startup.json');

        let filesToLoad = [];

        try {
            if (!fs.existsSync(configPath)) {
                console.error(`CustomJS Startup: Config file not found at ${configPath}. Please create it.`);
                // Example of customjs-startup.json:
                // {
                //   "filesToLoad": [
                //     "path/to/YourClass1.js",
                //     "path/to/YourClass2.js"
                //   ]
                // }
                return;
            }

            const configFile = fs.readFileSync(configPath, 'utf8');
            const config = JSON.parse(configFile);

            if (!config.filesToLoad || !Array.isArray(config.filesToLoad)) {
                console.error("CustomJS Startup: 'filesToLoad' is missing or not an array in the config file.");
                return;
            }

            filesToLoad = config.filesToLoad;
        } catch (e) {
            console.error("CustomJS Startup: Error reading or parsing config file.", e);
            return;
        }

        // Ensure the global customJS object exists, mimicking the plugin's behavior.
        window.customJS = window.customJS || {};

        for (const relativePath of filesToLoad) {
            const absolutePath = path.join(vaultPath, relativePath);
            const className = path.basename(relativePath, '.js');

            try {
                if (!fs.existsSync(absolutePath)) {
                    console.error(`CustomJS Startup: File not found: ${absolutePath}`);
                    continue;
                }

                const fileContent = fs.readFileSync(absolutePath, 'utf8');

                // Evaluate the script's content in a function scope to capture the class definition.
                const classDefinition = eval(`(function() { ${fileContent}; return ${className}; })()`);

                // Create an instance of the class to trigger its constructor.
                const classInstance = new classDefinition();

                // Attach the live instance to the global customJS object for universal access.
                window.customJS[className] = classInstance;

                if (!window.customJS[className]) {
                    console.error(`CustomJS Startup: Failed to construct or attach '${className}'.`);
                }
            } catch (e) {
                console.error(`CustomJS Startup: Error processing script ${relativePath}`, e);
            }
        }
    }
}
