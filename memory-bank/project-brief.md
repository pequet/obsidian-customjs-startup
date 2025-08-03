---
type: overview
domain: system-state
subject: Obsidian CustomJS Startup
status: active
summary: Outlines the project's goals, requirements, scope, and audience.
---
# Project Brief

## 1. Project Goal

*   **Primary Objective:** To provide a robust, reliable, and easy-to-configure startup script for the Obsidian `CustomJS` plugin that reliably loads user-defined classes, bypassing common issues with symlinks and plugin load order.

## 2. Core Requirements & Functionality

*   **Requirement 1:** The script must read a list of file paths from a `.obsidian/customjs-startup.json` configuration file.
*   **Requirement 2:** It must read the content of each specified JavaScript file.
*   **Requirement 3:** It must evaluate the file content to define the class within the script's scope.
*   **Requirement 4:** It must create an instance of each class and attach it to the `window.customJS` object.
*   **Requirement 5:** It must provide clear error messages to the console if configuration or class files are not found.

## 3. Target Audience

*   Obsidian users who use the `CustomJS` plugin to build and maintain their own complex, class-based JavaScript workflows and have encountered reliability issues with the default script loading mechanism.

## 4. Scope (Inclusions & Exclusions)

### In Scope:
*   A single startup script (`startup.js`).
*   Logic to parse a JSON configuration file.
*   Dynamic loading and instantiation of JavaScript classes.
*   Clear documentation in the `README.md` and script header.

### Out of Scope:
*   Providing any custom classes beyond the loader itself.
*   Modifying the `CustomJS` plugin in any way.
*   A graphical user interface for configuration.

## 5. Success Criteria & Key Performance Indicators (KPIs)

*   **Success Criteria:**
    *   The script is adopted by the community.
    *   The script is deemed reliable and easy to use.
    *   The documentation is clear and sufficient for self-service setup.
*   **KPIs:**
    *   Number of GitHub stars, forks, and discussions.
    *   A low ratio of support-seeking issues to adoptions.

## 6. Assumptions

*   Users have the `CustomJS` and `Dataview` plugins installed and enabled.
*   Users are capable of creating and editing a JSON file in their `.obsidian` directory.

## 7. Constraints & Risks

*   **Constraint:** The script is dependent on the Obsidian API providing access to Node.js modules (`fs`, `path`).
*   **Risk:** Future changes to the `CustomJS` plugin or the Obsidian API could break the script's functionality. (Mitigation: Monitor plugin/Obsidian updates and test for compatibility).

## 8. Stakeholders

*   **Project Owner / Lead Developer:** Benjamin Pequet
*   **Users:** The Obsidian community, specifically `CustomJS` power-users.

