import React, {useState} from 'react';
import {AsyncPaginate} from "react-select-async-paginate";
import {geoApi, ObjectType} from "../../02-dal/weather-api";
import {OptionsOrGroups} from "react-select";

export const Search: React.FC<SearchPropsType> = (
  {onSearchChange}
) => {

  const [search, setSearch] = useState(null)

  const handleOnChange = (searchData: any) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  const loadOptions = (inputValue: string, options: OptionsOrGroups<ObjectType, any>) => {
    return geoApi.options(inputValue, options)
      .then((res) => {
        return {
          options: res.data.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          })
        }
      })
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

//types
type SearchPropsType = {
  onSearchChange: (searchData: string) => void
}
