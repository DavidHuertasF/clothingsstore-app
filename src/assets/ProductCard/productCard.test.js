import '@testing-library/jest-dom/extend-expect'
import {fireEvent, render} from '@testing-library/react'
import ProductCard from  './ProductCard'


test('Renderizado del Card de Producto', () => {
    const mockHandler = jest.fn();
    const component = render(<ProductCard func={mockHandler}/>);
    const button = component.getByText('Agregar al carrito');
    for (let i = 0; i < 20; i++) {
        fireEvent.click(button);
    }
    expect(mockHandler).toHaveBeenCalledTimes(20);
});