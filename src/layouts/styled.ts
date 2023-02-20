import styled from 'styled-components';

export const LayoutsWrapper = styled.div`
    height: 100%;
    
    .layouts {
        height: 100%;

        .sider {
            .logo {
                height: 32px;
                margin: 16px;
                background-color: #4D5C6A;
            }
        }
        
        .header {
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            background-color: #fff;

            .aboutUser {
                display: flex;
                align-items: center;

                .username {
                    margin-right: 10px;
                }
            }
        }
        
        .content {
            padding: 15px 10px;

            .contentMain {
                height: 100%;
                padding: 10px;
                background-color: #fff;
            }
        }
    }
`;