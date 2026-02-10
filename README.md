# Hipnosisconoscar.com

This is the main website for [hipnosisconoscar.com](https://hipnosisconoscar.com/).

## Requirements

- [Nodejs](https://nodejs.org/en)
- [Bun](https://bun.com/)
- [Git LFS](https://git-lfs.com/)

## Starting the proyect

Clone the proyect via SSH.

```bash
git clone git@github.com:oscarabelmc/hipnosisconoscar.git
```

Get the LFS files.

```bash
git lfs pull
```

Install the dependencies.

```bash
bun install
```

Run the proyect locally.

```bash
bun dev
```

On the browser go to [localhost:4321](http://localhost:4321)

## Another Usefull Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## Proyect Structure

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```
