import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Footer from  './Footer'


test('Renderizado del footer', () => {

    const component = render(<Footer/>);
    // console.log(component);
    component.getByText('POLÍTICAS');
    component.getByText('SOBRE NOSOTROS');
    component.getByText('MEDIOS DE PAGO');
    expect(component.container).toHaveTextContent('POLÍTICAS');
});