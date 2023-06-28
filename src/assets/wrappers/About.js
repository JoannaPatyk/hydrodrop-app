import styled from 'styled-components';

const Wrapper = styled.div`
    .description-container {
        min-height: 70vh;
        width: 60%;
        margin: 0 auto;
        padding: 4rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        gap: 10px 50px;
        text-align: center;
    }

    h1 {
        text-align: center;
        width: 100%;
        font-size: 4rem;
        color: #ff401b;
        letter-spacing: 0.5rem;
    }

    h2 {
        text-align: center;
        font-weight: 300;
    }

    p {
        line-height: 1.9rem;
        letter-spacing: 0.05rem;
    }

    span {
        font-weight: 600;
    }

    .media-container {
        width: 80%;
        height: 18vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px 50px;
        margin: 0 auto;
    }

    .drops-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 40px;
    }

    .drop {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ff401b;
        animation: dropMove 2s infinite linear;
        transition: 0.5s;
        cursor: pointer;
    }

    .drop:hover {
        color: #f18569;
        transform: scale(0.95);
    }

    .drop-icon {
        font-size: 5rem;
    }

    .ig,
    .fb,
    .tt {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        color: #ff401b;
    }

    @media (max-width: 1160px) {
        .description-container {
            width: 80%;
        }
    }

    @media (max-width: 880px) {
        h1 {
            font-size: 2.5rem;
        }

        p {
            line-height: 1.7rem;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 570px) {
        h1 {
            font-size: 2rem;
        }

        .drops-container {
            gap: 0 20px;
        }
    }
`;

export default Wrapper;