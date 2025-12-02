import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,cca2,flags")
      .then((res) => res.json())
      .then((data) => {
        const shopDomains = {
          ae: "shopname.ae",
          au: "shopname.ae",
          us: "shopname.ae",
          ru: "shopname.ru",
          it: "shopname.it",
          dk: "denmark.com.dk",
          fr: "shopname.com.fr",
          cn: "shopname.ae",
          gb: "shopname.co.uk",
          pk: "shopname.co.pk",
        };

        const allowed = Object.keys(shopDomains);

        const suppliers = data
          .filter((country) => allowed.includes(country.cca2.toLowerCase()))
          .map((country) => ({
            name:
              country.name.common === "United Arab Emirates"
                ? "United Emirates"
                : country.name.common,
            code: country.cca2.toLowerCase(),
            flag: country.flags.svg,
            shopUrl: shopDomains[country.cca2.toLowerCase()],
          }));

        setSuppliers(suppliers);
      });
  }, []);

  return (
    <div>
      <h1 className="text-black text-[24px] font-bold pb-4 sm:p-4">
        Suppliers by Region
      </h1>

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-4">
        {suppliers.map((supplier) => (
          <div
            key={supplier.code}
            className="flex items-center p-3 hover:shadow-md transition gap-2"
          >
            <div>
              <img
                src={supplier.flag}
                alt={`${supplier.name} flag`}
                className="w-[28px] h-[20] h-8 object-cover rounded"
              />
            </div>
            <div className="flex flex-col ">
              <h2 className="font-normal text-[16px]">{supplier.name}</h2>
              <Link
                to={`https://${supplier.shopUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-sm"
              >
                {supplier.shopUrl}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSuppliers;
