import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Main from "./Main";

test('renders Main component test', () => {
    render(<Main />);
});


test('display Pokedex after loading', async () => {
    render(<Main/>)

    expect(screen.queryByAltText('loading')).toBeNull();

    await waitFor(() => {
    expect(screen.queryByAltText('pokedex')).toBeInTheDocument();
    });
});


test('navbar loaded', () =>{
    render(<Main/>)

    expect(screen.getByTestId('nav-bar')).toBeInTheDocument();
});

test('test if navbar contains gen1 button', async () =>{
    render(<Main/>)

    expect(screen.getByTestId('nav-bar')).toBeInTheDocument();

    await waitFor(()=>{
        expect(screen.getByTestId('gen1-button')).toBeInTheDocument();
    });
});

