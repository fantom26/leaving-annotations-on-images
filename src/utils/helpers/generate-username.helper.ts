import { Config, names, uniqueNamesGenerator } from "unique-names-generator";

const config: Config = {
  dictionaries: [names, names],
  separator: " ",
  style: "capital"
};

export const generateUsername = () => uniqueNamesGenerator(config);
