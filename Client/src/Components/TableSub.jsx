import React from 'react'
import { Table } from 'flowbite-react'
import { RegistrationForForeigners } from '../data/data'

const TableMain = () => {
  console.log(RegistrationForForeigners)
  const headRowData=RegistrationForForeigners.headRow;
  console.log(headRowData)
  const tableContentData=RegistrationForForeigners.content;


  return (
    <div className='shadow drop-shadow-sm h-full flex flex-col'>
        {/* <span className='flex justify-end px-4'></span> */}
    <Table striped={true} className='bg-white'>
      <Table.Head className='text-xl'>

        <Table.HeadCell className='text-lg'>
        {headRowData.Category}
        </Table.HeadCell>
        <Table.HeadCell className='text-lg'>
        {headRowData.EarlyBird}
        </Table.HeadCell>
        <Table.HeadCell className='text-lg'>
        {headRowData.LateReg}
        </Table.HeadCell>
      
      </Table.Head> 

      <Table.Body className="divide-y flex-1 overflow-y-auto">
        {tableContentData.map((currentRow)=>
          <Table.Row className="text-lg bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="  whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {currentRow.Category}
          </Table.Cell>
          <Table.Cell>
          {currentRow.EarlyBird}
          </Table.Cell>
          <Table.Cell>
          {currentRow.Late}
          </Table.Cell>
        </Table.Row>
        )}
      </Table.Body>
    </Table>
    </div>
  )
}

export default TableMain