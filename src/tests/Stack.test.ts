import { Stack } from "../Stack";

describe( 'tests Stack Class', () => {
  let stack = null;
  beforeEach( () => {
    stack = new Stack();
  } )
  
  it( "tests the creation of the stack", () => {
    expect( stack ).toBeInstanceOf( Stack );
    expect( stack.getSize() ).toBe( 0 );
    expect( stack.isEmpty() ).toBe( true );
  } )
} )
