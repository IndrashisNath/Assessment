# CSS

This repository contains a task to create a smiley face using pure CSS embedded in an HTML file. No external libraries or images are used. The smiley face includes eyes, a mouth, and a tongue, all styled using CSS.

## Instruction

1. **Open task.html**: Go to Visual Studio Code and open the file task.html.
2. **Install Live Server**: Navigate to Extensions and install the Live Server extension if not already installed.
3. **Open with Live Server**: Right-click on task.html and select Open with Live Server.

The smiley face should now be visible in your browser.

# TypeScript

This repository contains TypeScript tasks demonstrating various functionalities, including calculating the area of a rectangle, defining a user interface, and reversing an array.

## Instruction

To run the TypeScript code, you need to have Node.js and TypeScript installed on your machine.

1. **Install Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
2. **Install TypeScript**: Once Node.js is installed, you can install TypeScript globally using npm:

   ```bash
   npm install -g typescript
   ```
## Usage

To compile and run the TypeScript code, follow these steps:

1. **Compile TypeScript**: Run the TypeScript compiler to generate JavaScript file.

    ```bash
    tsc task.ts
    ```

2. **Run the JavaScript**: Use Node.js to execute the compiled JavaScript file.

    ```bash
    node task.js
    ```
# Angular

This repository contains a complete Angular project that displays a list of users with an Angular Material Table and pagination. When a row in the table is clicked, an Angular Material Dialog is opened displaying the details
of the user. A search functionality was also added that allows filtering of the list by username dynamically using an Angular Material Form Field. This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.7.

## Instruction

1. **Install Angular CLI**: Open a terminal and run the following command to install Angular CLI.

   ```bash
   npm install -g @angular/cli
   ```

2. **Create a new Angular project**: Run the following command to create a new Angular project.

   ```bash
   ng new angular-task
   ```

3. **Install Angular Material**: Navigate into the project directory and add Angular Material to the project.

   ```bash
   ng add @angular/material
   ```

   Choose a prebuilt theme.

   **Note**: I chose Azure/Blue as Indigo/Pink theme is not available in the latest version.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Usage

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


