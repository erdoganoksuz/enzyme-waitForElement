# enzyme-waitForElement


Just copy and paste your setupFile 

Usage

 ```javascript
  it("should hello exist",async ()=>{
    const wrapper=shallow(<HelloWorld/>) 
    
    const el= await wrapper.waitForElement(".hello");
    
    expect(el.text()).toEqual("Hello")
  })
 
 ```

