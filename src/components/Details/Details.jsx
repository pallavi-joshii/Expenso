import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../useTransactions';

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader}></CardHeader>
      <CardContent>
        <Typography
          variant="h5"
          style={{ marginTop: "-20px" }}
        >
          ${total}
        </Typography>
          <Doughnut
            data={chartData}
          />
      </CardContent>
    </Card>
  );
}
    
export default DetailsCard;
