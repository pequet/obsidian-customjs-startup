---
type: overview
domain: system-state
subject: Obsidian CustomJS Startup
status: active
summary: Describes the script's architecture, design decisions, and data management.
---
# System Patterns

## 1. System Architecture Overview

*   **Overall architecture & justification?**
    The system is a single, self-contained JavaScript file (`startup.js`) designed to be executed by the `CustomJS` plugin within Obsidian. It follows a simple, linear script architecture: it reads a configuration, iterates through a list of files, and executes a load-and-construct operation for each. This minimalist approach ensures low overhead and maximum reliability.

## 2. Key Architectural Decisions & Rationales

*   **Decision 1:** Use an external `customjs-startup.json` for configuration.
    *   **Rationale:** To decouple the file list from the script's logic, making it easy for users to add, remove, or reorder their custom classes without ever needing to touch the `startup.js` code itself. This improves maintainability and user-friendliness.
*   **Decision 2:** Use Node.js `fs` and `path` modules to read files directly.
    *   **Rationale:** This is the core of the solution. It bypasses the standard `CustomJS` import mechanism, which can be unreliable with symlinks or complex vault structures. Direct file access is a more robust and predictable way to get the class definitions.
*   **Decision 3:** Use `eval()` to execute the class definition.
    *   **Rationale:** While `eval()` can be dangerous if used on untrusted input, in this context it is a necessary and safe tool. The user is explicitly providing the paths to their *own* scripts. `eval()` is used here to execute the user's own code within the script's scope, making the class definition available for instantiation.
*   **Decision 4:** Attach class instances to `window.customJS`.
    *   **Rationale:** To directly mimic the behavior of the `CustomJS` plugin, ensuring seamless compatibility with any existing user workflows that expect their classes to be available on this global object.

## 3. Data Management & Storage

*   **Primary Datastore & Rationale:**
    The file system is the primary datastore. The script reads from `customjs-startup.json` (user configuration) and the various user-specified `.js` files (class definitions).
    *   **Rationale:** The entire purpose of the script is to interact with the user's files within their vault. There is no need for a database or any other storage mechanism.

## 4. Integration Points with External Systems

*   **System 1:** Obsidian `CustomJS` Plugin
    *   **Interaction:** `CustomJS` is responsible for executing the `startup.js` script when Obsidian starts. This is the entry point for the entire process.
*   **System 2:** Obsidian API
    *   **Interaction:** The script uses the `app.vault.adapter.basePath` property from the Obsidian API to get the absolute path to the vault, which is necessary for resolving the file paths in the configuration.
*   **System 3:** Node.js Runtime (provided by Obsidian)
    *   **Interaction:** The script uses the `fs` and `path` modules from the Node.js runtime to perform file system operations.
