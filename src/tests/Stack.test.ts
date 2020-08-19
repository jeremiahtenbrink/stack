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
  
  it( 'checks the push method', () => {
    expect( stack.getSize() ).toBe( 0 );
    stack.push( "hello" );
    expect( stack.getSize() ).toBe( 1 );
    stack.push( "hello2" );
    stack.push( "hello3" );
    expect( stack.getSize() ).toBe( 3 );
  } )
  
  it( 'test the stack pop method', () => {
    expect( stack.getSize() ).toBe( 0 );
    stack.push( 1 );
    stack.push( 2 );
    stack.push( 3 );
    expect( stack.getSize() ).toBe( 3 );
    let item = stack.pop();
    expect( item ).toBe( 3 );
    expect( stack.getSize() ).toBe( 2 )
    item = stack.pop();
    expect( item ).toBe( 2 )
    item = stack.pop();
    expect( item ).toBe( 1 )
    item = stack.pop();
    expect( item ).toBeNull();
    expect( stack.getSize() ).toBe( 0 )
    
  } )
} )
