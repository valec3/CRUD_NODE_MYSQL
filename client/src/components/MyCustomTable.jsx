/* eslint-disable react/prop-types */

import { useState } from "react";

const MyCustomTable = ({
    columns,
    data,
    keyValue,
    nameTable,
    crudOptions = true,
    editRecordTable,
    deleteRecordTable,
    addRecordTable,
}) => {
    const columnsOfTable = `grid-cols-${crudOptions ? columns.length + 1 : columns}`;
    const [dataState, setDataState] = useState(data); // [
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [typeModal, setTypeModal] = useState(""); // edit, add
    const [idRecord, setIdRecord] = useState(""); // [
    const handleClickEdit = (id) => {
        console.log("Edit", id);
        setIdRecord(id);
        setTypeModal("edit");
        setOpenModalEdit(true);
    }
    const handleClickDelete = (id) => {
        console.log("Delete", id);
        deleteRecordTable(id);
    }
    const handleClickAdd = () => {
        console.log("Add");
        setTypeModal("add");
        setOpenModalEdit(true);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Save");
        if(!typeModal) return;
        if (typeModal === "edit") {
            editRecordTable();
        } else {
            addRecordTable();
        }
    }
    const handleChangeData = (e) => {
        const { name, value } = e.target;
        setDataState({
            ...dataState,
            [name]: value,
        });
        console.log(dataState);
    }
    console.log(idRecord);
    return (
        <section className="px-10 py-3 text-white">
            <div>
                <h2 className="text-2xl font-bold text-center py-4">{nameTable}</h2>
                {crudOptions && (
                    <button
                        className="font-bold bg-green-400 text-white rounded-md px-3 py-1 w-fit"
                        type="button"
                        onClick={handleClickAdd}
                    >
                        Add
                    </button>
                    )
                }
                <div className={`grid ${columnsOfTable} items-center font-bold text-xl py-1 mb-2 border-slate-300 border-b-[2px]`}>
                    {columns.map((column) => (
                        <div key={column.field}>{column.headerName}</div>
                    ))}
                </div>
                <div >
                    {data.map((row) => (
                        <div key={row[keyValue]} className={`grid ${columnsOfTable} items-center py-1 border-b-slate-400 border-b-[.5px]`}>
                            {columns.map((column) => (
                                <div key={column.field}>{row[column.field]}</div>
                            ))}
                            {crudOptions && (
                                <div className="ml-4 flex gap-2 p-1">
                                    <button
                                        className="font-bold bg-yellow-400 text-black rounded-md px-3 py-1"
                                        type="button"
                                        onClick={()=>handleClickEdit(row[keyValue])}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="font-bold bg-red-400 text-white rounded-md px-3 py-1"
                                        type="button"
                                        onClick={()=>handleClickDelete(row[keyValue])}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="edit-modal">
                {openModalEdit && (
                    <div className="modal fixed w-full h-full top-0 flex items-center justify-center">
                        <div className="modal-content bg-slate-500 rounded-lg p-6">
                            <button
                                className="cursor-pointer text-2xl w-full text-right font-bold"
                                onClick={() => setOpenModalEdit(false)}
                                tabIndex={0}
                            >
                                &times;
                            </button>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    {
                                        columns.map((column) => (
                                            <div key={column.field} className="flex gap-4">
                                                <label className="font-bold">{column.headerName}</label>
                                                <input
                                                    className="rounded-md border-slate-300 border-2 p-1 flex-1 text-black"
                                                    type="text"
                                                    name={column.field}
                                                    defaultValue={data[idRecord-1][column.field] || ""}
                                                    onChange={handleChangeData}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        className="font-bold bg-green-400 text-white rounded-md px-3 py-1"
                                        type="submit"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MyCustomTable;
