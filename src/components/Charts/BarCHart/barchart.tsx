import {useEffect, useState} from 'react';

import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

import {ProductsWithSaleDate} from '../../Pages/Sales/sales';
import { getLocalStorage } from '../../../utils/uniqueMethods';

type WeekDaysProp = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
type ChartDataProps = {weekDay: WeekDaysProp, totalAmountSold: number }

const chartData: ChartDataProps[] = [
    { weekDay: 'Mon', totalAmountSold: 0 },
    { weekDay: 'Tue', totalAmountSold: 0 },
    { weekDay: 'Wed', totalAmountSold: 0 },
    { weekDay: 'Thu', totalAmountSold: 0 },
    { weekDay: 'Fri', totalAmountSold: 0 },
    { weekDay: 'Sat', totalAmountSold: 0 },
    { weekDay: 'Sun', totalAmountSold: 0 },
  ];

export const BarChart = () => {
    const [soldItems, setSoldItems] = useState<ProductsWithSaleDate[]>([])
    const [chartValues, setChartValues] = useState<ChartDataProps[]>([]);

    useEffect(() => {
        const soldItemsParsed = getLocalStorage('soldProducts') as ProductsWithSaleDate[];
        setSoldItems(soldItemsParsed)
    }, []);

    useEffect(() => {
        if (soldItems.length === 0) return
        soldItems.forEach((item: ProductsWithSaleDate) => {
            const sellDate = item.saleDate.split('/').reverse().join('/');
            const dateCheck = new Intl.DateTimeFormat('en-GB', {weekday: 'long'}).format(new Date(sellDate)).slice(0, 3);
            
            for (let i = 0; i < chartData.length; i++) {
                if (chartData[i].weekDay === dateCheck) {
                    chartData[i].totalAmountSold += Number(item.goodsQuantity)
                }
            }
        })
    
        setChartValues(chartData)
    }, [soldItems]);

    return (
        <Paper>
            <Chart
            data={chartValues}
            >
                <ArgumentAxis />
                <ValueAxis max={7} />

                <BarSeries
                    valueField="totalAmountSold"
                    argumentField="weekDay"
                />
                <Title text="Total sales weekly" />
                <Animation />
            </Chart>
        </Paper>
    )
}
