# LampJs Component Library

This is a template component library for `LampJs`.

The placeholder code can be removed except for the `declare global` statement in the `index.ts` file. This snippet defines the `createElement` jsx function type globally in the project so you don't need to import `createElement` in every file.

### How to use

- Put source files in the `src` directory, export all components from `index.ts` file
- Run `pnpm welcome` to enable permissions on the `build.sh` file
- Run `pnpm build` to make a production build of the library. Build output is located in `dist` directory
- Run `pnpm dev` to bundle a production build and listen for changes in the `src` directory
