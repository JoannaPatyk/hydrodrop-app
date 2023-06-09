import styled from 'styled-components';

const Wrapper = styled.nav`
    .bigMenu-container {
        position: relative;
        min-height: 8vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        padding: 1rem;

        font-size: 1.5rem;
        font-family: 'Righteous', sans-serif;
        letter-spacing: 0.4rem;
        text-transform: uppercase;
        transition: 0.3s;
        cursor: pointer;
    }

    .menu-element {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #ff401b;
        text-decoration: none;
        transition: 0.5s;
    }

    .menu-element:hover {
        color: #f18569;
        transform: scale(0.95);
    }

    .menu-icon {
        display: none;
        position: absolute;
        top: 70px;
        left: 20px;
        z-index: 11;
        font-size: 2rem;
        color: #ff401b;
        cursor: pointer;
    }

    .menu-icon:hover {
        color: #f18569;
    }

    .smallMenu {
        display: none;
        position: absolute;
        top: 0;
        left: -100%;
        width: 100vw;
        height: calc(95vh - 4px);
        z-index: 10;
        background-color: #ffffff;
        transition: 0.5s;
    }

    .smallMenu-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .open {
        left: 0;
    }

    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .smallMenu-icon {
        position: absolute;
        bottom: 0;
        right: 0%;
        font-size: 10rem;
        opacity: 0.4;
    }

    .line {
        width: 5rem;
        height: 1px;
        background-color: #66a1fb;
    }

    @media (max-width: 1080px) {
        h1 {
            font-size: 1.2rem;
            padding: 1rem 1.7rem;
        }
    }

    @media (max-width: 860px) {
        .bigMenu-container {
            display: none;
        }

        .smallMenu {
            display: block;
        }

        .menu-icon {
            display: block;
        }

        h1 {
            font-size: 1.1rem;
            padding: 1rem 1.5rem;
            letter-spacing: 0.3rem;
        }
    }
`;

export default Wrapper;
