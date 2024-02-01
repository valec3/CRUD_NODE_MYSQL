/* eslint-disable react/prop-types */

import { useState } from 'react';

const MyCustomTable = ({
    columns,
    data,
    keyValue,
    nameTable,
    crudOptions = false,
    editRecordTable,
    deleteRecordTable,
    addRecordTable,
}) => {
    const columnsOfTable = `grid-cols-${
        crudOptions ? columns.length + 1 : columns.length
    }`;
    const [dataState, setDataState] = useState(data); // [
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [typeModal, setTypeModal] = useState(''); // edit, add
    const [idRecord, setIdRecord] = useState(''); // [
    const handleClickEdit = (id) => {
        console.log('Edit', id);
        setIdRecord(id);
        setTypeModal('edit');
        setOpenModalEdit(true);
    };
    const handleClickDelete = (id) => {
        console.log('Delete', id);
        alert('Are you sure?');
        deleteRecordTable(id);
    };
    const handleClickAdd = () => {
        console.log('Add');
        setTypeModal('add');
        setOpenModalEdit(true);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Save');
        if (!typeModal) return;
        if (typeModal === 'edit') {
            editRecordTable();
        } else {
            addRecordTable();
        }
    };
    const handleChangeData = (e) => {
        const { name, value } = e.target;
        setDataState({
            ...dataState,
            [name]: value,
        });
        console.log(dataState);
    };
    console.log(idRecord);
    return (
        <section className="px-10 py-3 text-white">
            <span className="hidden grid-cols-3 grid-cols-2 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-7 grid-cols-8"></span>
            <div>
                <h2 className="text-2xl xl:text-3xl mb-8 font-bold text-center py-4 text-pink-400">
                    {nameTable}
                </h2>
                {crudOptions && (
                    <button
                        className="font-bold bg-green-400 text-white rounded-md px-3 py-1 w-fit hover:bg-green-600 transition-all duration-300"
                        type="button"
                        onClick={handleClickAdd}
                    >
                        Add
                    </button>
                )}
                <div className="shadow-lg border-[2px] border-slate-600/40 rounded-md">
                    <div
                        className={`grid grid-cols-2 ${columnsOfTable}  items-center font-bold text-xl py-1 mb-2 border-slate-300 border-b-[2px] px-2`}
                    >
                        {columns.map((column) => (
                            <div key={column.field}>{column.headerName}</div>
                        ))}
                    </div>
                    <div className=" max-h-[700px] overflow-y-auto">
                        {data.map((row, idx) => (
                            <div
                                key={row[keyValue]}
                                className={`grid ${columnsOfTable} ${
                                    idx % 2 == 0 ? 'bg-[#151516]' : ''
                                } items-center px-2 py-2 border-b-slate-400/15 border-b-[.5px] hover:bg-slate-800 transition-all duration-300`}
                            >
                                {columns.map((column) => (
                                    <div key={column.field || idx}>
                                        {row[column.field] || 'No especificado'}
                                    </div>
                                ))}
                                {crudOptions && (
                                    <div className="ml-4 flex gap-2 p-1">
                                        <button
                                            className="font-bold bg-yellow-400 hover:bg-yellow-500 text-black rounded-md px-3 py-1"
                                            type="button"
                                            onClick={() =>
                                                handleClickEdit(row[keyValue])
                                            }
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="font-bold bg-red-400 hover:bg-red-500 text-white rounded-md px-3 py-1"
                                            type="button"
                                            onClick={() =>
                                                handleClickDelete(row[keyValue])
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
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
                                    {columns.map((column) => (
                                        <div
                                            key={column.field}
                                            className="flex gap-4"
                                        >
                                            <label className="font-bold">
                                                {column.headerName}
                                            </label>
                                            <input
                                                className="rounded-md border-slate-300 border-2 p-1 flex-1 text-black"
                                                type="text"
                                                name={column.field}
                                                defaultValue={
                                                    data[idRecord - 1][
                                                        column.field
                                                    ] || ''
                                                }
                                                onChange={handleChangeData}
                                            />
                                        </div>
                                    ))}
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
