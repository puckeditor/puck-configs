# Puck configs registry

TODO:

- Write a proper README.md for this repo
- Create branch for reference configs
- Add docs for components
- _Maybe_ create a script to automatically generate the registry.json based on the files under "/registry/\*\*"
  - This would make it easier to maintain
  - Would also make it easier to add new configs
  - Would also make it easier to avoid mistakes and re organizing files
  - Considerations:
    - We would need to make assumptions about file structure
    - We would need to map file structure to names
    - We would still need to handle titles and descriptions, OR, we could annotate them with comments in the code files
    - We would still need to review the generated registry.json, there could be things that we want to group/deliver differently
    - We would need to resolve dependencies
    - We would need to stablish rules for how our configs should be organized (configs/component-name/index.tsx + configs/component-name/component-name.tsx, etc.)
  - Basic algorithm idea:
    - Scan the "/registry/\*\*" folder for files
    - For each file, determine what file type it is (component, lib, etc.)
    - For each file, resolve its name based on its path
    - For each file, resolve dependencies (imports)
      - Any imports that start with @/ are registry dependencies (assumption)
      - Any imports that start with @ are dependencies (assumption)
      - Any relative imports are registry dependencies
    - For each file, if its a component config file, group the index.tsx and the component.tsx together in a single entry
