Originally like this but get downshift props get destructured
```
<Downshift>
  {(downshift) => (
    <div>
      <label>Select a Star Wars character</label>
      <input />
    </div>
  )}
</Downshift>
```

For accessibility purposes we will getLabelProps and getInputProps..., apply some aria- handy things out of the box using props getters

Menu better to use ul instead of div for accessibility purposes