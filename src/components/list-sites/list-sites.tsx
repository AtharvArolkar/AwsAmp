import {
  Flex,
  Grid,
  Table,
  TableCell,
  TableRow,
  useTheme,
  View,
  Text,
  Menu,
  MenuItem,
  MenuButton,
  Theme,
  ThemeProvider,
  Button,
  SearchField,
  usePagination,
  Pagination,
  SelectField,
} from "@aws-amplify/ui-react";
import ISiteObject from "../../api/interface/site-object";
import useGetList from "../../api/hooks/useGetList";
import styles from "./list-sites.module.scss";
import TextComp from "../../utils/Text";
import "./list-sites.css";

import { themeSearch } from "./list-sites-css-theme";
import { themePagintaion } from "./list-sites-css-theme";
import { useEffect, useRef, useState } from "react";
export default function ListSites() {


  const [filter, setFilter] = useState("default");
  const [filterSites, setFilterSites] = useState(useGetList(filter));
  const listOfSites:ISiteObject[] = useGetList(filter);



  const tableHeader: string[] = [
    // "Sr.No",
    "Site Name",
    "Contract Manager",
    "Purpose Ambassadorâ€‹",
    // "Phone No",
    // "Emaid Id",
    "Status",
    "Actions",
  ];

  const filterList: string[] = ["Site Name", "Contract Manager", "Purpose Ambassadorâ€‹"];

  const paginationProps = usePagination({
    totalPages: 5,
    currentPage: 1,
    siblingCount: 3,
  });


  
  function getSelected(e: React.ChangeEvent<HTMLInputElement>) {
    setFilterSites(listOfSites.filter((f) => f.name.includes(e.target.value)));
    console.log(filterSites);
  }

  function setDefault() {
    setFilterSites(listOfSites);
  }

  const { tokens } = useTheme();
  return (
    <div className={styles.tablediv}>
      <Grid
        templateColumns={{ base: "1fr", large: "4fr" }}
        templateRows={{ base: "auto", large: "repeat(10, auto)" }}
        gap={tokens.space.small}
      >
        {/* <View align="end"> */}
        <Flex justifyContent="end">

          <SearchField
            label="search"
            width="20%"
            placeholder="Search..."
            onChange={getSelected}
            onClear={setDefault}
            // value={}
            // size="large"
            // variation="quiet"
            // ref={inputRef}
            // searchButtonRef={searchButtonRef}
          />

          <SelectField
            label="Filter"
            labelHidden
            placeholder="Filter"
            onChange={(e) => setFilter(e.target.value)}
          >
            {filterList.map((filter,index) => {
              return <option key={index} value={filter}>{filter}</option>;
            })}
          </SelectField>
        </Flex>
        <Table
          highlightOnHover={true}
          variation="striped"
          //   size="small"
          
          className={styles.tabledis}
        >
          <TableRow className={styles.tablehead}>
            {tableHeader.map((head,index) => {
              return (
                <TableCell key={index} as="th">
                  <TextComp data={head} />
                </TableCell>
              );
            })}
          </TableRow>
          {filterSites.map((sites, index) => {
            return (
              <TableRow key={index}>
                {/* <TableCell>
                  <TextComp data={sites.id} />
                </TableCell> */}
                <TableCell>
                  <TextComp data={sites.name} />
                </TableCell>
                <TableCell>
                  <TextComp data={sites.cm_name} />
                </TableCell>
                <TableCell>
                  <TextComp data={sites.pa_name} />
                </TableCell>
                {/* <TableCell>
                  <TextComp data={sites.email} />
                </TableCell> */}
                <TableCell>
                  <TextComp data={sites.status} />
                </TableCell>
                <TableCell>
                  <Menu
                    trigger={
                      <MenuButton
                        // variation="primary"
                        size="large"
                        width="40%"
                        style={{
                          backgroundColor: "transparent",
                          color: "black",
                        }}
                      >
                        ...
                      </MenuButton>
                    }
                    style={{ border: "1px" }}
                    menuAlign="center"
                  >
                    {/* backgroundColor={tokens.colors.red[40]}  */}
                    <MenuItem onClick={() => alert("Add")}>Add</MenuItem>
                    <MenuItem onClick={() => alert("Edit")}>Edit</MenuItem>
                    <MenuItem onClick={() => alert("Delete")}>Delete</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            );
          })}
        </Table>
        <ThemeProvider theme={themePagintaion}>
          <Pagination {...paginationProps} />
        </ThemeProvider>
      </Grid>
    </div>
  );
}
