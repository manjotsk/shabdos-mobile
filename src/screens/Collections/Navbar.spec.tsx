import { render } from '@testing-library/react-native'

import wrapper from '../../../test/utils/NavigatorContext'
import Navbar from './Navbar'

describe( '<Navbar />', () => {
  it( 'should render a back button', () => {
    const { queryByTestId, unmount } = render( <Navbar />, { wrapper } )

    expect( queryByTestId( 'back-button' ) ).toBeTruthy()

    unmount()
  } )

  it( 'should render a add button', () => {
    const { queryByTestId, unmount } = render( <Navbar />, { wrapper } )

    expect( queryByTestId( 'add-button' ) ).toBeTruthy()

    unmount()
  } )

  it( 'should render a Navbar with the Collections text', () => {
    const { getByText, unmount } = render( <Navbar />, { wrapper } )

    expect( getByText( 'Collections' ) ).toBeTruthy()

    unmount()
  } )
} )
