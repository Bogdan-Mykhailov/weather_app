import React, {useState} from 'react';
import {AsyncPaginate} from "react-select-async-paginate";
import {geoApi, ObjectType} from "../../03-dal/weather-api";
import {OptionsOrGroups} from "react-select";

type SearchPropsType = {
  onSearchChange: (searchData: string) => void
}

export const Search: React.FC<SearchPropsType> = ({onSearchChange}) => {


  const [search, setSearch] = useState(null)

  const handleOnChange = (searchData: any) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

 const loadOptions = (inputValue: string, options: OptionsOrGroups<ObjectType, any>)=> {
    return geoApi.options(inputValue, options)
      .then((res) => {
        return {
          options: res.data.data.map((city) => {
            return {
              value: `${city.longitude} ${city.latitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          })
        }
      })
      // .catch((err) => {
      //   return 'error'
      // })
  }

  return (
    <div>
      <AsyncPaginate
        placeholder='Search for city'
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};