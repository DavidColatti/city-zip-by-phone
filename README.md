# city-zip-by-phone

Node module to easily lookup city and zip code to see where a USA phone number originates from.

Install using yarn or npm:

    yarn add city-zip-by-phone
    npm install city-zip-by-phone

```javascript
const cityZipByPhone = require("city-zip-by-phone");

// returns data in { area_code_prefix, city, zip } format
cityZipByPhone("(954) 882-1982"); // { area_code_prefix: '954882', city: 'Pompano Beach', zip: '33064' }
```

## License

MIT
