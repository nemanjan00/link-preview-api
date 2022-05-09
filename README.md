# link-preview-api

## Table of contents

<!-- vim-markdown-toc GFM -->

* [Usage](#usage)
* [Setup](#setup)
	* [Configuration](#configuration)
	* [Docker](#docker)
	* [Yarn](#yarn)
* [Authors](#authors)

<!-- vim-markdown-toc -->

## Usage

```bash
curl -X POST 'http://localhost:3000/api/preview_link' \
	-H "Authorization: Bearer 123" \
	-H "content-type: application/json" \
	--data '{"link":"https://google.com/"}'
```

## Setup

It can be installed either as Docker container or node application.

### Configuration

To configure applcation, set environment variables.

```bash
PORT=3000 # Port to listen on
TOKEN=123 # Bearer token. Do not set if you do not want auth
```

### Docker

```bash
docker run -ti -e PORT=3000 -e TOKEN=123 -p 3000:3000 nemanjan00/link-preview-api herokuish procfile run web
```

### Yarn

```bash
yarn global add link-preview-api
link-preview-api
```

## Authors

* [nemanjan00](https://github.com/nemanjan00)
