# Obsidian CustomJS Startup

A lightweight startup script for the Obsidian `CustomJS` plugin. It dynamically loads your custom JavaScript classes from source files using a simple JSON configuration.

This script provides an alternative way to load your `CustomJS` classes. Instead of relying on the plugins standard import mechanism, it directly reads your specified JavaScript files from the vault, evaluates their content, and constructs your classes.

### Key Features

- **Dynamic Loading**: Loads classes from a `customjs-startup.json` configuration file.
- **Direct File Access**: Reads class files directly from the vault file system.
- **Simple Configuration**: A single JSON file manages all scripts to load.
- **Console Feedback**: Logs its activity to the developer console.

## Getting Started

### Prerequisites

- Obsidian v1.0.0 or higher
- **Required Plugins:**
  - [CustomJS](https://github.com/ryanjamurphy/obsidian-custom-js)
  - [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 

### Installation & Usage

1.  **Place the Script:**
    -   Load the `startup.js` file into your CustomJS settings.

2.  **Create the Config File:**
    -   In your vaults `.obsidian` folder, create a new file named `customjs-startup.json`.

3.  **Configure Your Classes:**
    -   Open `customjs-startup.json` and add the vault-relative paths to all the JavaScript class files you want to load.

    **Example `customjs-startup.json`:**
    ```json
    {
      "filesToLoad": [
        "path/to/YourClass1.js",
        "path/to/YourClass2.js"
      ]
    }
    ```

4.  **Restart Obsidian:**
    -   The script will run on startup and load your classes.

## License

This project is licensed under the MIT License.

## Support the Project

If you find this utility useful, please consider supporting the author:

- [Buy Me a Coffee](https://buymeacoffee.com/pequet)
- [Sponsor on GitHub](https://github.com/sponsors/pequet)

