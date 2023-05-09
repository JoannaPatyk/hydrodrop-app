import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.jpg';
import { MdWaterDrop } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <Wrapper>
            <div className="main-container">
                <div className="left-side">
                    <img className="bg" src={background} alt="water" />
                </div>
                <div className="right-side">
                    <h1>Water changes everything!</h1>
                    <div className="icon-container">
                        <div className="line"></div>
                        <MdWaterDrop className="icon" />
                        <div className="line"></div>
                    </div>
                    <h2>Monitoruj, ile wody wypijasz dziennie i upewnij się, że to wystarczająca ilość...</h2>
                    <Link className="btn" to="/dashboard">
                        start
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .main-container {
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: 1fr 3fr;
    }

    .right-side {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem 20px;
        background-color: #111111;
    }

    h1 {
        margin: 0.5rem 2rem;
        font-weight: 100;
        letter-spacing: 0.5rem;
        font-size: 3rem;
        text-align: center;
        font-family: 'Cedarville Cursive', cursive;
    }

    h2 {
        width: 70%;
        margin: 0.5rem 2rem;
        font-weight: 100;
        text-align: center;
        letter-spacing: 0.3rem;
        line-height: 3rem;
    }

    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon {
        color: #f5f5f5;
        font-size: 4rem;
    }

    .line {
        width: 5rem;
        height: 1px;
        background-color: #f5f5f5;
    }

    .btn {
        margin-top: 1rem;
    }

    .bg {
        position: absolute;
        top: 0;
        left: -5%;
        z-index: -10;
        height: 100%;
    }

    @media (max-width: 1150px) {
        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 1.3rem;
            line-height: 2.5rem;
        }

        .icon {
            font-size: 3.5rem;
        }
    }

    @media (max-width: 945px) {
        h1 {
            font-size: 2.2rem;
        }

        h2 {
            font-size: 1.2rem;
            line-height: 2.5rem;
        }

        .icon {
            font-size: 3rem;
        }
    }

    @media (max-width: 620px) {
        .main-container {
            grid-template-columns: 0.25fr 2.75fr;
        }
        .btn {
            width: 18rem;
            font-size: 1.6rem;
        }
    }

    @media (max-width: 495px) {
        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1rem;
            line-height: 1.8rem;
        }
        .btn {
            width: 16rem;
            font-size: 1.6rem;
        }
    }
`;

export default Landing;
