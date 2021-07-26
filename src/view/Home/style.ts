import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: auto;

    .navbar {
        width: 100%;
        display: flex;
        flex-direction: row;
        background: #FCE762;
        padding: 10px;
        

        .navbar-logo {
            margin-left: 60px;
            width: 50vw;
            font-size: 20px;
            color: #4F4789;
        }

        .navbar-links {
            width: 50vw;
            margin-right: 25px;

            .navbar-list {
                height: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                text-decoration: none;
                list-style: none;
                align-items: center;

                li {
                    margin-right: 40px;

                    a {
                        text-decoration: none;
                        font-size: 20px;
                        color: #4F4789;
                    }

                    a:hover {
                        color: #201335;
                    }
                }
            }

        }

    }

    section {
        width: 100%;
        padding: 20px;
        background: #201335;
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;

        .product-content {
            margin: 10px;
            text-align: center;
            height: 300px;
            width: 200px;
            background: #FFF;
            border-radius: 12px;
            padding: 12px;
        }
    }
`