import { Checkbox, Dialog, Fab, Grid, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Tooltip } from '@material-ui/core';
import {
    MRT_ShowHideColumnsButton,
    MaterialReactTable,
} from "material-react-table";
import React, { useEffect, useMemo, useState } from 'react'
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./admin.css"
import AdminForm from './AdminForm';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCourse, GetCourse } from '../Redux/Actions/firstaction';

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

const AdminDashboard = (props) => {

    const dispatch = useDispatch();

    const [openAdminform, setOpenAdmin] = useState(false);

    const OpenAdminform = () => {
        setOpenAdmin(true);
    };

    useEffect(() => {
        dispatch(GetCourse())
    }, [])



    const CloseAdminform = () => {
        setOpenAdmin(false);
    };

    const HandleDelete = (id) => {
        dispatch(DeleteCourse(id))
    }

    const Accountdetail = useSelector((state) => state.CourseDetails.CourseData);
    console.log(Accountdetail)

    const columns = useMemo(
        () => [
            {
                accessorKey: "courseName",
                header: "COURSE TITLE",
                size: 100,
                Cell: ({ cell }) => (
                    <span className="text-m text-b">{cell.getValue()}</span>
                ),
            },
            {
                accessorKey: "id",
                header: "COURSE STATUS",
                size: 100,
                Cell: ({ cell }) => <span className="text-m">{cell.getValue()}</span>,
            },
            {
                accessorKey: "type",
                header: "COURSE TYPE",
                size: 100,
                Cell: ({ cell }) => (
                    <span className="text-m text-b">{cell.getValue()}</span>
                ),
            },
            {
                accessorKey: "courseDescription",
                header: "COURSE DESCRIPTION",
                size: 100,
                
                Cell: ({ cell }) => (
                    <span className="text-m text-b upperbox">{cell.getValue()}</span>
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
                                        onClick={() => { HandleDelete(row._valuesCache.id) }}
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
                <Grid  container className="AdminHeader">
                    <Grid item xs={12} className="PaHeadTop">
                        <div
                            style={{
                                width: "85%",
                                display: "flex",
                                justifyContent: "space-between",
                                
                            }}
                        >
                            {/* <GenericSearch
                    FilterTypes={FilterTypes}
                    FilterValueTypes={FilterValueTypes}
                    addFilter={addFilter}
                    cssCls={{}}
                  /> */}
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
                                            <IconButton onClick={() => console.log("")}>
                                                <DeleteIcon fontSize="small"  />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* <GenericFilterMenu
                  SortValueTypes={SortValueTypes}
                  addSort={addSort}
                /> */}
                        <div className="AdmIconCon">
                            <Tooltip title="ADD COURSE">
                                <span>
                                    <Fab
                                        onClick={OpenAdminform}
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
                    {/* <GenericChip Filter={Filter} deleteChip={deleteChip} /> */}
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
                    top: "1rem",
                    marginLeft: "2rem",
                    width: "96%",
                    height: "90vh",
                    overflowY: "auto",
                    
                }}
            >
                <>
                    <MaterialReactTable 
                        data={Accountdetail}
                        columns={columns}
                        displayColumnDefOptions={{
                            "mrt-row-select": {
                                size: 8,
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
                                height: "80vh",
                                backgroundColor:"var(--comp)",
                                color:"var(--para-clr)"
                            },
                        })}
                        muiTablePaperProps={() => ({
                            sx: {
                                padding: "0rem 1rem",
                                border: "0",
                                boxShadow: "none",
                                backgroundColor:"var(--form)"                            },
                        })}
                    />
                    {/* <PaginationComp
                        pageSize={pageSize}
                        pageSizes={pageSizes}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        totalCount={totalCount}
                        setPageSize={setPageSize}
                    /> */}
                </>
            </Paper>

            {/* Admin Form  */}

            <div>
                <Dialog 
                    open={openAdminform}
                    aria-labelledby="draggable-dialog-title"
                    PaperComponent={PaperComponent}
                >
                    <AdminForm CloseAdminform={CloseAdminform} />
                </Dialog>
            </div>
        </>
    )
}

export default AdminDashboard