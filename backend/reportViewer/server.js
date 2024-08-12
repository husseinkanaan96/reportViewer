const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
}));

const data = [{
        CSDNo: '1',
        DisplayStatus: 'Completed',
        FullName: 'Hussein Kanaan'
    },
    {
        CSDNo: '2',
        DisplayStatus: 'In Progress',
        FullName: 'Ali Kanaan'
    },
    {
        CSDNo: '3',
        DisplayStatus: 'Pending',
        FullName: 'Mohammad Kanaan'
    }
];
app.get('/api/report/:applicationNo', (req, res) => {

    const applicationNo = req.params.applicationNo;
    const filteredData = data.filter(item => item.CSDNo === applicationNo);
    res.json(filteredData);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});