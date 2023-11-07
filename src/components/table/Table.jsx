import React from 'react'
import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows = [
        {
            id: "0001",
            product:"MSI Lap",
            customer: "Sandaru De Silva",
            img: "https://imgs.search.brave.com/9jGFv8bAGialetsZLUXYwVYC56fB6Jlu6SMW_EYrO0o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxbnV4NjhTaklM/LmpwZw",
            date: "1 March",
            amount: 785,
            method: "cash on delivery",
            status: "Approved",

        },

        {
            id: "0002",
            product:"ACER Lap",
            customer: "Anjana De Silva",
            img: "https://imgs.search.brave.com/5CNF12mSFWf8Ph3r_B4HHtLgwHO_cOw-J4DzRsV-Ras/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5vZmZpY2VkZXBv/dC5jb20vaW1hZ2Vz/L3RfbGFyZ2UsZl9h/dXRvL3Byb2R1Y3Rz/Lzc2MzQyMzAvMS5q/cGc",
            date: "1 March",
            amount: 1785,
            method: "cash on delivery",
            status: "Approved",
            
        },

        {
            id: "0003",
            product:"DELL Lap",
            customer: "Nadun Jayaweera",
            img: "https://imgs.search.brave.com/GAYkXP6ExOpHj9i3tumhlopnb8OLRt2cQxKYzulIXYw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvMTM3/ZmIwZmYtODM1ZS00/Y2ZkLTg1MzktNGIz/MzFlOWQyM2IwLjEx/ZTYyMDhhNmRmMzc3/NTkxMWIzN2VhNjE3/ZjUyNDFkLmpwZWc_/b2RuSGVpZ2h0PTc4/NCZvZG5XaWR0aD01/ODAmb2RuQmc9RkZG/RkZG",
            date: "1 March",
            amount: 1235,
            method: "cash on delivery",
            status: "Approved",
            
        },

        {
            id: "0004",
            product:"HP Lap",
            customer: "Kaveesha Adithya",
            img: "https://imgs.search.brave.com/kV226KcwIHZwNMM5zfClk0XVTzgTP50n0ow5W7bGtHk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFjZGx3MXpDWkwu/anBn",
            date: "8 March",
            amount: 1215,
            method: "cash on delivery",
            status: "Pending",
            
        },

        {
            id: "0005",
            product:"JBL speaker",
            customer: "Pramila Krishan",
            img: "https://imgs.search.brave.com/myinpbOkPPS5Qc12DGhs_82PXbMIvtXoLVAZWMThGSA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzkwLzQ4Lzc0/LzM2MF9GXzM5MDQ4/NzQwNl9HeUtxQzNk/Y1BNb00zTHFwUWlF/Skl6eHdUTTdKd0JL/My5qcGc",
            date: "9 March",
            amount: 1215,
            method: "cash on delivery",
            status: "Pending",
            
        }
    ]
  return (
    <TableContainer component={Paper} className="table">
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell className='tablecell'>ID</TableCell>
        <TableCell className='tablecell'>Product</TableCell>
        <TableCell className='tablecell'>Customer</TableCell>
        {/* <TableCell className='tablecell'>Image</TableCell> */}
        <TableCell className='tablecell'>Date</TableCell>
        <TableCell className='tablecell'>Amount</TableCell>
        <TableCell className='tablecell'>Method</TableCell>
        <TableCell className='tablecell'>Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id}>
          <TableCell className='tablecell'>{row.id}</TableCell>
          <TableCell className='tablecell'>
            <div className="cellWrapper">
              <img src={row.img} alt="imageProduct" className="image" />
              {row.product}
            </div>
          </TableCell>
          <TableCell className='tablecell'>{row.customer}</TableCell>
          {/* <TableCell className='tablecell' >{row.img}</TableCell> */}
          <TableCell className='tablecell'>{row.date}</TableCell>
          <TableCell className='tablecell'>{row.amount}</TableCell>
          <TableCell className='tablecell'>{row.method}</TableCell>
          <TableCell className='tablecell'>
            <span className={`status ${row.status}`}>{row.status}</span>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>


  )
}

export default List


