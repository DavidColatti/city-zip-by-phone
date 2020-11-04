const city_zip = require("./city-zip.json");

const city_zip_by_phone = (phone_number) => {
  const unformatted_number = phone_number.replace(/[\D\W]/g, "");
  const area_prefix = unformatted_number.split("").slice(0, 6).join("");

  const found_location = city_zip.find(
    (each) => each.area_code_prefix === area_prefix
  );

  return found_location;
};

const location = city_zip_by_phone("(954) 882-1028");
console.log(location);
