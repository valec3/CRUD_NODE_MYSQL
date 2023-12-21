import { useEffect, useState } from "react";
import { getCountries } from "../services/api";
import MyTable from "../components/MyTable";
import MyCustomTable from "../components/MyCustomTable";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries().then((data) => setCountries(data));
  }, []);
  console.log(countries);
  return (
    <section>
      <div>
        <MyCustomTable
          columns={[
              { field: "Id", headerName: "Id" },
                      { field: "NameE", headerName: "Nombre" },
                      { field: "NameS", headerName: "NombreS" },
          ]}
          data={countries}
          keyValue={"Id"}
          nameTable="Onu"
        />
      </div>
    </section>
  );
};

export default Countries;
