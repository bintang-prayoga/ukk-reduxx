import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { Table } from "flowbite-react";

function Filter({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === "number" ? (
    <div className=" mx-auto text-center gap-1">
      <input
        type="text"
        value={columnFilterValue?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old) => [e.target.value, old?.[1]])
        }
        placeholder="Min"
        className="w-16 h-5 border shadow rounded mx-auto text-left placeholder:text-sm"
      />
    </div>
  ) : (
    <input
      type="text"
      value={columnFilterValue ?? ""}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className="w-24 h-5 border shadow rounded my-auto placeholder:text-sm"
    />
  );
}

function TableComp({ data, columns }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
      <div
        data-testid="table-element"
        className="relative overflow-x-auto shadow-md sm:rounded-lg"
      >
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400"></table>
      </div>
      <Table>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Head
            key={headerGroup.id}
            className="uppercase text-gray-700 bg-cyan-300 text-center"
          >
            {headerGroup.headers.map((header) => (
              <Table.HeadCell key={header.id}>
                {header.isPlaceholder ? null : (
                  <div className="">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getCanFilter() ? (
                      <div>
                        <Filter column={header.column} table={table} />
                      </div>
                    ) : null}
                  </div>
                )}
              </Table.HeadCell>
            ))}
          </Table.Head>
        ))}
        <Table.Body className=" divide-y">
          {table.getRowModel().rows.map((row) => (
            <Table.Row key={row.id} className="border-cyan-500 bg-zinc-900">
              {row.getVisibleCells().map((cell) => (
                <Table.Cell
                  key={cell.id}
                  className="whitespace-nowrap font-medium text-white text-center"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="flex flex-col items-center gap-2 my-3 mx-auto text-fuchsia-500">
        <div className="flex gap-2">
          <button
            className="border rounded p-1 border-cyan-500 bg-gray-900"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="border rounded p-1 border-cyan-500 bg-gray-900"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button
            className="border rounded p-1 border-cyan-500 bg-gray-900"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="border rounded p-1 border-cyan-500 bg-gray-900"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
        </div>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <div className="flex gap-2">
          <span className="flex items-center gap-1 ">
            Page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border-cyan-500 p-1 rounded-md w-14 bg-gray-900"
            />
          </span>
          <select
            className="bg-gray-900 rounded-md border-cyan-500 cursor-pointer h-9"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default TableComp;
