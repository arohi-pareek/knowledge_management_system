import React, { useMemo, useState, useEffect } from "react";
import "../CSS/leads.css";
import {
  MRT_ShowHideColumnsButton,
  MaterialReactTable,
} from "material-react-table";
import { Fab, Paper, Tooltip, IconButton, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { FiEdit2 } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import Draggable from "react-draggable";
import { AiOutlineHistory } from "react-icons/ai";
import DeleteIcon from "@mui/icons-material/Delete";
import GenericSearch from "app/views/utilities/GenericSearch";
import GenericFilterMenu from "app/views/utilities/GenericFilterMenu";
import GenericChip from "app/views/utilities/GenericChips";
import Dialog from "@mui/material/Dialog";
import { acountdetails } from "app/redux/actions/acountsAction.js/fetchacountsdata";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import PaginationComp from "app/views/utilities/PaginationComp";
import LeadForm from "./LeadForm";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const Leads = (props) => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [pageSizes] = useState([5, 10, 15]);
  const [SortBy, setSortBy] = useState({});
  const [Filter, setFilter] = useState({});
  const [tooltip, setTooltip] = useState(false);
  const [openlead, setOpenlead] = useState(false);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const FilterOption = [
    {
      value: "Select Field",
      label: "Select Field",
    },
    {
      value: "account",
      label: "ACCOUNT",
    },
    {
      value: "status",
      label: "LEAD STATUS",
    },
    {
      value: "leadTitle",
      label: "LEAD TITLE",
    },
  ];
  const StatusOption = [
    "In Progress",
    "Approved",
    "Draft",
    "Rejected",
    "Return",
  ];

  const FilterTypes = {
    type: "select",
    optionValue: FilterOption,
    size: "small",
    variant: "outlined",
    label: "Filter-By",
    color: "primary",
  };

  const FilterValueTypes = [
    {
      name: "subject",
      type: "text",
      size: "small",
      variant: "outlined",
      label: "Value",
      color: "primary",
    },
    {
      name: "pfileName",
      type: "text",
      size: "small",
      variant: "outlined",
      label: "Value",
      color: "primary",
    },
    {
      name: "createdOn",
      type: "date",
      size: "small",
      variant: "outlined",
      color: "primary",
    },
    {
      name: "status",
      type: "select",
      optionValue: StatusOption,
      size: "small",
      variant: "outlined",
      label: "Value",
      color: "primary",
    },
  ];

  const SortValueTypes = [
    {
      name: "account",
      type: "text",
      size: "small",
      variant: "outlined",
      label: "Account",
      color: "primary",
    },
    {
      name: "status",
      type: "text",
      size: "small",
      variant: "outlined",
      label: "Lead Status",
      color: "primary",
    },
    {
      name: "leadTitle",
      type: "date",
      size: "small",
      variant: "outlined",
      color: "primary",
      label: "Lead Title",
    },
  ];

  const addFilter = (e, type, value) => {
    e.preventDefault();
    let newFilter = { ...Filter };
    if (value) {
      newFilter[`${type}`] = value;
      unstable_batchedUpdates(() => {
        setFilter(newFilter);
        setCurrentPage(0);
        setPageSize(10);
      });
    }
  };

  const deleteChip = (property) => {
    let newFilter = { ...Filter };
    delete newFilter[`${property}`];
    setFilter(newFilter);
  };

  const addSort = (sortObj) => {
    setSortBy(sortObj);
  };

  useEffect(() => {
    console.log("render");
    // Define the filter object
    let filter = {};
    Object.entries(Filter).forEach(([property, value]) => {
      let key = property.split("|")[0];
      filter[`${key}`] = value;
    });
    // Dispatch the ProductAction function with the filter object and SortBy
    dispatch(
      acountdetails(pageSize, currentPage, {
        filter: _.isEmpty(filter) ? null : filter,
        sort: _.isEmpty(SortBy) ? null : SortBy,
      })
    );
  }, [pageSize, currentPage, Filter, SortBy]);

  const Accountdetail = useSelector((state) => state.acountdetails.acountdata);

  // --------------------------  Acount Form & Account edit  ---------------------------------

  const openleadform = () => {
    setOpenlead(true);
  };

  const openleadformclose = () => {
    setOpenlead(false);
  };

  // --------------------------  Lead Form & Account edit end ---------------------------------

  const columns = useMemo(
    () => [
      {
        accessorKey: "accountName",
        header: "ACCOUNT",
        size: 100,
        Cell: ({ cell }) => (
          <span className="text-m text-b">{cell.getValue()}</span>
        ),
      },
      {
        accessorKey: "phone",
        header: "LEAD STATUS",
        size: 100,
        Cell: ({ cell }) => <span className="text-m">{cell.getValue()}</span>,
      },
      {
        accessorKey: "email",
        header: "LEAD TITLE",
        size: 100,
        Cell: ({ cell }) => (
          <span className="text-m text-b">{cell.getValue()}</span>
        ),
      },
      {
        accessorKey: "city",
        header: "LEAD DESCRIPTION",
        size: 100,
        Cell: ({ cell }) => (
          <span className="text-m text-b">{cell.getValue()}</span>
        ),
      },
      {
        accessorKey: "actions", // New column for icons
        header: "Actions", // You can customize the header name
        size: 30, // Adjust the size as needed
        Cell: ({ row }) => {
          let item = row.original;
          return (
            <>
              <IconButton>
                <Tooltip title="EDIT">
                  <EditIcon
                    size="small"
                    color="#ccc"
                    style={{ fontSize: "19px", height: "1rem" }}
                  />
                </Tooltip>
              </IconButton>

              <IconButton>
                <Tooltip title="DELETE">
                  <DeleteIcon
                    size="small"
                    color="#ccc"
                    style={{ fontSize: "19px", height: "1rem" }}
                  />
                </Tooltip>
              </IconButton>
            </>
          );
        },
      },
    ],
    [Accountdetail]
  );

  const CustomToolbarMarkup = ({ table }) => {
    const selectid = table
      .getSelectedRowModel()
      .flatRows.map((row) => row.original);
    return (
      <>
        <Grid container className="AcHeader">
          <Grid item xs={12} className="PaHeadTop">
            <div
              style={{
                width: "85%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <GenericSearch
                FilterTypes={FilterTypes}
                FilterValueTypes={FilterValueTypes}
                addFilter={addFilter}
                cssCls={{}}
              />
              <div style={{ display: "flex" }}>
                {selectid.length > 1 && (
                  <div className="AcIconCon">
                    <Tooltip title=" MULTIPLE EDIT ">
                      <IconButton>
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </div>
                )}

                {selectid.length > 1 && (
                  <div className="AcIconCon">
                    <Tooltip title=" MULTIPLE DELETE ">
                      <IconButton onClick={() => multipledelete(selectid)}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </div>
                )}
              </div>
            </div>
            <GenericFilterMenu
              SortValueTypes={SortValueTypes}
              addSort={addSort}
            />
            <div className="PaIconCon">
              <Tooltip title="CREATE LEAD">
                <span>
                  <Fab
                    onClick={openleadform}
                    style={{
                      width: "2.2rem",
                      height: ".1rem",
                      backgroundColor: "rgb(230, 81, 71)",
                    }}
                  >
                    <AddIcon style={{ fontSize: "19", color: "#fff" }} />
                  </Fab>
                </span>
              </Tooltip>
            </div>
            <MRT_ShowHideColumnsButton table={table} />
          </Grid>
          <GenericChip Filter={Filter} deleteChip={deleteChip} />
        </Grid>
      </>
    );
  };
  return (
    <>
      <Paper
        elevation={3}
        style={{
          position: "relative",
          borderRadius: "9px",
        }}
      >
        <div>
          <MaterialReactTable
            data={Accountdetail}
            columns={columns}
            displayColumnDefOptions={{
              "mrt-row-select": {
                size: 5,
                muiTableHeadCellProps: {
                  sx: {
                    paddingLeft: "25px",
                  },
                },
                muiTableBodyCellProps: {
                  sx: {
                    paddingLeft: "25px",
                  },
                },
              },
            }}
            enableBottomToolbar={false}
            enableColumnResizing
            enableStickyHeader
            enableRowSelection
            // enableRowNumbers
            enableFilters={false}
            enableFullScreenToggle={false}
            enableDensityToggle={false}
            renderTopToolbar={({ table }) => (
              <CustomToolbarMarkup table={table} />
            )}
            muiTableContainerProps={() => ({
              sx: {
                border: "1px solid #8080802b",
                height: "60vh",
              },
            })}
            muiTablePaperProps={() => ({
              sx: {
                padding: "0rem 1rem",
                border: "0",
                boxShadow: "none",
              },
            })}
          />
          <PaginationComp
            pageSize={pageSize}
            pageSizes={pageSizes}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalCount={totalCount}
            setPageSize={setPageSize}
          />
        </div>
      </Paper>

      {/ --------------------------- CREATE LEAD FORM   /}

      <div>
        <Dialog
          open={openlead}
          aria-labelledby="draggable-dialog-title"
          PaperComponent={PaperComponent}
        >
          <LeadForm openleadformclose={openleadformclose} />
        </Dialog>
      </div>
    </>
  );
};

export default Leads;
