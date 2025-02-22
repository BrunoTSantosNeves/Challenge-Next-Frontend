import styled from "styled-components";
import { CartIcon } from "./cart-icon";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    background-color: var(--delete--color);
    color: white;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -10px;
    top: 50%;
`;

const Container = styled.div`
    position: relative;
`;

export function CartControl() {
    const [value] = useLocalStorage<any[]>("cart-items");
    
    // Para teste, defina um valor padrão se não existir
    const items = value ?? [2];
    
    return (
        <Container>
            <CartIcon />
            {items.length > 0 && <CartCount>{items.length}</CartCount>}
        </Container>
    );
}