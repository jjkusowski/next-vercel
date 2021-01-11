import fs from "fs";
import path from "path";

/**
 * File creation functions
 */
const createTranslations = (dirPath) => {
  const filePath = `${dirPath}/translations.ts`;
  const fileContent = `import { defineMessages } from "react-intl";\n\nexport default defineMessages({});\n`;
  fs.writeFileSync(filePath, fileContent);
};

const createUI = (dirPath, componentName) => {
  const filePath = `${dirPath}/${componentName}UI.tsx`;
  const fileContent = `const ${componentName}UI = () => {};\n\nexport default ${componentName}UI;\n`;
  fs.writeFileSync(filePath, fileContent);
};

const createIndex = (dirPath, componentName) => {
  const filePath = `${dirPath}/index.tsx`;
  const fileContent = `import ${componentName}UI from "./${componentName}UI";\n\nconst ${componentName} = () => {};\n\nexport default ${componentName};\n`;
  fs.writeFileSync(filePath, fileContent);
};

const createInterfaces = (dirPath) => {
  const filePath = `${dirPath}/interfaces.ts`;
  fs.writeFileSync(filePath, "");
};

const createTests = (dirPath, componentName) => {
  console.log("friendly reminder to add test suite NOW.");
};
const createStorybook = (dirPath, componentName) => {
  // use when we add storybook to component story
};

const createFiles = (dirPath, componentName) => {
  createTranslations(dirPath);
  createUI(dirPath, componentName);
  createIndex(dirPath, componentName);
  createInterfaces(dirPath);
};

const createDir = (dirPath) => {
  fs.mkdirSync(dirPath);
};
const scaffoldComponent = (dirPath, componentName) => {
  createDir(dirPath);
  createFiles(dirPath, componentName);
};

// ************************

/**
 * CLI
 * @param {string} componentName PascalCase name for component
 */

const componentDirPath = path.resolve("components");

const [, , componentName] = process.argv;

if (!componentName || typeof componentName !== "string") {
  throw new Error("please give your component a name");
}

if (!/^[A-Z][A-Za-z]*$/.test(componentName)) {
  throw new Error("please PascalCase your component name");
}

const newComponentDirPath = path.join(componentDirPath, componentName);

if (!fs.existsSync(newComponentDirPath)) {
  scaffoldComponent(newComponentDirPath, componentName);
} else {
  throw new Error(
    `Component with name ${componentName} already exists at ${newComponentDirPath}!`
  );
}
