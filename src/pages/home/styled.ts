import styled from 'styled-components';

export const HomeWrapper = styled.div`
    .col {
        padding: 10px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, .1);

        .barChart, .lineChart, .pointChart, .riverChart {
            height: 200px;
        }

        .stackChart, .pieChart {
            height: 400px;
        }

        .rainbowChart {
            height: 400px;
        }
    }
`;