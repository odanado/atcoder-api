# atcoder-api

## Installation
```bash
$ npm install @odanado/atcoder-api
# or
$ yarn add @odanado/atcoder-api
```

## Get started
```typescript
import { AtCoderAPI } from "@odanado/atcoder-api"

async function main() {
    const client = new AtCoderAPI()

    console.log(await client.userInfo("odan"))
}

main()
```
