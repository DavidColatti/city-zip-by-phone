const city_zip = require("./city-zip.json");

const cityZipByPhone = (phone_number) => {
  const unformatted_number = phone_number.replace(/[\D\W]/g, "");
  const area_prefix = unformatted_number.split("").slice(0, 6).join("");

  const found_location = city_zip.find(
    (each) => each.area_code_prefix === area_prefix
  );
  console.log(found_location);

  return found_location;
};

cityZipByPhone("(954) 882-1982");
module.exports = cityZipByPhone;
