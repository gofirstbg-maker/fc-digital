import { ISbDataSourceEntry } from "@/types";

export const mapDataSourceEntries = (dataSource: ISbDataSourceEntry[]) => {
  return dataSource.reduce(
    (dataSourceObject, entry) => {
      const { name, value, dimension_value } = entry;
      if (!name) {
        return dataSourceObject || {};
      }

      dataSourceObject[name] = dimension_value || value;

      return dataSourceObject || {};
    },
    {} as Record<string, string>
  );
};
