.projects-nav {
    position: absolute;
    bottom: -15px;
    width: 100vw;
    height: 100px;

    &-container {
        height: 100%;

        padding: 0 80px;


        background-color: white;
        border-radius: 20px;

        box-shadow: 0px 15px 15px -8px rgba(0, 0, 0, 0.10);

        h3 {
            margin-right: 80px;
            font-size: 1.6rem;
        }

        form {
            gap: 1rem;


            select {
                width: 100px;
                padding-left: 10px;

                background-color: white;
                border: 1px solid black;

                border-radius: 5px;

                cursor: pointer;
            }

            input {
                background-color: white;
                border: 1px solid black;

                padding: 0 10px;
                border-radius: 5px;

                background-color: black;
                color: white;

                margin-left: -10px;

                cursor: pointer;

                &:hover {
                    background-color: white;
                    color: black;
                }
            }
        }
    }
}