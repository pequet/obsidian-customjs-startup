---
type: overview
domain: system-state
subject: Obsidian CustomJS Startup
status: active
summary: Defines the problem this script solves, its solution, and user experience goals.
---
# Product Context

## 1. Problem Statement

*   **Problem being solved for target audience?**
    Obsidian power-users who leverage the `CustomJS` plugin often run into reliability issues, especially when using symlinks for their JavaScript files. The plugin can fail to load these scripts on startup, breaking custom functionality and causing frustration.

*   **Importance/benefits of solving it?**
    Solving this ensures a stable and reliable Obsidian environment. It allows users to confidently build complex custom setups without worrying that their tools will randomly fail to load, saving time and preventing workflow interruptions.

## 2. Proposed Solution

*   **How will this project solve the problem(s)?**
    This project provides a startup script that bypasses the CustomJS import mechanism. It directly reads the content of specified `.js` files from the vault, evaluates them, and constructs the classes, making them available on `window.customJS`.

*   **Key features delivering the solution?**
    *   Dynamic class loading from a `customjs-startup.json` configuration file.
    *   Direct file reading using Node.js APIs to avoid pathing/symlink issues.
    *   Clear error logging to the developer console.

## 3. How It Should Work (User Experience Goals)

*   **Ideal user experience?**
    The user should be able to "set it and forget it." After a simple one-time setup (placing the script and creating the config file), it should just work silently in the background, making their other custom classes available reliably every time they open Obsidian.

*   **Non-negotiable UX principles?**
    *   **Reliability:** It must successfully load the classes on every startup.
    *   **Simplicity:** The setup process should be straightforward and clearly documented.
    *   **Transparency:** If something goes wrong, it must provide a clear error message in the console.

## 4. Unique Selling Proposition (USP)

*   **What makes this different or better than existing solutions?**
    Unlike relying on the `CustomJS` plugin's default loader, this script provides a more robust, file-system-level approach that is less prone to the platform's esoteric pathing and symlink handling issues.

*   **Core value proposition for the user?**
    A stable, reliable foundation for your custom Obsidian JavaScript environment.

## 5. Assumptions About Users

*   **Assumptions about users' tech skills, motivations, technology access?**
    *   Users are comfortable editing JSON files.
    *   Users know how to access the Obsidian developer console to check for errors.
    *   Users are already using or want to use the `CustomJS` plugin to create their own classes.

## 6. Success Metrics (Product-Focused)

*   **How to measure product's success in solving user problems?**
    *   Adoption rate (e.g., GitHub stars, forks, downloads).
    *   Low number of reported issues related to the script failing to load classes.
    *   Positive user feedback confirming it solved their startup loading problems.
